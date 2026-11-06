import { SITE_CONFIG } from "@/config/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Safegram",
    "operatingSystem": "Android",
    "applicationCategory": "CommunicationApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Safegram — Kiberxavfsiz va aqlli aloqa platformasi. Real vaqtda viruslarni bloklash, bank kartalarini aqlli aniqlash va bir bosishda xavfsiz to'lovlar.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    },
    "author": {
      "@type": "Organization",
      "name": "Safegram Security Lab",
      "url": "https://safegram.uz"
    },
    "softwareVersion": "1.0.0",
    "downloadUrl": SITE_CONFIG.playStoreUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
