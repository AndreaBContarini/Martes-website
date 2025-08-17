

function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 w-full bg-black" data-section="services">
      <div className="container mx-auto px-4">
        {/* Titolo sezione servizi - più elegante e vicino alle card */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">
            I NOSTRI SERVIZI
        </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Soluzioni Custom */}
          <div className="bg-mint-100/90 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/30 hover:border-emerald-400 transition-all duration-500 group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 flex flex-col cursor-pointer">
            <div className="flex flex-col items-center text-center flex-grow">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                <img 
                  src="/assets/home_images/BOX1_Custom.png" 
                  alt="Soluzioni Custom" 
                  className="w-56 h-56 object-contain"
                />
              </div>
              <h3 className="text-xl font-black mb-4 text-gray-800 uppercase tracking-wider group-hover:text-emerald-700 transition-colors duration-300">
                Soluzioni Custom
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Sviluppiamo Agenti AI custom e automazioni AI personalizzate
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                <a 
                  href="https://cal.com/martesai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex-1 text-center shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-0.5 transform hover:scale-105 border border-emerald-300/30"
                >
                  Prenota call
                </a>
                <a 
                  href="/soluzioni-custom"
                  className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 text-center"
                >
                  Scopri di più
                </a>
              </div>
            </div>
          </div>

                        {/* Card 2: Formazione Aziendale */}
              <div className="bg-mint-100/90 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/30 hover:border-emerald-400 transition-all duration-500 group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 flex flex-col cursor-pointer">
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <img 
                      src="/assets/home_images/BOX2_Formazione.png" 
                      alt="Formazione Aziendale" 
                      className="w-56 h-56 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-gray-800 uppercase tracking-wider group-hover:text-emerald-700 transition-colors duration-300">
                    Formazione Aziendale
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Potenzia il tuo team con formazione AI personalizzata e percorsi mirati
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                    <a 
                      href="https://cal.com/martesai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex-1 text-center shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-0.5 transform hover:scale-105 border border-emerald-300/30"
                    >
                      Prenota call
                    </a>
                    <a 
                      href="/formazione-aziendale"
                      className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 text-center"
                    >
                      Scopri di più
                    </a>
                  </div>
                </div>
              </div>

          {/* Card 3: Agente Reportistica Ready-to-Go */}
          <div className="bg-mint-100/90 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/30 hover:border-emerald-400 transition-all duration-500 group hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/30 flex flex-col cursor-pointer">
            <div className="flex flex-col items-center text-center flex-grow">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                <img 
                  src="/assets/home_images/BOX3_Report.png" 
                  alt="Agente Reportistica Ready-to-Go" 
                  className="w-56 h-56 object-contain"
                />
            </div>
              <h3 className="text-lg sm:text-xl font-black mb-4 text-gray-800 uppercase tracking-wider group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                <span className="block whitespace-nowrap">Agente Rendicontazione</span>
                <span className="block">Ready-to-Go</span>
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Scopri Prisma, uno dei nostri agenti già pronti per la rendicontazione automatica del tuo personale
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                <a 
                  href="https://cal.com/martesai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex-1 text-center shadow-lg hover:shadow-xl hover:shadow-emerald-400/25 hover:-translate-y-0.5 transform hover:scale-105 border border-emerald-300/30"
                >
                  Prenota call
                </a>
                <a 
                  href="/agente-reportistica"
                  className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 text-center"
                >
                  Scopri di più
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 