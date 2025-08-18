import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const logo = '/logo-martes.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToForm = () => {
    // Se non siamo nella homepage, prima navighiamo alla homepage
    if (location.pathname !== '/') {
      navigate('/');
      // Utilizziamo setTimeout per dare tempo alla navigazione di completarsi
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se siamo già nella homepage, scorriamo direttamente al form
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={scrollToTop}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="Martes AI Logo" className="h-10" />
          <span className="text-xl font-black text-white">Martes AI</span>
        </Link>

        {/* Contenitore relativo per l'hamburger + dropdown */}
        <div className="relative">
          {/* Pulsante hamburger elegante */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none flex items-center justify-center w-12 h-12 
                       bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 
                       border border-emerald-400/30 rounded-xl hover:border-emerald-400 
                       hover:bg-gradient-to-br hover:from-emerald-400/30 hover:to-emerald-600/30
                       transition-all duration-300 transform hover:scale-105"
          >
            {isOpen ? (
              // Icona "X" elegante
              <svg 
                className="w-6 h-6 text-emerald-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Icona hamburger elegante
              <svg 
                className="w-6 h-6 text-emerald-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>

          {/* Dropdown elegante con animazione */}
          {isOpen && (
            <div 
              className="absolute top-16 right-0 min-w-72 
                         bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 
                         backdrop-blur-xl border border-emerald-400/20 rounded-2xl 
                         shadow-2xl shadow-emerald-400/10 p-6
                         animate-slideDown transform origin-top-right"
            >
              <div className="flex flex-col space-y-4">
                {/* Menu Servizi con sottomenu - PRIMO */}
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-white hover:text-emerald-400 py-3 px-4 rounded-lg 
                             hover:bg-emerald-400/10 transition-all duration-300 
                             font-medium text-lg border-b border-gray-700/50
                             transform hover:scale-105 flex items-center justify-between"
                  >
                    Servizi
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Sottomenu Servizi */}
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-emerald-400/30 pl-4">
                      <Link 
                        to="/soluzioni-custom" 
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                          scrollToTop();
                        }}
                        className="block text-gray-300 hover:text-emerald-400 py-2 px-3 rounded-lg 
                                 hover:bg-emerald-400/10 transition-all duration-300 
                                 font-medium text-base transform hover:scale-105"
                      >
                        Soluzioni Custom
                      </Link>
                      <Link 
                        to="/formazione-aziendale" 
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                          scrollToTop();
                        }}
                        className="block text-gray-300 hover:text-emerald-400 py-2 px-3 rounded-lg 
                                 hover:bg-emerald-400/10 transition-all duration-300 
                                 font-medium text-base transform hover:scale-105"
                      >
                        Formazione Aziendale
                      </Link>
                      <Link 
                        to="/agente-reportistica" 
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                          scrollToTop();
                        }}
                        className="block text-gray-300 hover:text-emerald-400 py-2 px-3 rounded-lg 
                                 hover:bg-emerald-400/10 transition-all duration-300 
                                 font-medium text-base transform hover:scale-105"
                      >
                        Agente <em>Prisma</em>
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/casi-studio" 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="text-white hover:text-emerald-400 py-3 px-4 rounded-lg 
                           hover:bg-emerald-400/10 transition-all duration-300 
                           font-medium text-lg border-b border-gray-700/50 last:border-b-0
                           transform hover:scale-105"
                >
                  Casi Studio
                </Link>
                <Link 
                  to="/newsletter" 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="text-white hover:text-emerald-400 py-3 px-4 rounded-lg 
                           hover:bg-emerald-400/10 transition-all duration-300 
                           font-medium text-lg border-b border-gray-700/50 last:border-b-0
                           transform hover:scale-105"
                >
                  Newsletter
                </Link>
                <Link 
                  to="/blog" 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="text-white hover:text-emerald-400 py-3 px-4 rounded-lg 
                           hover:bg-emerald-400/10 transition-all duration-300 
                           font-medium text-lg border-b border-gray-700/50 last:border-b-0
                           transform hover:scale-105"
                >
                  Blog
                </Link>
                <Link 
                  to="/chi-siamo" 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="text-white hover:text-emerald-400 py-3 px-4 rounded-lg 
                           hover:bg-emerald-400/10 transition-all duration-300 
                           font-medium text-lg border-b border-gray-700/50 last:border-b-0
                           transform hover:scale-105"
                >
                  Chi Siamo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
