"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, ArrowUpRight, Copy, Check, Lock, Smartphone, Zap } from "lucide-react";
import { useState } from "react";

export default function PhoneMockup() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("9860 1901 1067 7696");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] select-none">
      {/* Background ambient glow behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-teal-500/20 rounded-[50px] blur-2xl -z-10 opacity-70 animate-pulse-slow"></div>

      {/* Outer Phone Frame */}
      <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#2b3548] via-[#151c2c] to-[#0c101a] shadow-2xl shadow-emerald-950/50 border border-white/10">
        
        {/* Inner Bezel */}
        <div className="relative rounded-[38px] overflow-hidden bg-[#090d16] border border-black/80 flex flex-col h-[650px] shadow-inner">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-28 bg-black rounded-full z-30 flex items-center justify-between px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#121927]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#1b253b] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
            </div>
          </div>

          {/* Top Status Bar */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-gray-400 font-medium z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-tight">5G</span>
              <div className="w-4 h-2.5 border border-gray-400 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Telegram Chat Header */}
          <div className="px-4 py-3 bg-[#111726]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between z-10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5">
                <div className="w-full h-full rounded-full bg-[#0d131f] flex items-center justify-center font-bold text-xs text-white">
                  SG
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#090d16] flex items-center justify-center">
                  <ShieldCheck className="w-2.5 h-2.5 text-black" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-xs text-white">Safegram Security</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Himoyalangan
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400">faol monitoring</span>
              </div>
            </div>
            <Lock className="w-4 h-4 text-emerald-400/80" />
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-gradient-to-b from-[#090d16] to-[#070a12] text-xs">
            
            {/* Timestamp Badge */}
            <div className="flex justify-center">
              <span className="text-[10px] bg-white/5 text-gray-400 px-2.5 py-0.5 rounded-full">
                Bugun
              </span>
            </div>

            {/* Antivirus Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 rounded-2xl bg-gradient-to-br from-red-950/50 via-[#1a111a] to-[#141824] border border-red-500/30 shadow-lg"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-red-500/20 text-red-400 shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-red-300 text-[11px]">Xavfli fayl to'xtatildi!</span>
                    <span className="text-[9px] text-gray-400">09:38</span>
                  </div>
                  <p className="text-[10.5px] text-gray-300 mt-1 leading-snug">
                    <span className="font-mono text-red-200">mod_installer.apk</span> troyan shubhasi bilan bloklandi. Qurilmangiz xavfsiz.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real-vaqtli skaner faol</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Incoming Card Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-[85%] rounded-2xl rounded-tl-sm p-3 bg-[#131b2e] border border-white/10 text-gray-200 shadow-md"
            >
              <p className="leading-relaxed text-[11.5px]">
                Salom! Safegram orqali to'lovni tezroq o'tkazish mumkin ekan. Karta raqamim:
              </p>
              <div className="mt-2 p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-[11.5px] flex items-center justify-between">
                <span>9860 1901 1067 7696</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-200">HUMO</span>
              </div>
              <span className="text-[9px] text-gray-500 block text-right mt-1">09:40</span>
            </motion.div>

            {/* Interactive Bottom Sheet (Bank Selector) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-2 rounded-2xl bg-[#162035]/95 backdrop-blur-xl border border-emerald-500/30 p-3 shadow-xl"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div>
                  <div className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                    <span>HUMO • Xalq Banki</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">9860 1901 1067 7696</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  Smart P2P
                </span>
              </div>

              {/* Bank Apps List */}
              <div className="mt-2 space-y-1.5">
                {/* Click */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow">
                      C
                    </div>
                    <span className="text-[11px] font-medium text-gray-200 group-hover:text-emerald-300">
                      Click Up orqali o'tkazish
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400" />
                </div>

                {/* Payme */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-500 flex items-center justify-center text-[10px] font-bold text-white shadow">
                      P
                    </div>
                    <span className="text-[11px] font-medium text-gray-200 group-hover:text-emerald-300">
                      Payme orqali o'tkazish
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400" />
                </div>

                {/* Uzum Bank */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white shadow">
                      U
                    </div>
                    <span className="text-[11px] font-medium text-gray-200 group-hover:text-emerald-300">
                      Uzum Bank orqali o'tkazish
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400" />
                </div>

                {/* Copy action */}
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 transition-colors text-[10.5px] font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Karta nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kartadan nusxa olish</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

          </div>

          {/* Bottom Home Indicator */}
          <div className="h-4 bg-[#090d16] flex items-center justify-center">
            <div className="w-24 h-1 bg-white/20 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
