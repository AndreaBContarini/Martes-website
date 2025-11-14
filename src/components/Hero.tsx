import React from 'react';

function Hero() {

  return (
    <>
      <header className="min-h-[75vh] sm:min-h-[70vh] md:min-h-[65vh] lg:min-h-[68vh] w-full flex items-center justify-center relative overflow-hidden">
        {/* Elegant Modern Background */}
        <div className="absolute inset-0 w-screen z-0">
          {/* Primary gradient base */}
          <div className="absolute inset-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          
          {/* Emerald geometric patterns */}
          <div className="absolute inset-0 w-full opacity-20">
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_30%_20%,_rgba(16,185,129,0.4)_0%,_transparent_50%)] animate-pulse-slow"></div>
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_80%_60%,_rgba(52,211,153,0.3)_0%,_transparent_40%)] animate-pulse-slow-2"></div>
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_20%_80%,_rgba(110,231,183,0.2)_0%,_transparent_45%)] animate-pulse-slow-3"></div>
          </div>
          
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 w-full opacity-30">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/20 to-transparent animate-mesh-1"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-400/15 to-transparent animate-mesh-2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-600/10 to-transparent animate-mesh-3"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-300/20 to-transparent animate-mesh-4"></div>
          </div>
          
          {/* Floating geometric shapes with dynamic movement */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => {
              const size = 80 + Math.random() * 120; // Dimensioni variabili da 80px a 200px
              const animationType = ['animate-drift', 'animate-orbit', 'animate-spiral', 'animate-wave'][i % 4];
              
              return (
                <div
                  key={i}
                  className={`absolute ${animationType} opacity-15`}
                  style={{
                    left: `${Math.random() * 120 - 10}%`, // Da -10% a 110% per uscire dai bordi
                    top: `${Math.random() * 120 - 10}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${25 + Math.random() * 20}s`,
                  } as React.CSSProperties}
                >
                  <div 
                    className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-3xl blur-sm shadow-2xl shadow-emerald-500/20"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30%' : '15%',
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          
          {/* Additional micro particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-micro opacity-5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${30 + Math.random() * 15}s`,
                } as React.CSSProperties}
              >
                <div 
                  className="w-4 h-4 bg-emerald-400 rounded-full blur-[1px]"
                  style={{
                    transform: `scale(${0.5 + Math.random() * 1})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto text-center relative z-10 px-4 pt-4 sm:pt-8 md:pt-12 lg:pt-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 sm:mb-4 md:mb-6 lg:mb-8 reveal-text">
              Il tuo{' '}
              <span className="inline-block mx-2" style={{
                background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                partner AI
              </span>
              <br className="block sm:hidden" />
              <span className="hidden sm:inline"> </span>
              a 360°
            </h1>

            <h2 className="text-lg md:text-xl mb-8 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 opacity-90">
              Progettiamo 
              <span className="relative mx-2 inline-block">
                <span className="relative z-10">soluzioni su misura</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-emerald-400/40 blur-sm"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400"></span>
              </span>
              e 
              <span className="relative mx-2 inline-block">
                <span className="relative z-10">formiamo il tuo team</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-emerald-400/40 blur-sm"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400"></span>
              </span>
              sull'AI
            </h2>

            <div className="flex justify-center mb-6 sm:mb-4 md:mb-6">
              <button 
                onClick={() => {
                  const servicesSection = document.querySelector('[data-section="services"]');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-emerald-400 hover:bg-emerald-500 text-black px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full text-base sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 transform hover:-translate-y-1"
              >
                Le nostre soluzioni
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;