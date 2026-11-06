"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CreditCard, Lock, Zap, Cpu, Check, EyeOff, Radio, Smartphone } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Imkoniyatlar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nega aynan <span className="text-gradient">Safegram</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Kiberxavfsizlik va kundalik moliyaviy qulaylikni bitta mukammal Telegram mijoziga jamladik.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Antivirus (Large 2-column card) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            id="security"
            className="md:col-span-2 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background glowing gradient circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-inner">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Zero-Day Himoya</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Real-Vaqtda Zararli APK va Troyanlarni Bloklash
              </h3>
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Telegram guruh va kanallarida tarqatilayotgan soxta dasturlar, banking troyanlari va shubhali havolalarni yuklab olishdan oldin avtomatik tahlil qiladi. Bank hisoblaringiz va shaxsiy ma'lumotlaringiz o'g'irlanishining oldini oladi.
              </p>
            </div>

            {/* Visual threat log mock inside card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#090d16]/80 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-white/5">
                <span>FAOL XAVFSIZLIK MONITORINGI</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  HIMOYA FAOL
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-red-400">BLOKLANDI: Telegram_Premium_Free.apk</span>
                <span className="text-gray-500">Trojan.Dropper.Agent</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-emerald-400">TOZA: Rasmiy_Hujjat_2026.pdf</span>
                <span className="text-gray-500">SHA-256 Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Smart Luhn Card Detection */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            id="p2p"
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Aqlli P2P</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Luhn Algoritmi bilan Tezkor To'lov
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Yozishmalardagi karta raqamlarini (Uzcard, Humo, Visa, Mastercard) xatosiz taniydi va bir marta bosish orqali banking ilovasiga yo'naltiradi.
              </p>
            </div>

            <div className="mt-6 space-y-2 pt-2 border-t border-white/5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>O'zbekistonning 15+ yetakchi banklari</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 millisekundda Luhn tekshiruvi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Xato kartaga pul o'tkazishdan asraydi</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: MTProto 2.0 Official Telegram Protocol */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-inner">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Rasmiy API</span>
              <h3 className="text-xl font-bold text-white mt-1">
                MTProto 2.0 To'liq Sinxronizatsiya
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Barcha chatlar, kanallar va media fayllaringiz Telegram rasmiy buluti bilan to'liq sinxron bo'ladi. Hech qanday uchinchi server aralashmaydi.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-500/20">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>256-bit AES + RSA 2048 shifrlash</span>
            </div>
          </motion.div>

          {/* Card 4: Strict Privacy & Zero Logging */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-inner">
                <EyeOff className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">100% Maxfiylik</span>
              <h3 className="text-xl font-bold text-white mt-1">
                Maxfiy Ma'lumotlaringiz Faqat Sizniki
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Safegram yozishmalaringizni o'qimaydi, saqlamaydi va reklama beruvchilarga sotmaydi. To'liq ochiq kodli tekshiruv kafolatlangan.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/40 p-2.5 rounded-xl border border-purple-500/20">
              <Zap className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Zero-Tracker & No Ad-SDK</span>
            </div>
          </motion.div>

          {/* Card 5: Ultra-fast Native Performance */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 shadow-inner">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Tezlik va Tejamkorlik</span>
              <h3 className="text-xl font-bold text-white mt-1">
                Kam Batareya va Trafik Sarfi
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Optimallashtirilgan C++ yadrosi orqali eng kuchsiz smartfonlarda ham qotmasdan, 120Hz silliq ishlaydi va batareyani tejaydi.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-teal-300 bg-teal-950/40 p-2.5 rounded-xl border border-teal-500/20">
              <Smartphone className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Android 6.0+ barcha modellarga mos</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
