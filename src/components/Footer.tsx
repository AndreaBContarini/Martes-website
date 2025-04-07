import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../images/logo.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Martes AI Logo" className="w-12" />
              <h3 className="text-2xl font-bold text-white">Martes AI</h3>
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-1">Martes AI</p>
              <p className="mb-1">Via Aurelia 325 Roma</p>
              <p>P.IVA 18026131005</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contatti</h4>
            <a href="mailto:contact@martes-ai.com" className="text-gray-400 hover:text-white block transition-colors duration-200">
              contact@martes-ai.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Social</h4>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/martes_ai" 
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
          <p>© 2025 Martes AI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;