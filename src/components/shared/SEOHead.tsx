import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  pageType?: 'website' | 'article';
  structuredData?: Record<string, any>;
}

export const SEOHead = ({ 
  title, 
  description, 
  image = 'https://martes-ai.com/og-image.jpg', // Default OG Image
  url = 'https://martes-ai.com',
  pageType = 'website',
  structuredData
}: SEOHeadProps) => {
  const fullTitle = title.includes('Martes AI') ? title : `${title} | Martes AI`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
