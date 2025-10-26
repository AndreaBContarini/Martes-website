import React from 'react';

function SloganSection() {
  return (
    <section className="py-16 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Elementi geometrici di sfondo per effetto dinamico */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          Non vendiamo AI.
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              Vendiamo
            </span>
            <span className="relative z-10 ml-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent italic font-extrabold drop-shadow-2xl shadow-emerald-400/50">
              Risultati.
            </span>
            {/* Effetto di shading/glow dietro "risultati" */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 blur-xl -z-10 transform scale-110"></div>
          </span>
        </h2>
      </div>
    </section>
  );
}

export default SloganSection; 