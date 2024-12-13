// /app/api/getCurrentUser/route.ts
import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb"; // Ensure this path is correct
import { authOptions } from "@/pages/api/auth/[...nextauth]"; // Ensure this path is correct
import { NextResponse } from "next/server"; // Use NextResponse for App Router

async function getSession() {
  try {
    console.log("Fetching session...");
    const session = await getServerSession(authOptions);
    return session;
  } catch (error) {
    console.error("Error fetching session: ", error);
    return null;
  }
}

export async function GET() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      console.log("No session or email found.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!prisma) {
      console.error("Prisma is not initialized.");
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!currentUser) {
      console.log("No user found with the provided email.");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    });
  } catch (error) {
    console.error("Error fetching current user: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
