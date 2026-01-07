import React, { useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, ArrowRight, Loader2 } from 'lucide-react';

const Templates = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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

  const benefits = [
    "Corso completo di N8N",
    "Corso completo di Vibe Coding",
    "Template di agenti AI",
    "Template di workflow"
  ];

  return (
    <div className="pt-32 pb-20 bg-martes-dark min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <SEOHead 
        title="Template Gratuiti & Risorse AI"
        description="Scarica gratuitamente i nostri template per Agenti AI, workflow di automazione e accedi ai corsi esclusivi."
        pageType="website"
      />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-martes-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-neutral-400 text-sm tracking-widest uppercase font-medium mb-8 block">
            Accedi alla nostra libreria di template AI
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight tracking-tight">
            Scarica i <span className="serif-italic text-martes-green font-normal">Template</span> Gratuiti
          </h1>

          <div className="max-w-xl mx-auto mb-16">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-martes-green/10 border border-martes-green/30 rounded-2xl p-8 backdrop-blur-sm"
                 >
                    <div className="w-16 h-16 bg-martes-green rounded-full flex items-center justify-center mx-auto mb-4 text-martes-dark shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                        <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Email inviata!</h3>
                    <p className="text-neutral-400 mb-4">Controlla le tue email, dovresti aver ricevuto un link per l'accesso ai template.</p>
                    <p className="text-neutral-500 text-sm">PS: se non vedi nulla, controlla in spam o nella posta indesiderata</p>
                 </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative group max-w-lg mx-auto">
                    <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 transition-all group-focus-within:border-martes-green/50 group-focus-within:bg-white/10 group-focus-within:shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                        <div className="pl-4 text-neutral-400">
                            <Mail size={20} />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Inserisci la tua email..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            className="w-full bg-transparent border-none py-4 px-4 text-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                        />
                        <div className="pr-2">
                            {status === 'loading' ? (
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <Loader2 className="animate-spin text-martes-green" />
                                </div>
                            ) : (
                                <button 
                                    type="submit"
                                    className="w-10 h-10 bg-martes-green text-martes-dark rounded-xl flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-martes-green/20"
                                    disabled={!email}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <p className="text-neutral-400 text-sm mt-4 leading-relaxed">
                        Entro pochi minuti riceverai un link magico via email per accedere all'intera cartella con <span className="text-white font-medium">TUTTI i template e i corsi.</span>
                    </p>

                    {status === 'error' && (
                        <p className="text-red-400 text-sm mt-3 absolute w-full text-center">{message}</p>
                    )}
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-neutral-500 text-sm md:text-base">
            {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-martes-green/50" />
                    <span>{benefit}</span>
                </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Templates;
