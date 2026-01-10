import { Hero } from '../components/sections/Hero';
import { LogoTicker } from '../components/sections/LogoTicker';
import { Services } from '../components/sections/Services';
import { Stats } from '../components/sections/Stats';
import { Cases } from '../components/sections/Cases';
import { Contact } from '../components/sections/Contact';

import { SEOHead } from '../components/shared/SEOHead';

export const Home = () => {
  return (
    <>
      <SEOHead 
        title="Martes AI | AI Transformation Partner"
        description="Aiutiamo le aziende a scalare grazie all'Intelligenza Artificiale. Automazione, Agenti AI e Formazione."
      />
      <Hero />
      <LogoTicker />
      <Services />
      <Stats />
      <Cases />
      <Contact />
    </>
  );
};
