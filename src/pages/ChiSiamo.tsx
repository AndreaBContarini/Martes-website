import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { Helmet } from 'react-helmet-async';

function ChiSiamo() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top quando la pagina viene caricata
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Gestione del hash per il form di contatto
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
      <Helmet>
        <title>Chi Siamo | Martes AI - Esperti in Automazioni AI, Chatbot e Lead Generation</title>
        <meta name="description" content="Il team di Martes AI: esperti in automazioni basate su AI, chatbot avanzati e strategie di lead generation con intelligenza artificiale. Scopri la nostra missione e competenze." />
        <meta name="keywords" content="esperti AI, team automazioni AI, specialisti chatbot, consulenti agenti AI, lead generation con AI, intelligenza artificiale per business" />
        <meta property="og:title" content="Chi Siamo | Martes AI - Esperti in Automazioni AI e Chatbot" />
        <meta property="og:description" content="Scopri il team di Martes AI: esperti in automazioni basate su AI, chatbot avanzati e strategie di lead generation con intelligenza artificiale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martes-ai.com/chi-siamo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chi Siamo | Martes AI - Esperti in AI" />
        <meta name="twitter:description" content="Il team di esperti in automazioni AI, chatbot e lead generation di Martes AI." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.martes-ai.com/chi-siamo" />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Chi siamo</h1>
        
        {/* Sezione introduttiva */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Martes AI è una società innovativa specializzata nello sviluppo di soluzioni di intelligenza artificiale personalizzate per le aziende. 
            Fondata da professionisti con competenze complementari in ingegneria informatica e fisica, 
            offriamo un approccio unico che combina solide basi scientifiche con applicazioni pratiche per il business.
          </p>
          <div className="w-24 h-1 bg-[#274f36] mx-auto mb-12"></div>
        </div>
        
        {/* Sezione Missione e Valori */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <div className="bg-black/30 p-8 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">La nostra missione</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Democratizzare l'accesso all'intelligenza artificiale, rendendo questa tecnologia accessibile e utile per aziende di ogni dimensione.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Crediamo che l'AI non debba essere un privilegio riservato solo alle grandi corporation, ma uno strumento strategico che può trasformare qualsiasi business, indipendentemente dalle sue dimensioni o dal settore in cui opera.
            </p>
          </div>
          
          <div className="bg-black/30 p-8 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">I nostri valori</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-[#274f36] mr-2">▹</span>
                <span><strong>Innovazione responsabile:</strong> Sviluppiamo soluzioni AI etiche e sostenibili.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#274f36] mr-2">▹</span>
                <span><strong>Trasparenza:</strong> Manteniamo un dialogo aperto con i nostri clienti in ogni fase del progetto.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#274f36] mr-2">▹</span>
                <span><strong>Eccellenza:</strong> Ci impegniamo a fornire soluzioni di altissima qualità, basate su ricerca e sviluppo continui.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#274f36] mr-2">▹</span>
                <span><strong>Personalizzazione:</strong> Ogni soluzione è progettata su misura per rispondere alle esigenze specifiche del cliente.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-16">Il nostro team</h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">
          {/* Riccardo */}
          <div className="text-center bg-black/20 p-8 rounded-lg border border-gray-800 hover:border-[#274f36] transition-all duration-300">
            <div className="mb-8 relative">
              <img
                src="https://i.ibb.co/vCqSnZ9M/riccardo.jpg"
                alt="Riccardo"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-[#274f36]/30"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Riccardo</h2>
            <p className="text-gray-300 mb-6">Founder & CEO</p>
            
            <div className="text-gray-300 mb-8 text-left">
              <p>
                Con una solida formazione in ingegneria informatica e una passione per l'intelligenza artificiale, Riccardo guida lo sviluppo tecnico di Martes AI.
              </p>
            </div>
            
            <p className="text-[#274f36] mb-6 font-bold">riccardo@martes-ai.com</p>
            <SocialLinks person="riccardo" />
          </div>

          {/* Andrea */}
          <div className="text-center bg-black/20 p-8 rounded-lg border border-gray-800 hover:border-[#274f36] transition-all duration-300">
            <div className="mb-8">
              <img
                src="https://i.ibb.co/LXzJRgsw/andrea.jpg"
                alt="Andrea"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-[#274f36]/30"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Andrea</h2>
            <p className="text-gray-300 mb-6">Co-Founder & CTO</p>
            
            <div className="text-gray-300 mb-8 text-left">
              <p>
                Con un background in fisica e una specializzazione in modelli computazionali, Andrea apporta un approccio scientifico rigoroso alle soluzioni di Martes AI.
              </p>
            </div>
            
            <p className="text-[#274f36] mb-6 font-bold">andrea@martes-ai.com</p>
            <SocialLinks person="andrea" />
          </div>
        </div>
        
        {/* Sezione Expertise */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Le nostre competenze</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/20 p-6 rounded-lg border border-gray-800 hover:border-[#274f36] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">Automazione dei processi</h3>
              <p className="text-gray-300">
                Sviluppiamo soluzioni AI che automatizzano attività ripetitive, ottimizzano i flussi di lavoro e aumentano l'efficienza operativa.
              </p>
            </div>
            
            <div className="bg-black/20 p-6 rounded-lg border border-gray-800 hover:border-[#274f36] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">Analisi predittiva</h3>
              <p className="text-gray-300">
                Utilizziamo algoritmi avanzati per analizzare i dati storici e prevedere tendenze future, supportando decisioni strategiche informate.
              </p>
            </div>
            
            <div className="bg-black/20 p-6 rounded-lg border border-gray-800 hover:border-[#274f36] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">Agenti AI</h3>
              <p className="text-gray-300">
                Creiamo chatbot e agenti virtuali personalizzati che migliorano l'esperienza cliente e ottimizzano le operazioni interne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiSiamo;