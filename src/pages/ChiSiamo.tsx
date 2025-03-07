import React from 'react';
import { useLocation } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

function ChiSiamo() {
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash;
    if (hash === '#contact-form') {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-20">Chi siamo</h1>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-20">
          {/* Riccardo */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img
                src="/src/images/riccardo.jpg"
                alt="Riccardo"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Riccardo</h2>
            <p className="text-gray-300 mb-4">Ingegnere informatico</p>
            <p className="text-gray-300 mb-4">Founder</p>
            <p className="text-[#274f36] mb-6 font-bold">riccardo@martes-ai.com</p>
            <SocialLinks person="riccardo" />
          </div>

          {/* Andrea */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/src/images/andrea.jpg"
                alt="Andrea"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Andrea</h2>
            <p className="text-gray-300 mb-4">Fisico</p>
            <p className="text-gray-300 mb-4">Co-Founder</p>
            <p className="text-[#274f36] mb-6 font-bold">andrea@martes-ai.com</p>
            <SocialLinks person="andrea" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiSiamo;