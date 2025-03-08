import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

// Semplifichiamo gli URL delle immagini e usiamo immagini più leggere
const posts = [
  {
    id: 'deepseek-alternativa-open-source-a-chatgpt-e-gemini',
    title: "DeepSeek: L'Alternativa Open Source a ChatGPT e Gemini",
    excerpt:
      'Analisi approfondita di DeepSeek, la sua natura open source, i costi delle API e le principali differenze rispetto ai concorrenti come ChatGPT e Gemini.',
    date: '2025-02-01',
    readTime: '2 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=DeepSeek',
  },
  {
    id: 'gpt-la-rivoluzione-dellintelligenza-artificiale-nel-business',
    title: "GPT: La Rivoluzione dell'Intelligenza Artificiale nel Business",
    excerpt: 'Scopri come i modelli GPT stanno trasformando il business, ottimizzando processi e creando nuove opportunità nel mondo digitale.',
    date: '2024-12-9',
    readTime: '3 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=GPT',
  },
  {
    id: 'cold-emailing-nuovi-clienti',
    title: 'Cold Emailing: Strategie per Aumentare i Tassi di Risposta',
    excerpt: 'In questo breve articolo parliamo di come ottimizzare le cosiddette "cold email" per ottenere ottimi risultati e feedback da potenziali nuovi clienti.',
    date: '2024-10-09',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Cold+Email',
  },
  {
    id: 'chatbot-ai-e-assistenti-vocali-la-nuova-frontiera-del-customer-service',
    title: 'Chatbot AI e Assistenti Vocali: La Nuova Frontiera del Customer Service',
    excerpt: "Grazie all'intelligenza artificiale e ai modelli linguistici avanzati (LLM) come GPT-4, i chatbot moderni offrono assistenza personalizzata, migliorano il servizio clienti e ottimizzano l'efficienza aziendale",
    date: '2024-11-29',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Chatbot',
  },
  {
    id: 'prompt-engineering-come-sfruttare-al-110percent-lai',
    title: "Prompt Engineering: come sfruttare al 110% l'AI",
    excerpt: "Il prompt engineering è essenziale per sfruttare al meglio l'AI. Scopri come migliorare la precisione di ChatGPT, automazioni e altri strumenti con prompt efficaci.",
    date: '2024-09-10',
    readTime: '2 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Prompt+Engineering',  
  },
  {
    id: 'gpt-4o-openai-lancia-il-nuovo-modello',
    title: "GPT-o1: OpenAI Lancia il Nuovo Modello",
    excerpt: "OpenAI ha lanciato GPT-o1, un modello AI più veloce, economico e avanzato. Ideale per sviluppatori e aziende, ottimizza i progetti AI con prestazioni migliorate. In questo articolo, esploriamo le sue novità e vantaggi.",
    date: '2024-07-04',
    readTime: '2 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=GPT-o1',  
  }
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 3;
  
  // Semplifichiamo il caricamento
  useEffect(() => {
    // Timeout breve per mostrare il caricamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Se sta caricando, mostra un indicatore di caricamento
  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-black w-full flex justify-center items-center">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-white">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {getCurrentPosts().map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              onClick={scrollToTop}
              className="bg-black/40 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 w-full border border-gray-800"
            >
              <div className="w-full">
                <div className="w-full h-48 bg-[#274f36]/20 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover article-cover mx-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback per immagini non caricate
                      e.currentTarget.src = 'https://placehold.co/600x400/274f36/FFFFFF?text=Martes+AI';
                    }}
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>
                    {format(new Date(post.date), 'd MMMM yyyy', { locale: it })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">{post.title}</h2>
                <p className="text-gray-300 text-sm md:text-base">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginazione */}
        <div className="flex justify-center items-center mt-10 md:mt-12 gap-2 md:gap-4">
          <button
            onClick={() => {
              setCurrentPage(prev => Math.max(prev - 1, 1));
              scrollToTop();
            }}
            disabled={currentPage === 1}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base ${
              currentPage === 1 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-[#274f36] hover:bg-[#1a3524]'
            } transition-colors text-white`}
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
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base transition-colors ${
                currentPage === pageNum 
                  ? 'bg-[#274f36]' 
                  : 'bg-black/40 hover:bg-[#274f36]/50'
              } text-white`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => {
              setCurrentPage(prev => Math.min(prev + 1, totalPages));
              scrollToTop();
            }}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base ${
              currentPage === totalPages 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-[#274f36] hover:bg-[#1a3524]'
            } transition-colors text-white`}
          >
            Successivo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;