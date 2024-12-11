import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ToasterProvider from "./providers/ToastProvider";

// Google Fonts: Roboto
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], // Add the weights you need
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
      <body className={`${roboto.variable} antialiased bg-[#101828]`}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
