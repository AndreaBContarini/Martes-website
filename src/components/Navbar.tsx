import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
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
          <span className="text-xl font-semibold text-white">Martes AI</span>
        </Link>

        {/* Contenitore relativo per l’hamburger + dropdown */}
        <div className="relative">
          {/* Pulsante hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none flex items-center justify-center w-10 h-10 
                       border border-white/50 rounded-md hover:border-white hover:bg-black/30"
          >
            {isOpen ? (
              // Icona "X" se il menu è aperto
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Icona hamburger se il menu è chiuso
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>

          {/* Dropdown compatto (assoluto) */}
          {isOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] text-white rounded-md shadow-lg py-2 z-50"
            >
              <Link
                to="/"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 hover:text-[#274f36] ${
                  location.pathname === '/' ? 'text-[#274f36]' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/casi-studio"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 hover:text-[#274f36] ${
                  location.pathname === '/casi-studio' ? 'text-[#274f36]' : ''
                }`}
              >
                Casi Studio
              </Link>
              <Link
                to="/blog"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 hover:text-[#274f36] ${
                  location.pathname === '/blog' ? 'text-[#274f36]' : ''
                }`}
              >
                Blog
              </Link>
              <Link
                to="/chi-siamo"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 hover:text-[#274f36] ${
                  location.pathname === '/chi-siamo' ? 'text-[#274f36]' : ''
                }`}
              >
                Chi siamo
              </Link>
              <button
                onClick={() => {
                  scrollToForm();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 bg-[#274f36] hover:bg-[#1f3f2b] mt-1 rounded-md"
              >
                Contattaci
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
