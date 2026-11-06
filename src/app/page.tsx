import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BentoGrid from "@/components/BentoGrid";
import FAQSection from "@/components/FAQSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c14] overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <BentoGrid />
        <FAQSection />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
