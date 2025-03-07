import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { useState } from 'react';

const cases = [
  {
    id: '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group',
    title: '50 clienti in più al mese - agenzia di viaggio WeTravel Group',
    description: "Scopri come abbiamo fatto lead generation, aumentando notevolmente i guadagni di un'agenzia, con un sistema di automazione basato sull'AI",
    date: new Date('2024-09-09'),
    image:
      'https://i.ibb.co/nPq0dkr/PHOTO-2024-08-17-13-31-51-removebg-preview.png',
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
        <p class="font-semibold">Nota: Nel mese di ottobre 2024 il sistema è stato in grado di generare circa €75.000, di seguito uno screenshot di alcuni contratti:</p>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=549,fit=crop/mk39w0PZ1DIe7Dp6/whatsapp-image-2024-11-01-at-23.22.10-A3Qw77Ok5PfMMzGy.jpeg" alt="Contratti" class="w-full mt-4 rounded-lg shadow-lg" />
      </div>
    `,
  },
  {
      id: 'supporto-clienti-ai-e-tracciamento-ordini-dinamico-per-un-ecommerce',
      title: 'Supporto Clienti AI e Tracciamento Ordini Dinamico per Ecommerce',
      description: "Un Sistema su Misura per l'Efficienza Operativa: scopri come abbiamo sviluppato una soluzione basata su intelligenza artificiale per un ecommerce che risolve uno dei problemi più comuni per questo tipo di attività: la gestione delle richieste ripetitive dei clienti",
      date: new Date('2024-07-18'),
      image:
        'https://i.ibb.co/BtPCmvC/ecommerceparts-removebg-preview.png',
      testimonial: {
        quote:
          "Grazie al chatbot AI e alle automazioni integrate, riusciamo a gestire con efficacia 3000 contatti mensili su WhatsApp per attività di acquisizione e gestione clienti, generando un significativo incremento delle prenotazioni e un profitto mensile aggiuntivo di € 27.500 per l'agenzia.",
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
      description: "Un Sistema su Misura per l'Efficienza Operativa: scopri come abbiamo sviluppato una soluzione basata su intelligenza artificiale per un ecommerce che risolve uno dei problemi più comuni per questo tipo di attività: la gestione delle richieste ripetitive dei clienti",
      date: new Date('2025-01-31'),
      image: 'https://i.ibb.co/7J3hBFy/fantozzi2-removebg-preview.png',
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
    description: "Un Sistema su Misura per l'Efficienza Operativa: scopri come abbiamo sviluppato una soluzione basata su intelligenza artificiale per un ecommerce che risolve uno dei problemi più comuni per questo tipo di attività: la gestione delle richieste ripetitive dei clienti",
    date: new Date('2025-02-13'),
    image: 'https://i.ibb.co/KzNTDF0D/loffredo.jpg',
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

  return (
    <div className="pt-32 pb-20">
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
                <p className="text-gray-300">{caseStudy.description}</p>
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
                setCurrentPage(prev => Math.max(prev - 1, 1));
                scrollToTop();
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-[#274f36] disabled:opacity-50"
            >
              Precedente
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  scrollToTop();
                }}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page 
                    ? 'bg-[#274f36]' 
                    : 'bg-black/30 hover:bg-[#274f36]/70'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(Math.min(prev + 1, totalPages), 1));
                scrollToTop();
              }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-[#274f36] disabled:opacity-50"
            >
              Successiva
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CasiStudio;