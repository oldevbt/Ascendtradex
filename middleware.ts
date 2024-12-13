import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const AUTHORIZED_ROUTES = [
  "/",
  "/Login",
  "/SignUp",
  "/ResetPassword",
  "/ChangePassword",
  "/verify",
  "/verified",
];
type TokenType = {
  exp?: number;
  emailVerified?: boolean;
};

// Middleware function
export async function middleware(req: any) {
  const { pathname } = req.nextUrl;
  const token = (await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })) as TokenType;

  // Allow requests to authorized routes without authentication
  if (AUTHORIZED_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect user to login if not authenticated
  if (!token) {
    console.log("[Middleware] User not authenticated. Redirecting to login.");
    const loginUrl = new URL("/Login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect user if their email is not verified
  if (token.emailVerified === false) {
    console.log("[Middleware] User email not verified. Redirecting to verify.");
    const verifyUrl = new URL("/verify", req.url);
    return NextResponse.redirect(verifyUrl);
  }

  // Redirect user to home if the session is expired
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  if (token.exp && token.exp < currentTime) {
    console.log("[Middleware] Session expired. Redirecting to home.");
    const homeUrl = new URL("/Login", req.url);
    return NextResponse.redirect(homeUrl);
  }

  // Allow the request to proceed for authenticated and verified users
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all pages except the allowed ones
    "/((?!api|_next|static|favicon.ico).*)",
  ],
};
