import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { getOrderedCases } from '../data/caseStudies';
import { SEOHead } from '../components/shared/SEOHead';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = getOrderedCases();

export const CasiStudio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(cases.length / casesPerPage);
  
  const getCurrentCases = () => {
    const startIndex = (currentPage - 1) * casesPerPage;
    return cases.slice(startIndex, startIndex + casesPerPage);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
        scrollToTop();
    }, 10);
  };

  return (
    <div className="pt-32 pb-20 bg-martes-dark min-h-screen">
      <SEOHead 
        title="Casi Studio | Martes AI"
        description="Esplora i nostri casi studio: esempi concreti di come l'intelligenza artificiale ha trasformato il business dei nostri clienti."
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Storie di <span className="text-martes-green italic">Successo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Scopri come abbiamo aiutato le aziende a scalare grazie all'AI.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {getCurrentCases().map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={`/casi-studio/${caseStudy.id}`}
                onClick={scrollToTop}
                className="group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-martes-green/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
              >
                <div className="aspect-video bg-white p-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                   <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/20">
                    {format(caseStudy.date, 'MMM yyyy', { locale: it })}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold mb-4 group-hover:text-martes-green transition-colors leading-tight">
                    {caseStudy.title}
                  </h2>
                  
                  {caseStudy.testimonial && (
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <p className="text-sm italic text-neutral-400 mb-2 line-clamp-3">
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <p className="text-xs text-martes-green font-bold">
                        — {caseStudy.testimonial.author}
                      </p>
                    </div>
                  )}

                  <div className="mt-6 flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                    Leggi Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white/5 hover:bg-martes-green hover:text-black disabled:opacity-50 disabled:hover:bg-white/5 disabled:hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full font-bold transition-all ${
                            currentPage === page 
                            ? 'bg-martes-green text-black' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white/5 hover:bg-martes-green hover:text-black disabled:opacity-50 disabled:hover:bg-white/5 disabled:hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
