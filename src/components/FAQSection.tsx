"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Safegram kiberxavfsizlik va antivirus tizimi qanday ishlaydi?",
    answer:
      "Safegram chatlarda tarqatilayotgan shubhali fayllarni yuklab olishdan oldin Magic Bytes va dastur ruxsatnomalarini (SMS tutish, ruxsatsiz kirish) chuqur tahlil qiladi. Agar fayl zararli troyan ekani aniqlansa, u avtomatik ravishda izolyatsiya qilinadi (Auto-Sanitize) va telefon xotirasiga o'tishi to'xtatiladi.",
  },
  {
    question: "Smart P2P kartalarni qanday aniqlaydi va bank ma'lumotlarim xavfsizmi?",
    answer:
      "Chatdagi 16 xonali karta raqamlari xalqaro Luhn matematik formulasi orqali 1 millisekundda, to'liq qurilmangizning o'zida (offline) tekshiriladi. Hech qanday karta raqami yoki to'lov ma'lumoti tashqi serverlarga yuborilmaydi. Karta raqamiga bosilganda qurilmadagi rasmiy bank ilovasi to'g'ridan-to'g'ri ochiladi.",
  },
  {
    question: "Ruh rejimi (Ghost Mode) va Anti-Delete qanday ishlaydi?",
    answer:
      "Safegram sozlamalarida Ruh rejimini faollashtirsangiz, siz o'qigan xabarlarda 'o'qildi' belgisi chiqmaydi, ovozli xabarlarni bildirmasdan eshitishingiz va hikoyalarni yashirin ko'rishingiz mumkin. Anti-Delete funksiyasi esa suhbatdoshingiz xabarni 'hamma uchun o'chirish' qilgan taqdirda ham, uning asl nusxasini sizning chat tarixingizda saqlab qoladi.",
  },
  {
    question: "Download Booster fayllarni qanday qilib 8 barobar tezroq yuklaydi?",
    answer:
      "Standart ilovalar faylni bitta oqim orqali yuklaydi. Safegram'ning o'rnatilgan Download Booster moduli esa bulutli serverlarga 8 tagacha parallel ulanish hosil qiladi, natijada katta hajmdagi videolar va hujjatlar maksimal tarmoq tezligida bir zumda yuklanadi.",
  },
  {
    question: "Safegram ilovasidan foydalanish bepulmi?",
    answer:
      "Ha, Safegram foydalanuvchilar uchun mutlaqo bepul. Unda bezovta qiluvchi bannerlar yoki yashirin to'lovlar mavjud emas.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Savol-Javoblar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ko'p beriladigan savollar
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Safegram imkoniyatlari, maxfiylik va ishlash tamoyillari haqida batafsil ma'lumotlar.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-panel overflow-hidden transition-all duration-200 border border-white/5 hover:border-emerald-500/30"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
