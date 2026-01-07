import { motion, AnimatePresence } from 'framer-motion';
import logoMartes from '../../assets/logos/logo_martes/martes-logo.png';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language || 'it';

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isHomePage) {
      // Logic for Home Page: Show logo only after scrolling past Hero
      const handleScroll = () => {
        const heroHeight = window.innerHeight;
        const isPastHero = window.scrollY > heroHeight - 100;
        setShowLogo(isPastHero);
      };

      // Initial check
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Logic for Internal Pages: Always show logo
      setShowLogo(true);
    }
  }, [isHomePage]);

  const isPrismaPage = location.pathname === '/prisma';

  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset for navbar
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close menu if open (for mobile)
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none"
    >
      <div className={`pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center gap-4 ${isPrismaPage ? 'md:gap-8 max-w-5xl' : 'md:gap-12 max-w-3xl'} w-auto shadow-2xl hover:border-white/20 transition-colors z-50`}>
        <AnimatePresence mode="popLayout">
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, width: 0, marginRight: 0 }}
              animate={{ opacity: 1, width: 'auto', marginRight: 0 }}
              exit={{ opacity: 0, width: 0, marginRight: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 cursor-pointer hoverable overflow-hidden"
            >
              <Link to="/" className="flex items-center gap-3">
                <img
                    src={logoMartes}
                    alt="Martes Logo"
                    className="w-8 h-8 rounded-full border border-white/10 logo-filter shrink-0"
                />
                <span className="font-bold text-sm tracking-tight text-white whitespace-nowrap">
                    Martes AI
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400 uppercase tracking-wider">
          {isHomePage ? (
              // Links for Homepage
              <>
                  <a href="#services" className="hover:text-white transition-colors hoverable">
                    {t('navbar.solutions')}
                  </a>
                  <a href="#cases" className="hover:text-white transition-colors hoverable">
                    {t('navbar.caseStudies')}
                  </a>
                  <Link to="/chi-siamo" className="hover:text-white transition-colors hoverable">
                    {t('navbar.about')}
                  </Link>
                  <Link to="/templates" className="hover:text-white transition-colors hoverable">
                    {t('navbar.templates')}
                  </Link>
              </>
          ) : isPrismaPage ? (
              // Links for Prisma Landing Page
              <>
                  <Link to="/" className="hover:text-white transition-colors hoverable">
                    {t('navbar.home')}
                  </Link>
                  <button onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-white transition-colors hoverable whitespace-nowrap uppercase">
                    {t('navbar.howItWorks')}
                  </button>
                  <button onClick={(e) => handleSmoothScroll(e, 'pricing')} className="hover:text-white transition-colors hoverable uppercase">
                    {t('navbar.pricing')}
                  </button>
                   <button onClick={(e) => handleSmoothScroll(e, 'case-studies')} className="hover:text-white transition-colors hoverable whitespace-nowrap uppercase">
                    {t('navbar.caseStudies')}
                  </button>
                  <button onClick={(e) => handleSmoothScroll(e, 'faq')} className="hover:text-white transition-colors hoverable uppercase">
                    {t('navbar.faq')}
                  </button>
              </>
          ) : (
              // Links for Internal Pages (ATP, etc.)
              <>
                  <Link to="/" className="hover:text-white transition-colors hoverable">
                    {t('navbar.home')}
                  </Link>
                  <Link to="/casi-studio" className="hover:text-white transition-colors hoverable">
                    {t('navbar.caseStudies')}
                  </Link>
                   <Link to="/chi-siamo" className="hover:text-white transition-colors hoverable">
                    {t('navbar.about')}
                  </Link>
                  <Link to="/templates" className="hover:text-white transition-colors hoverable">
                    {t('navbar.templates')}
                  </Link>
              </>
          )}
        </div>

        <div className="flex items-center gap-3">
          
          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2 border-r border-white/10 pr-4 mr-0">
             <button 
                onClick={() => changeLanguage('it')}
                className={`text-xs font-bold transition-colors ${currentLang.startsWith('it') ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
             >
                IT
             </button>
             <span className="text-neutral-700 text-[10px]">/</span>
             <button 
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold transition-colors ${currentLang.startsWith('en') ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
             >
                EN
             </button>
          </div>

          <a
            href={isPrismaPage ? "https://cal.com/andrea-belli-contarini" : "https://cal.com/martesai"}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {isPrismaPage ? t('navbar.tryPrisma') : t('navbar.bookCall')}
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hoverable w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            <div className={`w-4 flex flex-col gap-1 transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
               <span className={`h-px w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
               <span className={`h-px w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 8, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden w-[calc(100%-2rem)] max-w-sm bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 overflow-hidden"
          >
             {/* Mobile Language Switcher */}
             <div className="flex justify-center gap-4 py-2 border-b border-white/10 mb-2">
                 <button 
                    onClick={() => changeLanguage('it')}
                    className={`text-sm font-bold px-4 py-1 rounded-full transition-colors ${currentLang.startsWith('it') ? 'bg-white/10 text-white' : 'text-neutral-500'}`}
                 >
                    Italiano
                 </button>
                 <button 
                    onClick={() => changeLanguage('en')}
                    className={`text-sm font-bold px-4 py-1 rounded-full transition-colors ${currentLang.startsWith('en') ? 'bg-white/10 text-white' : 'text-neutral-500'}`}
                 >
                    English
                 </button>
             </div>

            {isHomePage ? (
                <>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.solutions')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </a>
                    <a href="#cases" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.caseStudies')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </a>
                    <Link to="/chi-siamo" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.about')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                    <Link to="/templates" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.templates')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                </>
            ) : isPrismaPage ? (
                <>
                    <Link to="/" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.home')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                    <button onClick={(e) => handleSmoothScroll(e, 'calculator')} className="w-full px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group uppercase text-left">
                      {t('navbar.discover')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </button>
                     <button onClick={(e) => handleSmoothScroll(e, 'timeline')} className="w-full px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group uppercase text-left">
                      {t('navbar.howItWorks')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </button>
                     <button onClick={(e) => handleSmoothScroll(e, 'pricing')} className="w-full px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group uppercase text-left">
                      {t('navbar.pricing')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </button>
                     <button onClick={(e) => handleSmoothScroll(e, 'case-studies')} className="w-full px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group uppercase text-left">
                      {t('navbar.caseStudies')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </button>
                     <button onClick={(e) => handleSmoothScroll(e, 'faq')} className="w-full px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group uppercase text-left">
                      {t('navbar.faq')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </button>
                </>
            ) : (
                <>
                    <Link to="/" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.home')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                    <Link to="/casi-studio" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.caseStudies')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                     <Link to="/chi-siamo" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.about')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                    <Link to="/templates" className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center justify-between group">
                      {t('navbar.templates')}
                      <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                    </Link>
                </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
