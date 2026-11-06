"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge (No third-party brand names) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Yangi avlod kiberxavfsiz aloqa platformasi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-gray-300 font-mono">v1.0.0</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto"
        >
          Xavfsiz aloqa va{" "}
          <span className="text-gradient">aqlli to'lovlar</span>{" "}
          bitta platformada.
        </motion.h1>

        {/* Subtitle (No third-party brand names) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Zararli fayllar va troyanlardan avtomatik himoyalanish, bank kartalarini bir lahzada aniqlash,
          xufyona rejim va maksimal tezlik — barchasi bitta qulay ilovada.
        </motion.p>

        {/* Primary CTA: Google Play Store Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300 text-white font-semibold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all group border border-emerald-400/30"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.008 2.008 0 0 1-.22-.382C3.13 21.242 3 20.478 3 19.578V4.422c0-.9.13-1.664.39-2.226.06-.134.133-.263.219-.382zM15.207 13.414l2.585 2.586-13.064 7.543 10.479-10.129zm2.585-2.828l-2.585 2.586L4.728.457l13.064 7.543a2.49 2.49 0 0 1 .49.387c.33.33.56.74.68 1.199a2.586 2.586 0 0 1-.17 1.001zm1.414 1.414a2.535 2.535 0 0 1-.414 1.415l-1.999-2 2-2c.264.426.413.918.413 1.415v1.17z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] tracking-wider uppercase text-emerald-100 font-semibold">Rasmiy do'kondan olish</div>
              <div className="text-base font-bold tracking-tight">Google Play Store</div>
            </div>
          </a>
        </motion.div>



      </div>
    </section>
  );
}
