import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const posts = [
  {
    id: 'deepseek-alternativa-open-source-a-chatgpt-e-gemini',
    title: "DeepSeek: L'Alternativa Open Source a ChatGPT e Gemini",
    excerpt:
      'Analisi approfondita di DeepSeek, la sua natura open source, i costi delle API e le principali differenze rispetto ai concorrenti come ChatGPT e Gemini.',
    date: '2025-02-01',
    readTime: '2 min',
    image: '/src/images/deepseek.png',
  },
  {
    id: 'gpt-la-rivoluzione-dellintelligenza-artificiale-nel-business',
    title: "GPT: La Rivoluzione dell'Intelligenza Artificiale nel Business",
    excerpt: 'Scopri come i modelli GPT stanno trasformando il business, ottimizzando processi e creando nuove opportunità nel mondo digitale.',
    date: '2024-12-9',
    readTime: '3 min',
    image: '/src/images/gpt.png',
  },
  {
    id: 'cold-emailing-nuovi-clienti',
    title: 'Cold Emailing: Strategie per Aumentare i Tassi di Risposta',
    excerpt: 'In questo breve articolo parliamo di come ottimizzare le cosiddette "cold email" per ottenere ottimi risultati e feedback da potenziali nuovi clienti.',
    date: '2024-10-09',
    readTime: '5 min',
    image: '/src/images/cold_email.png',
  },
  {
    id: 'chatbot-ai-e-assistenti-vocali-la-nuova-frontiera-del-customer-service',
    title: 'Chatbot AI e Assistenti Vocali: La Nuova Frontiera del Customer Service',
    excerpt: "Grazie all'intelligenza artificiale e ai modelli linguistici avanzati (LLM) come GPT-4, i chatbot moderni offrono assistenza personalizzata, migliorano il servizio clienti e ottimizzano l'efficienza aziendale",
    date: '2024-11-29',
    readTime: '4 min',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=506,h=530,fit=crop/mk39w0PZ1DIe7Dp6/dalla-e-2024-08-18-18.17.29---a-futuristic-digital-image-resembling-a-chatbot-with-a-sleek-and-modern-interface.-the-design-features-glowing-neon-elements-in-dark-green-0a6900-m2WQGvBpDliVrZkN.webp'
  },
  {
    id: 'prompt-engineering-come-sfruttare-al-110percent-lai',
    title: "Prompt Engineering: come sfruttare al 110% l'AI",
    excerpt: "Il prompt engineering è essenziale per sfruttare al meglio l'AI. Scopri come migliorare la precisione di ChatGPT, automazioni e altri strumenti con prompt efficaci.",
    date: '2024-09-10',
    readTime: '2 min',
    image: '/src/images/prompt.png',  
  },
  {
    id: 'gpt-4o-openai-lancia-il-nuovo-modello',
    title: "GPT-o1: OpenAI Lancia il Nuovo Modello",
    excerpt: "OpenAI ha lanciato GPT-o1, un modello AI più veloce, economico e avanzato. Ideale per sviluppatori e aziende, ottimizza i progetti AI con prestazioni migliorate. In questo articolo, esploriamo le sue novità e vantaggi.",
    date: '2024-07-04',
    readTime: '2 min',
    image: 'https://www.editalo.pro/wp-content/uploads/2023/03/gpt-4-sera-verdadera-revolucion-sector-inteligencia-artificial-2934662-1024x576.webp',  
  }
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  
  // Ordina i post per data (più recenti prima)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  
  // Ottiene i post per la pagina corrente
  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-black via-black to-[#274f36]">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-20">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPosts().map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              onClick={scrollToTop}
              className="bg-black/40 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover article-cover mx-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>
                    {format(new Date(post.date), 'd MMMM yyyy', { locale: it })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginazione */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() => {
              setCurrentPage(prev => prev - 1);
              scrollToTop();
            }}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-[#274f36] hover:bg-[#1a3524]'
            } transition-colors`}
          >
            Precedente
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
            <button
              key={pageNum}
              onClick={() => {
                setCurrentPage(pageNum);
                scrollToTop();
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === pageNum 
                  ? 'bg-[#274f36]' 
                  : 'bg-black/40 hover:bg-[#274f36]/50'
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => {
              setCurrentPage(prev => prev + 1);
              scrollToTop();
            }}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-[#274f36] hover:bg-[#1a3524]'
            } transition-colors`}
          >
            Successivo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
