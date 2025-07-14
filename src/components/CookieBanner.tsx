import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Ritarda l'apparizione del banner di 1 secondo per migliorare l'esperienza utente
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      } else {
        try {
          // Recupera le preferenze salvate
          const savedPreferences = JSON.parse(consent);
          if (typeof savedPreferences === 'object') {
            setPreferences(prev => ({
              ...prev,
              ...savedPreferences
            }));
          }
        } catch (e) {
          // Se c'è un errore nel parsing, mostra il banner
          setShowBanner(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    
    // Attiva Google Analytics e altri script di tracciamento se necessario
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted'
      });
    }
    
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    
    // Disattiva Google Analytics e altri script di tracciamento
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied'
      });
    }
    
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    
    // Aggiorna le impostazioni di consenso per Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'functionality_storage': preferences.functional ? 'granted' : 'denied'
      });
    }
    
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md text-white p-6 z-50 border-t border-[#274f36]/30 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        {!showCustomize ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Informativa sui Cookie</h3>
              <p className="text-sm mb-3">
                Questo sito utilizza cookie tecnici necessari al funzionamento e cookie di terze parti per migliorare la tua esperienza. 
                I cookie essenziali sono sempre attivi, mentre puoi scegliere se accettare o meno gli altri tipi di cookie.
              </p>
              <p className="text-sm mb-2">
                Cliccando su "Accetta tutti", acconsenti all'uso di tutti i cookie. Cliccando su "Rifiuta tutti", verranno utilizzati solo i cookie essenziali.
                Puoi personalizzare le tue preferenze o trovare maggiori informazioni nella nostra{' '}
                <Link 
                  to="/cookies" 
                  className="text-[#274f36] hover:text-[#1a3524] font-medium underline"
                >
                  Cookie Policy
                </Link>{' '}
                e{' '}
                <Link 
                  to="/privacy" 
                  className="text-[#274f36] hover:text-[#1a3524] font-medium underline"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <button
                onClick={handleRejectAll}
                className="border border-gray-500 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                Rifiuta tutti
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="border border-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#274f36]/30 transition-colors"
              >
                Personalizza
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#1a3524] transition-colors"
              >
                Accetta tutti
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Impostazioni Cookie</h3>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-4 bg-black/40 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="essential-cookies"
                      checked={preferences.essential}
                      disabled
                      className="rounded text-[#274f36]"
                    />
                    <label htmlFor="essential-cookies" className="font-medium">Cookie essenziali</label>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Sempre attivi</span>
                </div>
                <p className="text-sm text-gray-300">
                  Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati. 
                  Generalmente vengono impostati in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, 
                  come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
                </p>
              </div>
              
              <div className="p-4 bg-black/40 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="functional-cookies"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences(prev => ({...prev, functional: e.target.checked}))}
                      className="rounded text-[#274f36]"
                    />
                    <label htmlFor="functional-cookies" className="font-medium">Cookie funzionali</label>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Questi cookie consentono al sito di fornire funzionalità e personalizzazione avanzate. 
                  Possono essere impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine.
                </p>
              </div>
              
              <div className="p-4 bg-black/40 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="analytics-cookies"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({...prev, analytics: e.target.checked}))}
                      className="rounded text-[#274f36]"
                    />
                    <label htmlFor="analytics-cookies" className="font-medium">Cookie analitici</label>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Questi cookie ci permettono di contare le visite e le fonti di traffico per poter misurare e migliorare le prestazioni del nostro sito. 
                  Ci aiutano a sapere quali pagine sono le più e le meno popolari e vedere come i visitatori si muovono nel sito.
                </p>
              </div>
              
              <div className="p-4 bg-black/40 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="marketing-cookies"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({...prev, marketing: e.target.checked}))}
                      className="rounded text-[#274f36]"
                    />
                    <label htmlFor="marketing-cookies" className="font-medium">Cookie di marketing</label>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. 
                  Possono essere utilizzati da queste aziende per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-end pt-2 border-t border-gray-700">
              <button
                onClick={handleRejectAll}
                className="border border-gray-500 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                Rifiuta tutti
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#1a3524]"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Aggiungiamo questa dichiarazione per TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}

export default CookieBanner; 