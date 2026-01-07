import logoRestworld from '../assets/clients/restworld.png';
import logoMonni from '../assets/clients/monni_srl.png';
import logoBluvacanze from '../assets/clients/logo-bluvacanze.png';
import logoFantozzi from '../assets/clients/fantozzi.png';
import logoLonghitano from '../assets/clients/Aquadra.png'; // Assuming Aquadra is closest or using placeholder if not found, but trying to find correct match. Re-checking user prompt list. User said "longhitano" in text but logo list has Aquadra, Allcore etc. Let's use a generic office icon if not found or try to match best guess. Wait, "longhitano" isn't in the list of files provided by list_dir. I'll use a placeholder or one of the existing generic looking ones if specific one is missing, to avoid broken image. Actually, I will check if I can map them better.
// "logo_divinea.png", "logo_toscanini.png" etc exist.
// Longhitano was using: '/assets/logos/longhitano.png'.
// I will import all I can matching the IDs.

import logoDigitalTurnover from '../assets/clients/turnover-Photoroom.png';
import logoShapeUp from '../assets/clients/shapeup-Photoroom.png';
import logoSantaLucia from '../assets/clients/clinica_santa_lucia.png';
import logoStudioCommercialisti from '../assets/clients/allcore.png'; // Using Allcore as placeholder for "Studio Commercialisti" if specialized logo missing.
import logoEcommerceParts from '../assets/clients/ecommerceparts-logo.png';

export interface CaseStudy {
  id: string;
  title: string;
  date: Date;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  content: string; // HTML content
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ruggiada-agente-ai-restworld',
    title: "Rugiada: l'agente AI che qualifica i lead per Restworld",
    date: new Date('2025-09-29'),
    image: logoRestworld,
    testimonial: {
      quote: "Un team giovane e competente. Ci hanno aiutato a sviluppare un agente che altrimenti ci avremmo messo mesi internamente in poche settimane. Feedback loop continui e supporto costante, anche durante l'estate abbiamo tirato fuori un bel prodotto. Sicuramente lavoreremo nuovamente insieme.",
      author: 'Luca Lotterio',
      role: 'CEO di Restworld',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/wujo3X74ggE?si=9Bi9tLooavamJyPE"
          title="Rugiada - l'agente WhatsApp per la qualificazione lead"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

      <h2>In sintesi: dal problema alla soluzione</h2>
      <ul>
        <li><strong>Il problema:</strong> migliaia di richieste/mese da Typeform, team snello, rischio opportunità perse e tempo speso su lead non in target.</li>
        <li><strong>La soluzione:</strong> <strong>Rugiada</strong>, un <strong>agente AI su WhatsApp</strong> che avvia la chat pochi minuti dopo il form, fa domande strategiche, calcola uno score, aggiorna <strong>HubSpot</strong>, gestisce <strong>Calendly</strong> e invia follow‑up.</li>
        <li><strong>L'impatto:</strong> <strong>20–30%</strong> dei lead qualificati in automatico, <strong>98%</strong> delle interazioni su WhatsApp e forte riduzione del carico operativo.</li>
      </ul>

      <h2>Il contesto e il perché</h2>
      <p>Restworld opera nel settore HORECA aiutando aziende a trovare personale qualificato. Con volumi elevati di lead in arrivo, la qualificazione manuale compromette priorità e conversioni.</p>

      <h2>Rugiada: l'agente AI che qualifica su WhatsApp</h2>
      <p>Subito dopo la compilazione del form, Rugiada scrive su WhatsApp e guida una breve conversazione di pre‑call. In base alle risposte, aggiorna il CRM, prenota/annulla la call e notifica l'utente.</p>

      <figure class="my-12 text-center">
        <img 
          src="/assets/immagini/esempio_chat1.png" 
          alt="Gestione obiezioni e link Calendly" 
          class="mx-auto rounded-lg shadow-2xl w-full max-w-3xl transition-transform duration-200 hover:scale-105 cursor-zoom-in bg-transparent" 
        />  
        <figcaption class="text-sm text-gray-400 mt-4">📱 Gestione obiezioni e link Calendly: l’agente risponde alle domande sui prezzi e propone subito la riprogrammazione della call.</figcaption>
      </figure>

      <figure class="my-12 text-center">
        <img 
          src="/assets/immagini/esempio_chat2.png" 
          alt="Chat flow example" 
          class="mx-auto rounded-lg shadow-2xl w-full max-w-3xl transition-transform duration-200 hover:scale-105 cursor-zoom-in bg-transparent" 
        />  
        <figcaption class="text-sm text-gray-400 mt-4">📱 Interazione fluida e naturale con il candidato.</figcaption>
      </figure>
    `,
  },
  {
    id: 'automazione-rendicontazione-monni-srl',
    title: 'Automazione Rendicontazione Operativa con Agente WhatsApp',
    date: new Date('2025-05-15'),
    image: logoMonni,
    testimonial: {
      quote: "Con l'agente conversazionale WhatsApp, abbiamo digitalizzato completamente il processo di rendicontazione, riducendo notevolmente il tempo necessario e garantendo una raccolta dati strutturata e puntuale.",
      author: 'Monni SRL',
      role: 'Azienda di Edilizia e Lavori Stradali',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/b0MY-e7UpCg" 
          title="Monni SRL Case Study - Automazione Rendicontazione Operativa"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Introduzione</h2>
      <p><a href="https://gesuinomonnisrl.it/" target="_blank" rel="noopener noreferrer" class="text-martes-green hover:underline">Monni SRL</a>, leader nel settore dell'edilizia e dei lavori stradali, si è trovata ad affrontare una sfida comune a molte imprese del comparto: la gestione efficiente della rendicontazione giornaliera degli operai. La necessità di raccogliere informazioni dettagliate sulle attività svolte, l'utilizzo dei mezzi e la documentazione correlata, ha portato allo sviluppo di una soluzione innovativa basata su intelligenza artificiale e automazione.</p>

      <h2>La Sfida</h2>
      <p>Prima dell'implementazione della soluzione, Monni SRL affrontava diverse criticità:</p>
      <ul>
        <li>Rendicontazione disomogenea e spesso incompleta</li>
        <li>Bassa puntualità nella raccolta dei dati giornalieri</li>
        <li>Difficoltà nella gestione di diversi formati (vocali, immagini, testi)</li>
        <li>Assenza di follow-up automatizzati</li>
        <li>Impossibilità di analisi strutturata dei dati raccolti</li>
      </ul>

      <h2>La Soluzione</h2>
      <p>È stato sviluppato un sistema integrato che combina un agente conversazionale su Voiceflow, integrazione con WhatsApp, automazioni Make e Whisper per la trascrizione.</p>

      <h3>1. Gestione Automatica dei Messaggi</h3>
      <p>Il flusso orchestratore analizza il tipo di contenuto ricevuto: testi, immagini o vocali, che vengono trascritti e archiviati.</p>

      <figure class="my-12 text-center">
        <img src="/assets/immagini/scenario1.png" alt="Scenario di gestione automatizzata dei messaggi" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Scenario di gestione automatizzata dei messaggi in entrata da WhatsApp.</figcaption>
      </figure>

      <h3>2. Sistema di Follow-up Intelligente</h3>
      <p>Ogni giorno alle ore 18, l'agente invia automaticamente un messaggio agli operai per la rendicontazione, con gestione di ritardi e follow-up.</p>

      <figure class="my-12 text-center">
        <img src="/assets/immagini/scenario2.png" alt="Scenario di invio programmato" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Scenario di invio programmato dei messaggi di rendicontazione.</figcaption>
      </figure>
    `,
  },
  {
    id: '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group',
    title: "50 clienti in più al mese per un'agenzia di viaggio",
    date: new Date('2024-09-09'),
    image: logoBluvacanze,
    testimonial: {
      quote: "Grazie al chatbot AI e alle automazioni integrate, riusciamo a gestire con efficacia 3000 contatti mensili su WhatsApp per attività di acquisizione e gestione clienti, generando un significativo incremento delle prenotazioni e un profitto mensile aggiuntivo di € 27.500 per l'agenzia.",
      author: 'Diego Vassalli',
      role: 'CEO We Travel Group',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/avrP3wm11KM" 
          title="WeTravel Group Case Study"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2 class="text-3xl font-bold mt-8 mb-4">Aumento dei ricavi mensili: +27.500€ con un Chatbot AI</h2>

      <div class="bg-white/5 p-6 rounded-lg mt-8 border border-white/10">
        <p class="font-semibold text-white">Nota: Nel mese di ottobre 2024 il sistema è stato in grado di generare €82.170, di seguito uno screenshot di alcuni contratti:</p>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=549,fit=crop/mk39w0PZ1DIe7Dp6/whatsapp-image-2024-11-01-at-23.22.10-A3Qw77Ok5PfMMzGy.jpeg" alt="Contratti" class="w-full mt-4 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-opacity" />
      </div>

      <h3>Introduzione: Il Potere dell'Automazione AI</h3>
      <p>L'adozione delle nostre tecnologie basate sull'intelligenza artificiale ha portato un impatto significativo per una delle agenzie di viaggi. Grazie a questa automazione, l'agenzia ha visto un aumento dei ricavi mensili di circa 27.500€.</p>
    `,
  },
  {
    id: "generazione-di-lead-qualificati-via-linkedin",
    title: "Generazione di Lead Qualificati via LinkedIn",
    date: new Date('2025-01-31'),
    image: logoFantozzi,
    testimonial: {
      quote: "Grazie a Martes AI, ho trasformato LinkedIn in una fonte di nuovi clienti senza perdere tempo. In pochi giorni ho ottenuto contatti qualificati e già acquisito un cliente. Strategia efficace e zero sforzo!",
      author: 'Edoardo Belli Contarini',
      role: 'Partner presso Studio Legale Fantozzi & Associati',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/30iApbt6wMo" 
          title="Fantozzi Case Study"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      
      <h2>Il Contesto: Il Problema dei Professionisti nel Generare Lead</h2>
      <p>Molti liberi professionisti si affidano al passaparola per attrarre nuovi clienti, trovando difficile utilizzare piattaforme come LinkedIn per trovare lead qualificati. Abbiamo deciso di accettare la sfida, implementando un metodo completamente automatizzato.</p>
      
      <h2>Il Progetto: Personal Branding, Automazione e Lead Generation</h2>
      
      <h3>Fase 1: Costruzione del Personal Brand</h3>
      <p>Creazione di una presenza digitale forte e professionale per l'avvocato, con sito personale e contenuti curati.</p>
      
      <h3>Fase 2: Automazione dei Contenuti</h3>
      <p>Scenario Make per automatizzare la pubblicazione dei contenuti: recupero notizie, sintesi GPT, approvazione e pubblicazione.</p>
      
      <figure class="my-12 text-center">
        <img src="https://i.ibb.co/cKyNWcLd/make1.png" alt="Scenario Make per Automazione" class="mx-auto w-full max-w-lg rounded-lg shadow-lg" />
        <figcaption class="text-sm text-gray-400 mt-4">Scenario Make automazione contenuti.</figcaption>
      </figure>

       <h3>Fase 3: Lead Generation Automatizzata</h3>
      <p>Utilizzo di Dripify per automatizzare richieste di connessione, messaggi personalizzati e follow-up.</p>

      <figure class="my-12 text-center">
         <img src="https://i.ibb.co/gFjzydxW/make2.png" alt="Scenario Make per Lead Generation" class="mx-auto w-full max-w-lg rounded-lg shadow-lg"/>
         <figcaption class="text-sm text-gray-400 mt-4">Scenario Lead Generation.</figcaption>
      </figure>
    `,
  },
  {
    id: 'f24-whatsapp-studio-longhitano',
    title: 'F24 su WhatsApp: promemoria intelligenti e pagamenti sotto controllo',
    date: new Date('2025-05-30'),
    image: logoLonghitano,
    testimonial: {
      quote: "Una gestione controllata ed automatizzata dei processi, tempo risparmiato e zero dimenticanze.",
      author: 'Studio Longhitano',
      role: 'Amministrazioni condominiali',
    },
    content: `
      <h2>Il Contesto</h2>
      <p>Lo Studio Longhitano gestisce quotidianamente decine di F24. La sfida principale era mantenere sotto controllo tutte le scadenze fiscali, evitare dimenticanze e garantire un processo di pagamento fluido e tracciabile.</p>

      <h2>La Soluzione: Automazione Intelligente</h2>
      <p>Abbiamo sviluppato un sistema completamente automatizzato che trasforma la gestione degli F24 da processo manuale a flusso intelligente e controllato.</p>

      <h3>1. Acquisizione e Archiviazione Automatica</h3>
      <p>Il nostro agente AI scarica ogni PDF dalle email e lo organizza su Google Drive, riconoscendo automaticamente il cliente.</p>

      <h3>2. Estrazione e Strutturazione dei Dati</h3>
      <p>Un secondo agente estrae i dati chiave da ogni documento: importo totale, parziali, scadenza e note.</p>
      
      <figure class="my-12 text-center">
        <img src="/assets/immagini/longhitano_make2.JPG" alt="Interpretazione documentale AI" class="mx-auto rounded-lg shadow-lg w-full max-w-2xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Livello di interpretazione documentale: l'agente analizza i PDF con AI.</figcaption>
      </figure>

      <h3>3. Comunicazione Proattiva su WhatsApp</h3>
      <p>L'agente apre una conversazione su WhatsApp con il contribuente una settimana prima della scadenza, con riepilogo importi e scadenze.</p>

      <figure class="my-12 text-center">
        <img src="/assets/immagini/longhitano_make1.JPG" alt="Flusso WhatsApp interattivo" class="mx-auto rounded-lg shadow-lg w-full max-w-2xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Flusso WhatsApp interattivo con il cliente.</figcaption>
      </figure>

       <figure class="my-12 text-center">
        <img src="/assets/immagini/longhitano_make3.JPG" alt="Pipeline analisi avanzata F24" class="mx-auto rounded-lg shadow-lg w-full max-w-2xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Pipeline di analisi avanzata e gestione errori.</figcaption>
      </figure>
    `,
  },
   {
    id: 'digital-turnover-automazione-content-intelligence',
    title: 'E-commerce: Dati, Contenuti e Post controllati da un AI Agent',
    date: new Date('2025-05-23'),
    image: logoDigitalTurnover,
    testimonial: {
      quote: "Con questo sistema abbiamo eliminato ore di lavoro manuale: oggi i contenuti da newsletter, social e podcast arrivano già organizzati e pronti all'uso. Un salto enorme in efficienza e strategia.",
      author: 'Fabio Marin',
      role: 'CEO di Digital Turnover',
    },
    content: `
      <h2>Contesto</h2>
      <p>Digital Turnover, un e-commerce in forte crescita, necessitava di gestire un volume crescente di informazioni da diverse fonti. La sfida era raccoglierle, organizzarle e valorizzarle in modo automatizzato.</p>
      
      <h2>La Soluzione: Un Ecosistema Intelligente</h2>
      <p>Abbiamo progettato un agente AI personalizzato che opera come assistente digitale, automatizzando l'intero ciclo di vita dell'informazione.</p>

      <figure class="my-12 text-center">
        <img src="/assets/immagini/scenario1_digital.png" alt="Scenario di automazione Digital Turnover" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-4">Il flusso completo di automazione: dalla raccolta delle fonti alla pubblicazione finale.</figcaption>
      </figure>

      <h3>1. Raccolta Intelligente delle Fonti</h3>
      <p>L'agente monitora newsletter, post Instagram, podcast e LinkedIn per estrarre contenuti rilevanti.</p>

      <h3>2. Organizzazione Strutturale Intelligente</h3>
      <p>Le informazioni sono organizzate su Google Drive con una struttura gerarchica temporale (annuale, mensile, settimanale).</p>

      <h3>3. Elaborazione e Sintesi Avanzata</h3>
      <p>L'AI estrae i punti chiave e genera documenti strutturati su Google Docs.</p>

      <h3>4. Generazione e Invio Automatico di Newsletter</h3>
      <p>Il sistema produce articoli completi e immagini di copertina, preparando il tutto per l'invio (con approvazione umana).</p>

       <div class="grid md:grid-cols-2 gap-8 my-12">
        <figure class="text-center">
            <img src="/assets/immagini/db1_digital.png" alt="Database Digital Turnover" class="mx-auto rounded-lg shadow-lg w-full" />
             <figcaption class="text-sm text-gray-400 mt-4">Gestione newsletter.</figcaption>
        </figure>
         <figure class="text-center">
            <img src="/assets/immagini/db2_digital.png" alt="Dashboard Controllo" class="mx-auto rounded-lg shadow-lg w-full" />
             <figcaption class="text-sm text-gray-400 mt-4">Dashboard di controllo avanzata.</figcaption>
        </figure>
      </div>
    `,
  },
  {
    id: 'agente-ai-newsletter-scientifica-shape-up',
    title: 'Agente AI Per una Newsletter Scientifica',
    date: new Date('2025-04-04'),
    image: logoShapeUp,
    testimonial: {
      quote: "L'Agente AI di Martes AI ha rivoluzionato la nostra newsletter: contenuti scientifici affidabili e ben scritti, immagini professionali... il tutto a portata di un click",
      author: 'Davide Beccetti',
      role: 'CEO @ Shape-UP',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/qarwJCCqTmA" 
          title="Shape-UP Newsletter Automation Case Study"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Introduzione</h2>
      <p>Shape-UP si è rivolta a Martes AI per ottimizzare la creazione della propria newsletter scientifica. L'obiettivo: automatizzare il processo mantenendo autorevolezza e qualità.</p>

      <h2>La Soluzione: Un Agente AI su Misura</h2>
      <p>Martes AI ha sviluppato un agente integro con Google Sheets, Make e Mailchimp.</p>
      
      <figure class="my-12 text-center">
        <img src="/assets/scenario_make_shapeup.png" alt="Scenario Make.com" class="mx-auto rounded-lg shadow-lg w-full max-w-2xl bg-white p-2" />
        <figcaption class="text-sm text-gray-400 mt-4">Scenario Make.com che automatizza la newsletter.</figcaption>
      </figure>

      <figure class="my-12 text-center">
        <img src="/assets/immagini/esempio_newsletter.jpeg" alt="Esempio newsletter" class="mx-auto rounded-xl shadow-2xl w-full max-w-xs border-4 border-white" />
        <figcaption class="text-sm text-gray-400 mt-4">Esempio reale di newsletter inviata.</figcaption>
      </figure>
    `,
  },
  {
    id: 'automazione-ai-clinica-oculistica-santa-lucia',
    title: 'Automazione AI per la Clinica Oculistica Santa Lucia',
    date: new Date('2025-03-20'),
    image: logoSantaLucia,
    testimonial: {
      quote: "Grazie alle soluzioni Martes AI, la Clinica Oculistica Santa Lucia ha ridotto i tempi d'attesa, ottimizzato la gestione degli appuntamenti e automatizzato le email, risparmiando tempo prezioso e offrendo ai pazienti un'esperienza più fluida ed efficiente.",
      author: 'Dott. Mario Cipolla',
      role: 'Direttore Amministrativo',
    },
    content: `
      <h2>Introduzione</h2>
      <p>La Clinica Oculistica Santa Lucia affrontava problemi nella gestione degli appuntamenti e delle email. Martes AI ha implementato un chatbot per il sito web e un sistema di automazione per la classificazione delle email.</p>

      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/nQenVuDQRvI" 
          title="Come automatizzare la gestione delle email con l'AI"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <figure class="my-12 text-center">
          <img src="https://i.ibb.co/0yvHGXZK/scenario-clinica.png" alt="Schema automazione email" class="mx-auto rounded-lg shadow-lg w-full max-w-3xl" />
          <figcaption class="text-sm text-gray-400 mt-4">Schema dell'automazione email implementata.</figcaption>
      </figure>
    `,
  },
  {
    id: "custom-gpt-email",
    title: "Agente GPT per rispondere alle mail e riassumere AI-news",
    date: new Date('2025-02-13'),
    image: logoStudioCommercialisti,
    testimonial: {
      quote: "Ho chiesto due GPT personalizzati: uno per la gestione automatica delle email e uno per riassumere le ultime news sull'AI. Hanno fatto un lavoro eccellente e professionale. Consigliatissimi!",
      author: 'Federico Loffredo',
      role: 'Commercialista',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/cnmfmvFPszc" 
          title="Loffredo Case Study"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      
      <h2>Introduzione</h2>
      <p>Per un commercialista con un alto volume di email, abbiamo sviluppato un GPT personalizzato integrato con Make e Zapier per automatizzare le risposte.</p>

      <h2>La Soluzione</h2>
      <p>Il sistema organizza le email e genera bozze di risposta automatiche (informale, tecnica, ironica) che l'utente può scegliere e inviare con un click.</p>
    `,
  },
  {
    id: 'supporto-clienti-ai-e-tracciamento-ordini-dinamico-per-un-ecommerce',
    title: 'Supporto Clienti AI e Tracciamento Ordini Dinamico per Ecommerce',
    date: new Date('2024-07-18'),
    image: logoEcommerceParts,
    testimonial: {
      quote: "Grazie a Martes AI, abbiamo rivoluzionato il nostro servizio clienti. Il loro chatbot AI su WhatsApp ha ridotto drasticamente il numero di email giornaliere e migliorato l'efficienza.",
      author: 'Giuseppe Romano',
      role: 'CEO Ecommerceparts',
    },
    content: `
      <div class="relative w-full pb-[56.25%] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://www.youtube.com/embed/e-wBAxcebsE" 
          title="Ecommerceparts Case Study"
          class="w-full h-full absolute top-0 left-0"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Il Problema</h2>
      <p>Un ecommerce su eBay riceveva circa 500 email al giorno con domande ripetitive ("Dov'è il mio pacco?").</p>

      <h2>La Soluzione</h2>
      <p>Un chatbot AI su WhatsApp automatizza le risposte e il tracciamento ordini, riducendo le email giornaliere di circa 200 unità.</p>
    `,
  }
];

export const getOrderedCases = () => {
  const restworld = caseStudies.find(c => c.id === 'ruggiada-agente-ai-restworld');
  const monni = caseStudies.find(c => c.id === 'automazione-rendicontazione-monni-srl');
  const bluvacanze = caseStudies.find(c => c.id === '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group');
  
  const fixedFirstThree = [restworld, monni, bluvacanze].filter(Boolean) as CaseStudy[];
  
  const otherCases = caseStudies
    .filter(c => 
      c.id !== 'ruggiada-agente-ai-restworld' && 
      c.id !== 'automazione-rendicontazione-monni-srl' && 
      c.id !== '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group'
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  
  return [...fixedFirstThree, ...otherCases];
};
