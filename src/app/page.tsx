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
            Safegram — Yangi Avlod Kiberxavfsiz Messenjeri
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-normal">
            Kundalik muloqotda maksimal xavfsizlik, shaxsiy daxlsizlik va zamonaviy qulayliklar uchun yaratilgan mustaqil platforma.
          </p>
        </section>

        {/* Section 1: Umumiy tavsif */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Safegram nima va u kimlar uchun?
          </h2>
          <p>
            Safegram — bu foydalanuvchilarning shaxsiy yozishmalari, fayllari va moliyaviy ma'lumotlarini har qanday kiberhujumlardan himoya qilishga ixtisoslashgan aqlli aloqa vositasidir. Standart messenjerlardan farqli ravishda, Safegram foydalanuvchini faqat matn yozish bilan cheklab qo'ymaydi, balki tarmoqda tarqalayotgan xavfli troyanlar, fishing tuzoqlari va soxta ilovalardan real vaqtda himoya qiladi.
          </p>
          <p>
            Ilova O'zbekiston kiberxavfsizlik talablariga moslashtirilgan bo'lib, barcha ma'lumotlar foydalanuvchining shaxsiy nazorati ostida bo'ladi. Hech qanday ma'lumot uchinchi shaxslarga sotilmaydi yoki noqonuniy kuzatuv olib borilmaydi.
          </p>
        </section>

        {/* Section 2: Kiberxavfsizlik va Antivirus */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Real-Vaqtli Antivirus va Xavfsizlik Skriningi
          </h2>
          <p>
            Safegram ichki xavfsizlik yadrosi chatlarda va guruhlarda yuborilayotgan barcha fayllarni smartfoningiz xotirasiga tushmasdan oldin chuqur tahlil qiladi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            <li>
              <strong>Magic Bytes fosh qilish tizimi:</strong> Rasm, audio yoki oddiy hujjat niqobi ostiga yashiringan soxta o'rnatish paketlarini aniqlaydi.
            </li>
            <li>
              <strong>Manifest va ruxsatnomalar tahlili:</strong> SMS xabarlarni o'g'irlash, foydalanuvchi ekrani harakatlarini yashirin kuzatish yoki bank hisoblariga ruxsatsiz ulanishga urinuvchi xavfli troyanlarni bir zumda to'xtatadi.
            </li>
            <li>
              <strong>Avtomatik izolyatsiya (Auto-Sanitize):</strong> Aniqlangan tahdidlar qurilmaga ziyon yetkazmasligi uchun avtomatik ravishda bloklanadi va foydalanuvchiga to'liq hisobot taqdim etiladi.
            </li>
          </ul>
        </section>

        {/* Section 3: Smart P2P */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Smart P2P — Karta Raqamlarini Aqlli Aniqlash va Tezkor To'lov
          </h2>
          <p>
            Muloqot davomida karta raqamlarini qayta-qayta nusxalash va bank ilovalariga qo'lda terib o'tirish endi shart emas:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            <li>
              Yozishmalardagi 16 xonali karta raqamlarini Safegram avtomatik ravishda ajratib ko'rsatadi.
            </li>
            <li>
              Xalqaro <strong>Luhn matematik algoritmi</strong> yordamida karta raqamining to'g'riligi 1 millisekund ichida, to'liq oflayn (internetga ma'lumot chiqarmasdan) tekshiriladi.
            </li>
            <li>
              Karta ustiga bir marta bosish orqali to'g'ridan-to'g'ri o'rnatilgan bank ilovasiga o'tib, to'lovni xavfsiz va xatosiz tasdiqlash mumkin.
            </li>
          </ul>
        </section>

        {/* Section 4: Ghost Mode & Anti-Delete */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ruh Rejimi (Ghost Mode) va Anti-Delete
          </h2>
          <p>
            Muloqotda to'liq erkinlik va shaxsiy maydonni qadrlaydiganlar uchun Safegram maxsus xufyona sozlamalarni taqdim etadi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            <li>
              <strong>O'qilganlikni yashirish:</strong> Siz kelgan xabarlarni o'qiganingiz suhbatdoshga bildirilmaydi.
            </li>
            <li>
              <strong>Ovozli xabarlar va hikoyalar:</strong> Ovozli xabarlarni eshitilganini bildirmaslik va hikoyalarni mutlaqo nomsiz tomosha qilish imkoniyati.
            </li>
            <li>
              <strong>Anti-Delete texnologiyasi:</strong> Suhbatdosh yuborgan xabarini "hamma uchun o'chirish" qilsa ham, xabarning asl matni sizning chat tarixingizda o'chmasdan saqlanib qoladi.
            </li>
            <li>
              <strong>Tahrir tarixi:</strong> O'zgartirilgan xabarlarning tahrirdan oldingi barcha asl variantlarini ko'rish mumkin.
            </li>
          </ul>
        </section>

        {/* Section 5: Download Booster */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Multi-Stream Download Booster
          </h2>
          <p>
            Safegram fayllarni yuklab olishda oddiy bitta ulanish bilan cheklanmaydi. O'rnatilgan 8-oqimli Multi-Stream moduli orqali katta hajmdagi video, darslik va media fayllarni tarmoqning maksimal tezligida, 5-10 barobargacha tezroq yuklab olish kafolatlanadi.
          </p>
        </section>

        {/* Section 6: Maxfiylik va Texnik Kafolat */}
        <section className="space-y-4 border-t border-white/10 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Maxfiylik va 100% Xavfsizlik Kafolati
          </h2>
          <p>
            Safegram dasturiy ta'minotida reklama bannerlari, foydalanuvchi qiziqishlarini yig'uvchi tijoriy trekerlar yoki uchinchi tomon tahlil SDK'lari umuman mavjud emas. Barcha ma'lumotlar qurilmaning o'zida shifrlanadi va foydalanuvchining roziligisiz hech qayerga uzatilmaydi.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
