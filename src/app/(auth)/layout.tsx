import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/layout/Navbar";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prometheus",
  description: "Powerful app for employee management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "antialiased")}>{children}</body>
    </html>
  );
}
