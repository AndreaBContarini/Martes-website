import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { SEOHead } from '../components/shared/SEOHead';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion } from 'framer-motion';

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-martes-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Caso Studio Non Trovato</h1>
          <Link to="/casi-studio" className="text-martes-green hover:underline">Torna alla lista</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${caseStudy.title} | Case Study Martes AI`}
        description={`Scopri come Martes AI ha aiutato ${caseStudy.testimonial?.author || 'i nostri clienti'} con l'Intelligenza Artificiale. Leggi il caso studio completo.`}
      />

      <article className="pt-32 pb-20 bg-martes-dark min-h-screen">
        {/* Header */}
        <div className="container mx-auto px-6 max-w-4xl">
            <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-neutral-400 hover:text-martes-green mb-8 transition-colors">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Torna indietro
            </button>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
                {caseStudy.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-12 border-b border-white/10 pb-8">
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {format(caseStudy.date, 'd MMMM yyyy', { locale: it })}
                </div>
                {caseStudy.testimonial && (
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-martes-green prose-strong:text-emerald-400 prose-img:rounded-2xl prose-img:border prose-img:border-neutral-800">
                <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
            </div>

            {/* Bottom Testimonial */}
            {caseStudy.testimonial && (
                <div className="mt-20 bg-white/5 border border-white/10 p-10 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                    </div>
                    <blockquote className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed italic text-white/90">
                        "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden">
                            <img src={caseStudy.image} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <div className="font-bold text-white">{caseStudy.testimonial.author}</div>
                            <div className="text-martes-green text-sm">{caseStudy.testimonial.role}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </article>
    </>
  );
};
