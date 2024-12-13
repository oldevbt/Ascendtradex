import prisma from "@/app/libs/prismadb"; // Adjust the path as necessary
import nodemailer from "nodemailer"; // For sending emails
import { v4 as uuidv4 } from "uuid"; // For generating unique reset tokens

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ message: "Valid email is required" }),
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "No user found with that email address" }),
        { status: 404 }
      );
    }

    // Generate a unique reset token and expiration time
    const resetCode = uuidv4();
    const resetCodeExpiration = new Date(Date.now() + 3600000); // 1 hour from now

    // Update the user's reset token and expiration in the database
    await prisma.user.update({
      where: { email },
      data: {
        resetCode,
        resetCodeExpiration,
      },
    });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail username
        pass: process.env.EMAIL_PASS, // Gmail password or app-specific password
      },
    });

    // Create the reset link
    const resetLink = `${process.env.BASE_URL}/verifyPassword?token=${resetCode}`;

    // Send the email with the reset link
    await transporter.sendMail({
      from: `"Your App Name" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // Recipient email
      subject: "Password Reset Request",
      html: `
        <p>Hi ${user.firstName || "User"},</p>
        <p>We received a request to reset your password. Click the link below to proceed:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link will expire in 1 hour. If you did not request a password reset, please ignore this email.</p>
        <p>Thank you!</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Password reset link sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in forgot password handler:", error);
    return new Response(
      JSON.stringify({
        message:
          "An error occurred while processing your request. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
