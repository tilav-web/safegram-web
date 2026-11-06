import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05080e] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-emerald-500/30">
                <Image
                  src="/safegram-icon.png"
                  alt="Safegram Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Safegram</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Safegram — Kiberxavfsizlik talablariga to'liq javob beruvchi, zararli fayllardan himoyalangan va aqlli bank to'lovlariga ega yangi avlod xavfsiz aloqa platformasi.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Kiberxavfsizlik Kafolatlangan</span>
            </div>
          </div>

          {/* Col 2: Havolalar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Bo'limlar</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  Imkoniyatlar
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-emerald-400 transition-colors">
                  Antivirus Himoyasi
                </Link>
              </li>
              <li>
                <Link href="#p2p" className="hover:text-emerald-400 transition-colors">
                  Aqlli To'lovlar
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-emerald-400 transition-colors">
                  Ko'p Beriladigan Savollar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Huquqiy & Maxfiylik */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Huquqiy</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Maxfiylik Siyosati (Privacy Policy)
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Google Play Sahifasi
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Qo'llab-quvvatlash
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Safegram Security Lab. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            Xavfsiz va ishonchli aloqa uchun
          </p>
        </div>
      </div>
    </footer>
  );
}
