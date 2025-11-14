import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

import SEOHead from '../components/SEOHead';

function ChiSiamo() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Scroll to anchor if present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Aggiungi classe per animazione fade-in agli elementi
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="pt-32 pb-20">
      <SEOHead 
        title="Chi Siamo | Martes AI - Esperti in Sviluppo Soluzioni di Intelligenza Artificiale"
        description="Scopri il team di Martes AI: professionisti specializzati nello sviluppo di soluzioni di intelligenza artificiale personalizzate. Competenza, innovazione e risultati concreti per il tuo business."
        canonicalUrl="https://www.martes-ai.com/chi-siamo"
        ogImage="/logo-martes.png"
        pageType="website"
        schemaType="AboutPage"
        structuredData={{
          "mainEntityOfPage": {
            "@type": "AboutPage",
            "@id": "https://martes-ai.com/chi-siamo"
          },
          "about": {
            "@type": "Organization",
            "name": "Martes AI",
            "description": "Società specializzata nello sviluppo di soluzioni di intelligenza artificiale personalizzate",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Riccardo",
                "jobTitle": "Founder & CEO"
              },
              {
                "@type": "Person",
                "name": "Andrea",
                "jobTitle": "Co-Founder & CTO"
              }
            ]
          }
        }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 animate-fade-up">Chi siamo</h1>
        
        {/* Sezione introduttiva */}
        <div className="max-w-4xl mx-auto mb-20 text-center fade-in">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Martes AI è una società innovativa specializzata nello sviluppo di soluzioni di intelligenza artificiale personalizzate per le aziende. 
            Fondata da professionisti con competenze complementari in ingegneria informatica e fisica, 
            offriamo un approccio unico che combina solide basi scientifiche con applicazioni pratiche per il business.
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12 animate-width"></div>
        </div>
        
        {/* Sezione Missione e Valori */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <div className="bg-black/30 p-8 rounded-lg border border-gray-800 fade-in hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-white">La nostra missione</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Democratizzare l'accesso all'intelligenza artificiale, rendendo questa tecnologia accessibile e utile per aziende di ogni dimensione.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Crediamo che l'AI non debba essere un privilegio riservato solo alle grandi corporation, ma uno strumento strategico che può trasformare qualsiasi business, indipendentemente dalle sue dimensioni o dal settore in cui opera.
            </p>
          </div>
          
          <div className="bg-black/30 p-8 rounded-lg border border-gray-800 fade-in hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-white">I nostri valori</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">▹</span>
                <span><strong>Innovazione responsabile:</strong> Sviluppiamo soluzioni AI etiche e sostenibili.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">▹</span>
                <span><strong>Trasparenza:</strong> Manteniamo un dialogo aperto con i nostri clienti in ogni fase del progetto.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">▹</span>
                <span><strong>Eccellenza:</strong> Ci impegniamo a fornire soluzioni di altissima qualità, basate su ricerca e sviluppo continui.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">▹</span>
                <span><strong>Personalizzazione:</strong> Ogni soluzione è progettata su misura per rispondere alle esigenze specifiche del cliente.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">Il nostro team</h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">
          {/* Riccardo */}
          <div className="text-center bg-black/20 p-8 rounded-lg border border-gray-800 hover:border-[emerald-500] transition-all duration-300 fade-in">
            <div className="mb-8 relative">
              <img
                src="/assets/riccardo.jpg"
                alt="Riccardo"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-[emerald-500]/30"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Riccardo</h2>
            <p className="text-gray-300 mb-6">Founder & CEO</p>
            
            <div className="text-gray-300 mb-8 text-left">
              <p>
                Con una solida formazione in ingegneria informatica e una passione per l'intelligenza artificiale, Riccardo guida lo sviluppo tecnico di Martes AI.
              </p>
            </div>
            
            <p className="text-emerald-500 mb-6 font-bold">riccardo@martes-ai.com</p>
            <SocialLinks person="riccardo" />
          </div>

          {/* Andrea */}
          <div className="text-center bg-black/20 p-8 rounded-lg border border-gray-800 hover:border-[emerald-500] transition-all duration-300 fade-in">
            <div className="mb-8">
              <img
                src="/assets/andrea-min.jpg"
                alt="Andrea"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-[emerald-500]/30"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Andrea</h2>
            <p className="text-gray-300 mb-6">Co-Founder & CTO</p>
            
            <div className="text-gray-300 mb-8 text-left">
              <p>
                Con un background in fisica e una specializzazione in modelli computazionali, Andrea apporta un approccio scientifico rigoroso alle soluzioni di Martes AI.
              </p>
            </div>
            
            <p className="text-emerald-500 mb-6 font-bold">andrea@martes-ai.com</p>
            <SocialLinks person="andrea" />
          </div>
        </div>
        
        {/* Sezione Expertise */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">Le nostre competenze</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-black/20 p-6 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Automazione dei processi</h3>
              <p className="text-gray-300">
                Sviluppiamo soluzioni AI che automatizzano attività ripetitive, ottimizzano i flussi di lavoro e aumentano l'efficienza operativa.
              </p>
            </div>
            
            <div className="bg-black/20 p-6 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 fade-in" style={{ animationDelay: '0.4s' }}>
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