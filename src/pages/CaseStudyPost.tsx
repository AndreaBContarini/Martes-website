import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const cases = {
  'automazione-ai-clinica-oculistica-santa-lucia': {
    title: 'Automazione AI per la Clinica Oculistica Santa Lucia',
    date: '20 marzo 2025',
    content: `
      <div class="mb-8 text-center">
        <a href="https://andreabcontarini.netlify.app/automation-projects/santa-lucia-eye-clinic" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#274f36] hover:bg-[#1a3a25] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
          Read this case study in English
        </a>
      </div>

      <h2>Introduzione</h2>
      <p>La Clinica Oculistica Santa Lucia di Cosenza si distingue per l'eccellenza nei servizi di assistenza oculistica. Tuttavia, come molte strutture sanitarie, affrontava problemi nella gestione degli appuntamenti, nello smistamento delle email e nell'ottimizzazione delle comunicazioni con i pazienti. Per risolvere queste sfide, Martes AI ha implementato soluzioni basate su intelligenza artificiale e automazione, migliorando l'efficienza operativa e l'esperienza utente.</p>

      <h2>La Sfida</h2>
      <p>La clinica necessitava di:</p>
      <ul>
          <li>Un sistema automatizzato per gestire le richieste di appuntamenti e fornire risposte rapide alle domande frequenti.</li>
          <li>Un metodo efficace per classificare e smistare le email ricevute, riducendo il carico sul personale amministrativo.</li>
      </ul>
      <p>Queste problematiche causavano ritardi nelle risposte e influivano negativamente sulla soddisfazione dei pazienti.</p>

      <h2>La Soluzione</h2>
      <p>Per affrontare queste criticità, Martes AI ha sviluppato due soluzioni principali:</p>

      <h2>1. Chatbot per la gestione delle richieste sul sito web</h2>
      <p>Grazie a <a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-[#388E3C]">Voiceflow</a>, è stato creato un chatbot intelligente in grado di:</p>
      <ul>
          <li><strong>Memorizzare il contesto della conversazione</strong> attraverso una funzione JavaScript, migliorando l'interazione con l'utente.</li>
          <li><strong>Classificare le richieste</strong> distinguendo tra appuntamenti e domande generali sulla clinica.</li>
          <li><strong>Fornire risposte fluide e naturali</strong>, adattando il numero di messaggi per una comunicazione efficace.</li>
          <li><strong>Guidare l'utente nella prenotazione di un appuntamento</strong>, raccogliendo informazioni essenziali come nome, motivo della visita, data e orario.</li>
          <li><strong>Trasmettere automaticamente i dettagli delle richieste a <a href="https://www.make.com" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-[#388E3C]">Make</a></strong>, assicurando un'integrazione efficiente con il sistema gestionale della clinica.</li>
      </ul>

      <h2>2. Automazione della gestione email</h2>
      <p>Per migliorare l'organizzazione delle email ricevute, è stato implementato uno scenario di automazione su Make, basato su un avanzato sistema di classificazione.</p>

      <div class="aspect-w-16 aspect-h-9 my-8">
        <iframe 
          src="https://www.youtube.com/embed/nQenVuDQRvI" 
          title="Come automatizzare la gestione delle email con l'AI - Tutorial Make.com"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <p class="text-center text-sm text-gray-400 mt-2">
          In questo video, Riccardo (co-founder di Martes AI) spiega come creare un'automazione simile a quella implementata per la Clinica Oculistica Santa Lucia, mostrando un esempio di gestione email e appuntamenti per un e-commerce.
        </p>
      </div>

      <h2>Funzionamento del sistema di classificazione email</h2>
      <ul>
          <li>Alla ricezione di una nuova email, un <strong>modello AI avanzato</strong> analizza il soggetto e il contenuto del messaggio.</li>
          <li>In base a un <strong>prompt di classificazione</strong> ben strutturato, l'email viene automaticamente categorizzata in una delle seguenti classi:</li>
          <ol class="list-decimal pl-6 mt-2 mb-4">
              <li><strong>Domande generali sulla clinica</strong> (orari, servizi, indirizzo).</li>
              <li><strong>Prenotazioni, conferme o cancellazioni di appuntamenti.</strong></li>
              <li><strong>Spam o pubblicità.</strong></li>
              <li><strong>Candidature lavorative e invio di curriculum.</strong></li>
              <li><strong>Reclami, richieste amministrative o feedback post-visita.</strong></li>
              <li><strong>Bollette ed estratti conto</strong> da fornitori di servizi.</li>
          </ol>
          <li>Una volta classificata, l'email viene automaticamente <strong>inoltrata al reparto competente o archiviata</strong>, alleggerendo il carico di lavoro dello staff amministrativo.</li>
      </ul>

      <div class="bg-black/20 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-3">Il prompt di classificazione AI</h3>
        <p>Per garantire risultati accurati, è stato sviluppato un prompt specializzato che assegna un "ruolo" al modello AI come "esperto classificatore di mail". Il prompt include:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Regole chiare per la classificazione di ogni tipo di email</li>
          <li>Esempi concreti per ogni categoria, con soggetti e contenuti tipici</li>
          <li>Istruzioni specifiche per l'analisi del contesto della comunicazione</li>
          <li>Sistema di risposta numerico (da 1 a 6) per facilitare l'automazione successiva</li>
        </ul>
        <p class="mt-2">Questa metodologia garantisce un'accuratezza di classificazione superiore al 95%, essenziale per il corretto funzionamento dell'intero sistema di automazione.</p>
      </div>

      <figure style="text-align: center;">
          <img src="https://i.ibb.co/0yvHGXZK/scenario-clinica.png" alt="Schema automazione email Clinica Oculistica Santa Lucia" width="70%" class="mx-auto my-8 rounded-lg shadow-lg" />
          <figcaption class="text-center text-sm text-gray-400 mt-2">Schema dell'automazione email implementata per la Clinica Oculistica Santa Lucia di Cosenza</figcaption>
      </figure>

      <h2>I Risultati</h2>
      <p>L'implementazione delle soluzioni di Martes AI ha generato benefici concreti:</p>
      <ul>
          <li><strong>Riduzione di circa 60% nei tempi di risposta</strong> alle richieste generali grazie al chatbot.</li>
          <li><strong>Diminuzione di oltre il 50% del carico di lavoro amministrativo</strong>, grazie all'automazione delle email.</li>
          <li><strong>Miglioramento della soddisfazione dei pazienti</strong>, grazie a risposte più rapide e a un servizio più organizzato.</li>
      </ul>

      <h2>Riflessioni</h2>
      <p>L'integrazione dell'intelligenza artificiale nel settore sanitario offre <strong>vantaggi significativi in termini di efficienza e qualità del servizio</strong>. Tuttavia, per ottenere risultati ottimali, è fondamentale:</p>
      <ul>
          <li>Personalizzare le soluzioni in base alle esigenze specifiche della struttura.</li>
          <li>Monitorare e ottimizzare costantemente le performance.</li>
          <li>Assicurarsi che l'automazione migliori, senza sostituire, l'interazione umana, soprattutto in ambiti sensibili come quello sanitario.</li>
      </ul>

      <h2>Conclusione</h2>
      <p>Grazie all'intervento di Martes AI, la Clinica Oculistica Santa Lucia di Cosenza ha trasformato la gestione delle comunicazioni e degli appuntamenti, migliorando l'efficienza operativa e l'esperienza dei pazienti. L'uso strategico dell'intelligenza artificiale e dell'automazione si conferma una soluzione vincente per le strutture sanitarie che desiderano innovare mantenendo alti standard di assistenza.</p>
    `,
  },
  '50-clienti-in-piu-al-mese-agenzia-di-viaggio-wetravel-group': {
    title: "50 clienti in più al mese per un'agenzia di viaggio",
    date: '9 settembre 2024',
    content: `
      <div class="mb-8 text-center">
        <a href="https://andreabcontarini.netlify.app/automation-projects/whatsapp-agent-travel-agency" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#274f36] hover:bg-[#1a3a25] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
          Read this case study in English
        </a>
      </div>

      <div class="aspect-w-16 aspect-h-9 mb-8">
        <iframe 
          src="https://www.youtube.com/embed/RofZP_PwVgk" 
          title="Bluvacanze Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2 class="text-3xl font-bold mt-8 mb-4">Aumento vertiginoso dei ricavi mensili con un Agente AI</h2>

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
  'supporto-clienti-ai-e-tracciamento-ordini-dinamico-per-un-ecommerce': {
    title: 'Supporto Clienti AI e Tracciamento Ordini Dinamico per Ecommerce',
    date: '18 luglio 2024',
    content: `
            <iframe 
          src="https://www.youtube.com/embed/e-wBAxcebsE" 
          title="WeTravel Group Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
    <h2>L'inizio del Progetto e il Primo Contatto</h2>
    <p>Tutto è iniziato con la pubblicazione su <strong>LinkedIn</strong> di un post che mostrava un <strong>chatbot AI</strong> progettato per un altro ecommerce. Questa vetrina ha attirato l'attenzione di un proprietario di store su <strong>eBay</strong>, interessato a scoprire come poteva sfruttare l'<strong>automazione AI</strong> per migliorare il proprio <strong>servizio clienti</strong>.</p>
    
    <p>Durante la nostra prima chiamata, è emerso subito il principale problema: gestire circa <strong>500 email al giorno</strong>. La maggior parte delle richieste riguardava domande ripetitive, come:</p>
    
    <ul>
        <li><em>"Dov'è il mio pacco?"</em></li>
        <li><em>"Quando arriva il mio ordine?"</em></li>
        <li><em>"Perché non è partito l'articolo che ho ordinato?"</em></li>
        <li><em>"Potrebbe andar bene questo pezzo?"</em></li>
    </ul>
    
    <p>Rispondere a queste richieste assorbiva gran parte del tempo del suo team, limitando la capacità di concentrarsi su attività più strategiche. Serviva una <strong>soluzione automatizzata</strong> per gestire queste richieste con efficienza.</p>
    
    <h2>Costruzione del Chatbot AI e Integrazione su WhatsApp</h2>
    <p>Abbiamo progettato un <strong>chatbot AI avanzato</strong>, in grado di interagire con i clienti direttamente su <strong>WhatsApp</strong>. Il nostro obiettivo principale era <strong>automatizzare</strong> le risposte alle domande più frequenti e ottimizzare il flusso di comunicazione.</p>
    
    <p>Ecco le <strong>funzionalità chiave</strong> del sistema:</p>
    <ul>
        <li><strong>Risposte automatiche e in tempo reale:</strong> Il chatbot rispondeva istantaneamente ai clienti che chiedevano informazioni sul loro ordine.</li>
        <li><strong>Analisi intelligente delle richieste:</strong> Il sistema comprendeva il contesto delle domande e forniva risposte mirate.</li>
        <li><strong>Notifiche al team di vendita in caso di problemi complessi:</strong> Se l'AI rilevava che il cliente era insoddisfatto o "arrabbiato", veniva inviata un'email automatica al team per intervenire rapidamente.</li>
    </ul>
    
    <h2>Automazione del Tracciamento degli Ordini</h2>
    <p>Una delle innovazioni più interessanti è stata l'<strong>integrazione con il sistema di tracciamento degli ordini</strong>. Per ogni acquisto, il chatbot recuperava automaticamente:</p>
    
    <ul>
        <li><strong>Numero di ordine</strong> e <strong>tracking number</strong></li>
        <li><strong>Nome</strong> e <strong>numero di telefono</strong> del cliente</li>
    </ul>
    
    <p>Dopo aver estrapolato queste informazioni, il cliente riceveva un <strong>messaggio WhatsApp</strong> in cui veniva informato della possibilità di chiedere aggiornamenti sul suo ordine direttamente tramite la chat. Da quel momento, il chatbot era in grado di fornire tutte le informazioni necessarie, alleggerendo notevolmente il <strong>carico di lavoro</strong> del team.</p>
    
    <h2>Risultati e Impatto Operativo</h2>
    <p>L'introduzione del <strong>chatbot</strong> ha portato a risultati concreti già dalle prime settimane:</p>
    
    <ul>
        <li>Circa <strong>200 email in meno al giorno</strong>, riducendo il <strong>carico di lavoro</strong> del team.</li>
        <li><strong>Miglioramento dell'efficienza operativa:</strong> Il tempo risparmiato ha permesso al team di concentrarsi su attività più strategiche.</li>
        <li><strong>Conversazioni più fluide:</strong> La gestione automatizzata delle richieste ha ridotto i tempi di attesa e migliorato l'<strong>esperienza cliente</strong>.</li>
    </ul>
    
    <h2>Considerazioni Finali: Automazione AI al Servizio dell'Ecommerce</h2>
    <p>Questo progetto ha dimostrato quanto l'<strong>intelligenza artificiale</strong> possa fare la differenza nella gestione del <strong>servizio clienti</strong>, trasformando problemi operativi complessi in <strong>opportunità di crescita</strong>. Abbiamo documentato ogni fase del percorso per aiutare altre aziende a comprendere il <strong>potenziale dell'AI</strong> e ispirare imprenditori interessati a fare lo stesso salto di qualità.</p>`,
  },
  'generazione-di-lead-qualificati-via-linkedin': {
    title: "Generazione di Lead Qualificati via LinkedIn",
    date: "31 gennaio 2025",
    content: `
      <iframe 
          src="https://www.youtube.com/embed/30iApbt6wMo" 
          title="Fantozzi Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
         <style>
        img {
            display: block;
            margin: 20px auto;
            max-width: 80%;
        }
    </style>

      <h2>Il Contesto: Il Problema dei Professionisti nel Generare Lead</h2>
    <p>Molti liberi professionisti si affidano al passaparola per attrarre nuovi clienti, trovando difficile utilizzare piattaforme come LinkedIn per trovare lead qualificati. Le obiezioni comuni includono:</p>
    <ul>
        <li>La difficoltà di convertire sconosciuti in clienti.</li>
        <li>Il tempo necessario per creare contenuti di qualità.</li>
        <li>La diffidenza verso contatti non personali.</li>
    </ul>
    <p>Noi abbiamo deciso di accettare la sfida, implementando un metodo completamente automatizzato per la lead generation su LinkedIn.</p>
    <img src="https://i.ibb.co/xqsdHwr1/dripify1-pmg.png" alt="Automazione con Dripify" width="350">
    
    <h2>Il Progetto: Personal Branding, Automazione e Lead Generation</h2>
    
    <h2>Fase 1: Costruzione del Personal Brand</h2>
    <p>Il primo passo è stato creare una presenza digitale forte e professionale per l'avvocato. Ecco le azioni intraprese:</p>
    <ul>
        <li><strong>Sito personale:</strong> Una landing page informativa con recensioni di clienti, un blog per articoli e una sezione news per aggiornamenti fiscali.</li>
        <li><strong>Obiettivo:</strong> Rafforzare l'immagine di autorità nel settore, comunicando competenza e affidabilità.</li>
    </ul>
    
    <h2>Fase 2: Automazione dei Contenuti</h2>
    <p>Per mantenere attivo il profilo LinkedIn, è stato costruito uno scenario Make per automatizzare la pubblicazione dei contenuti:</p>
    <ul>
        <li>Gli articoli e le notizie rilevanti del settore vengono recuperati automaticamente.</li>
        <li>Vengono riassunti e formattati utilizzando GPT.</li>
        <li>I post vengono approvati dal cliente e pubblicati ogni 10 giorni, mantenendo il profilo sempre aggiornato e professionale.</li>
    </ul>
    <img src="https://i.ibb.co/cKyNWcLd/make1.png" alt="Scenario Make per Automazione" className="mx-auto w-48">
    
    <h2>Fase 3: Lead Generation Automatizzata</h2>
    <p>Per la fase di lead generation, abbiamo utilizzato Dripify, uno strumento per automatizzare:</p>
    <ul>
        <li>Richieste di connessione su LinkedIn.</li>
        <li>Invio di messaggi personalizzati.</li>
        <li>Follow-up automatici.</li>
    </ul>
    <p>Un lead magnet personalizzato – un video – è stato inviato ai contatti che accettavano la connessione.</p>
    <p>Per ogni cliente interessato che rispondeva, lo si è registrato in un Google Sheet, con notifiche via email per aggiornare il team in tempo reale.</p>
    <img src="https://i.ibb.co/gFjzydxW/make2.png" alt="Scenario Make per Lead Generation" width="380">
    
    <h2>I Risultati: Successo Misurabile in Pochi Giorni</h2>
    <ul>
        <li><strong>Tasso di richieste di connessioni accettate:</strong> 37,8%.</li>
        <li><strong>Tasso di risposta al messaggio "a freddo":</strong> 13,5%.</li>
    </ul>
    <p>Ogni interazione è stata registrata in modo chiaro, distinguendo tra lead non interessati, lead da ricontattare e lead chiusi. Dopo soli otto giorni siamo stati in grado di organizzare 3 chiamate, confermando l'efficacia del metodo. Un lead di questi tre si è effettivamente trasformato in cliente.</p>
    
    <h2>Riflessioni: Come Replicare il Processo</h2>
    <ul>
        <li><strong>Automazione intelligente:</strong> Ridurre al minimo il tempo necessario per creare e pubblicare contenuti.</li>
        <li><strong>Personalizzazione:</strong> Offrire lead magnet mirati e curare ogni messaggio per aumentare le possibilità di risposta.</li>
        <li><strong>Rispetto dei limiti di LinkedIn:</strong> Conoscere e rispettare i limiti di connessioni e messaggi per evitare penalizzazioni.</li>
        <li><strong>Monitoraggio dei risultati:</strong> Utilizzare strumenti come Google Sheet per organizzare e tracciare i lead.</li>
    </ul>
    
    <h2>Conclusioni</h2>
    <p>Questo caso studio mostra che con un mix di automazione, intelligenza artificiale e strategia mirata, anche un professionista in settori tradizionali come il diritto tributario può trasformare LinkedIn in una risorsa potente per generare nuovi clienti.</p>
    
    `
  },
  'custom-gpt-email': {
    title: "Agente GPT per rispondere alle mail e riassumere AI-news",
    date: "13 febbraio 2025",
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
    <h2>Introduzione</h2>
    <p>Nel contesto aziendale moderno, la gestione della casella email rappresenta un'attività cruciale ma spesso dispendiosa in termini di tempo. Noi abbiamo sviluppato una soluzione innovativa per un cliente che necessitava di automatizzare la gestione della propria casella email ed anche di ottenere rapidamente le ultime news dal "fronte AI", per rimanere costantemente informato.</p>
    <p>Questo caso studio illustra il problema iniziale, la soluzione implementata e i risultati ottenuti. Tratteremo - per brevità - solo la soluzione del GPT per l'automazione delle risposte mail.</p>
    
    <h2>Il Problema</h2>
    <p>Il cliente, un professionista con un alto volume di email giornaliere, aveva difficoltà nel rispondere tempestivamente ai messaggi, con il rischio di perdere opportunità di business. Le principali sfide includevano:</p>
    <ul>
        <li>Elevato numero di email non lette o senza risposta.</li>
        <li>Difficoltà nel gestire le email in base alla priorità.</li>
        <li>Necessità di <strong>risposte personalizzate</strong> in base al contesto del messaggio.</li>
    </ul>
    
    <h2>La Soluzione Implementata</h2>
    <p>Per risolvere questo problema, Martes AI ha sviluppato un GPT personalizzato e lo ha integrato con strumenti di automazione come <em>Make</em> e <em>Zapier</em>. Il sistema è stato progettato per gestire automaticamente le email attraverso due scenari principali:</p>
    
    <h3>1. Organizzazione delle Email</h3>
    <p>Il GPT riceve tutte le email in arrivo e le memorizza in un database con le seguenti informazioni:</p>
    <ul>
        <li>Soggetto</li>
        <li>Indirizzo email del mittente</li>
        <li>Nome del mittente</li>
        <li>Stato dell'email (risposta inviata o meno)</li>
    </ul>
    
    <h3>2. Automazione della Risposta</h3>
    <p>Il GPT analizza le email con stato "non risposta" e genera automaticamente tre possibili risposte:</p>
    <ul>
        <li><strong>Informale</strong>: per conversazioni casuali o personali.</li>
        <li><strong>Tecnica</strong>: per domande specifiche o richieste di informazioni dettagliate.</li>
        <li><strong>Ironica</strong>: per uno stile comunicativo più leggero e coinvolgente.</li>
    </ul>
    <p>L'utente seleziona la risposta più adeguata e il GPT invia l'email tramite Zapier, aggiornando lo stato nel database.</p>
    
    <h2>Processo Tecnico</h2>
    <p>La soluzione è stata sviluppata seguendo un metodo strutturato:</p>
    <ol>
        <li><strong>Creazione di un webhook</strong> su Make o Zapier per gestire la connessione tra il GPT e gli altri strumenti.</li>
        <li><strong>Definizione dello schema JSON</strong> per strutturare i dati delle email in ingresso e in uscita.</li>
        <li><strong>Integrazione del GPT con il webhook</strong> per automatizzare il recupero e l'invio delle risposte.</li>
        <li><strong>Ottimizzazione del prompt</strong> per assicurare risposte contestualmente corrette e senza errori.</li>
    </ol>
    
    <h2>Risultati Ottenuti</h2>
    <p>Dopo l'implementazione, il cliente ha ottenuto miglioramenti significativi:</p>
    <ul>
        <li><strong>Riduzione del tempo di gestione email</strong> grazie all'automazione.</li>
        <li><strong>Incremento del tasso di risposta</strong>, evitando la perdita di comunicazioni importanti.</li>
        <li><strong>Miglioramento della qualità delle risposte</strong>, adattate in base al tono e al contesto della conversazione.</li>
        <li><strong>Aggiornamento automatico dello stato delle email</strong>, garantendo un migliore monitoraggio delle comunicazioni.</li>
    </ul>
    
    <p>Durante l'implementazione del progetto sono emerse alcune best practice utili per la creazione di GPT aziendali:</p>
    <ol>
        <li><strong>Strutturare correttamente i prompt</strong>: definire con precisione ruolo, contesto, obiettivi e regole per evitare risposte imprecise o fuori tema.</li>
        <li><strong>Utilizzare il meta-prompting</strong>: iterare tra più finestre GPT per ottimizzare i risultati generati.</li>
        <li><strong>Automatizzare con webhook</strong>: integrare il GPT con strumenti di automazione per semplificare la gestione dei dati.</li>
        <li><strong>Personalizzare le risposte</strong>: offrire alternative di risposta per adattarsi al tono richiesto dal cliente.</li>
    </ol>
    
    <h2>Conclusione</h2>
    <p>L'implementazione di un GPT per la gestione della casella email ha permesso al cliente di ottimizzare il proprio tempo e migliorare l'efficienza delle comunicazioni. Questo caso studio dimostra come l'uso strategico dell'intelligenza artificiale possa trasformare un'attività quotidiana in un processo automatizzato e altamente efficiente.</p>
    <p>Grazie alla combinazione di GPT, <em>Make</em> e <em>Zapier</em>, è possibile replicare questo modello per altre attività aziendali, aumentando la produttività e riducendo il carico di lavoro manuale.</p>  `
  },
  'agente-ai-newsletter-scientifica-shape-up': {
    title: "Agente AI Per una Newsletter Scientifica",
    date: "4 aprile 2025",
    content: `
      <div class="mb-8 text-center">
        <a href="https://andreabcontarini.netlify.app/automation-projects/scientific-newsletter-agent" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#274f36] hover:bg-[#1a3a25] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
          Read this case study in English
        </a>
      </div>
      
      <h2>Introduzione</h2>
      <p>In un contesto in cui l'affidabilità delle fonti e l'efficienza operativa sono fondamentali, <a href="https://shape-up.it/en/home-en/" target="_blank" rel="noopener noreferrer"><strong>Shape-UP</strong></a>, azienda attiva nel settore medico e del benessere, si è rivolta a <strong>Martes AI</strong> con l'obiettivo di ottimizzare la creazione e la diffusione della propria newsletter scientifica. L'obiettivo? Automatizzare l'intero processo editoriale mantenendo l'autorevolezza delle fonti e la qualità grafica, senza rinunciare al controllo umano dove necessario.</p>

      <div class="aspect-w-16 aspect-h-9 my-8">
        <iframe 
          src="https://www.youtube.com/embed/qarwJCCqTmA" 
          title="Shape-UP Newsletter Automation Case Study"
          class="w-full h-[400px]"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <h2>Il Problema</h2>
      <p>Prima dell'intervento, Shape-UP si trovava a fronteggiare <strong>tempi lunghi di produzione</strong> per ogni singola newsletter. La redazione manuale degli articoli scientifici, la ricerca delle fonti accreditate e la generazione di immagini coerenti con i contenuti richiedevano <strong>diverse ore di lavoro settimanali</strong>, senza considerare la necessità di formattare e inviare le campagne via Mailchimp. Questo rallentava la comunicazione con il pubblico e limitava la frequenza degli invii.</p>

      <h2>La Soluzione: Un Agente AI su Misura</h2>
      <p>Martes AI ha progettato e sviluppato un <strong>Agente AI personalizzato</strong>, integrato con <strong>Google Sheets, Make (Integromat)</strong> e <strong><a href="https://mailchimp.com/it/" target="_blank" rel="noopener noreferrer">Mailchimp</a></strong>, capace di automatizzare l'intero ciclo di vita della newsletter scientifica. Ecco le funzionalità principali:</p>

      <figure class="my-8 text-center">
        <img src="/assets/scenario_make_shapeup.png" alt="Scenario Make.com per automazione newsletter scientifica Shape-UP" class="mx-auto rounded-lg shadow-lg w-full max-w-2xl h-auto border-2 border-white" style="background: #f4f7fa;" />
        <figcaption class="text-base text-gray-500 mt-3 text-center">
          Scenario Make.com che automatizza la generazione, traduzione e invio multilingua delle newsletter Shape-UP, integrando AI, Google Sheets e Mailchimp.
        </figcaption>
      </figure>

      <h3>1. <strong>Input Semplificato tramite Google Sheets</strong></h3>
      <p>L'interfaccia principale dell'agente è un semplice foglio Google Sheet. Inserendo una <strong>parola chiave</strong> (es. "low carb diet"), il flusso si attiva automaticamente tramite un webhook.</p>

      <h3>2. <strong>Ricerca Scientifica Automatica</strong></h3>
      <p>L'agente si connette in tempo reale al <strong>database PubMed Central</strong>, recuperando <strong>articoli scientifici peer-reviewed</strong> in linea con la parola chiave. I contenuti estratti sono <strong>verificati, aggiornati e garantiti da fonti ufficiali</strong>.</p>

      <h3>3. <strong>Sintesi e Semplificazione del Contenuto</strong></h3>
      <p>Una volta ottenuti i dati, l'Agente AI sintetizza i risultati in un <strong>articolo leggibile e divulgativo</strong>, mantenendo la precisione scientifica ma semplificando la comprensione per un pubblico non accademico.</p>

      <h3>4. <strong>Generazione di Immagini Mediche</strong></h3>
      <p>Tramite un prompt ottimizzato e collegamento a <strong>modelli AI di generazione immagini</strong>, viene creata un'immagine coerente con il contenuto. L'immagine è poi trasformata in un <strong>URL pubblico</strong> grazie al servizio Claudinary, così da poter essere facilmente visualizzata nelle newsletter.</p>

      <h3>5. <strong>Modifica Articoli e Immagini con "Human in the Loop"</strong></h3>
      <p>Shape-UP può <strong>personalizzare o modificare in qualsiasi momento</strong> l'articolo o l'immagine. L'agente integra perfettamente il feedback umano nel ciclo AI, generando nuovi output in pochi secondi.</p>

      <h3>6. <strong>Formattazione Automatica e Invio con Mailchimp</strong></h3>
      <p>L'articolo, una volta validato, viene <strong>convertito automaticamente in HTML</strong> e inviato a <a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer">Mailchimp</a> per la distribuzione. Tutto il processo – dalla ricerca all'invio – può essere completato in pochi minuti.</p>

      <h2>I Risultati</h2>
      <p>Grazie all'implementazione dell'agente AI:</p>
      <ul>
        <li><strong>Tempo di produzione ridotto del 90%</strong>, da ore a pochi minuti per ogni newsletter.</li>
        <li><strong>Aumento della frequenza di invio</strong>.</li>
        <li><strong>Zero interventi manuali</strong> nella fase di formattazione, ricerca e invio.</li>
        <li><strong>Qualità visiva e scientifica</strong> degli articoli, con contenuti supportati da referenze accademiche.</li>
      </ul>

      <h2>Conclusioni</h2>
      <figure class="my-8 text-center">
        <img src="/assets/immagini/esempio_newsletter.jpeg" alt="Esempio reale di newsletter Shape-UP inviata ai clienti" class="mx-auto rounded-xl shadow-2xl w-full max-w-[160px] sm:max-w-xs md:max-w-sm h-auto border-4 border-white" style="background: #f4f7fa;" />
        <figcaption class="text-base text-gray-500 mt-3 text-center">
          Esempio reale di una newsletter inviata ai clienti Shape-UP: il template è stato sviluppato su misura in HTML per rispondere alle esigenze di branding, impaginazione e leggibilità sia su mobile che su desktop.
        </figcaption>
      </figure>
      <p>L'automazione non significa eliminare il controllo umano, ma <strong>potenziarlo con strumenti intelligenti</strong>. L'Agente AI sviluppato per Shape-UP dimostra come sia possibile coniugare <strong>efficienza, qualità e scalabilità</strong>, anche in ambiti delicati come la comunicazione medico-scientifica.</p>
      <p>Questa soluzione rappresenta un <strong>modello replicabile</strong> per tutte le aziende che desiderano trasformare la propria comunicazione, affidandosi a tecnologie AI strutturate ma accessibili. In Martes AI, crediamo che l'innovazione debba semplificare, non complicare.</p>
    `
  },
  'automazione-rendicontazione-monni-srl': {
    title: "Automazione Rendicontazione Operativa con Agente WhatsApp",
    date: "15 maggio 2025",
    content: `
      <h2>Introduzione</h2>
      <p><a href="https://gesuinomonnisrl.it/" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-[#388E3C]">Monni SRL</a>, leader nel settore dell'edilizia e dei lavori stradali, si è trovata ad affrontare una sfida comune a molte imprese del comparto: la gestione efficiente della rendicontazione giornaliera degli operai. La necessità di raccogliere informazioni dettagliate sulle attività svolte, l'utilizzo dei mezzi e la documentazione correlata, ha portato allo sviluppo di una soluzione innovativa basata su intelligenza artificiale e automazione.</p>

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
      <p>È stato sviluppato un sistema integrato che combina:</p>
      <ul>
        <li>Un agente conversazionale su <a href="https://partners.voiceflow.com/bt9ka4787d8z" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-[#388E3C]">Voiceflow</a></li>
        <li>Integrazione con WhatsApp per la comunicazione</li>
        <li>Automazioni <a href="https://www.make.com/en/register?pc=martesai" target="_blank" rel="noopener noreferrer" class="text-[#4CAF50] hover:text-[#388E3C]">Make</a> per la gestione dei flussi</li>
        <li>Whisper per la trascrizione dei messaggi vocali</li>
      </ul>

      <h3>1. Gestione Automatica dei Messaggi</h3>
      <p>Il flusso orchestratore analizza il tipo di contenuto ricevuto:</p>
      <ul>
        <li>Testi: inviati direttamente al flusso principale</li>
        <li>Immagini: elaborate e archiviate automaticamente</li>
        <li>Vocali: trascritti tramite Whisper prima dell'elaborazione</li>
      </ul>

      <figure class="my-8 text-center">
        <img src="/assets/immagini/scenario1.png" alt="Scenario di gestione automatizzata dei messaggi" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-2">Scenario di gestione automatizzata dei messaggi in entrata da WhatsApp: testi, vocali e immagini instradati nei rispettivi flussi.</figcaption>
      </figure>

      <h3>2. Sistema di Follow-up Intelligente</h3>
      <p>Ogni giorno alle ore 18, l'agente invia automaticamente un messaggio agli operai per la rendicontazione. Il sistema è progettato per essere flessibile:</p>
      <ul>
        <li>Possibilità di posticipare la rendicontazione di 30 minuti</li>
        <li>Gestione automatica delle flag di stato</li>
        <li>Follow-up programmati in base alle risposte</li>
      </ul>

      <figure class="my-8 text-center">
        <img src="/assets/immagini/scenario2.png" alt="Scenario di invio programmato" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-2">Scenario di invio programmato dei messaggi di rendicontazione con gestione dei follow-up e aggiornamento delle flag.</figcaption>
      </figure>

      <h3>3. Automazioni di Controllo</h3>
      <p>Ulteriori scenari Make si occupano di:</p>
      <ul>
        <li>Monitoraggio automatico degli orari</li>
        <li>Gestione dei follow-up</li>
        <li>Segnalazione di assenze di risposta</li>
      </ul>

      <figure class="my-8 text-center">
        <img src="/assets/immagini/scenario3.png" alt="Scenario di controllo risposte" class="mx-auto rounded-lg shadow-lg w-full max-w-4xl" />
        <figcaption class="text-sm text-gray-400 mt-2">Scenario di controllo risposte e aggiornamento automatico dei follow-up in base al comportamento dell'operaio.</figcaption>
      </figure>

      <h3>4. Flusso Conversazionale</h3>
      <p>È stato sviluppato un agente conversazionale all'interno di Voiceflow che guida l'operaio attraverso il processo di rendicontazione, raccogliendo:</p>
      <ul>
        <li>Dati sul cantiere</li>
        <li>Informazioni sui mezzi utilizzati</li>
        <li>Documentazione fotografica</li>
        <li>Note aggiuntive</li>
      </ul>

      <figure class="my-8 text-center">
        <img src=/assets/immagini/scenario4.png"" alt="Mappa del flusso conversazionale" class="mx-auto rounded-lg shadow-lg w-1/2" />
        <figcaption class="text-sm text-gray-400 mt-2">Mappa del flusso conversazionale in Voiceflow: raccolta dati, classificazione, epilogo e gestione dei mezzi utilizzati.</figcaption>
      </figure>

      <h2>Risultati Chiave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-black/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">Efficienza Operativa</h3>
          <ul class="space-y-2">
            <li>100% degli operai raggiunti giornalmente</li>
            <li>Riduzione significativa del tempo di rendicontazione, automatizzandone la maggior parte dei processi</li>
            <li>Eliminazione totale della rendicontazione cartacea</li>
          </ul>
        </div>
        <div class="bg-black/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">Qualità dei Dati</h3>
          <ul class="space-y-2">
            <li>Struttura dati completamente digitalizzata</li>
            <li>Accesso in tempo reale per il team gestionale</li>
            <li>Maggiore reattività ai comportamenti degli operai</li>
          </ul>
        </div>
      </div>

      <h2>Riflessioni</h2>
      <p>Il progetto ha evidenziato tre aspetti fondamentali per il successo dell'automazione:</p>
      <ul>
        <li><strong>Accessibilità tecnologica:</strong> L'utilizzo di WhatsApp ha garantito un'adozione immediata da parte del personale operativo.</li>
        <li><strong>Strutturazione dei dati:</strong> La digitalizzazione ha permesso analisi e decisioni più rapide e informate.</li>
        <li><strong>Flessibilità del sistema:</strong> L'adattamento ai comportamenti umani ha aumentato l'efficacia complessiva.</li>
      </ul>

      <h2>Conclusione</h2>
      <p>Il caso Monni SRL dimostra come l'automazione conversazionale, se ben progettata e implementata, possa trasformare processi complessi in flussi efficienti e scalabili. La soluzione ha portato benefici misurabili sia in termini di efficienza operativa che di qualità dei dati, rappresentando un modello replicabile per altre aziende del settore.</p>
    `,
  },
};

function CaseStudyPost() {
  const { id } = useParams();
  const case_ = cases[id as keyof typeof cases];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!case_) {
    return <div>Caso studio non trovato</div>;
  }

  return (
    <div className="pt-28 pb-10 px-2 sm:px-4 md:px-8 max-w-full">
      <Helmet>
        <title>{case_.title} | Martes AI - Casi Studio</title>
        <meta name="description" content={`Scopri come Martes AI ha implementato soluzioni di automazione e intelligenza artificiale per la ${case_.title}, migliorando l'efficienza operativa e l'esperienza dei pazienti.`} />
        <meta name="keywords" content="automazione AI, intelligenza artificiale sanità, chatbot clinica, gestione appuntamenti AI, smistamento email AI, Clinica Oculistica Santa Lucia, Cosenza, Martes AI" />
        <meta property="og:title" content={`${case_.title} | Martes AI - Casi Studio`} />
        <meta property="og:description" content={`Caso studio: come l'automazione AI ha migliorato l'efficienza della Clinica Oculistica Santa Lucia di Cosenza, riducendo i tempi di risposta del 60% e il carico amministrativo del 50%.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.martes-ai.com/casi-studio/${id}`} />
        <meta property="og:image" content="https://i.ibb.co/N4fp4Lf/make-clinica.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${case_.title} | Martes AI`} />
        <meta name="twitter:description" content={`Caso studio: automazione AI per la Clinica Oculistica Santa Lucia di Cosenza. Risultati: -60% tempi di risposta, -50% carico amministrativo.`} />
        <meta name="twitter:image" content="https://i.ibb.co/N4fp4Lf/make-clinica.jpg" />
        <link rel="canonical" href={`https://www.martes-ai.com/casi-studio/${id}`} />
        
        {/* Schema.org markup in JSON-LD format */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Martes AI",
            "url": "https://www.martes-ai.com",
            "logo": "https://www.martes-ai.com/favicon.ico", // Sostituisci con l'URL effettivo del tuo logo
            "sameAs": [
              "https://www.instagram.com/martes_ai",
              "https://www.linkedin.com/company/martes-ai"
            ]
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl md:max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center leading-tight break-words">{case_.title}</h1>
        <p className="text-center text-gray-400 mb-8 text-base sm:text-lg">Pubblicato il {case_.date}</p>
        <div
          className="prose prose-invert prose-green max-w-none text-base sm:text-lg md:text-xl !leading-relaxed"
          dangerouslySetInnerHTML={{ __html: case_.content.replace(
            /<img([^>]*src=["']\/assets\/immagini\/scenario4\.png[^>]*)class=["'][^"']*["']/,
            '<img$1class="mx-auto rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto"'
          ) }}
        />
      </div>
    </div>
  );
}

export default CaseStudyPost;