"use client";

import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  CreditCard, 
  Ghost, 
  Zap, 
  Trash2, 
  History, 
  EyeOff, 
  Cpu, 
  Smartphone,
  Lock,
  Layers,
  ArrowRight
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Eksklyuziv Imkoniyatlar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nega aynan <span className="text-gradient">Safegram</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Oddiy ilovadan ancha ustun: chuqur kiberxavfsizlik, aqlli to'lov integratsiyasi va maxfiy boshqaruv vositalari.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Antivirus & Threat Shield (Large 2-column) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            id="security"
            className="md:col-span-2 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-inner">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Magic Bytes & Permission Scanner
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Zararli APK, Troyan va Soxta Ilovalarni Fosh Qilish
              </h3>
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Chatlarda yuboriladigan fayllarni yuklab olishdan oldin Magic Bytes va manifest ruxsatnomalari bo'yicha tahlil qiladi. SMS o'g'irlash yoki bank akkauntlariga yashirin kirish urinishlarini bir zumda to'xtatadi.
              </p>
            </div>

            {/* Visual threat log mock */}
            <div className="mt-6 p-4 rounded-2xl bg-[#090d16]/80 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-white/5">
                <span>SAFEGRAM SECURITY ENGINE</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  HEURISTIC ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-red-400">BLOKLANDI: Update_Patch_Vip.apk</span>
                <span className="text-gray-500">Spyware / Trojan.Dropper</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-emerald-400">HIMOYA: Auto-Sanitize & Isolate</span>
                <span className="text-gray-500">Xavf darajasi: Yuqori (High)</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Smart P2P Bank Engine */}
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
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Smart P2P Hub</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Luhn Algoritmi & Tezkor To'lov
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Yozishmalardagi 16 xonali karta raqamlarini avtomatik ajratadi. Karta raqamiga bosilganda o'rnatilgan bank ilovalari orqali xavfsiz to'lov sahifasi ochiladi.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {["Avtomatik Karta Tanish", "Luhn Formulari", "Xavfsiz Deep Link", "Nusxa Olish"].map((feature) => (
                <span key={feature} className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] text-emerald-300 font-medium border border-white/5">
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Ghost Mode (Ruh Rejimi) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-inner">
                <Ghost className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">To'liq Xufyonalik</span>
              <h3 className="text-xl font-bold text-white mt-1">
                Ruh Rejimi (Ghost Mode)
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Siz xabarlarni o'qiganingiz, ovozli xabarlarni eshitganingiz yoki hikoyalarni tomosha qilganingiz suhbatdoshga bildirilmaydi. "Yozmoqda..." holati ham yashirin qoladi.
              </p>
            </div>

            <div className="mt-6 space-y-1.5 text-xs text-purple-300 font-mono bg-purple-950/30 p-3 rounded-xl border border-purple-500/20">
              <div className="flex justify-between">
                <span>O'qilganlik:</span> <span className="text-emerald-400">Yashirilgan</span>
              </div>
              <div className="flex justify-between">
                <span>Ovozli xabar:</span> <span className="text-emerald-400">Yashirilgan</span>
              </div>
              <div className="flex justify-between">
                <span>Hikoyalar:</span> <span className="text-emerald-400">Yashirin ko'rish</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Anti-Delete & Edit History */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-inner">
                <History className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Tahrir & O'chirish</span>
              <h3 className="text-xl font-bold text-white mt-1">
                Anti-Delete & Edit History
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Suhbatdosh xabarni o'chirsa ham, u sizda saqlanib qoladi. Tahrirlangan xabarlarning tahrirdan oldingi barcha asl variantlarini ko'rishingiz mumkin.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20">
              <Trash2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>O'chirilgan va 1 martalik media xotirada qoladi</span>
            </div>
          </motion.div>

          {/* Card 5: 8x Download Booster */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 glass-panel glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Yuklab Olish Tezlatgichi</span>
              <h3 className="text-xl font-bold text-white mt-1">
                8-Oqimli Multi-Stream Booster
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Fayllarni bulutli serverlardan bitta oqimda emas, 8 ta parallel oqimda yuklab oladi. Katta video va fayllarni yuklash bir necha barobar tezlashadi.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-mono text-amber-300 bg-amber-950/30 p-3 rounded-xl border border-amber-500/20">
              <span>Parallel Streams:</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 font-bold text-amber-200">
                8 Streams Enabled
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
