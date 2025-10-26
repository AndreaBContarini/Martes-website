import { useState, useRef, useEffect } from 'react';

const affiliateLogos = [
  {
    src: "/assets/affiliate_logos/n8n_logo.png",
    alt: "n8n"
  },
  {
    src: "/assets/affiliate_logos/apify_logo.png",
    alt: "Apify"
  },
  {
    src: "/assets/affiliate_logos/aws_logo.png",
    alt: "Amazon Web Services"
  },
  {
    src: "/assets/affiliate_logos/logo_postgres.png",
    alt: "PostgreSQL"
  },
  {
    src: "/assets/affiliate_logos/pinecone_logo.png",
    alt: "Pinecone"
  },
  {
    src: "/assets/affiliate_logos/logo_supabase.png",
    alt: "Supabase"
  },
  {
    src: "/assets/affiliate_logos/voiceflow_logo.png",
    alt: "Voiceflow"
  },
  {
    src: "/assets/affiliate_logos/retell_logo.png",
    alt: "Retell"
  },
  {
    src: "/assets/affiliate_logos/GoHighLevel_logo.png",
    alt: "GoHighLevel"
  },
  {
    src: "/assets/affiliate_logos/manychat_logo.png",
    alt: "Manychat"
  },
  {
    src: "/assets/affiliate_logos/airtable_logo.png",
    alt: "Airtable"
  },
  {
    src: "/assets/affiliate_logos/meta_logo.png",
    alt: "Meta"
  },
  {
    src: "/assets/affiliate_logos/dripify_logo.png",
    alt: "Dripify"
  },
  {
    src: "/assets/affiliate_logos/cursor_logo.png",
    alt: "Cursor"
  },
  {
    src: "/assets/affiliate_logos/instantly_logo.png",
    alt: "Instantly"
  },
  {
    src: "/assets/affiliate_logos/apollo_logo.png",
    alt: "Apollo"
  }
];

function LogoTickerAffiliate() {
  const [isPaused, setIsPaused] = useState(false);
  const tickerContentRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const tickerElement = tickerContentRef.current;
    if (tickerElement) {
      if (isPaused) {
        tickerElement.style.animationPlayState = 'paused';
      } else {
        tickerElement.style.animationPlayState = 'running';
      }
    }
  }, [isPaused]);

  return (
    <section id="affiliate-partners" className="py-12 w-full bg-black/20">
      <div className="section-container">
        <div className="text-center mb-8">
                          <h3 className="text-3xl md:text-4xl font-bold text-white">I Nostri Strumenti</h3>
        </div>
        
        <div 
          className="ticker-container flex overflow-hidden whitespace-nowrap"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={tickerContentRef}
            className="ticker-content flex items-center"
            style={{
              display: "flex",
              animation: "marquee-affiliate 35s linear infinite",
              width: "max-content"
            }}
          >
            {affiliateLogos.concat(affiliateLogos).map((logo, index) => (
              <div 
                key={`affiliate-logo-${index}`}
                className="logo-container bg-white p-4 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  width: '180px',
                  height: '90px',
                  margin: '0 12px'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stile per animazione */}
      <style>
        {`
          @keyframes marquee-affiliate {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          
          .ticker-container {
            cursor: grab;
          }
          
          .ticker-container:active {
            cursor: grabbing;
          }
        `}
      </style>
    </section>
  );
}

export default LogoTickerAffiliate; 