import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create a new user in the database
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  console.log("User created:", user);

  return NextResponse.json(user);
}
