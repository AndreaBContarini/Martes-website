import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Martes AI | Automazioni AI per Aziende e Professionisti",
  description = "Potenziamo la crescita delle aziende con l'intelligenza artificiale. Soluzioni di automazione AI personalizzate, chatbot intelligenti, e lead generation avanzata per ottimizzare i processi aziendali.",
  canonicalUrl = "https://martes-ai.com",
  ogImage = "/src/images/logo.png"
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
      
      {/* Preconnect per performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload delle immagini critiche */}
      <link rel="preload" as="image" href="/src/images/logo.png" />
    </Helmet>
  );
};

export default SEOHead; 