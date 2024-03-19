import React from "react";
import type { Metadata } from "next";
import { manrope } from "utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie List",
  description: "Movie List WebSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black08">
      <body className={`${manrope} font-sans`}>{children}</body>
    </html>
  );
}
