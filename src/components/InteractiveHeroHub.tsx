"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  ShieldAlert, 
  CreditCard, 
  Ghost, 
  Zap, 
  EyeOff, 
  Trash2, 
  History, 
  ArrowUpRight, 
  Copy, 
  Check, 
  CheckCircle2, 
  FileCode2, 
  Sparkles,
  Layers
} from "lucide-react";

export default function InteractiveHeroHub() {
  const [activeTab, setActiveTab] = useState<"security" | "p2p" | "ghost">("security");
  const [copied, setCopied] = useState(false);
  const [simulatedBlock, setSimulatedBlock] = useState(true);

  const handleCopy = () => {
    navigator.clipboard?.writeText("9860 1901 1067 7696");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl blur-2xl -z-10 opacity-75 animate-pulse-slow" />

      {/* Main Glass HUD Container */}
      <div className="rounded-3xl bg-[#0d1424]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Top Control Bar with Feature Tabs */}
        <div className="p-3 bg-[#090e1a]/80 border-b border-white/5 flex items-center justify-between gap-2">
          
          {/* Status badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SAFEGRAM CORE 1.0</span>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 bg-[#131b2e] p-1 rounded-2xl border border-white/5 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "security"
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Kiber-Qalqon</span>
            </button>

            <button
              onClick={() => setActiveTab("p2p")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "p2p"
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Smart P2P</span>
            </button>

            <button
              onClick={() => setActiveTab("ghost")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "ghost"
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Ghost className="w-3.5 h-3.5" />
              <span>Ruh Rejimi</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Body */}
        <div className="p-5 sm:p-6 min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: Real-time Security & Threat Shield */}
            {activeTab === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Engine Live Status Bar */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-gray-400 block text-[10px]">Magic Bytes</span>
                    <span className="text-emerald-400 font-bold">Faol (Deep)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-gray-400 block text-[10px]">Permissions</span>
                    <span className="text-emerald-400 font-bold">Heuristic Scan</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-gray-400 block text-[10px]">Anti-Banking</span>
                    <span className="text-cyan-400 font-bold">Real-vaqt</span>
                  </div>
                </div>

                {/* Threat Interception Card */}
                <div className="rounded-2xl p-4 bg-gradient-to-br from-red-950/40 via-[#18111e] to-[#0e1424] border border-red-500/30 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-red-300">Zararli APK to'xtatildi!</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-500/20 text-red-300 uppercase">
                            High Threat
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                          UzumBank_Mod_Vip.apk (12.4 MB)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-gray-400">
                      <span>Aniqlangan xavf:</span>
                      <span className="text-red-400 font-semibold">Trojan.Spy.Banker (SMS Intercept)</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Soxta ruxsatlar:</span>
                      <span className="text-amber-400">RECEIVE_SMS, BIND_ACCESSIBILITY</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Safegram himoyasi:</span>
                      <span className="text-emerald-400 font-semibold">Auto-Sanitize & Blocked</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Fayl xotiraga yuklanmasdan yo'q qilindi
                    </span>
                    <button
                      onClick={() => setSimulatedBlock(!simulatedBlock)}
                      className="text-xs text-emerald-400 hover:underline font-mono"
                    >
                      {simulatedBlock ? "Xavf hisoboti" : "Yopish"}
                    </button>
                  </div>
                </div>

                {/* Safe File Indicator */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300 font-medium">
                    <FileCode2 className="w-4 h-4 text-emerald-400" />
                    <span>Hujjat_shartnoma_2026.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    SHA-256 XAVFSIZ
                  </span>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Smart P2P (Real Android Bank Selector) */}
            {activeTab === "p2p" && (
              <motion.div
                key="p2p"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Detected Card Banner */}
                <div className="p-3.5 rounded-2xl bg-[#141d30] border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white tracking-wide">HUMO • Xalq Banki</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        Luhn: Valid
                      </span>
                    </div>
                    <div className="text-sm font-mono font-bold text-emerald-400 tracking-wider mt-0.5">
                      9860 1901 1067 7696
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Nusxalandi" : "Nusxa"}</span>
                  </button>
                </div>

                {/* Real Banking Apps List (from Android SafegramBankManager) */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    To'lov ilovasini tanlang:
                  </div>

                  {/* Click Up */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#0073ff] flex items-center justify-center font-bold text-xs text-white shadow">
                        C
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                          Click Up orqali o'tkazish
                        </div>
                        <div className="text-[10px] text-gray-400">click://p2p/9860190110677696</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  </div>

                  {/* Payme */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#00c5a3] flex items-center justify-center font-bold text-xs text-white shadow">
                        P
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                          Payme orqali o'tkazish
                        </div>
                        <div className="text-[10px] text-gray-400">payme://card_transfer</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  </div>

                  {/* Uzum Bank */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#7000ff] flex items-center justify-center font-bold text-xs text-white shadow">
                        U
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                          Uzum Bank orqali o'tkazish
                        </div>
                        <div className="text-[10px] text-gray-400">uzum://p2p/transfer</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  </div>

                  {/* Kapitalbank */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#ff4b00] flex items-center justify-center font-bold text-xs text-white shadow">
                        K
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                          Kapitalbank orqali o'tkazish
                        </div>
                        <div className="text-[10px] text-gray-400">kbonline://transfer</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: Ghost Mode, Anti-Delete & Booster */}
            {activeTab === "ghost" && (
              <motion.div
                key="ghost"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="text-xs text-gray-400 leading-snug">
                  Safegram'ning eksklyuziv shaxsiy maxfiylik va tezlik modullari:
                </div>

                {/* Feature 1: Ghost Mode */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                      <Ghost className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Xufyona (Ghost) Rejim</div>
                      <div className="text-[11px] text-gray-400">
                        O'qilganlik, ovozli xabarlar va "Yozmoqda..." statusini yashirish
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-4.5 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end">
                    <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Feature 2: Anti-Delete */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Trash2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Anti-Delete & Edit History</div>
                      <div className="text-[11px] text-gray-400">
                        Suhbatdosh o'chirgan yoki o'zgartirgan xabarlarning asl nusxasi qoladi
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-4.5 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end">
                    <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Feature 3: Download Booster */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Download Booster (8 Streams)</div>
                      <div className="text-[11px] text-gray-400">
                        Telegram fayllarini 8 ta parallel oqimda 5x-10x tezroq yuklash
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    8X BOOST
                  </span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Interactive HUD Footer */}
        <div className="p-4 bg-[#090e1a]/90 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Safegram Android NDK + MTProto 2.0 arxitekturasi</span>
          </div>
          <span className="font-mono text-emerald-400/80 text-[11px]">
            100% OFFLINE ANALYTICS
          </span>
        </div>

      </div>
    </div>
  );
}

