"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      value: "99.9%",
      label: "Zararli fayllarni aniqlash",
      sublabel: "Zero-day troyan va fishing tahdidlari",
    },
    {
      value: "15+",
      label: "O'zbekiston banklari",
      sublabel: "Click, Payme, Uzum, Humo & Uzcard",
    },
    {
      value: "<1 ms",
      label: "Karta tekshiruvi tezligi",
      sublabel: "Xatosiz Luhn nazorati",
    },
    {
      value: "0",
      label: "Reklama va Trackerlar",
      sublabel: "Mutlaqo toza va ochiq arxitektura",
    },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center sm:text-left p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient font-mono">
                {stat.value}
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-gray-400">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
