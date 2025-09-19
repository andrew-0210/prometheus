import type { Metadata } from "next";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import clsx from "clsx";
import AppBackground from "@/components/ui/Background";

export const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prometheus",
  description: "Powerful app for employee management",
};

export default function RootLayout({
  form,
}: Readonly<{
  form: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(jakartaSans.variable, "antialiased")}>
        <AppBackground>{form}</AppBackground>
      </body>
    </html>
  );
}
