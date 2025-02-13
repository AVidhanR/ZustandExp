import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zustand Experiment",
  description: "Generated by A Vidhan Reddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
