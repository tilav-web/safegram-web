import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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
  metadataBase: new URL("https://safegram.uz"),
  title: {
    default: "Safegram — Kiberxavfsiz va Aqlli Telegram Mijozi | O'zbekiston",
    template: "%s | Safegram",
  },
  description:
    "Safegram — O'zbekistondagi eng xavfsiz Telegram mijozi. Real vaqtda virus va troyanlarni bloklash, bank kartalarini aqlli aniqlash (Uzcard, Humo) va bir bosishda Click, Payme, Uzum Bank orqali o'tkazmalar.",
  keywords: [
    "Safegram",
    "Telegram xavfsiz",
    "Telegram antivirus",
    "Telegram O'zbekiston",
    "Smart P2P",
    "Uzcard",
    "Humo",
    "Click Up",
    "Payme",
    "Uzum Bank",
    "Karta o'tkazmalari",
    "Telegram mod xavfsizlik",
    "Antivirus ilova",
    "Android Telegram",
  ],
  authors: [{ name: "Safegram Security Lab", url: "https://safegram.uz" }],
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
    title: "Safegram — Kiberxavfsiz va Aqlli Telegram Mijozi",
    description:
      "Telegram endi mutlaqo xavfsiz va qulay. Real-vaqtli antivirus himoyasi va 1 soniyalik tezkor P2P bank o'tkazmalari.",
    url: "https://safegram.uz",
    siteName: "Safegram",
    images: [
      {
        url: "/safegram-logo.png",
        width: 1200,
        height: 630,
        alt: "Safegram — Kiberxavfsiz Telegram Mijozi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safegram — Kiberxavfsiz va Aqlli Telegram Mijozi",
    description:
      "Zararli APK fayllardan himoya va kartalarga 1 bosishda o'tkazma imkoniyati. Google Play'dan yuklab oling.",
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
