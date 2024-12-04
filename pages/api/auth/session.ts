import { getSession, signOut } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import morganMiddleware from "@/app/libs/morgan"; // Adjust the path as needed

// Handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Apply Morgan to log request details
  morganMiddleware(req as any, res as any, () => {});

  // Log incoming request data
  console.log(`[API Request] ${req.method} ${req.url}`);

  const session = await getSession({ req });

  if (!session) {
    console.log("[API Response] User not authenticated");
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Check if the session is expired
  if (session.expires && new Date(session.expires) < new Date()) {
    console.log("[API Response] Session expired. Signing user out.");
    await signOut({ callbackUrl: "/login" }); // Redirect user to the home page
    return res
      .status(401)
      .json({ message: "Session expired. Please log in again." });
  }

  console.log("[API Response] User authorized");
  return res.status(200).json({ message: "Authorized" });
}
