import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import './animations.css'; // Import delle animazioni (creeremo questo file dopo)

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Validazione dell'email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      setError('Per favore, inserisci un indirizzo email valido.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://hook.eu2.make.com/c0349kubb7j3jo4y6ou242ca1faorjfv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio. Riprova più tardi.");
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : "Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead 
        title="Newsletter | Martes AI - Iscriviti per aggiornamenti sull'automazione AI"
        description="Iscriviti alla newsletter di Martes AI per ricevere aggiornamenti, insight esclusivi e consigli pratici sull'automazione con l'AI, direttamente nella tua casella di posta."
        canonicalUrl="https://martes-ai.com/newsletter"
        ogImage="/dist/assets/favicon-D1fAACaT.png"
        pageType="website"
        schemaType="WebPage"
        structuredData={{
          "@type": "WebPage",
          "@id": "https://martes-ai.com/newsletter",
          "name": "Newsletter | Martes AI",
          "description": "Iscriviti alla newsletter di Martes AI per ricevere aggiornamenti, insight esclusivi e consigli pratici sull'automazione con l'AI."
        }}
      />
      
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-black/30 p-8 rounded-lg border border-gray-800 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 animate-fadeIn">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-white animate-slideDown">Iscriviti alla nostra Newsletter</h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6 animate-scaleIn"></div>
            <p className="text-gray-300 animate-fadeIn">
              Ricevi aggiornamenti e insight esclusivi direttamente nella tua casella di posta.
            </p>
          </div>
          
          {submitted ? (
            <div className="bg-emerald-500/20 border border-emerald-500 rounded-lg p-6 text-center animate-fadeIn">
              <h2 className="text-xl font-semibold mb-2">Grazie per esserti iscritto!</h2>
              <p className="text-gray-300">Ti terremo aggiornato con le ultime novità dal mondo dell'AI.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Il tuo indirizzo email"
                  className={`w-full p-3 rounded-lg bg-white/10 border ${error ? 'border-red-500' : 'border-white/20'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 ease-in-out hover:bg-white/15 focus:scale-[1.01]`}
                  style={{ pointerEvents: 'auto', opacity: 1 }}
                  required
                />
                {error && <p className="mt-2 text-sm text-red-500 animate-pulse">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isEmailValid}
                className={`w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  (isSubmitting || !isEmailValid) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Iscrivendoti, accetti la nostra <a href="/privacy" className="text-emerald-500 hover:underline hover:text-emerald-400 transition-colors duration-300">Privacy Policy</a>. 
                Non invieremo mai spam e potrai annullare l'iscrizione in qualsiasi momento.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Newsletter; 