import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bluvacanze from '../../assets/clients/logo-bluvacanze.png';
import dolomitiStrade from '../../assets/clients/dolomiti-strade-logo.png';
import restWorld from '../../assets/clients/restworld.png';

const cases = [
  {
    id: 'bluvacanze',
    name: 'Bluvacanze',
    category: 'Riattivazione Database',
    challenge:
      'Un archivio di migliaia di contatti inattivi. Un vero tesoro commerciale, ma impossibile da gestire manualmente.',
    solution:
      'Un agente AI che avvia conversazioni proattive su WhatsApp, profila l\'utente e propone viaggi personalizzati.',
    result: '€82.271',
    resultLabel: 'Generati in un solo mese',
  },
  {
    id: 'dolomiti',
    name: 'Dolomiti Strade',
    category: 'Rendicontazione Automatica',
    challenge:
      'Rendicontazione dai cantieri lenta e caotica. Note vocali perse, fogli di carta e ritardi amministrativi.',
    solution:
      'È qui che è nato Prisma. L\'agente che trascrive messaggi vocali e foto dal cantiere direttamente nel gestionale.',
    results: [
      { value: '450h', label: 'Recuperate al mese' },
      { value: '12,5x', label: 'ROI' },
    ],
  },
  {
    id: 'restworld',
    name: 'Restworld',
    category: 'Agente Qualifica Lead',
    challenge:
      'Un flusso costante di lead non qualificati che rallentava il team commerciale, con tempi di risposta troppo lunghi.',
    solution:
      'Un filtro intelligente attivo 24/7. L\'Agente AI analizza le risposte e passa ai commerciali solo le opportunità concrete.',
    results: [
      { value: '€35k', label: 'Risparmio/Anno' },
      { value: '20%', label: 'Conversione Lead' },
    ],
  },
];

export const Cases = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cases" className="py-24 border-b border-white/5 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            Alcune storie di{' '}
            <span className="serif-italic text-green-400">Successo.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {cases.map((caseItem, index) => (
            <button
              key={caseItem.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full border transition-all hoverable ${
                activeTab === index
                  ? 'bg-white text-black border-white'
                  : 'border-white/10 text-neutral-600 hover:bg-white/10'
              }`}
            >
              {caseItem.name}
            </button>
          ))}
        </motion.div>

        {/* Active Case */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          }}
          className="spotlight-element rounded-3xl p-10 md:p-16 border border-white/5 bg-card-bg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
            <div>
              <div className="mb-8 h-52 flex items-center">
                {cases[activeTab].id === 'bluvacanze' && (
                  <img src={bluvacanze} alt={cases[activeTab].name} className="h-36 md:h-44 w-auto object-contain brightness-0 invert" />
                )}
                 {cases[activeTab].id === 'dolomiti' && (
                  <img src={dolomitiStrade} alt={cases[activeTab].name} className="h-44 md:h-52 w-auto object-contain brightness-0 invert" />
                )}
                 {cases[activeTab].id === 'restworld' && (
                  <img src={restWorld} alt={cases[activeTab].name} className="h-24 md:h-32 w-auto object-contain brightness-0 invert" />
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                    La Sfida
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    {cases[activeTab].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                    La Nostra Soluzione
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    {cases[activeTab].solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center h-full border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-16">
              {cases[activeTab].result ? (
                <>
                  <div className="text-6xl font-bold text-white mb-2 tracking-tighter">
                    {cases[activeTab].result}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
                    {cases[activeTab].resultLabel}
                  </div>
                </>
              ) : (
                <div className="space-y-10">
                  {cases[activeTab].results?.map((result, index) => (
                    <div key={index}>
                      <div className="text-6xl font-bold text-white mb-2 tracking-tighter">
                        {result.value}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            to="/casi-studio"
            className="hoverable inline-flex items-center gap-2 bg-martes-green text-black px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
          >
            Vedi altri casi studio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
