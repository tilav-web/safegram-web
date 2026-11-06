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
              Safegram ("biz", "bizning ilova") foydalanuvchilarning shaxsiy ma'lumotlari daxlsizligi va kiberxavfsizligini birlamchi qadriyat deb biladi. Ushbu Maxfiylik Siyosati Safegram Android ilovasidan foydalanish jarayonida ma'lumotlar qay tartibda himoyalanishini belgilaydi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Xabarlar Shifrlanishi va Daxlsizlik</h2>
            <p>
              Sizning barcha shaxsiy xabarlaringiz, media fayllaringiz va kontaktlaringiz ilg'or 256-bitli shifrlash protokollari orqali himoyalanadi. Safegram jamoasi yoki uchinchi shaxslar sizning yozishmalaringizni o'qish, nusxalash yoki o'zgartirish imkoniyatiga ega emas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Smart P2P va Karta Raqamlari</h2>
            <p>
              Ilovada chatlardagi 16 xonali to'lov kartalarini aniqlash to'liq <strong>qurilmaning o'zida (offline rejimda)</strong> xalqaro Luhn matematik algoritmi orqali amalga oshiriladi.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
              <li>Hech qanday karta raqami yoki to'lov ma'lumoti serverlarga yuborilmaydi va saqlanmaydi.</li>
              <li>Foydalanuvchi tasdiqlaganidan so'ng faqat qurilmada o'rnatilgan rasmiy to'lov va bank ilovalari orqali xavfsiz o'tish ta'minlanadi.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Kiberxavfsizlik va Antivirus Skriningi</h2>
            <p>
              Guruh va chatlarda yuborilgan fayllar smartfonga zarar yetkazmasligi uchun xavfsizlik tekshiruvidan o'tkaziladi. Bu jarayonda shaxsiy fayllar mazmuni emas, faqat ularning xavfsizlik belgilari va ruxsatnomalari tahlil qilinadi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">5. Uchinchi Tomonlar va Reklama</h2>
            <p>
              Safegram foydalanuvchilarning ma'lumotlarini hech qanday uchinchi tomonlarga yoki reklama agentliklariga sotmaydi va taqdim etmaydi. Ilovada foydalanuvchini kuzatuvchi tijoriy reklama trekerlari mavjud emas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">6. Bog'lanish</h2>
            <p>
              Maxfiylik siyosatiga oid savollar va takliflar bo'lsa, quyidagi rasmiy aloqa kanallari orqali bog'lanishingiz mumkin:
            </p>
            <p className="font-mono text-emerald-400">
              Email: support@safegram.uz <br />
              Rasmiy portal: https://safegram.uz
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
