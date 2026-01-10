import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import logoMartes from '../../assets/logos/logo_martes/martes-logo.png';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-martes-dark/95 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-martes-green/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 w-fit">
              <img 
                src={logoMartes} 
                alt="Martes AI Logo" 
                className="w-10 h-10 rounded-full border border-white/10 logo-filter"
              />
              <span className="text-2xl font-bold tracking-tight text-white">Martes AI</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Il tuo Partner AI a 360 Gradi. <br />
              Trasformiamo il modo in cui le aziende lavorano attraverso l'Intelligenza Artificiale.
            </p>
            <div className="text-neutral-500 text-xs space-y-1">
              <p>Martes AI S.R.L.</p>
              <p>Via Aurelia 325 Roma</p>
              <p>P.IVA 18331241002</p>
              <p>Capitale sociale: € 10.000 i.v.</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Servizi</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li>
                  <Link to="/ai-transformation-partner" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    AI Transformation Partner
                  </Link>
                </li>
                <li>
                  <Link to="/formazione-aziendale" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Formazione Aziendale
                  </Link>
                </li>
                <li>
                  <Link to="/prisma" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Prisma Agent
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6">Risorse</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li>
                  <Link to="/casi-studio" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Casi Studio
                  </Link>
                </li>
                <li>
                  <a href="https://cal.com/martesai" target="_blank" rel="noopener noreferrer" className="hover:text-martes-green transition-colors">
                    Contattaci
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li>
                  <Link to="/privacy" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Termini di Servizio
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" onClick={scrollToTop} className="hover:text-martes-green transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-xs">
            © {currentYear} Martes AI S.R.L. Tutti i diritti riservati.
          </p>
          
          <div className="flex items-center gap-6">
            <SocialLink href="https://www.instagram.com/riccardo_belli_contarini" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="https://www.linkedin.com/company/martes-ai" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://x.com/Riccardo_BC" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="https://www.youtube.com/@riccardobellicontarini" icon={<Youtube className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);
