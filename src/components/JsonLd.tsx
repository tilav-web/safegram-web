import { SITE_CONFIG } from "@/config/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Safegram",
    "alternateName": ["Safegram Messenger", "Safegram Telegram", "Safegram App"],
    "operatingSystem": "Android",
    "applicationCategory": "CommunicationApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Safegram — O'zbekistondagi eng xavfsiz va aqlli Telegram mijozi. Telegram MTProto protokoli asosida kiberxavfsizlik, zararli fayllarni bloklash va tezkor bulutli aloqa.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    },
    "keywords": "Safegram, Telegram, Telegram client, Telegram messenger, Safegram telegram, Telegram uzbekistan, telegram skachat, telegram yuklab olish, android telegram, telegram yangi versiya, xavfsiz telegram",
    "author": {
      "@type": "Organization",
      "name": "Safegram Security Lab",
      "url": SITE_CONFIG.url
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
