import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

import SEOHead from '../components/SEOHead';

// Definizione dei post del blog con immagini statiche e leggere
const blogPosts = [
  {
    id: 'ai-italia-framework-eid',
    title: "L'AI in Italia: Dal \"Se\" al \"Come\" con il Framework EID",
    excerpt: "L'intelligenza artificiale nelle aziende italiane non è più una questione di se implementarla, ma di come farlo nel modo giusto. Scopri il Framework EID per implementazioni AI di successo.",
    date: '2025-08-18',
    readTime: '9 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Framework+EID',
  },
  {
    id: 'gpt-41-nuovo-standard-agenti-ai',
    title: "GPT-4.1: Il Nuovo Standard per gli Agenti AI",
    excerpt: "Scopri come GPT-4.1 rivoluziona la creazione di agenti AI grazie al contesto da 1 milione di token, prestazioni superiori e costi ridotti. Un vero game changer per sviluppatori e aziende.",
    date: '2025-04-01',
    readTime: '8 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=GPT-4.1',
  },
  {
    id: 'mcp-ponte-tra-ai-e-dati-esterni',
    title: "MCP: Il Ponte tra AI e Dati Esterni",
    excerpt: "MCP (Model Context Protocol) è un nuovo standard aperto che rivoluziona il modo in cui gli agenti AI si connettono alle fonti di dati esterne, permettendo agli LLM di interagire facilmente con database, API e altri servizi esterni tramite un protocollo standardizzato.",
    date: '2025-03-25',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=MCP',
  },
  {
    id: 'manus-ai-agente-autonomo-rivoluzionario',
    title: "Manus AI: L'agente Autonomo che Sta Rivoluzionando l'AI",
    excerpt: "Scopri Manus AI, l'agente autonomo cinese che esegue compiti complessi senza supervisione umana, segnando un passo verso l'intelligenza artificiale generale (AGI). Analisi delle caratteristiche, impatto sul settore e collaborazioni strategiche.",
    date: '2025-03-20',
    readTime: '6 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Manus+AI',
  },
  {
    id: '6-tool-ai-che-hanno-accelerato-il-nostro-business',
    title: "6 Tool AI Che Hanno Accelerato Il Nostro Business",
    excerpt: 'Scopri i sei strumenti di intelligenza artificiale che hanno permesso a Martes AI di generare 20.000€ in soli tre mesi. Dalla creazione di chatbot alla generazione di contenuti, ecco le soluzioni AI che stanno trasformando il nostro business.',
    date: '2025-03-15',
    readTime: '5 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=6+Tool+AI',
  },
  {
    id: 'claude-37-sonnet-intelligenza-artificiale-ibrida-rivoluzionaria',
    title: "Claude 3.7 Sonnet: L'Intelligenza Artificiale Ibrida Rivoluzionaria",
    excerpt: 'Anthropic ha lanciato Claude 3.7 Sonnet, un modello di intelligenza artificiale che introduce il "ragionamento ibrido", combinando risposte rapide con analisi approfondite. Scopri funzionalità, confronti e casi d\'uso ideali.',
    date: '2025-03-10',
    readTime: '4 min',
    image: 'https://placehold.co/600x400/274f36/FFFFFF?text=Claude+3.7',
  },
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
    // Assicuriamoci che lo scroll to top avvenga sempre
    setTimeout(() => {
      scrollToTop();
    }, 10);
  };

  // Gestisce il pulsante precedente
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Assicuriamoci che lo scroll to top avvenga sempre
      setTimeout(() => {
        scrollToTop();
      }, 10);
    }
  };

  // Gestisce il pulsante successivo
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Assicuriamoci che lo scroll to top avvenga sempre
      setTimeout(() => {
        scrollToTop();
      }, 10);
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
      <SEOHead 
        title="Blog Martes AI | News e Guide su Automazione AI, Chatbot e Intelligenza Artificiale"
        description="Esplora il nostro blog dedicato alle ultime novità nel campo dell'intelligenza artificiale. Articoli approfonditi su automazione AI, chatbot, GPT e strategie di implementazione per il business."
        canonicalUrl="https://martes-ai.com/blog"
        ogImage="/dist/assets/favicon-D1fAACaT.png"
        pageType="article"
        schemaType="BlogPosting"
        structuredData={{
          "mainEntityOfPage": {
            "@type": "CollectionPage",
            "@id": "https://martes-ai.com/blog"
          },
          "about": {
            "@type": "Thing",
            "name": "Articoli su Intelligenza Artificiale e Automazione"
          },
          "author": {
            "@type": "Organization",
            "name": "Martes AI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Martes AI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://martes-ai.com/dist/assets/favicon-D1fAACaT.png"
            }
          }
        }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Blog</h1>
        
        {/* Griglia dei post */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentPosts().map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-black/30 rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Contenitore dell'immagine */}
              <div className="relative w-full h-48 bg-emerald-500/10">
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
                  <span className="text-emerald-500 font-medium hover:underline">
                    Leggi l'articolo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-1 sm:gap-2 px-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                currentPage === 1 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-emerald-500 hover:bg-emerald-600'
              } text-white transition-colors`}
              aria-label="Pagina precedente"
            >
              Precedente
            </button>
            
            {/* Logica di paginazione ottimizzata: massimo 4 numeri visibili */}
            {(() => {
              const maxVisible = 4;
              let startPage, endPage;
              
              if (totalPages <= maxVisible) {
                // Se ci sono 4 o meno pagine totali, mostra tutte
                startPage = 1;
                endPage = totalPages;
              } else {
                // Calcola la finestra di 4 pagine centrata sulla pagina corrente
                const halfWindow = Math.floor(maxVisible / 2);
                startPage = Math.max(1, currentPage - halfWindow);
                endPage = Math.min(totalPages, startPage + maxVisible - 1);
                
                // Aggiusta se siamo vicini alla fine
                if (endPage - startPage + 1 < maxVisible) {
                  startPage = Math.max(1, endPage - maxVisible + 1);
                }
              }
              
              const pages = [];
              
              // Puntini iniziali se necessario
              if (startPage > 1) {
                pages.push(
                                    <span key="start-ellipsis" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 text-sm sm:text-base">
                          ...
                        </span>
                );
              }
                    
              // Pagine numeriche
              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base ${
                      currentPage === i 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-black/30 text-white hover:bg-emerald-500/50'
                    }`}
                    aria-label={`Pagina ${i}`}
                    aria-current={currentPage === i ? 'page' : undefined}
                  >
                    {i}
                    </button>
                );
              }
              
              // Puntini finali se necessario
              if (endPage < totalPages) {
                pages.push(
                                    <span key="end-ellipsis" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 text-sm sm:text-base">
                          ...
                        </span>
                );
              }
              
              return pages;
            })()}
            
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                currentPage === totalPages 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-emerald-500 hover:bg-emerald-600'
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