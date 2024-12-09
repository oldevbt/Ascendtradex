import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  console.log("Received token:", token);

  if (!token) {
    console.log("No token provided in the request.");
    return NextResponse.json(
      { error: "Verification token is required." },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.$transaction(async (prisma) => {
      console.log("Searching for user with token:", token);

      // Find user by email verification token
      const user = await prisma.user.findUnique({
        where: { emailVerificationToken: token },
      });

      console.log("Found user:", user);

      if (!user) {
        console.log("No user found with this token.");
        throw new Error("Invalid or expired verification token.");
      }

      // Ensure emailVerificationTokenExpiry exists before comparing
      if (user.emailVerificationTokenExpiry) {
        const expiryDate = new Date(user.emailVerificationTokenExpiry);
        console.log("Token expiry date:", expiryDate);

        if (expiryDate < new Date()) {
          console.log("Token has expired.");
          throw new Error("Verification token has expired.");
        }
      } else {
        console.log("No expiry set for token.");
      }

      // Check if email is already verified
      if (user.isEmailVerified) {
        console.log("Email is already verified.");
        return { message: "Email is already verified." };
      }

      // Nullify the token and mark email as verified
      console.log("Updating user to mark email as verified.");

      await prisma.user.update({
        where: { id: user.id },
        data: {
          isEmailVerified: true,
          emailVerified: new Date(),
          // emailVerificationToken: null, // Ensure the token is cleared
          // emailVerificationTokenExpiry: null, // Clear the expiry
        },
      });

      console.log("Email successfully verified for user ID:", user.id);
      return { message: "Email successfully verified." };
    });

    // Redirect to the verified success page
    return NextResponse.redirect(new URL("/Verified", request.url), 302);
  } catch (error: any) {
    console.error("Error verifying email:", error);

    // Handle specific error messages
    if (error.message === "Invalid or expired verification token.") {
      console.log("Invalid or expired token error.");
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Handle duplicate token or conflict error
    if (error.code === "P2002") {
      console.log("Conflict with duplicate token.");
      return NextResponse.json(
        { error: "Duplicate token or concurrent request conflict." },
        { status: 400 }
      );
    }

    // Generic error message for unexpected issues
    console.log("An unexpected error occurred.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
