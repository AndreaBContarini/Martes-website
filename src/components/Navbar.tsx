import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Martes AI Logo" className="h-10" />
            <span className="text-xl font-semibold text-white">Martes AI</span>
          </Link>
          <div className="flex gap-8 items-center">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className={`text-white hover:text-[#274f36] ${location.pathname === '/' ? 'text-[#274f36]' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/casi-studio" 
              onClick={scrollToTop}
              className={`text-white hover:text-[#274f36] ${location.pathname === '/casi-studio' ? 'text-[#274f36]' : ''}`}
            >
              Casi Studio
            </Link>
            <Link 
              to="/blog" 
              onClick={scrollToTop}
              className={`text-white hover:text-[#274f36] ${location.pathname === '/blog' ? 'text-[#274f36]' : ''}`}
            >
              Blog
            </Link>
            <Link 
              to="/chi-siamo" 
              onClick={scrollToTop}
              className={`text-white hover:text-[#274f36] ${location.pathname === '/chi-siamo' ? 'text-[#274f36]' : ''}`}
            >
              Chi siamo
            </Link>
            <button 
              onClick={scrollToForm}
              className="bg-[#274f36] hover:bg-[#1a3524] text-white px-4 py-2 rounded-lg"
            >
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;