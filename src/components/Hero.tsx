import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import LogoTicker from './LogoTicker';

function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 w-screen z-0">
          {/* Gradient base layer */}
          <div className="absolute inset-0 w-full bg-gradient-to-br from-black via-[#1a3524] to-black animate-gradient-xy"></div>
          
          {/* Animated overlay */}
          <div className="absolute inset-0 w-full opacity-30">
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_50%_50%,_#274f36_0%,_transparent_50%)] animate-pulse-slow"></div>
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_80%_20%,_#1a3524_0%,_transparent_40%)] animate-pulse-slow-2"></div>
            <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_20%_80%,_#274f36_0%,_transparent_40%)] animate-pulse-slow-3"></div>
          </div>
          
          {/* Particle effect */}
          <div className="particles-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--duration': `${15 + Math.random() * 30}s`,
                  '--delay': `${-Math.random() * 20}s`,
                  '--x-offset': `${-200 + Math.random() * 400}px`,
                  '--y-offset': `${-200 + Math.random() * 400}px`,
                  '--x-offset-alt': `${-200 + Math.random() * 400}px`,
                  '--y-offset-alt': `${-200 + Math.random() * 400}px`,
                  '--x-offset-final': `${-100 + Math.random() * 200}px`,
                  '--y-offset-final': `${-100 + Math.random() * 200}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 reveal-text">
              Automazioni AI
              <br />
              <span className="bg-gradient-to-r from-[#274f36] to-emerald-400 text-transparent bg-clip-text">
                su misura per te
              </span>
            </h1>

            <h2 className="text-lg md:text-xl mb-8 opacity-90">
              Trasforma il tuo business con
              <span className="relative mx-2 inline-block">
                <span className="relative z-10">soluzioni AI personalizzate</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#274f36]/40 blur-sm"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#274f36]"></span>
              </span>
              <br />
              Martes AI è il tuo partner per l'innovazione digitale
            </h2>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 mb-12">
              <a 
                href="https://calendly.com/riccardobcontarini/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#274f36] hover:bg-[#1a3524] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#274f36]/20 transform hover:-translate-y-1"
              >
                Prenota una chiamata
              </a>
              <button 
                onClick={scrollToForm}
                className="border-2 border-[#274f36] text-white hover:bg-[#274f36] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#274f36]/20 transform hover:-translate-y-1"
              >
                Parlaci della tua idea
              </button>
            </div>

            <button 
              onClick={scrollToForm}
              className="animate-bounce mt-4 text-[#274f36] hover:text-white transition-colors duration-300"
              aria-label="Scroll to form"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </header>
      <LogoTicker />
    </>
  );
}

export default Hero;