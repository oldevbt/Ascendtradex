import type { Metadata } from "next";

import { Syne, Poppins, Inter } from "next/font/google";
import "./globals.css";
import ToasterProvider from "./providers/ToastProvider";

// Google Fonts
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"], // Add the weights you need
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"], // Add the weights you need
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Ascendtradex",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${syne.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
