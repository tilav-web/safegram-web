"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-[#080c14]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo (Clean, no pulsing dot) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10">
            <Image
              src="/safegram-icon.png"
              alt="Safegram"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Safegram
          </span>
        </Link>

        {/* The single Header CTA button pointing to Play Market */}
        <a
          href={SITE_CONFIG.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
        >
          Play Market'dan yuklab olish
        </a>

      </div>
    </header>
  );
}
