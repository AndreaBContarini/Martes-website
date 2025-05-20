import { MessageSquare, Brain, Zap } from 'lucide-react';

function ServicesSection() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          I Nostri Servizi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Agenti AI */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-[#274f36]/30 hover:border-[#274f36] transition-all duration-500 group hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#274f36]/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#274f36]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#274f36]/30 transition-all duration-500">
                <MessageSquare className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Agenti AI</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <span>Supporto clienti 24/7 multilingue</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Gestione automatizzata appuntamenti</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Consigli personalizzati per utenti</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Automazioni AI su Misura */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-[#274f36]/30 hover:border-[#274f36] transition-all duration-500 group hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#274f36]/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#274f36]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#274f36]/30 transition-all duration-500">
                <Brain className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Automazioni AI su Misura</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <span>GPT personalizzati</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Automazione email e newsletter</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Lead generation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lead Generation */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-[#274f36]/30 hover:border-[#274f36] transition-all duration-500 group hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#274f36]/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#274f36]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#274f36]/30 transition-all duration-500">
                <Zap className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Consulenza Strategica</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center justify-center space-x-2">
                  <span>Business breakdown</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Sviluppo di strategie AI mirate</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <span>Identificazione di casi d'uso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 