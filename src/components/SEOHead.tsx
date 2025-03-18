import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Martes AI | Automazioni AI per Aziende e Professionisti",
  description = "Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate per incrementare l'efficienza e il ROI della tua impresa.",
  canonicalUrl = "https://martes-ai.com",
  ogImage = "https://i.ibb.co/43C5cwp/favicon.png"
}: SEOProps) => {
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Meta tag per mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      {/* Meta tag per indicizzazione */}
      <meta name="robots" content="index, follow" />
      
      {/* Keywords rilevanti */}
      <meta name="keywords" content="martes ai, automazione ai, intelligenza artificiale, chatbot ai, lead generation ai, automazione processi aziendali, consulenza ai, gpt personalizzato, assistenti virtuali ai" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Martes AI",
          "url": "https://www.martes-ai.com",
          "logo": "https://i.ibb.co/43C5cwp/favicon.png",
          "description": "Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate.",
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
        })}
      </script>
      
      {/* Preconnect per performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload delle immagini critiche */}
      <link rel="preload" as="image" href={ogImage} />
    </Helmet>
  );
};

export default SEOHead; 