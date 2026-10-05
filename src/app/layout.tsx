import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VANTRA — Talent Discovery for Athletes",
  description:
    "VANTRA helps grassroots athletes across Uganda and the region get discovered. Post highlight videos, build a trusted profile, and connect with verified scouts and clubs.",
  openGraph: {
    title: "VANTRA — Talent Discovery for Athletes",
    description:
      "Post your highlights. Get discovered by verified scouts and clubs.",
    images: ["/brand/logo.jpeg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A90D9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
