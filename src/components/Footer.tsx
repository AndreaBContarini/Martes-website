import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../images/logo.png';

function Footer() {
  const scrollToTop = () => {
    // Forza lo scroll immediato per assicurare che funzioni con un solo clic su mobile e desktop
    window.scrollTo(0, 0);

    // Usa requestAnimationFrame per assicurare che il DOM sia aggiornato
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Backup per dispositivi mobile che potrebbero avere problemi
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-black py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Martes AI Logo" className="w-12" />
              <h3 className="text-2xl font-bold text-white">Martes AI<sup>®</sup></h3>
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-1">Martes AI S.R.L.</p>
              <p className="mb-1">Via Aurelia 325 Roma</p>
              <p className="mb-1">P.IVA 18331241002</p>
              <p>Capitale sociale: € 10.000 i.v.</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contatti</h4>
            <a href="mailto:contact@martes-ai.com" className="text-gray-400 hover:text-white block transition-colors duration-200">
              contact@martes-ai.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Servizi</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/soluzioni-custom"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Soluzioni Custom
                </Link>
              </li>
              <li>
                <Link
                  to="/formazione-aziendale"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Formazione Aziendale
                </Link>
              </li>
              <li>
                <Link
                  to="/agente-reportistica"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Prisma – Agente di Rendicontazione
                </Link>
              </li>
              <li>
                <Link
                  to="/casi-studio"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Casi Studio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Social</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/riccardo_belli_contarini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/martes-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Riccardo_BC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@riccardobellicontarini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Note Legali</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Termini di Servizio
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2026 Martes AI<sup>®</sup> S.R.L. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
