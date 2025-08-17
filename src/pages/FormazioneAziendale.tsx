import React from 'react';
import { Helmet } from 'react-helmet-async';
import LogoTicker from '../components/LogoTicker';

function FormazioneAziendale() {
  return (
    <>
      <Helmet>
        <title>Formazione Aziendale AI | Martes AI</title>
        <meta name="description" content="Formazione AI pratica per aziende. Workshop dal vivo e online per preparare il tuo team alla rivoluzione AI. Corsi su Fondamenti AI, Prompt Engineering, Piattaforme No-Code e Sviluppo Agenti." />
        <meta name="keywords" content="formazione aziendale AI, workshop AI, corsi AI, prompt engineering, piattaforme no-code, agenti AI, automazioni" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Formazione Aziendale AI | Martes AI" />
        <meta property="og:description" content="Formazione AI pratica per restare competitivi e triplicare la produttività. Workshop dal vivo e online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martes.ai/formazione-aziendale" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Formazione Aziendale AI | Martes AI" />
        <meta name="twitter:description" content="Formazione AI pratica per aziende. Workshop dal vivo e online." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://martes.ai/formazione-aziendale" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Formazione Aziendale AI",
            "description": "Formazione AI pratica per aziende con workshop dal vivo e online",
            "provider": {
              "@type": "Organization",
              "name": "Martes AI"
            },
            "offers": {
              "@type": "Offer",
              "description": "Workshop AI, corsi Fondamenti AI, Prompt Engineering, Piattaforme No-Code"
            }
          })}
        </script>
      </Helmet>

      {/* Header Principale */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-0 sm:pb-4 md:pb-8 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              <span className="text-white relative">
                Formazione
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
              <br className="block md:hidden" />
              <span className="hidden md:inline"> </span>
              Aziendale
            </h1>
          </div>
        </div>
      </section>

      {/* Hero Section - Formazione AI Pratica */}
      <section className="py-0 w-full bg-gradient-to-br from-emerald-900/20 via-black/40 to-emerald-800/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-emerald-400/30 shadow-xl group">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                {/* Contenuto Sinistro */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight whitespace-nowrap">
                    Formazione AI Pratica
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                    Dimenticati dei corsi su ChatGPT: formazione AI concreta per restare competitivi e triplicare la produttività
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

                {/* Contenuto Destro - Immagine Box */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative group">
                    <img
                      src="/assets/home_images/BOX2_Formazione.png"
                      alt="Formazione Aziendale - Box 3D"
                      className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-emerald-400/20 blur-2xl rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Partnership Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 w-full bg-black/20">
        <div className="container mx-auto px-4">
          <LogoTicker />
        </div>
      </section>

      {/* Services Section - Workshop */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              Prepara il Tuo Team alla{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg italic">
                  Rivoluzione AI.
                </span>
                {/* Effetto di shading/glow dietro "Rivoluzione AI" */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 blur-xl -z-10 transform scale-110"></div>
              </span>
            </h2>
          </div>

          {/* Due Cards Workshop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
            {/* Card 1: Workshop dal vivo */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                {/* Icona Workshop dal vivo */}
                <div className="mb-3 sm:mb-4 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                  Workshop dal vivo
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Formazione su misura direttamente nella tua sede
                </p>
              </div>
            </div>

            {/* Card 2: Workshop Online */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                {/* Icona Workshop Online */}
                <div className="mb-3 sm:mb-4 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                  Workshop Online
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Formazione interattiva da remoto con sessioni pratiche
                </p>
              </div>
            </div>
          </div>

          {/* CTA Centrale */}
          <div className="text-center mb-8 sm:mb-12">
            <a 
              href="https://cal.com/martesai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-0.5 transform hover:scale-105 border border-emerald-300/30"
            >
              Prenota una call
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              I Nostri{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
                  Percorsi
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 blur-xl -z-10 transform scale-110"></div>
              </span>
            </h2>
          </div>

          {/* 4 Cards Servizi Dettagliati */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Card 1: Fondamenti AI */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    Fondamenti AI
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Cos'è l'Intelligenza Artificiale e come funziona – introduzione ai migliori tool</li>
                    <li>• Opportunità e applicazioni concrete nel business</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Prompt Engineering Avanzato */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    Prompt Engineering Avanzato
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Guida avanzata alla stesura di prompt perfetti per Workflow ed Agenti</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Piattaforme No-Code */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                  <img
                    src="/assets/home_images/n8n_stilizzato.png"
                    alt="n8n stilizzato"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    Piattaforme No-Code
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Corsi specializzati su Make, n8n e Voiceflow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: Sviluppo Agenti AI e Automazioni */}
            <div className="bg-mint-100/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-xl group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-500 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    Sviluppo Agenti AI e Automazioni
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Come progettare e implementare agenti AI e automazioni</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-black">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://cal.com/martesai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-1 transform hover:scale-105 border border-emerald-300/30"
          >
            Prenota una call
          </a>
        </div>
      </section>
    </>
  );
}

export default FormazioneAziendale;
