"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Download, QrCode, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Announcement */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Yangi avlod xavfsiz Telegram mijozi</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
              <span className="text-gray-300">v1.0.0 chiqqan</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Telegram endi{" "}
              <span className="text-gradient">mutlaqo xavfsiz</span> va{" "}
              <span className="text-gradient-cyan">aqlli</span>.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Zararli APK fayllar, soxta havolalar va firibgarlardan avtomatik himoyalanish.
              Chatdagi bank kartalarini bir lahzada aniqlang va <strong className="text-white font-semibold">Click</strong>,{" "}
              <strong className="text-white font-semibold">Payme</strong>, hamda{" "}
              <strong className="text-white font-semibold">Uzum Bank</strong> orqali 1 soniyada xavfsiz to'lov qiling.
            </motion.p>

            {/* CTA Buttons & QR Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Google Play Store Badge Button */}
              <a
                href="https://play.google.com/store/apps/details?id=org.telegram.messenger.web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.008 2.008 0 0 1-.22-.382C3.13 21.242 3 20.478 3 19.578V4.422c0-.9.13-1.664.39-2.226.06-.134.133-.263.219-.382zM15.207 13.414l2.585 2.586-13.064 7.543 10.479-10.129zm2.585-2.828l-2.585 2.586L4.728.457l13.064 7.543a2.49 2.49 0 0 1 .49.387c.33.33.56.74.68 1.199a2.586 2.586 0 0 1-.17 1.001zm1.414 1.414a2.535 2.535 0 0 1-.414 1.415l-1.999-2 2-2c.264.426.413.918.413 1.415v1.17z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] tracking-wider uppercase text-emerald-100 font-medium">Yuklab oling</div>
                  <div className="text-sm font-bold tracking-tight">Google Play</div>
                </div>
              </a>

              {/* Direct APK Button */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-gray-200 hover:text-white font-medium transition-all backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>To'g'ridan-to'g'ri APK</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-emerald-300 font-mono">118 MB</span>
              </a>
            </motion.div>

            {/* Desktop QR Scan Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:flex items-center gap-4 p-4 rounded-2xl bg-[#0f172a]/70 border border-white/10 backdrop-blur-md max-w-md"
            >
              <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-md shrink-0 flex items-center justify-center">
                {/* Visual SVG QR Code placeholder pointing to Google Play */}
                <svg className="w-full h-full text-black" viewBox="0 0 29 29" fill="currentColor">
                  <path d="M0,0 h7 v7 h-7 z M2,2 h3 v3 h-3 z M22,0 h7 v7 h-7 z M24,2 h3 v3 h-3 z M0,22 h7 v7 h-7 z M2,24 h3 v3 h-3 z M9,0 h2 v7 h-2 z M13,0 h3 v2 h-3 z M18,0 h2 v4 h-2 z M9,9 h4 v2 h-4 z M15,9 h3 v4 h-3 z M20,9 h2 v3 h-2 z M24,9 h5 v2 h-5 z M9,13 h2 v3 h-2 z M12,13 h1 v2 h-1 z M14,15 h3 v3 h-3 z M19,14 h2 v4 h-2 z M23,13 h2 v2 h-2 z M26,14 h3 v2 h-3 z M0,9 h2 v3 h-2 z M4,9 h3 v3 h-3 z M0,14 h4 v2 h-4 z M6,14 h2 v3 h-2 z M9,18 h2 v3 h-2 z M12,19 h2 v2 h-2 z M16,19 h4 v2 h-4 z M22,17 h4 v2 h-4 z M27,18 h2 v4 h-2 z M9,23 h3 v2 h-3 z M14,23 h2 v4 h-2 z M18,23 h3 v2 h-3 z M23,21 h2 v2 h-2 z M22,25 h5 v2 h-5 z M24,27 h3 v2 h-3 z M9,27 h4 v2 h-4 z M18,27 h2 v2 h-2 z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  Kamerangiz orqali skanerlang
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                  Smartfon kamerasini yo'naltiring va to'g'ridan-to'g'ri telefoningizga o'rnating.
                </p>
              </div>
            </motion.div>

            {/* Trust Bullet Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rasmiy Telegram API</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Log Maxfiylik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Bepul & Ochiq</span>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
