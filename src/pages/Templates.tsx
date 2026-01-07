import React, { useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Templates = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(t('templates.form.error_invalid'));
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
      setMessage(t('templates.form.error_generic'));
    }
  };

  const benefits = t('templates.benefits', { returnObjects: true }) as string[];

  return (
    <div className="pt-32 pb-20 bg-martes-dark min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <SEOHead 
        title={t('templates.seo.title')}
        description={t('templates.seo.description')}
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
            {t('templates.hero.badge')}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight tracking-tight">
            {t('templates.hero.title_start')} <span className="serif-italic text-martes-green font-normal">{t('templates.hero.title_highlight')}</span> {t('templates.hero.title_end')}
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
                    <h3 className="text-2xl font-bold text-white mb-2">{t('templates.form.success_title')}</h3>
                    <p className="text-neutral-400 mb-4">{t('templates.form.success_message')}</p>
                    <p className="text-neutral-500 text-sm">{t('templates.hero.note_spam')}</p>
                 </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative group max-w-lg mx-auto">
                    <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 transition-all group-focus-within:border-martes-green/50 group-focus-within:bg-white/10 group-focus-within:shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                        <div className="pl-4 text-neutral-400">
                            <Mail size={20} />
                        </div>
                        <input 
                            type="email" 
                            placeholder={t('templates.form.placeholder')}
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
                        <Trans i18nKey="templates.hero.subtitle" components={[<span className="text-white font-medium" />]} />
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
