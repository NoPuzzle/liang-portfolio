import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liang Liang — Data-Intensive Systems Research",
  description:
    "Liang Liang is a postdoctoral researcher at EPFL working across learned indexes, vector databases, DB4AI, stream processing, and high-performance computing.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
        style={{
          "--academic-background-desktop": `url("${basePath}/assets/academic-systems-background.png")`,
          "--academic-background-mobile": `url("${basePath}/assets/academic-systems-background-mobile.png")`,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
