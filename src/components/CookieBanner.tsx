import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md text-white p-6 z-50 border-t border-[#274f36]/30">
      <div className="container mx-auto max-w-4xl">
        {!showCustomize ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm mb-2">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
                Alcuni sono essenziali per il funzionamento del sito, mentre altri ci aiutano 
                a migliorare le prestazioni e l'esperienza utente.
              </p>
              <Link 
                to="/cookies" 
                className="text-[#274f36] hover:text-[#1a3524] text-sm underline"
              >
                Maggiori informazioni
              </Link>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleAcceptAll}
                className="bg-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#1a3524] transition-colors"
              >
                Accetta tutti
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="border border-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#274f36] transition-colors"
              >
                Personalizza
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold">Personalizza le preferenze dei cookie</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="rounded text-[#274f36]"
                />
                <span>Cookie essenziali (sempre attivi)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({...prev, analytics: e.target.checked}))}
                  className="rounded text-[#274f36]"
                />
                <span>Cookie analitici</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({...prev, marketing: e.target.checked}))}
                  className="rounded text-[#274f36]"
                />
                <span>Cookie di marketing</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSavePreferences}
                className="bg-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#1a3524]"
              >
                Salva preferenze
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="border border-[#274f36] px-4 py-2 rounded-lg text-sm hover:bg-[#274f36]"
              >
                Indietro
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieBanner; 