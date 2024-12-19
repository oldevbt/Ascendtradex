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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="300x300"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased bg-[#101828] overflow-x-hidden`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
