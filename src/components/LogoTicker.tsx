import { useState, useRef, useEffect } from 'react';

const logos = [
  {
    src: "/assets/logos/winesuite_logo.png",
    alt: "WineSuite"
  },
  {
    src: "/assets/logos/fantozzi.png",
    alt: "Fantozzi & Associati"
  },
  {
    src: "/assets/logos/rest.png",
    alt: "Restworld"
  },
  {
    src: "/assets/logos/monni_SRL.png",
    alt: "Monni SRL"
  },
  {
    src: "/assets/logos/bluvacanze_logo.png",
    alt: "Bluvacanze"
  },
  {
    src: "/assets/logos/clinica_santa_lucia.png",
    alt: "Clinica Oculistica Santa Lucia"
  },
  {
    src: "/assets/logos/gsp_logo.png",
    alt: "GSP"
  },
  {
    src: "/assets/logos/shapeup.png",
    alt: "Shape-Up"
  },
  {
    src: "/assets/logos/digitalturnover.png",
    alt: "Digital Turnover"
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
    src: "/assets/logos/viaggi_carmen.png",
    alt: "Viaggi Carmen"
  }
];

function LogoTicker() {
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
    <section id="partners" className="py-8 pb-12 sm:py-8 md:py-10 lg:py-12 w-full bg-black">
      <div className="section-container">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Sei in ottima compagnia</h3>
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
              animation: "marquee 45s linear infinite",
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
          @keyframes marquee {
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

export default LogoTicker;
