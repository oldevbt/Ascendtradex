import bcrypt from "bcryptjs";
import crypto from "crypto";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to generate a unique email verification token
async function generateUniqueToken(): Promise<string> {
  let isUnique = false;
  let token: string = "";

  while (!isUnique) {
    token = crypto.randomBytes(32).toString("hex");

    const existingToken = await prisma.user.findUnique({
      where: { emailVerificationToken: token },
    });

    if (!existingToken) {
      isUnique = true;
    }
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
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

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
    const user = await prisma.user.create({
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

    // Send email verification using Resend
    const verificationUrl = `${process.env.BASE_URL}/api/verify?token=${emailVerificationToken}`;
    await resend.emails.send({
      from: "Info@ascendtradex.com", // Update with your verified sender email
      to: email,
      subject: "Verify your email",
      html: `
        <p>Hello ${firstName},</p>
        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
        <a href="${verificationUrl}" target="_blank">Verify Email</a>
        <p>If you did not sign up, please ignore this email.</p>
      `,
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
