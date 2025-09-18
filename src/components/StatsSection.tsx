import React from 'react';

function StatsSection() {
  return (
    <section className="py-20 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Elementi geometrici di sfondo per effetto dinamico */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Box 1: Aziende */}
          <div className="text-center group cursor-pointer">
            <div className="text-5xl md:text-6xl font-black text-white mb-4 transition-all duration-500 group-hover:text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-lg">
              30+
            </div>
            <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-emerald-300"></div>
            <p className="text-gray-300 text-lg font-medium transition-all duration-500 group-hover:text-white">
              Aziende che si fidano di noi
            </p>
          </div>

          {/* Box 2: Soluzioni */}
          <div className="text-center group cursor-pointer">
            <div className="text-5xl md:text-6xl font-black text-white mb-4 transition-all duration-500 group-hover:text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-lg">
              45+
            </div>
            <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-emerald-300"></div>
            <p className="text-gray-300 text-lg font-medium transition-all duration-500 group-hover:text-white">
              Soluzioni sviluppate
            </p>
          </div>

          {/* Box 3: Professionisti */}
          <div className="text-center group cursor-pointer relative">
            <div className="text-5xl md:text-6xl font-black text-white mb-4 transition-all duration-500 group-hover:text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-lg">
              1.2M+
            </div>
            <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-emerald-300"></div>
            <p className="text-gray-300 text-lg font-medium transition-all duration-500 group-hover:text-white">
              Professionisti raggiunti
            </p>
            
            {/* Link allineato alla descrizione */}
            <div className="mt-8">
              <a
                href="https://www.youtube.com/@riccardobellicontarini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 text-lg font-bold transition-all duration-500 group hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-emerald-400/25 cursor-pointer"
              >
                <span className="group-hover:scale-105 transition-transform duration-500">
                  Guarda i nostri contenuti
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-lg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection; 