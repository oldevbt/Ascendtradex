import prisma from "@/app/libs/prismadb"; // Adjust the path as necessary

// Handle GET requests for token verification
export async function GET(req: Request) {
  try {
    // Extract the token from the query parameters
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    // Validate token
    if (!token || typeof token !== "string") {
      return new Response(
        JSON.stringify({ message: "Invalid or missing token" }),
        { status: 400 }
      );
    }

    // Check if a user exists with the given reset token and ensure it's not expired
    const user = await prisma.user.findFirst({
      where: {
        resetCode: token,
        resetCodeExpiration: {
          gte: new Date(), // Ensure the expiration is in the future
        },
      },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid or expired token" }),
        { status: 400 }
      );
    }

    // Token is valid, redirect to the change password page
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/changePassword`,
      },
    });
  } catch (error) {
    console.error("Error verifying reset token:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while verifying the token.",
      }),
      { status: 500 }
    );
  }
}
