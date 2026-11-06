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
    question: "Safegram rasmiy Telegram bilan qanday bog'langan?",
    answer:
      "Safegram rasmiy Telegram ochiq kodi (Telegram Android Source Code) va MTProto 2.0 protokoli asosida yaratilgan. Siz mavjud Telegram akkauntingiz bilan xuddi rasmiy ilovadagidek kirasiz — barcha kanallaringiz, guruhlaringiz, xabarlaringiz va kontaktlaringiz o'z joyida saqlanadi.",
  },
  {
    question: "Mening yozishmalarim yoki bank kartam ma'lumotlari xavfsizmi?",
    answer:
      "Ha, 100% xavfsiz. Safegram sizning shaxsiy ma'lumotlaringizni yoki yozishmalaringizni hech qachon o'zining uchinchi tomon serverlariga yubormaydi. Karta raqamlarini aniqlash (Luhn algoritmi) to'liq qurilmangizning o'zida (offline rejimda) soniyaning ulushida amalga oshiriladi va faqat siz tasdiqlaganingizdan so'ng rasmiy bank ilovalariga (Click, Payme, Uzum va h.k.) yo'naltiradi.",
  },
  {
    question: "Antivirus tizimi qanday ishlaydi va telefonni sekinlashtirmaydimi?",
    answer:
      "Safegram'ga o'rnatilgan kiberxavfsizlik moduli faqat guruh va chatlarda yuboriladigan fayllarni (ayniqsa .apk formatidagi dasturlarni) yuklab olishdan oldin xesh va imzolari bo'yicha tahlil qiladi. U xotirani ortiqcha yuklamaydi, batareyani tejaydi va smartfon tezligiga mutlaqo salbiy ta'sir ko'rsatmaydi.",
  },
  {
    question: "Smart P2P funksiyasida qaysi banklar va to'lov tizimlari mavjud?",
    answer:
      "Safegram O'zbekistonning barcha ommabop bank va to'lov xizmatlarini qo'llab-quvvatlaydi: Click Up, Payme, Uzum Bank, Kapitalbank, Ipak Yo'li Mobile, Humo, Uzcard, Hamkorbank, Zoomrad (Aloqabank), Davrbank va boshqalar. Ro'yxat admin panel orqali doimiy ravishda yangilanib boradi.",
  },
  {
    question: "Safegram ilovasidan foydalanish bepulmi?",
    answer:
      "Ha, Safegram foydalanuvchilar uchun mutlaqo bepul. Unda bezovta qiluvchi bannerlar yoki yashirin to'lovlar yo'q.",
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
            Safegram xavfsizligi va ishlash tamoyillari haqida batafsil ma'lumotlar.
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
