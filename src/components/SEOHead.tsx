import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  pageType?: 'website' | 'article' | 'product';
  schemaType?: 'Organization' | 'WebPage' | 'AboutPage' | 'BlogPosting' | 'Product';
  structuredData?: Record<string, any>;
}

const SEOHead = ({ 
  title = "Martes AI | Automazioni AI per Aziende e Professionisti",
  description = "Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate per incrementare l'efficienza e il ROI della tua impresa.",
  canonicalUrl = "https://martes-ai.com",
  ogImage = "/icon.png",
  pageType = "website",
  schemaType = "Organization",
  structuredData = {}
}: SEOProps) => {
  // Base URL del sito
  const baseUrl = "https://martes-ai.com";
  
  // Keywords espanse
  const keywordsString = "martes ai, automazione ai, intelligenza artificiale, chatbot ai, lead generation ai, automazione processi aziendali, consulenza ai, gpt personalizzato, assistenti virtuali ai, agenti AI, software AI, SaaS AI, automazione CRM, AI per aziende, AI per professionisti";
  
  // Schema.org JSON-LD di base
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": "Martes AI",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Aurelia 325",
      "addressLocality": "Roma",
      "addressCountry": "IT"
    },
    "vatID": "18026131005",
    "sameAs": [
      "https://www.linkedin.com/company/martes-ai",
      "https://www.instagram.com/martes_ai",
      "https://www.youtube.com/@riccardobellicontarini"
    ]
  };
  
  // Se è l'Organization, aggiungiamo potentialAction per i sitelink
  if (schemaType === "Organization") {
    baseSchema.potentialAction = [
      {
        "@type": "ViewAction",
        "target": `${baseUrl}/casi-studio`,
        "name": "Casi Studio"
      },
      {
        "@type": "ViewAction",
        "target": `${baseUrl}/blog`,
        "name": "Blog"
      },
      {
        "@type": "ViewAction",
        "target": `${baseUrl}/chi-siamo`,
        "name": "Chi Siamo"
      }
    ];
  }
  
  // Unisci lo schema base con eventuali dati strutturati personalizzati
  const finalSchema = { ...baseSchema, ...structuredData };
  
  return (
    <Helmet>
      {/* Titolo e Meta Description principali */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Meta tag per Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={pageType} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`} />
      
      {/* Meta tag per mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      {/* Meta tag per indicizzazione */}
      <meta name="robots" content="index, follow" />
      
      {/* Keywords rilevanti espanse */}
      <meta name="keywords" content={keywordsString} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
      
      {/* Preconnect per performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload delle immagini critiche */}
      <link rel="preload" as="image" href={ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`} />
      
      <link rel="icon" href={`${baseUrl}/logo.png`} />
    </Helmet>
  );
};

export default SEOHead; 