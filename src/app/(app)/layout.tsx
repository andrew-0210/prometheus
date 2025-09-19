import type { Metadata } from "next";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import clsx from "clsx";
import SideNav from "@/components/layout/application/SideNav";

export const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(jakartaSans.variable, "flex gap-[1.25rem] antialiased")}
      >
        <SideNav />
        {children}
      </body>
    </html>
  );
}
