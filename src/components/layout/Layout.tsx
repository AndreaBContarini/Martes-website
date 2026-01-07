import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { CookieBanner } from '../shared/CookieBanner';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <div className="bg-noise" />
      
      <Navbar />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
};
