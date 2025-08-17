import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import LogoTicker from '../components/LogoTicker';

declare global {
  interface Window {
    openFullscreen: (imageIndex: number) => void;
  }
}

function AgenteReportistica() {
  useEffect(() => {
    let currentImageIndex = 1;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Funzione per aprire fullscreen
    window.openFullscreen = (imageIndex: number) => {
      currentImageIndex = imageIndex;
      const fullscreenDiv = document.getElementById('fullscreen-modal');
      const fullscreenImg = document.getElementById('fullscreen-img') as HTMLImageElement;
      
      // Aggiorna l'immagine mostrata
      if (imageIndex === 1) {
        if (fullscreenImg) {
          fullscreenImg.src = '/assets/home_images/dashboard1.png';
          fullscreenImg.alt = 'Dashboard Statistiche Generali';
        }
      } else {
        if (fullscreenImg) {
          fullscreenImg.src = '/assets/home_images/dashboard2.png';
          fullscreenImg.alt = 'Dashboard Statistiche Dipendenti';
        }
      }
      
      if (fullscreenDiv) {
        fullscreenDiv.classList.remove('hidden');
      }
      document.body.style.overflow = 'hidden';
    };
    
    // Funzione per chiudere fullscreen
    const closeFullscreen = () => {
      const fullscreenDiv = document.getElementById('fullscreen-modal');
      if (fullscreenDiv) {
        fullscreenDiv.classList.add('hidden');
      }
      document.body.style.overflow = 'auto';
    };
    
    // Funzione per cambiare immagine nel fullscreen
    const changeFullscreenImage = (direction: 'next' | 'prev') => {
      const fullscreenImg = document.getElementById('fullscreen-img') as HTMLImageElement;
      
      if (direction === 'next' && currentImageIndex === 1) {
        currentImageIndex = 2;
        if (fullscreenImg) {
          fullscreenImg.src = '/assets/home_images/dashboard2.png';
          fullscreenImg.alt = 'Dashboard Statistiche Dipendenti';
        }
      } else if (direction === 'prev' && currentImageIndex === 2) {
        currentImageIndex = 1;
        if (fullscreenImg) {
          fullscreenImg.src = '/assets/home_images/dashboard1.png';
          fullscreenImg.alt = 'Dashboard Statistiche Generali';
        }
      }
    };
    
    // Eventi touch per swipe
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - immagine successiva
        changeFullscreenImage('next');
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - immagine precedente
        changeFullscreenImage('prev');
      }
    };
    
    // Event listeners
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenImg = document.getElementById('fullscreen-img');
    
    if (fullscreenModal) {
      fullscreenModal.addEventListener('click', closeFullscreen);
      
      if (fullscreenImg) {
        fullscreenImg.addEventListener('click', (e) => e.stopPropagation());
        fullscreenImg.addEventListener('touchstart', handleTouchStart, { passive: true });
        fullscreenImg.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
    }
    
    // Cleanup
    return () => {
      if (fullscreenModal) {
        fullscreenModal.removeEventListener('click', closeFullscreen);
        
        if (fullscreenImg) {
          fullscreenImg.removeEventListener('click', (e) => e.stopPropagation());
          fullscreenImg.removeEventListener('touchstart', handleTouchStart);
          fullscreenImg.removeEventListener('touchend', handleTouchEnd);
        }
      }
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Prisma: L'Agente di Rendicontazione | Martes AI</title>
        <meta name="description" content="Automatizza la rendicontazione del tuo team con Prisma, il nostro agente AI pronto all'uso. Risparmia tempo e aumenta l'accuratezza dei report." />
        <meta name="keywords" content="prisma, agente rendicontazione, automazione report, gestione personale, AI business, report automatici" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Prisma: L'Agente di Rendicontazione | Martes AI" />
        <meta property="og:description" content="Automatizza la rendicontazione del tuo team con Prisma, il nostro agente AI pronto all'uso." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martes.ai/agente-reportistica" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prisma: L'Agente di Rendicontazione | Martes AI" />
        <meta name="twitter:description" content="Automatizza la rendicontazione del tuo team con Prisma, il nostro agente AI." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://martes.ai/agente-reportistica" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Prisma: L'Agente di Rendicontazione",
            "description": "Agente AI per automazione rendicontazione del personale",
            "brand": {
              "@type": "Brand",
              "name": "Martes AI"
            },
            "offers": {
              "@type": "Offer",
              "description": "Soluzione ready-to-go per rendicontazione automatica"
            }
          })}
        </script>
      </Helmet>

      {/* Header Principale + Box Content */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              <span className="italic text-emerald-400">Prisma</span>: 
              <br className="block sm:hidden" />
              L'Agente di{' '}
              <br className="block sm:hidden" />
              <span className="text-white relative">
                Rendicontazione
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
            </h1>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-emerald-400/30 shadow-xl group">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                {/* Contenuto Sinistro */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight lg:whitespace-nowrap">
                    <span className="block">L'Agente AI che Gestisce</span>
                    <span className="block">Tutto il Tuo Personale</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                    Prisma analizza vocali e immagini, contatta su WhatsApp e genera report strutturati
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
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative group">
                    <img
                      src="/assets/home_images/BOX3_Report.png"
                      alt="Agente Reportistica Ready-to-Go - Cubo 3D"
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

      {/* Come Funziona Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Come Funziona
            </h2>
          </div>

                    {/* Sezione Steps con immagine telefono centrale */}
          <div className="max-w-6xl mx-auto">
            {/* Layout Mobile - Rimane uguale */}
            <div className="grid grid-cols-1 lg:hidden gap-8 items-center">
              {/* Logo e Step a sinistra (prima colonna) */}
              <div className="space-y-6 order-3">
                {/* LOGO1 */}
                <div className="flex items-center gap-4 p-4 bg-mint-100/90 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      A fine giornata, l'agent contatta il personale su WhatsApp
                    </h4>
                  </div>
                </div>

                {/* LOGO2 */}
                <div className="flex items-center gap-4 p-4 bg-mint-100/90 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Fa Follow up a chi non risponde
                    </h4>
              </div>
            </div>

                {/* LOGO3 */}
                <div className="flex items-center gap-4 p-4 bg-mint-100/90 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Analizza molteplici messaggi in ingresso e può mandare più messaggi in uscita, proprio come un umano
                    </h4>
                  </div>
                </div>

                {/* LOGO4 */}
                <div className="flex items-center gap-4 p-4 bg-mint-100/90 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Analizza messaggi vocali e immagini
                    </h4>
              </div>
            </div>

                {/* LOGO5 */}
                <div className="flex items-center gap-4 p-4 bg-mint-100/90 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Salva tutte le informazioni sul tuo gestionale e/o database
                    </h4>
                  </div>
                </div>
              </div>

              {/* Immagine telefono centrale mobile */}
              <div className="flex justify-center order-1">
                <div className="relative">
                  <img
                    src="/assets/home_images/SCREEN_CONVERSAZIONE_TELEFONO.png"
                    alt="Screenshot conversazione telefono"
                    className="w-72 h-[432px] sm:w-80 sm:h-[480px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Sottotitolo dopo iPhone mobile */}
              <div className="text-center order-2 mt-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  La <span className="text-emerald-400">Nuova Era</span> della Rendicontazione Intelligente
                </h3>
              </div>
            </div>

            {/* Layout Desktop - Nuovo */}
            <div className="hidden lg:block">
              {/* iPhone centrale */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src="/assets/home_images/SCREEN_CONVERSAZIONE_TELEFONO.png"
                    alt="Screenshot conversazione telefono"
                    className="w-96 h-[576px] lg:w-[480px] lg:h-[720px] object-cover rounded-2xl shadow-2xl"
                  />
              </div>
            </div>

            {/* Sottotitolo dopo iPhone desktop */}
            <div className="text-center mb-12 mt-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                La <span className="text-emerald-400">Nuova Era</span> della Rendicontazione Intelligente
              </h3>
            </div>

              {/* Grid 5 quadrati desktop: 3+2 */}
              <div className="space-y-8">
                {/* Prima fila - 3 quadrati */}
                <div className="grid grid-cols-3 gap-6">
                  {/* LOGO1 */}
                  <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                      <h4 className="font-black text-gray-800 text-lg mb-3">
                        Contatto automatico
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A fine giornata, l'agent contatta il personale su WhatsApp
                </p>
              </div>
            </div>

                  {/* LOGO2 */}
                  <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                      </div>
                      <h4 className="font-black text-gray-800 text-lg mb-3">
                        Follow-up intelligente
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Fa Follow up a chi non risponde
                      </p>
          </div>
        </div>

                  {/* LOGO3 */}
                  <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
                      <h4 className="font-black text-gray-800 text-lg mb-3">
                        Conversazione naturale
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Analizza molteplici messaggi e risponde come un umano
                      </p>
                    </div>
                  </div>
            </div>

                {/* Seconda fila - 2 quadrati centrati */}
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* LOGO4 */}
                  <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
                      <h4 className="font-black text-gray-800 text-lg mb-3">
                        Analisi multimediale
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Analizza messaggi vocali e immagini
                      </p>
                    </div>
            </div>

                  {/* LOGO5 */}
                  <div className="bg-mint-100/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
                      <h4 className="font-black text-gray-800 text-lg mb-3">
                        Integrazione dati
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Salva tutte le informazioni sul tuo gestionale e/o database
              </p>
            </div>
          </div>
        </div>
              </div>
            </div>



            {/* Call to Action centrale */}
            <div className="text-center mt-8 sm:mt-12">
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
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Controlla tutto da{' '}
              <span className="italic font-black text-emerald-400">un'unica</span>{' '}
              <span className="italic font-black text-emerald-400">dashboard</span>
            </h3>
          </div>

          {/* Dashboard Preview con Carosello */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-mint-100/90 backdrop-blur-sm rounded-3xl p-1 sm:p-2 md:p-8 lg:p-12 border border-emerald-400/30 shadow-xl">
              <div className="relative">
                {/* Container immagini dashboard */}
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div id="dashboard-carousel" className="flex transition-transform duration-500 ease-in-out">
                    {/* Dashboard 1 */}
                    <div className="w-full flex-shrink-0">
                      <img
                        id="dashboard-img-1"
                        src="/assets/home_images/dashboard1.png"
                        alt="Dashboard Statistiche Generali"
                        className="w-full h-auto object-contain rounded-xl cursor-pointer md:cursor-default"
                        style={{ 
                          minHeight: window.innerWidth < 768 ? '240px' : '400px', 
                          maxHeight: window.innerWidth < 768 ? '50vh' : '80vh'
                        }}
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            window.openFullscreen(1);
                          }
                        }}
                      />
                    </div>
                    {/* Dashboard 2 */}
                    <div className="w-full flex-shrink-0">
                      <img
                        id="dashboard-img-2"
                        src="/assets/home_images/dashboard2.png"
                        alt="Dashboard Statistiche Dipendenti"
                        className="w-full h-auto object-contain rounded-xl cursor-pointer md:cursor-default"
                        style={{ 
                          minHeight: window.innerWidth < 768 ? '240px' : '400px', 
                          maxHeight: window.innerWidth < 768 ? '50vh' : '80vh'
                        }}
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            window.openFullscreen(2);
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Freccia Sinistra */}
                  <button
                    id="prev-btn"
                    className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-emerald-600/90 text-white p-2 md:p-4 lg:p-5 rounded-full transition-all duration-300 opacity-0 md:hover:scale-110 z-10 shadow-lg"
                    onClick={() => {
                      const carousel = document.getElementById('dashboard-carousel') as HTMLElement;
                      const prevBtn = document.getElementById('prev-btn') as HTMLElement;
                      const nextBtn = document.getElementById('next-btn') as HTMLElement;
                      const indicator1 = document.getElementById('indicator-1') as HTMLElement;
                      const indicator2 = document.getElementById('indicator-2') as HTMLElement;
                      if (carousel) carousel.style.transform = 'translateX(0%)';
                      if (prevBtn) prevBtn.style.opacity = '0';
                      if (nextBtn) nextBtn.style.opacity = '1';
                      if (indicator1) {
                        indicator1.classList.add('bg-emerald-400');
                        indicator1.classList.remove('bg-gray-300');
                      }
                      if (indicator2) {
                        indicator2.classList.add('bg-gray-300');
                        indicator2.classList.remove('bg-emerald-400');
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Freccia Destra */}
                  <button
                    id="next-btn"
                    className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-emerald-600/90 text-white p-2 md:p-4 lg:p-5 rounded-full transition-all duration-300 opacity-100 md:hover:scale-110 z-10 shadow-lg"
                    onClick={() => {
                      const carousel = document.getElementById('dashboard-carousel') as HTMLElement;
                      const prevBtn = document.getElementById('prev-btn') as HTMLElement;
                      const nextBtn = document.getElementById('next-btn') as HTMLElement;
                      const indicator1 = document.getElementById('indicator-1') as HTMLElement;
                      const indicator2 = document.getElementById('indicator-2') as HTMLElement;
                      if (carousel) carousel.style.transform = 'translateX(-100%)';
                      if (prevBtn) prevBtn.style.opacity = '1';
                      if (nextBtn) nextBtn.style.opacity = '0';
                      if (indicator1) {
                        indicator1.classList.add('bg-gray-300');
                        indicator1.classList.remove('bg-emerald-400');
                      }
                      if (indicator2) {
                        indicator2.classList.add('bg-emerald-400');
                        indicator2.classList.remove('bg-gray-300');
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                
                {/* Indicatori */}
                <div className="flex justify-center mt-4 md:mt-8 space-x-3">
                  <div id="indicator-1" className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"></div>
                  <div id="indicator-2" className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Fullscreen per iPhone */}
      <div 
        id="fullscreen-modal" 
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center hidden md:hidden"
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            id="fullscreen-img"
            src=""
            alt=""
            className="max-w-full max-h-full object-contain"
          />
          
          {/* Indicatore di swipe */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-white text-sm opacity-70 text-center">
              <p>Scorri a sinistra/destra per cambiare immagine</p>
              <p>Tocca fuori per chiudere</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgenteReportistica;
