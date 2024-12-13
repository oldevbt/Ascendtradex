import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css";
import ToasterProvider from "./providers/ToastProvider";

// Google Fonts: Roboto
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], // Add the weights you need
});

// Google Fonts: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
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
        className={`${roboto.variable} ${poppins.variable} antialiased bg-[#101828] overflow-x-hidden`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
