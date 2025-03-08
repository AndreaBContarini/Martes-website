import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

// Definizione dei post del blog con immagini statiche e leggere
const blogPosts = [
  {
    id: 'deepseek-alternativa-open-source-a-chatgpt-e-gemini',
    title: "DeepSeek: L'Alternativa Open Source a ChatGPT e Gemini",
    excerpt: 'Analisi approfondita di DeepSeek, la sua natura open source, i costi delle API e le principali differenze rispetto ai concorrenti come ChatGPT e Gemini.',
    date: '2025-02-01',
    readTime: '2 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=DeepSeek',
  },
  {
    id: 'gpt-la-rivoluzione-dellintelligenza-artificiale-nel-business',
    title: "GPT: La Rivoluzione dell'Intelligenza Artificiale nel Business",
    excerpt: 'Scopri come i modelli GPT stanno trasformando il business, ottimizzando processi e creando nuove opportunità nel mondo digitale.',
    date: '2024-12-09',
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
    excerpt: "OpenAI ha lanciato GPT-o1, un modello AI più veloce, economico e avanzato. Ideale per sviluppatori e aziende, ottimizza i progetti AI con prestazioni migliorate.",
    date: '2024-07-04',
    readTime: '2 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=GPT-o1',  
  }
];

const Blog2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 3;
  const location = useLocation();

  // Effetto per scrollare all'inizio della pagina quando viene caricata o quando cambia l'URL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Effetto per simulare il caricamento
  useEffect(() => {
    // Breve timeout per mostrare il caricamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Funzione per scorrere in cima alla pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Ordina i post per data (più recenti prima)
  const sortedPosts = [...blogPosts].sort((a, b) => 
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

  // Gestisce il cambio pagina
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // Gestisce il pulsante precedente
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  // Gestisce il pulsante successivo
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  // Mostra il loader durante il caricamento
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Blog</h1>
        
        {/* Griglia dei post */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentPosts().map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-black/30 rounded-lg overflow-hidden border border-gray-800 hover:border-[#274f36] transition-all duration-300 flex flex-col h-full"
            >
              {/* Contenitore dell'immagine */}
              <div className="relative w-full h-48 bg-[#274f36]/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/274f36/FFFFFF?text=Martes+AI';
                  }}
                />
              </div>
              
              {/* Contenuto del post */}
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>
                    {format(new Date(post.date), 'd MMMM yyyy', { locale: it })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
                <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="mt-auto">
                  <span className="text-[#274f36] font-medium hover:underline">
                    Leggi l'articolo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-[#274f36] hover:bg-[#1a3524]'
              } text-white transition-colors`}
              aria-label="Pagina precedente"
            >
              Precedente
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  currentPage === pageNum 
                    ? 'bg-[#274f36] text-white' 
                    : 'bg-black/30 text-white hover:bg-[#274f36]/50'
                }`}
                aria-label={`Pagina ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </button>
            ))}
            
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-[#274f36] hover:bg-[#1a3524]'
              } text-white transition-colors`}
              aria-label="Pagina successiva"
            >
              Successivo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog2; 