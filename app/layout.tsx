import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const canonicalUrl = "https://nopuzzle.github.io/liang-portfolio/";
const socialImageUrl = `${canonicalUrl}og.png`;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "Liang Liang — Data-Intensive Systems Research",
  description:
    "Liang Liang is an AI Frontier Technology Research Manager working across multilingual AI, data-intensive systems, and network-enabled intelligence.",
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
          "--academic-background-desktop": `url("${basePath}/assets/academic-systems-background.png")`,
          "--academic-background-mobile": `url("${basePath}/assets/academic-systems-background-mobile.png")`,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
