import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      } else {
        try {
          const savedPreferences = JSON.parse(consent);
          if (typeof savedPreferences === 'object') {
            setPreferences(prev => ({ ...prev, ...savedPreferences }));
          }
        } catch (e) {
          setShowBanner(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const savePreferences = (newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    localStorage.setItem('cookieConsent', JSON.stringify(newPrefs));
    
    // Update GTM/GA consent if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': newPrefs.analytics ? 'granted' : 'denied',
        'ad_storage': newPrefs.marketing ? 'granted' : 'denied',
        'functionality_storage': newPrefs.functional ? 'granted' : 'denied'
      });
    }
    
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-5xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {!showCustomize ? (
            <div className="p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Informativa sui Cookie 🍪</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Utilizziamo cookie per migliorare la tua esperienza. Alcuni sono essenziali, altri ci aiutano a capire come usi il sito.
                  Puoi gestire le tue preferenze o leggere la nostra <Link to="/cookies" className="text-martes-green hover:underline">Cookie Policy</Link>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center w-full lg:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold"
                >
                  Rifiuta
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold flex items-center gap-2"
                >
                  <Settings size={16} /> Personalizza
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-xl bg-martes-green text-black hover:bg-white transition-colors text-sm font-bold shadow-lg shadow-martes-green/20"
                >
                  Accetta Tutti
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold">Impostazioni Cookie</h3>
                  <button onClick={() => setShowCustomize(false)} className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
                      <X size={20} />
                  </button>
               </div>
               
               <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                          <span className="font-bold flex items-center gap-2"><Check size={16} className="text-martes-green" /> Essenziali</span>
                          <span className="text-[10px] uppercase tracking-wider bg-martes-green/20 text-martes-green px-2 py-1 rounded-full">Sempre Attivi</span>
                      </div>
                      <p className="text-xs text-neutral-400">Necessari per il funzionamento del sito.</p>
                  </div>

                  {['analytics', 'marketing', 'functional'].map((type) => (
                      <div key={type} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start justify-between gap-4">
                          <div>
                            <div className="font-bold capitalize mb-2">{type}</div>
                             <p className="text-xs text-neutral-400">
                                {type === 'analytics' && 'Permettono di analizzare l\'uso del sito.'}
                                {type === 'marketing' && 'Per mostrarti contenuti pertinenti.'}
                                {type === 'functional' && 'Per funzionalità avanzate.'}
                             </p>
                          </div>
                          <div 
                            onClick={() => setPreferences(prev => ({ ...prev, [type]: !prev[type as keyof CookiePreferences] }))}
                            className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${preferences[type as keyof CookiePreferences] ? 'bg-martes-green' : 'bg-neutral-700'}`}
                          >
                              <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences[type as keyof CookiePreferences] ? 'translate-x-[24px]' : 'translate-x-0'}`} />
                          </div>
                      </div>
                  ))}
               </div>

               <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                   <button onClick={handleRejectAll} className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors">Rifiuta Tutti</button>
                   <button onClick={() => savePreferences(preferences)} className="px-6 py-2 bg-martes-green text-black rounded-lg font-bold hover:bg-white transition-colors">Salva Preferenze</button>
               </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Add global definition for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}
