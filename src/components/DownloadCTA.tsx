"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, QrCode, Sparkles } from "lucide-react";
import Image from "next/image";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#11192e] via-[#0d1322] to-[#070b13] border border-emerald-500/30 overflow-hidden shadow-2xl shadow-emerald-950/40"
        >
          {/* Subtle mesh background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Safegram 1.0.0 endi foydalanishga tayyor</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Telegram xavfsizligingizni <br className="hidden sm:inline" />
                <span className="text-gradient">bugunoq kafolatlang</span>.
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                O'zbekistondagi eng xavfsiz Telegram mijozi bilan fishing va troyanlardan himoyalaning, bank o'tkazmalarini esa bir soniyada bajaring.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=org.telegram.messenger.web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.008 2.008 0 0 1-.22-.382C3.13 21.242 3 20.478 3 19.578V4.422c0-.9.13-1.664.39-2.226.06-.134.133-.263.219-.382zM15.207 13.414l2.585 2.586-13.064 7.543 10.479-10.129zm2.585-2.828l-2.585 2.586L4.728.457l13.064 7.543a2.49 2.49 0 0 1 .49.387c.33.33.56.74.68 1.199a2.586 2.586 0 0 1-.17 1.001zm1.414 1.414a2.535 2.535 0 0 1-.414 1.415l-1.999-2 2-2c.264.426.413.918.413 1.415v1.17z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] tracking-wider uppercase text-emerald-100 font-medium">Hoziroq yuklab oling</div>
                    <div className="text-base font-bold">Google Play Store</div>
                  </div>
                </a>

                <a
                  href="https://api.safegram.uz/uploads/Safegram.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-all"
                >
                  <Download className="w-5 h-5 text-emerald-400" />
                  <span>To'g'ridan-to'g'ri APK (118 MB)</span>
                </a>
              </div>
            </div>

            {/* Right side QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-white/10 shadow-xl text-center max-w-xs">
                <div className="w-44 h-44 bg-white p-2.5 rounded-xl mx-auto shadow-inner flex items-center justify-center">
                  <svg className="w-full h-full text-black" viewBox="0 0 29 29" fill="currentColor">
                    <path d="M0,0 h7 v7 h-7 z M2,2 h3 v3 h-3 z M22,0 h7 v7 h-7 z M24,2 h3 v3 h-3 z M0,22 h7 v7 h-7 z M2,24 h3 v3 h-3 z M9,0 h2 v7 h-2 z M13,0 h3 v2 h-3 z M18,0 h2 v4 h-2 z M9,9 h4 v2 h-4 z M15,9 h3 v4 h-3 z M20,9 h2 v3 h-2 z M24,9 h5 v2 h-5 z M9,13 h2 v3 h-2 z M12,13 h1 v2 h-1 z M14,15 h3 v3 h-3 z M19,14 h2 v4 h-2 z M23,13 h2 v2 h-2 z M26,14 h3 v2 h-3 z M0,9 h2 v3 h-2 z M4,9 h3 v3 h-3 z M0,14 h4 v2 h-4 z M6,14 h2 v3 h-2 z M9,18 h2 v3 h-2 z M12,19 h2 v2 h-2 z M16,19 h4 v2 h-4 z M22,17 h4 v2 h-4 z M27,18 h2 v4 h-2 z M9,23 h3 v2 h-3 z M14,23 h2 v4 h-2 z M18,23 h3 v2 h-3 z M23,21 h2 v2 h-2 z M22,25 h5 v2 h-5 z M24,27 h3 v2 h-3 z M9,27 h4 v2 h-4 z M18,27 h2 v2 h-2 z" />
                  </svg>
                </div>
                <div className="mt-3 text-xs font-semibold text-white flex items-center justify-center gap-1.5">
                  <QrCode className="w-4 h-4 text-emerald-400" />
                  Kamera orqali skanerlang
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  Android 6.0 va undan yuqori versiyalar uchun
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
