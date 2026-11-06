import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxfiylik Siyosati (Privacy Policy) | Safegram",
  description: "Safegram ilovasining maxfiylik siyosati va foydalanuvchi ma'lumotlarini himoya qilish tamoyillari.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>

        {/* Title */}
        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Safegram Security Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Maxfiylik Siyosati (Privacy Policy)
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Oxirgi yangilanish: 2026-yil 7-noyabr
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Kirish va Umumiy Qoidalar</h2>
            <p>
              Safegram ("biz", "bizning ilova") foydalanuvchilarning shaxsiy ma'lumotlari daxlsizligi va kiberxavfsizligini birlamchi qadriyat deb hisoblaydi. Ushbu Maxfiylik Siyosati Safegram Android ilovasidan foydalanish jarayonida ma'lumotlar qanday qayta ishlanishini tushuntiradi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Telegram MTProto va Xabarlar Daxlsizligi</h2>
            <p>
              Safegram rasmiy Telegram API (MTProto 2.0 protokoli) asosida ishlaydi. Sizning barcha shaxsiy xabarlaringiz, media fayllaringiz, kanallaringiz va kontaktlaringiz bevosita Telegram rasmiy serverlari orqali shifrlanadi. Safegram jamoasi sizning yozishmalaringizni o'qish, nusxalash yoki o'zgartirish imkoniyatiga ega emas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Smart P2P va Bank Karta Raqamlari</h2>
            <p>
              Ilovada chatlardagi bank karta raqamlarini (Uzcard, Humo, Visa, Mastercard) aniqlash to'liq <strong>qurilmaning o'zida (offline rejimda)</strong> Luhn matematik algoritmi orqali amalga oshiriladi.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li>Hech qanday karta raqami yoki to'lov ma'lumoti serverlarimizga yuborilmaydi.</li>
              <li>Foydalanuvchi tugmani bosganda faqat rasmiy bank ilovalari (Click, Payme, Uzum va h.k.) chuqur havolalar (Deep Link) orqali ochiladi.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Antivirus va Xavfsizlik Skriningi</h2>
            <p>
              Guruh va chatlarda yuborilgan fayllar (.apk va h.k.) smartfonga zarar yetkazmasligi uchun xavfsizlik tekshiruvidan o'tkaziladi. Bu jarayonda shaxsiy fayllar mazmuni emas, faqat ularning xavfsizlik belgilari (xesh kodlari) tahlil qilinadi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">5. Uchinchi Tomonlar va Reklama</h2>
            <p>
              Safegram foydalanuvchilarning ma'lumotlarini hech qanday uchinchi tomonlarga, marketologlarga yoki reklama agentliklariga sotmaydi va taqdim etmaydi. Ilovada foydalanuvchini kuzatuvchi (tracking) tijoriy reklama SDK'lari mavjud emas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">6. Bog'lanish</h2>
            <p>
              Maxfiylik siyosatiga oid savollar va takliflar bo'lsa, quyidagi aloqa kanallari orqali biz bilan bog'lanishingiz mumkin:
            </p>
            <p className="font-mono text-emerald-400">
              Email: support@safegram.uz <br />
              Telegram: @safegram_support
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
