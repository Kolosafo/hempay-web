import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
const myFont = localFont({ src: './mogula.otf' })



export const metadata: Metadata = {
  title: "Hempay Landing Page",
  description: "he Ultimate Payment Experience",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}</body>
    </html>
  );
}
