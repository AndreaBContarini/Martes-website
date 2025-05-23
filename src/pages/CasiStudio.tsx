import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const cases = [
  {
    id: 'automazione-rendicontazione-monni-srl',
    title: 'Automazione Rendicontazione Operativa con Agente WhatsApp',
    date: new Date('2025-05-15'),
    image: '/assets/logos/monni_SRL.png',
    testimonial: {
      quote: "Con l'agente conversazionale WhatsApp, abbiamo digitalizzato completamente il processo di rendicontazione, riducendo notevolmente il tempo necessario e garantendo una raccolta dati strutturata e puntuale.",
      author: 'Monni SRL',
      role: 'Azienda di Edilizia e Lavori Stradali',
    },
    content: `
      <h2>Introduzione</h2>
      <p>Monni SRL, leader nel settore dell'edilizia e dei lavori stradali, si è trovata ad affrontare una sfida comune a molte imprese del comparto: la gestione efficiente della rendicontazione giornaliera degli operai. La necessità di raccogliere informazioni dettagliate sulle attività svolte, l'utilizzo dei mezzi e la documentazione correlata, ha portato allo sviluppo di una soluzione innovativa basata su intelligenza artificiale e automazione.</p>
    `,
  },
  {
    id: 'automazione-ai-clinica-oculistica-santa-lucia',
    title: 'Automazione AI per la Clinica Oculistica Santa Lucia',
    //description: "La Clinica Oculistica Santa Lucia ha ottimizzato la gestione di appuntamenti ed email grazie all'AI e all'automazione di e AI, migliorando efficienza e servizio ai pazienti.",
    date: new Date('2025-03-20'),
    image: "https://www.clinicaoculisticasantalucia.it/images/logo-mobile.png",
    testimonial: {
      quote: "Grazie alle soluzioni Martes AI, la Clinica Oculistica Santa Lucia ha ridotto i tempi d'attesa, ottimizzato la gestione degli appuntamenti e automatizzato le email, risparmiando tempo prezioso e offrendo ai pazienti un'esperienza più fluida ed efficiente.",
      author: 'Dott. Mario Cipolla',
      role: 'Direttore Amministrativo',
    },
    content: `
      <h2>Introduzione</h2>
      <p>La Clinica Oculistica Santa Lucia di Cosenza si distingue per l'eccellenza nei servizi di assistenza oculistica. Tuttavia, come molte strutture sanitarie, affrontava problemi nella gestione degli appuntamenti, nello smistamento delle email e nell'ottimizzazione delle comunicazioni con i pazienti. Per risolvere queste sfide, Martws AI ha implementato soluzioni basate su intelligenza artificiale e automazione, migliorando l'efficienza operativa e l'esperienza utente.</p>
    `,
  },
  {
    id: 'agente-ai-newsletter-scientifica-shape-up',
    title: 'Agente AI Per una Newsletter Scientifica',
    //description: "Come un Agente AI ha automatizzato la produzione di newsletter scientifiche per Shape-UP, riducendo tempi di produzione e migliorando qualità dei contenuti.",
    date: new Date('2025-04-04'),
    image: "/assets/logos/shapeup.png",
    testimonial: {
      quote: "L'Agente AI di Martes AI ha rivoluzionato la nostra newsletter: contenuti scientifici affidabili e ben scritti, immagini professionali... il tutto a portata di un click",
      author: 'Davide Beccetti',
      role: 'CEO @ Shape-UP',
    },
    content: `
      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe 
          src="https://www.youtube.com/embed/qarwJCCqTmA" 
          title="Shape-UP Newsletter Automation Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `,
  },
  {
    id: '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group',
    title: "50 clienti in più al mese per un'agenzia di viaggio",
    //description: "Scopri come abbiamo fatto lead generation, aumentando notevolmente i guadagni di un'agenzia, con un sistema di automazione basato sull'AI",
    date: new Date('2024-09-09'),
    image:
      'https://viaggi.bluvacanze.it/wp-content/uploads/2021/03/Bluvacanze.png',
    testimonial: {
      quote:
        "Grazie al chatbot AI e alle automazioni integrate, riusciamo a gestire con efficacia 3000 contatti mensili su WhatsApp per attività di acquisizione e gestione clienti, generando un significativo incremento delle prenotazioni e un profitto mensile aggiuntivo di € 27.500 per l'agenzia.",
      author: 'Diego Vassalli',
      role: 'CEO We Travel Group',
    },
    content: `
      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe 
          src="https://www.youtube.com/embed/avrP3wm11KM" 
          title="WeTravel Group Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2 class="text-3xl font-bold mt-8 mb-4">Aumento dei ricavi mensili: +27.500€ con un Chatbot AI</h2>

      <h3 class="text-2xl font-bold mt-8 mb-4">Introduzione: Il Potere dell'Automazione AI</h3>
      <p>L'adozione delle nostre tecnologie basate sull'intelligenza artificiale ha portato un impatto significativo per una delle agenzie di viaggi. Grazie a questa automazione - che ora vedremo in dettaglio - l'agenzia ha visto un aumento dei ricavi mensili di circa 27.500€, ottimizzando l'utilizzo del proprio database di clienti e contatti per promuovere offerte di viaggio in modo efficace e personalizzato.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">Fase 1: Contattare 3.000 Utenti Tramite WhatsApp</h3>
      <p>La prima fase del progetto è stata dedicata a contattare circa 3.000 utenti, tra ex clienti e contatti già esistenti nel Google Contacts dell'agenzia. L'obiettivo principale era quello di ricoinvolgere questi contatti presentando nuove opportunità di viaggio e convertendo tali interazioni in vendite dirette o lead qualificati.</p>

      <h4 class="text-xl font-bold mt-6 mb-3">1. Installazione e Addestramento del Chatbot Basato su AI</h4>
      <p>Abbiamo creato e addestrato un chatbot intelligente, integrato su WhatsApp, con la capacità di:</p>
      <ul class="list-disc pl-6 mt-4 mb-4">
        <li>Inviare automaticamente locandine e messaggi promozionali a tutti i contatti.</li>
        <li>Rispondere in tempo reale ed immediato a richieste di informazioni.</li>
        <li>Gestire le preferenze degli utenti, come la disiscrizione dalla lista contatti o il reindirizzamento della chat ad un membro del team.</li>
      </ul>

      <h4 class="text-xl font-bold mt-6 mb-3">2. Campagna Promozionale ed Interazione Dinamica con l'Utente</h4>
      <p>Il chatbot ha quindi inviato una serie di locandine promozionali contenenti destinazioni multiple per diverse stagioni, date e dettagli base sui pacchetti di viaggio, come quelle che mostriamo qui, a titolo di esempio.</p>

      <div class="flex justify-center gap-8 my-8">
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=409,fit=crop/mk39w0PZ1DIe7Dp6/kenya-ALpo4xMbXwSnMXBq.jpg" alt="Kenya Travel" class="w-1/3 rounded-lg shadow-lg" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=409,fit=crop/mk39w0PZ1DIe7Dp6/sharm-YleyRpge4MTDr1p7.jpg" alt="Sharm el-Sheikh Travel" class="w-1/3 rounded-lg shadow-lg" />
      </div>

      <h4 class="text-xl font-bold mt-6 mb-3">Risultati della Fase 1</h4>
      <ul class="list-disc pl-6 mt-4 mb-4">
        <li>Conversione in lead: il 4% degli utenti contattati è diventato un lead qualificato, acquistando un pacchetto viaggi.</li>
        <li>Conversazioni avviate: il 12% dei contattati ha avviato una conversazione con il chatbot.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-8 mb-4">Fase 2: Potenziamento del Chatbot e Personalizzazione Avanzata</h3>
      <p>Dopo il successo della prima fase, abbiamo ulteriormente migliorato il chatbot, rendendolo capace di gestire una gamma di interazioni molto più ampia. Il passo successivo è stato fondamentale per aumentare l'efficacia del sistema e offrire un livello superiore di personalizzazione per ogni utente.</p>

      <h4 class="text-xl font-bold mt-6 mb-3">1. Potenziamento del Chatbot con Modelli LLM</h4>
      <p>Abbiamo integrato all'interno del software utilizzato per la creazione e l'addestramento del chatbot modelli linguistici di grandi dimensioni (LLM), come ad esempio ChatGPT, per migliorare le capacità di risposta. Grazie all'uso di questi modelli e all'inserimento di prompt mirati e studiati, il chatbot ora può rispondere in maniera naturale e precisa a quasi ogni domanda posta dall'utente.</p>

      <h4 class="text-xl font-bold mt-6 mb-3">2. Suggerimenti Personalizzati in Base alle Esigenze dell'Utente</h4>
      <p>Un ulteriore miglioramento consiste nella capacità del chatbot di suggerire destinazioni specifiche basandosi su una serie di parametri forniti dall'utente. Per esempio, dalla chat automatizzata, l'agenzia è ora in grado di:</p>
      <ul class="list-disc pl-6 mt-4 mb-4">
        <li>Consigliare destinazioni a seconda del paese, del periodo dell'anno, del budget disponibile e della presenza di bambini o altre esigenze particolari.</li>
        <li>Offrire opzioni di viaggio personalizzate in base agli interessi espressi dall'utente, come vacanze al mare, in montagna o in città d'arte.</li>
      </ul>

      <h4 class="text-xl font-bold mt-6 mb-3">3. Registrazione e Gestione delle Informazioni</h4>
      <p>Tutte le informazioni fornite dagli utenti durante l'interazione con il chatbot vengono automaticamente registrate e inviate al team in modo chiaro e organizzato: i dati raccolti vengono inviati tramite email o messaggio ai membri del team dell'agenzia e le informazioni sono inoltre archiviate in un Google Sheet, facilitando la gestione centralizzata dei lead.</p>

      <p class="mt-4">Grazie a questo flusso ottimizzato, il team può contattare direttamente i clienti interessati per finalizzare l'acquisto del pacchetto viaggi, garantendo un passaggio agevole e senza interruzioni tra il chatbot e il servizio clienti umano.</p>

      <div class="bg-black/20 p-6 rounded-lg mt-8">
        <p class="font-semibold">Nota: Nel mese di ottobre 2024 il sistema è stato in grado di generare €82.170, di seguito uno screenshot di alcuni contratti:</p>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=549,fit=crop/mk39w0PZ1DIe7Dp6/whatsapp-image-2024-11-01-at-23.22.10-A3Qw77Ok5PfMMzGy.jpeg" alt="Contratti" class="w-full mt-4 rounded-lg shadow-lg" />
      </div>
    `,
  },
  {
      id: 'supporto-clienti-ai-e-tracciamento-ordini-dinamico-per-un-ecommerce',
      title: 'Supporto Clienti AI e Tracciamento Ordini Dinamico per Ecommerce',
      //description: "AI su misura per eCommerce: una soluzione pensata per automatizzare la gestione delle richieste ripetitive e migliorare l'efficienza operativa.",
      date: new Date('2024-07-18'),
      image:
        '/assets/logos/ecommerceparts.png',
      testimonial: {
        quote: "Grazie a Martes AI, abbiamo rivoluzionato il nostro servizio clienti. Il loro chatbot AI su WhatsApp ha ridotto drasticamente il numero di email giornaliere, permettendoci di rispondere ai clienti in tempo reale e di concentrarci su attività strategiche. Un'implementazione efficace che ha migliorato efficienza e soddisfazione del cliente.",
        author: 'Giuseppe Romano',
        role: 'CEO Ecommerceparts',
      },
      content: `
        <div class="aspect-w-16 aspect-h-9 mb-8">
          <iframe 
            src="https://www.youtube.com/watch?v=e-wBAxcebsE" 
            title="Ecommerceparts Case Study"
            class="w-full h-[400px]"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `,
  },
{
      id: "generazione-di-lead-qualificati-via-linkedin",
      title: "Generazione di Lead Qualificati via LinkedIn",
      //: "Con Martes AI e Dripify ho generato lead qualificati, automatizzato i contenuti e ottenuto risultati concreti in pochi giorni.",
      date: new Date('2025-01-31'),
      image: '/assets/logos/fantozzi.png',
      testimonial: {
        quote: "Grazie a Martes AI, ho trasformato LinkedIn in una fonte di nuovi clienti senza perdere tempo. In pochi giorni ho ottenuto contatti qualificati e già acquisito un cliente. Strategia efficace e zero sforzo!",
        author: 'Edoardo Belli Contarini',
        role: 'Partner presso Studio Legale Fantozzi & Associati',
      },
      content: `
        <div class="aspect-w-16 aspect-h-9 mb-8">
          <iframe 
            src="https://www.youtube.com/embed/30iApbt6wMo" 
            title="Fantozzi Case Study"
            class="w-full h-[400px]"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `,
  },
  {
    id: "custom-gpt-email",
    title: "Agente GPT per rispondere alle mail e riassumere AI-news",
    //: "Martes AI ha sviluppato un sistema GPT per automatizzare le risposte email e fornire nes su tema AI,  migliorando l'efficienza comunicativa, integrando Make e Zapier",
    date: new Date('2025-02-13'),
    image: '/assets/logos/federico-loffredo.png',
    testimonial: {
      quote: "Ho chiesto due GPT personalizzati: uno per la gestione automatica delle email e uno per riassumere le ultime news sull'AI. Hanno fatto un lavoro eccellente e professionale. Consigliatissimi!",
      author: 'Federico Loffredo',
      role: 'Commercialista',
    },
    content: `
      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe 
          src="https://www.youtube.com/embed/cnmfmvFPszc" 
          title="Loffredo Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

    `,
}

];

function CasiStudio() {
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 3;
  const location = useLocation();
  
  // Effetto per scrollare all'inizio della pagina quando viene caricata o quando cambia l'URL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Funzione per scrollare in cima alla pagina
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ordina i casi studio per data (dal più recente)
  const sortedCases = cases.sort((a, b) => b.date.getTime() - a.date.getTime());
  
  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(sortedCases.length / casesPerPage);
  
  // Ottiene i casi studio per la pagina corrente
  const getCurrentCases = () => {
    const startIndex = (currentPage - 1) * casesPerPage;
    return sortedCases.slice(startIndex, startIndex + casesPerPage);
  };

  // Gestisce il cambio pagina
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Assicuriamoci che lo scroll to top avvenga sempre
    setTimeout(() => {
      scrollToTop();
    }, 10);
  };

  return (
    <div className="pt-32 pb-20">
      <SEOHead 
        title="Casi Studio | Martes AI - Storie di Successo nell'Implementazione di Soluzioni AI"
        description="Esplora i nostri casi studio: esempi concreti di come l'intelligenza artificiale ha trasformato il business dei nostri clienti. ROI misurabile, automazione efficiente e crescita aziendale."
        canonicalUrl="https://martes-ai.com/casi-studio"
        ogImage="/dist/assets/favicon-D1fAACaT.png"
        pageType="article"
        schemaType="WebPage"
        structuredData={{
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://martes-ai.com/casi-studio"
          },
          "about": {
            "@type": "Thing",
            "name": "Casi studio di successo nell'implementazione AI"
          },
          "itemListElement": cases.map((caseStudy, index) => ({
            "@type": "Article",
            "position": index + 1,
            "url": `https://martes-ai.com/casi-studio/${caseStudy.id}`,
            "name": caseStudy.title,
            "author": {
              "@type": "Organization",
              "name": "Martes AI"
            },
            "datePublished": caseStudy.date.toISOString(),
            "image": caseStudy.image
          }))
        }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Casi Studio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentCases().map((caseStudy) => (
            <Link
              key={caseStudy.id}
              to={`/casi-studio/${caseStudy.id}`}
              onClick={scrollToTop}
              className="bg-black/30 rounded-lg overflow-hidden hover:bg-black/40 transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-contain article-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer bg-white p-4 rounded-t-lg mx-auto"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>
                    {format(caseStudy.date, 'd MMMM yyyy', {
                      locale: it,
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">{caseStudy.title}</h2>
                <div className="mt-6 p-4 bg-black/20 rounded-lg">
                  <p className="text-sm italic text-gray-300">
                    {caseStudy.testimonial.quote}
                  </p>
                  <p className="mt-2 text-sm text-[#274f36]">
                    - {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-[#274f36] disabled:opacity-50"
            >
              Precedente
            </button>
            
            {/* Logica di paginazione secondo le regole specificate */}
            {totalPages <= 3 ? (
              // Se ci sono 3 o meno pagine totali, mostra tutte le pagine
              Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentPage === page 
                    ? 'bg-[#274f36]' 
                    : 'bg-black/30 hover:bg-[#274f36]/70'
                }`}
                  aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
              ))
            ) : (
              // Se ci sono più di 3 pagine totali
              <>
                {/* CASO 1: Prima pagina */}
                {currentPage === 1 && (
                  <>
                    {/* Prima pagina (corrente) */}
                    <button
                      key={1}
                      onClick={() => handlePageChange(1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#274f36]"
                      aria-current="page"
                    >
                      1
                    </button>
                    
                    {/* Seconda pagina */}
                    <button
                      key={2}
                      onClick={() => handlePageChange(2)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      2
                    </button>
                    
                    {/* Puntini di sospensione (se ci sono più di 3 pagine) */}
                    {totalPages > 3 && (
                      <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                        ...
                      </span>
                    )}
                    
                    {/* Ultima pagina */}
                    <button
                      key={totalPages}
                      onClick={() => handlePageChange(totalPages)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                {/* CASO 2: Ultima pagina */}
                {currentPage === totalPages && (
                  <>
                    {/* Prima pagina */}
                    <button
                      key={1}
                      onClick={() => handlePageChange(1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      1
                    </button>
                    
                    {/* Puntini di sospensione (se ci sono più di 3 pagine) */}
                    {totalPages > 3 && (
                      <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                        ...
                      </span>
                    )}
                    
                    {/* Penultima pagina */}
                    <button
                      key={totalPages - 1}
                      onClick={() => handlePageChange(totalPages - 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      {totalPages - 1}
                    </button>
                    
                    {/* Ultima pagina (corrente) */}
                    <button
                      key={totalPages}
                      onClick={() => handlePageChange(totalPages)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#274f36]"
                      aria-current="page"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                {/* CASO 3: Pagina intermedia */}
                {currentPage > 1 && currentPage < totalPages && (
                  <>
                    {/* Prima pagina (se non siamo vicini all'inizio) */}
                    {currentPage > 2 && (
                      <>
                        <button
                          key={1}
                          onClick={() => handlePageChange(1)}
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                        >
                          1
                        </button>
                        
                        {/* Puntini di sospensione a sinistra */}
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                          ...
                        </span>
                      </>
                    )}
                    
                    {/* Pagina precedente */}
                    <button
                      key={currentPage - 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      {currentPage - 1}
                    </button>
                    
                    {/* Pagina corrente */}
                    <button
                      key={currentPage}
                      onClick={() => handlePageChange(currentPage)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#274f36]"
                      aria-current="page"
                    >
                      {currentPage}
                    </button>
                    
                    {/* Pagina successiva */}
                    <button
                      key={currentPage + 1}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                    >
                      {currentPage + 1}
                    </button>
                    
                    {/* Puntini di sospensione a destra e ultima pagina (se non siamo vicini alla fine) */}
                    {currentPage < totalPages - 1 && (
                      <>
                        {/* Puntini di sospensione a destra */}
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                          ...
                        </span>
                        
                        {/* Ultima pagina */}
                        <button
                          key={totalPages}
                          onClick={() => handlePageChange(totalPages)}
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 hover:bg-[#274f36]/70"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-[#274f36] disabled:opacity-50"
            >
              Successivo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CasiStudio;