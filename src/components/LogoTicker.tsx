import { useState, useRef, useEffect } from 'react';

const logos = [
  {
    src: "/assets/logos/wetravel.png",
    alt: "We Travel Group"
  },
  {
    src: "https://viaggi.bluvacanze.it/wp-content/uploads/2021/03/Bluvacanze.png",
    alt: "Bluvacanze"
  },
  {
    src: "/assets/logos/fantozzi.png",
    alt: "Fantozzi & Associati"
  },
  {
    src: "/assets/logos/shapeup.png",
    alt: "Shape-Up"
  },
  {
    src: "/assets/logos/ecommerceparts.png",
    alt: "Ecommerceparts"
  },
  {
    src: "/assets/logos/citybeach.png",
    alt: "CityBeach Boardshop"
  },
  {
    src: "https://www.clinicaoculisticasantalucia.it/images/logo-mobile.png",
    alt: "Clinica Oculistica Santa Lucia"
  },
  {
    src: "/assets/logos/federico-loffredo.png",
    alt: "Federico Loffredo"
  },
  {
    src: "https://www.viaggicarmen.com/wpunitravel/wp-content/uploads/2023/11/agenzia-viaggi-aprilia.png",
    alt: "Viaggi Carmen"
  }
];

function LogoTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const tickerContentRef = useRef<HTMLDivElement>(null);
  
  // Quando l'utente preme su un logo, lo scorrimento si interrompe
  const handleMouseDown = () => {
    setIsPaused(true);
  };

  // Quando l'utente rilascia, lo scorrimento riprende
  const handleMouseUp = () => {
    setIsPaused(false);
  };

  // Gestisce l'uscita del mouse dall'area anche se il pulsante è ancora premuto
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Per il touch su mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  // Aggiungiamo effetto per gestire la pausa dell'animazione
  useEffect(() => {
    const tickerContent = tickerContentRef.current;
    if (tickerContent) {
      if (isPaused) {
        // Salva la posizione attuale dello scorrimento
        const computedStyle = window.getComputedStyle(tickerContent);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);
        tickerContent.style.transform = `translateX(${matrix.m41}px)`;
        tickerContent.style.animationPlayState = 'paused';
      } else {
        // Riprende l'animazione
        tickerContent.style.animationPlayState = 'running';
        // Dopo un breve delay, rimuovi lo style inline per ripristinare l'animazione CSS
        setTimeout(() => {
          if (tickerContent) {
            tickerContent.style.transform = '';
          }
        }, 50);
      }
    }
  }, [isPaused]);

  return (
    <section id="partners" className="py-12 w-full bg-black">
      <div className="section-container">
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
              animation: "marquee 45s linear infinite", // Durata leggermente ridotta (era 40s)
              width: "max-content"
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div 
                key={`logo-${index}`}
                className="logo-container bg-white p-4 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  width: '200px',
                  height: '100px',
                  margin: '0 15px'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stile per animazione */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          
          .logo-container:hover img {
            filter: grayscale(0);
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

export default LogoTicker;
