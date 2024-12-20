import React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Link,
} from "@react-email/components";

interface VerifyEmailTemplateProps {
  firstName: string;
  verificationUrl: string;
}

export const VerifyEmailTemplate = ({
  firstName,
  verificationUrl,
}: VerifyEmailTemplateProps) => {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f9f9f9",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            padding: "20px",
            margin: "0 auto",
            borderRadius: "8px",
            textAlign: "left", // Align text to the left
          }}
        >
          {/* Header with Logo */}
          <img
            src="https://res.cloudinary.com/drczkfgqp/image/upload/v1734657704/Ascend_Logo_lugzth.png" // Use the relative path to the image in the public folder
            alt="AscendTradex Logo"
            style={{ width: "120px", marginBottom: "20px" }} // Reduced logo size
          />
          <Heading
            style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}
          >
            Verify Your Email
          </Heading>
          <Text
            style={{ color: "#555", fontSize: "16px", marginBottom: "20px" }}
          >
            Hello {firstName},
          </Text>
          <Text
            style={{ color: "#555", fontSize: "14px", marginBottom: "20px" }}
          >
            Thank you for signing up with AscendTradex. To complete your
            registration, please confirm your email by clicking the button
            below.
          </Text>

          {/* Verify Button */}
          <Button
            href={verificationUrl}
            style={{
              backgroundColor: "#4CAF50",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Verify Email
          </Button>

          {/* Fallback Link */}
          <Text style={{ color: "#555", fontSize: "14px", margin: "20px 0" }}>
            Or copy and paste the link below in your browser:
          </Text>
          <Link
            href={verificationUrl}
            style={{ color: "#0066cc", wordBreak: "break-word" }}
          >
            {verificationUrl}
          </Link>

          <Text style={{ color: "#555", fontSize: "14px", marginTop: "20px" }}>
            If you did not sign up, please ignore this email.
          </Text>
        </Container>

        {/* Footer */}
        <Text
          style={{
            fontSize: "12px",
            color: "#aaa",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          © 2024 AscendTradex. All rights reserved.
        </Text>
      </Body>
    </Html>
  );
};
