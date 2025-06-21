import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Fostie - Simple Time Tracker",
  description: "Official website for Fostie macOS application",
  keywords: "Fostie, Simple Time Tracker, macOS, app, application",
  authors: [{ name: "Fostie" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-custom-dark flex flex-col text-orange-50">
        {children}
      </body>
    </html>
  );
}
