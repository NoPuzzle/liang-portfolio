import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const canonicalUrl = "https://nopuzzle.github.io/liang-portfolio/";
const socialImageUrl = `${canonicalUrl}og.png`;
const desktopBackgroundUrl = `${basePath}/assets/academic-systems-background-formulas.webp`;
const mobileBackgroundUrl = `${basePath}/assets/academic-systems-background-mobile.webp`;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "Liang Liang — Data-Intensive Systems Research",
  description:
    "Liang Liang is an AI Frontier Technology Research Manager working across multilingual AI, data-intensive systems, and network-enabled intelligence.",
  authors: [{ name: "Liang Liang", url: canonicalUrl }],
  creator: "Liang Liang",
  keywords: [
    "Liang Liang",
    "data-intensive systems",
    "multilingual AI",
    "learned indexes",
    "low-resource language data",
    "network-enabled intelligence",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title: "Liang Liang — Data-Intensive Systems Research",
    description:
      "Multilingual AI, data-intensive systems, and network-enabled intelligence.",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Liang Liang — Data-intensive systems, at scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liang Liang — Data-Intensive Systems Research",
    description:
      "Multilingual AI, data-intensive systems, and network-enabled intelligence.",
    images: [socialImageUrl],
  },
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
          "--academic-background-desktop": `url("${desktopBackgroundUrl}")`,
          "--academic-background-mobile": `url("${mobileBackgroundUrl}")`,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
