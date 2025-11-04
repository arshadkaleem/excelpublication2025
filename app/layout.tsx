import type React from "react";
import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Excel Publishing House - Academic Journals",
  description:
    "Excel Publishing House - Publishing quality journals in Engineering, Management Science, and Technology since 2011",
  generator: "v0.app",
  icons: {
    icon: "/Excel-Logo-Copy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Apple touch icon and favicon variations */}
        <link rel="icon" href="/Excel-Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Excel-Logo.png" />
      </head>
      <body
        className={`${poppins.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
