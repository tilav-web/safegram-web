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
    default: "Safegram — Yangi Avlod Xavfsiz Messenjeri | Telegram Mijozi",
    template: "%s | Safegram",
  },
  description:
    "Safegram — rasmiy Telegram MTProto protokoli asosida yaratilgan kiberxavfsiz messenjer. Real vaqtda viruslarni bloklash, xufyona rejim va bir bosishda to'lovlar.",
  keywords: [
    "Safegram",
    "Telegram",
    "Telegram messenger",
    "Telegram client",
    "Safegram telegram",
    "Telegram Uzbekistan",
    "Telegram skachat",
    "Telegram yuklab olish",
    "Telegram yangi versiyasi",
    "Xavfsiz telegram",
    "Telegram antivirus",
    "Telegram ghost mode",
    "Telegram ruh rejimi",
    "Telegram anti delete",
    "Android messenger",
    "Xavfsiz messenjer",
    "Kiberxavfsizlik ilovasi",
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
    title: "Safegram — Yangi Avlod Xavfsiz Messenjeri | Telegram Mijozi",
    description:
      "Telegram protokoli asosida kiberxavfsiz, xufyona rejim va tezkor to'lovlarga ega Safegram ilovasini yuklab oling.",
    url: SITE_CONFIG.url,
    siteName: "Safegram",
    images: [
      {
        url: "/safegram-logo.png",
        width: 1200,
        height: 630,
        alt: "Safegram Messenger",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safegram — Yangi Avlod Xavfsiz Messenjeri | Telegram Mijozi",
    description:
      "Zararli fayllardan himoyalangan, xufyona rejim va tezkor to'lovlarga ega Safegram messenjeri.",
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
      <body className="font-sans antialiased text-gray-200 bg-[#080c14] selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
