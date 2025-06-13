import React from 'react';
import { Helmet } from 'react-helmet-async';

function Cookies() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Cookie Policy - Martes AI</title>
        <meta name="description" content="Informativa completa sull'utilizzo dei cookie su Martes AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert prose-green max-w-none">
          <p>Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>

          <h2>1. Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano al browser 
            dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi 
            siti alla visita successiva.
          </p>

          <h2>2. Tipologie di cookie utilizzati</h2>
          
          <h3>2.1 Cookie tecnici essenziali</h3>
          <p>
            Questi cookie sono necessari per il funzionamento del sito e non possono 
            essere disattivati. Includono:
          </p>
          <ul>
            <li>Cookie di sessione per la gestione del login</li>
            <li>Cookie per il salvataggio delle preferenze di consenso</li>
            <li>Cookie di sicurezza</li>
          </ul>

          <h3>2.2 Cookie analitici</h3>
          <p>
            Utilizziamo Google Analytics per raccogliere informazioni anonime su come 
            gli utenti interagiscono con il nostro sito:
          </p>
          <ul>
            <li>Statistiche di visualizzazione delle pagine</li>
            <li>Tempo di permanenza sul sito</li>
            <li>Provenienza geografica degli utenti</li>
          </ul>

          <h3>2.3 Cookie di marketing</h3>
          <p>
            Questi cookie vengono utilizzati per tracciare i visitatori attraverso i 
            siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti:
          </p>
          <ul>
            <li>Cookie per il retargeting pubblicitario</li>
            <li>Cookie per l'analisi del comportamento degli utenti</li>
            <li>Cookie dei social media</li>
          </ul>

          <h2>3. Durata dei cookie</h2>
          <p>
            I cookie hanno durate diverse:
          </p>
          <ul>
            <li>Cookie di sessione: vengono eliminati alla chiusura del browser</li>
            <li>Cookie persistenti: rimangono attivi fino alla loro data di scadenza</li>
          </ul>

          <h2>4. Come gestire i cookie</h2>
          <p>
            Puoi gestire le tue preferenze sui cookie in diversi modi:
          </p>
          <ul>
            <li>Attraverso il banner dei cookie presente sul nostro sito</li>
            <li>Dalle impostazioni del tuo browser</li>
            <li>Utilizzando strumenti di opt-out specifici per i cookie di terze parti</li>
          </ul>

          <h2>5. Cookie di terze parti</h2>
          <p>
            Il nostro sito utilizza servizi di terze parti che potrebbero impostare 
            i loro cookie:
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>Meta Pixel</li>
            <li>LinkedIn Insight Tag</li>
          </ul>

          <h2>6. Aggiornamenti della Cookie Policy</h2>
          <p>
            Ci riserviamo il diritto di modificare questa cookie policy in qualsiasi 
            momento. Le modifiche saranno effettive dal momento della pubblicazione 
            sul sito.
          </p>

          <h2>7. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa alla nostra cookie policy, puoi contattarci all'indirizzo email: <a href="mailto:contact@martes-ai.com">contact@martes-ai.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cookies; 