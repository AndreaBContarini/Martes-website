import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { getOrderedPosts } from '../data/blogPosts';
import { SEOHead } from '../components/shared/SEOHead';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const blogPosts = getOrderedPosts();

export const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return blogPosts.slice(startIndex, startIndex + postsPerPage);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setTimeout(() => scrollToTop(), 10);
  };

  return (
    <div className="pt-32 pb-20 bg-martes-dark min-h-screen">
      <SEOHead 
        title="Blog Martes AI | News e Guide su Automazione AI"
        description="Esplora il nostro blog dedicato alle ultime novità nel campo dell'intelligenza artificiale. Articoli approfonditi su automazione AI, chatbot, GPT e strategie."
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Martes AI <span className="text-martes-green">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Guide, approfondimenti e novità dal mondo dell'Intelligenza Artificiale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {getCurrentPosts().map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                onClick={scrollToTop}
                className="group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-martes-green/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                       e.currentTarget.src = 'https://placehold.co/600x400/10b981/FFFFFF?text=Martes+AI+Blog';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/20 flex items-center gap-2">
                    <Clock size={12} className="text-martes-green" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs text-martes-green mb-3 font-mono">
                    {format(post.date, 'd MMMM yyyy', { locale: it })}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4 group-hover:text-martes-green transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                    Leggi l'articolo <ArrowRight className="w-4 h-4 ml-2" />
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
