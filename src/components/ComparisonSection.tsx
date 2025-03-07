import React from 'react';

function ComparisonSection() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Evoluzione a Confronto
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Box Metodo Tradizionale */}
          <div className="flex-1 bg-black/30 p-8 rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl font-semibold text-red-400 mb-6 group-hover:scale-105 transition-transform">
              Metodo tradizionale
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                <span>Attività ripetitive, elaborazioni lunghe e manuali</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                <span>Scalabilità limitata per attività periodiche</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                <span>Lunghe attese, risposte tardive e automatiche</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                <span>Costi operativi elevati e scarsa efficienza</span>
              </li>
            </ul>
          </div>

          {/* Box Metodo Martes AI */}
          <div className="flex-1 bg-[#274f36]/30 p-8 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 group">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
              Metodo Martes AI
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                <span>Workflow automatizzati e basati su AI</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                <span>Soluzioni scalabili per grandi volumi di dati</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                <span>Disponibilità immediata 24/7, risposte "intelligenti"</span>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                <span>Ottimizzazione dei costi e maggiore produttività</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection; 