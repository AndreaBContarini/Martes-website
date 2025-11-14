import React from 'react';

function ValuePropositionSection() {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 w-full bg-gradient-to-br from-black/20 via-gray-900/20 to-black/20 relative overflow-hidden">
      {/* Elementi geometrici di sfondo per effetto dinamico */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Core Competencies - Due cerchi uniti */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <img
              src="/assets/home_images/DoubleCircles.png"
              alt="Development e Formazione - Le nostre competenze core"
              className="max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-auto w-full px-2 sm:px-6 md:px-8"
            />
          </div>

          {/* Descrizione Servizi con stile elegante */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white leading-relaxed">
              Trasformiamo la tua azienda con{' '}
              <br />
              AI e formazione
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection;