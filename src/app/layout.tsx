import React from "react";
import type { Metadata } from "next";
import { manrope } from "utils/fonts";
import "./globals.css";
import HeaderNavbar from "@/components/shared/Header/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" className="bg-black08">
        <body className={`${manrope} font-sans`}>
          <HeaderNavbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
