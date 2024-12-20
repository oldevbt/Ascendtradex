import React from "react";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { VerifyEmailTemplate } from "@/app/components/VerifyEmailTemplate";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to generate a unique email verification token
async function generateUniqueToken(): Promise<string> {
  let isUnique = false;
  let token = "";

  while (!isUnique) {
    token = crypto.randomBytes(32).toString("hex");
    const existingToken = await prisma.user.findUnique({
      where: { emailVerificationToken: token },
    });
    isUnique = !existingToken;
  }

  return token;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, country, number, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 409 }
      );
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate a unique token
    const emailVerificationToken = await generateUniqueToken();

    // Create the new user in the database
    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        country,
        number,
        hashedPassword,
        emailVerificationToken,
        isEmailVerified: false,
      },
    });

    // Generate the verification URL
    const verificationUrl = `${process.env.BASE_URL}/api/verify?token=${emailVerificationToken}`;

    const emailHtml: string = await render(
      React.createElement(VerifyEmailTemplate, {
        firstName,
        verificationUrl,
        // logoUrl:
        //   "https://res.cloudinary.com/drczkfgqp/image/upload/v1733489142/modal-logo_tcqemt.png",
        // homePageUrl: "https://articles.elizbright.com/",
      })
    );

    // Send email verification using Resend
    await resend.emails.send({
      from: "Info@ascendtradex.com",
      to: email,
      subject: "Verify your email",
      html: emailHtml,
    });

    return NextResponse.json(
      { message: "User registered. Please check your email for verification." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
