import React, { useState, useEffect } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Inserisci un indirizzo email valido');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://hook.eu2.make.com/c0349kubb7j3jo4y6ou242ca1faorjfv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Errore durante l\'invio');

      setStatus('success');
      setEmail('');
    } catch (error) {
        console.error(error);
      setStatus('error');
      setMessage('Si è verificato un errore. Riprova più tardi.');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-martes-dark min-h-screen flex items-center justify-center">
      <SEOHead 
        title="Newsletter"
        description="Iscriviti alla newsletter di Martes AI per ricevere aggiornamenti e insight esclusivi."
        pageType="website"
      />

      <div className="container mx-auto px-6 max-w-lg">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.3),transparent_70%)]" />

            <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-martes-green/20 text-martes-green flex items-center justify-center mx-auto mb-6">
                    <Mail size={32} />
                </div>
                
                <h1 className="text-3xl font-bold mb-4">Iscriviti alla Newsletter</h1>
                <p className="text-neutral-400 mb-8">
                    Ricevi aggiornamenti, insight esclusivi e consigli pratici sull'automazione con l'AI direttamente nella tua casella di posta.
                </p>

                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-martes-green/20 border border-martes-green/50 text-white p-6 rounded-2xl flex flex-col items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-martes-green text-black flex items-center justify-center">
                                <Check size={24} strokeWidth={3} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Grazie per l'iscrizione!</h3>
                                <p className="text-sm text-neutral-300">Ti terremo aggiornato con le ultime novità.</p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit} 
                            className="space-y-4"
                        >
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="iltuo@indirizzo.email"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-martes-green/50 transition-colors text-white placeholder-neutral-500"
                                    disabled={status === 'loading'}
                                />
                                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                            </div>
                            
                            {status === 'error' && (
                                <p className="text-red-400 text-sm">{message}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-martes-green text-black font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>Attendere...</>
                                ) : (
                                    <>Iscriviti <Send size={18} /></>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>

                <p className="text-xs text-neutral-500 mt-6">
                    Iscrivendoti accetti la nostra <a href="/privacy" className="underline hover:text-martes-green">Privacy Policy</a>. No spam.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
