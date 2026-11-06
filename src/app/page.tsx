import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-gray-300">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 leading-relaxed">
        
        {/* Main Title Section */}
        <section className="space-y-4 border-b border-white/10 pb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Safegram — Yangi Avlod Xavfsiz Messenjeri
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-normal">
            Kundalik muloqotda maksimal xavfsizlik, tezkorlik va shaxsiy daxlsizlik uchun yaratilgan zamonaviy aloqa platformasi.
          </p>
        </section>

        {/* Section 1: Umumiy tavsif */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Safegram nima?
          </h2>
          <p>
            Safegram — bu foydalanuvchilarning shaxsiy yozishmalari, fayllari va ma'lumotlarini ishonchli himoya qilishga qaratilgan zamonaviy aloqa ilovasi. Ilova orqali do'stlaringiz va yaqinlaringiz bilan cheksiz matnli xabarlar, yuqori sifatli ovozli va video xabarlar almashishingiz, shuningdek, katta hajmdagi hujjatlarni bir zumda yuborishingiz mumkin.
          </p>
          <p>
            Ilova tezkor ishlash uchun optimallashtirilgan bo'lib, internet trafigini tejaydi va barcha turdagi Android qurilmalarida qotmasdan silliq ishlaydi.
          </p>
        </section>

        {/* Section 2: Kiberxavfsizlik va Kiruvchi Fayllar Himoyasi */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Kiberxavfsizlik va Kiruvchi Fayllar Nazorati
          </h2>
          <p>
            Safegram qurilmangiz xavfsizligini ta'minlash maqsadida chatlarda tarqatilayotgan shubhali fayllarni tekshiradi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            <li>
              <strong>Shubhali dasturlarni aniqlash:</strong> Foydalanuvchini aldash maqsadida rasm yoki hujjat niqobi ostida yuborilgan zararli o'rnatish fayllari xotiraga yuklanishidan oldin aniqlanadi.
            </li>
            <li>
              <strong>Qurilma daxlsizligi:</strong> Tizim ruxsatnomalarini suiiste'mol qilishga urinuvchi xavfli fayllar bloklanadi va telefoningiz xavfsizligi kafolatlanadi.
            </li>
            <li>
              <strong>Xavfsiz media uzatish:</strong> Barcha audio, video va foto fayllar shifrlangan holatda uzatiladi.
            </li>
          </ul>
        </section>

        {/* Section 3: Yuqori Tezlik va Fayl Almashinuvi */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tezkor Bulutli Aloqa va Katta Fayllar
          </h2>
          <p>
            Safegram ko'p oqimli ma'lumot uzatish texnologiyasiga ega bo'lib, hatto past tezlikdagi mobil internetda ham xabarlarni soniyalarda yetkazib beradi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            <li>Katta hajmdagi videoroliklar va darsliklarni tezkor yuklab olish.</li>
            <li>Barcha chat va kanallarning bir necha qurilmalar o'rtasida uzluksiz sinxronlashishi.</li>
            <li>Xotirani tozalash va keshlarni moslashuvchan boshqarish imkoniyati.</li>
          </ul>
        </section>

        {/* Section 4: Shaxsiy Maxfiylik */}
        <section className="space-y-4 border-t border-white/10 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Shaxsiy Maxfiylik va Reklamasiz Muloqot
          </h2>
          <p>
            Safegram foydalanuvchilarining shaxsiy yozishmalarini hech qanday reklama beruvchilarga yoki uchinchi shaxslarga taqdim etmaydi. Ilova ichida bezovta qiluvchi bannerlar, spam yoki kuzatuvchi tijoriy modullar mavjud emas.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
