import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEOHead } from '../components/shared/SEOHead';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion } from 'framer-motion';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-martes-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Articolo Non Trovato</h1>
          <Link to="/blog" className="text-martes-green hover:underline">Torna al Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} | Blog Martes AI`}
        description={post.excerpt}
        image={post.image}
        pageType="article"
      />

      <article className="pt-32 pb-20 bg-martes-dark min-h-screen">
        {/* Header */}
        <div className="container mx-auto px-6 max-w-4xl">
            <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-neutral-400 hover:text-martes-green mb-8 transition-colors">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Torna indietro
            </button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-4 text-sm text-martes-green mb-6 font-mono">
                    <span className="bg-martes-green/10 px-3 py-1 rounded-full border border-martes-green/20">BLOG</span>
                    <span className="flex items-center gap-2">
                         <Clock size={14} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8 mb-12">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-xl">
                            🦜
                        </div>
                        <div>
                            <div className="font-bold">Martes AI Team</div>
                            <div className="text-sm text-neutral-400 flex items-center gap-2">
                                <Calendar size={14} />
                                {format(post.date, 'd MMMM yyyy', { locale: it })}
                            </div>
                        </div>
                     </div>
                     
                     <button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                        <Share2 size={16} /> Condividi
                     </button>
                </div>
            </motion.div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold 
                prose-p:text-neutral-300 prose-p:leading-relaxed
                prose-a:text-martes-green prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-ul:text-neutral-300 prose-li:marker:text-martes-green
                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-neutral-800
                prose-blockquote:border-l-martes-green prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                prose-video:rounded-3xl prose-video:shadow-2xl
            ">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Footer / CTA */}
            <div className="mt-20 pt-10 border-t border-white/10">
                <h3 className="text-2xl font-bold mb-6">Ti è piaciuto questo articolo?</h3>
                <div className="bg-gradient-to-br from-martes-green/20 to-transparent p-8 rounded-3xl border border-martes-green/30 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-2">Vuoi implementare l'AI nella tua azienda?</h4>
                        <p className="text-neutral-400">Prenota una consulenza gratuita con i nostri esperti.</p>
                    </div>
                    <a href="https://calendly.com/riccardobcontarini/30min" target="_blank" rel="noopener noreferrer" className="bg-martes-green text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors whitespace-nowrap">
                        Parla con noi
                    </a>
                </div>
            </div>
        </div>
      </article>
    </>
  );
};
