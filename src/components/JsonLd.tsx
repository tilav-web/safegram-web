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
    "description": "Safegram — O'zbekistondagi eng xavfsiz va aqlli Telegram mijozi. Real vaqtda viruslarni bloklash, bank kartalarini aqlli aniqlash va bir bosishda P2P o'tkazmalar.",
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
    "downloadUrl": "https://play.google.com/store/apps/details?id=org.telegram.messenger.web"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
