import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_CONFIG } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Safegram — Kiberxavfsiz va Aqlli Aloqa Platformasi",
    template: "%s | Safegram",
  },
  description:
    "Safegram — Yangi avlod kiberxavfsiz messenjeri. Real vaqtda virus va troyanlarni bloklash, bank kartalarini aqlli aniqlash va bir bosishda xavfsiz to'lovlar.",
  keywords: [
    "Safegram",
    "xavfsiz messenjer",
    "kiberxavfsizlik",
    "antivirus ilova",
    "Smart P2P",
    "karta to'lovlari",
    "karta aniqlash",
    "Ruh rejimi",
    "Ghost mode",
    "Anti-Delete",
    "Android xavfsiz ilova",
  ],
  authors: [{ name: "Safegram Security Lab", url: SITE_CONFIG.url }],
  creator: "Safegram Security Lab",
  publisher: "Safegram Security Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/safegram-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Safegram — Kiberxavfsiz va Aqlli Aloqa Platformasi",
    description:
      "Mutlaqo xavfsiz va qulay aloqa platformasi. Real-vaqtli antivirus himoyasi va 1 soniyalik tezkor to'lovlar.",
    url: SITE_CONFIG.url,
    siteName: "Safegram",
    images: [
      {
        url: "/safegram-logo.png",
        width: 1200,
        height: 630,
        alt: "Safegram — Kiberxavfsiz Aloqa Platformasi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safegram — Kiberxavfsiz va Aqlli Aloqa Platformasi",
    description:
      "Zararli fayllardan himoya va kartalarga 1 bosishda xavfsiz to'lov imkoniyati. Google Play'dan yuklab oling.",
    images: ["/safegram-logo.png"],
    creator: "@safegram_uz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
