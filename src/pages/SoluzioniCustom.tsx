import React from 'react';
import { Helmet } from 'react-helmet-async';
import LogoTicker from '../components/LogoTicker';

function SoluzioniCustom() {
  return (
    <>
      <Helmet>
        <title>Soluzioni Custom AI | Martes AI</title>
        <meta name="description" content="Progetta Sistemi Agentici su misura, Workflow Intelligenti e Soluzioni Enterprise. Crea l'AI del Domani, Oggi con Martes AI." />
        <meta name="keywords" content="soluzioni AI custom, sistemi agentici, workflow intelligenti, enterprise AI, automazioni personalizzate" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Soluzioni Custom AI | Martes AI" />
        <meta property="og:description" content="Progetta Sistemi Agentici su misura, Workflow Intelligenti e Soluzioni Enterprise. Crea l'AI del Domani, Oggi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martes-ai.com/soluzioni-custom" />
        <meta property="og:image" content="https://www.martes-ai.com/logo-martes.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soluzioni Custom AI | Martes AI" />
        <meta name="twitter:description" content="Progetta Sistemi Agentici Custom, Workflow Intelligenti e Soluzioni Enterprise." />
        <meta name="twitter:image" content="https://www.martes-ai.com/logo-martes.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-martes.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.martes-ai.com/soluzioni-custom" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Soluzioni Custom AI",
            "description": "Progetta Sistemi Agentici su misura, Workflow Intelligenti e Soluzioni Enterprise",
            "provider": {
              "@type": "Organization",
              "name": "Martes AI"
            },
            "offers": {
              "@type": "Offer",
              "description": "Consulenza AI e Implementazione AI personalizzate"
            }
          })}
        </script>
      </Helmet>

      {/* Header Principale + Box Content */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Soluzioni <span className="text-white relative">
                Custom
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
            </h1>
          </div>
                  <div className="max-w-6xl mx-auto">
            <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-emerald-400/30 shadow-xl group">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
                {/* Contenuto Sinistro */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight lg:whitespace-nowrap">
                    Crea l'AI del Domani, Oggi
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                    Progetta Sistemi Agentici su misura, Workflow Intelligenti e Soluzioni Enterprise.
                  </p>
                  <a 
                    href="https://cal.com/martesai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-0.5 transform hover:scale-105 border border-emerald-300/30 group-hover:scale-110"
                  >
                    Prenota una call
                  </a>
                </div>

                {/* Contenuto Destro - Immagine cubo 3D */}
                <div className="flex-1 flex justify-center lg:justify-end group-hover:scale-110 transition-transform duration-500 ease-out">
                  <img
                    src="/assets/home_images/BOX1_Custom.png"
                    alt="Soluzioni Custom AI - Cubo 3D"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Partnership Section */}
      <section className="py-3 sm:py-4 md:py-6 lg:py-8 w-full bg-black/20">
        <div className="container mx-auto px-4">
          <LogoTicker />
        </div>
      </section>

      {/* Call-to-Action Casi Studio */}
      <section className="py-3 sm:py-4 md:py-6 lg:py-8 w-full bg-gradient-to-br from-emerald-900/20 via-black/40 to-emerald-800/20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-emerald-500/5 animate-pulse-slow"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-emerald-500/10 rounded-full animate-float-slow animation-delay-1000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto py-1 sm:py-2 md:py-4 lg:py-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight tracking-tight px-2 sm:px-4">
              Come abbiamo{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
                  trasformato
                </span>
                {/* Effetto di shading/glow dietro "trasformato" */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 blur-xl -z-10 transform scale-110"></div>
              </span>
              <br />
              queste aziende
            </h3>
            <a 
              href="/casi-studio"
              className="group relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-emerald-400/30 border-2 border-emerald-300/50 overflow-hidden w-auto"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/20 to-emerald-400/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Casi Studio
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="py-3 sm:py-4 md:py-6 lg:py-8 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
            <div className="overflow-visible px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                Diventa un'Azienda{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg italic">
                    AI-First.
                  </span>
                  {/* Effetto di shading/glow dietro "AI-First" */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 blur-xl -z-10 transform scale-110"></div>
                </span>
              </h2>
            </div>
          </div>

          {/* Due Card Servizi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {/* Card 1: Consulenza AI */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                {/* Icona Consulenza - Nuvoletta per scambio di idee */}
                <div className="mb-3 sm:mb-4 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                  Consulenza
                </h3>
                <p className="text-gray-600">


                  Mappiamo i processi della tua azienda per scoprire dove l'AI può fare la differenza
                </p>
              </div>
            </div>

            {/* Card 2: Implementazione AI */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                {/* Icona Implementazione - Code per development */}
                <div className="mb-3 sm:mb-4 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                  Implementazione AI
                </h3>
                <p className="text-gray-600">
                  Un team tech di esperti che rende reale ogni progetto AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Finale */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 w-full bg-black">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://cal.com/martesai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-8 sm:px-12 py-4 sm:py-6 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-1 transform hover:scale-105 border border-emerald-300/30 w-full sm:w-auto"
          >
            Prenota una call
          </a>
        </div>
      </section>
    </>
  );
}

export default SoluzioniCustom;
