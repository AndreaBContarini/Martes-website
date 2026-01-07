import { useEffect } from 'react';
import { SEOHead } from '../shared/SEOHead';
import { motion } from 'framer-motion';

interface LegalPageProps {
  title: string;
  description: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, description, lastUpdated, children }: LegalPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-martes-dark min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-martes-green/5 via-transparent to-transparent pointer-events-none" />
      
      <SEOHead title={title} description={description} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-32 pb-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {lastUpdated && (
            <p className="text-neutral-500 mb-12 uppercase tracking-widest text-xs font-semibold">
              Ultimo aggiornamento: {lastUpdated}
            </p>
          )}

          <div className="w-full">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LegalLayout;
