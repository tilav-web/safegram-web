import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080e] py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-center sm:text-left">
        
        {/* Underlined link to Play Market */}
        <div className="text-center sm:text-left">
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/60 hover:decoration-emerald-400 transition-colors"
          >
            Google Play Market orqali Safegram ilovasini yuklab olish →
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 pt-4 border-t border-white/5">
          <p>© {new Date().getFullYear()} Safegram. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              Maxfiylik Siyosati
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
