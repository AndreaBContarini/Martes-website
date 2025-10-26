import React from 'react';

function Terms() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Termini di Servizio</h1>
        <div className="prose prose-invert prose-green max-w-none">
          <p>Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>
    <h2>1. Introduzione</h2>
    <p>Le presenti Condizioni Generali di Servizio ("Condizioni Generali" o "Contratto") disciplinano i termini e le condizioni per l’uso del software e dei servizi <strong>Martes AI</strong> offerti in modalità SaaS ("Servizi") da <strong>Martes AI</strong>, accessibili attraverso il sito web <a href="https://www.martes-ai.com">https://www.martes-ai.com</a> ("Piattaforma").</p>

    <h2>2. Definizioni</h2>
    <ul>
        <li><strong>"Cliente"</strong>: La persona fisica o giuridica che utilizza i Servizi di Martes AI.</li>
        <li><strong>"Software"</strong>: Il software basato su AI fornito da Martes AI, incluso chatbot, automazioni e strumenti di analisi.</li>
        <li><strong>"Servizi"</strong>: L'insieme delle funzionalità offerte, inclusi chatbot, automazioni e consulenze AI.</li>
        <li><strong>"Dati del Cliente"</strong>: Qualsiasi informazione o contenuto caricato dal Cliente sulla Piattaforma.</li>
    </ul>

    <h2>3. Oggetto del Contratto</h2>
    <p>Martes AI concede al Cliente una <strong>licenza d’uso non esclusiva, non trasferibile e non sub-licenziabile</strong> per accedere e utilizzare i Servizi.</p>

    <h2>4. Registrazione e Accesso alla Piattaforma</h2>
    <p>Gli utenti non creano un account su Martes AI. Per accedere ai Servizi, il Cliente può contattarci via email o prenotare un appuntamento tramite Calendly.</p>

    <h2>5. Abbonamenti, Pagamenti e Disdetta</h2>
    <h3>5.1 Modalità di Pagamento</h3>
    <p>Martes AI offre soluzioni software con:</p>
    <ul>
        <li>Pagamenti <strong>one-shot</strong> (una tantum)</li>
        <li>Collaborazioni con rinnovo <strong>mensile</strong> o <strong>annuale</strong></li>
    </ul>
    <h3>5.2 Disdetta e Rimborsi</h3>
    <p>Le condizioni di disdetta e rimborsi sono stabilite individualmente nel contratto fornito al Cliente.</p>

    <h2>6. Proprietà Intellettuale</h2>
    <p>Martes AI detiene tutti i diritti sul Software, inclusi codice sorgente e algoritmi. Il Cliente non può copiare, modificare o distribuire il Software senza autorizzazione.</p>

    <h2>7. Limitazione di Responsabilità</h2>
    <p>Martes AI fornisce i Servizi "<strong>così come sono</strong>" senza alcuna garanzia di risultato. Il Cliente è responsabile dei contenuti generati tramite il Software.</p>

    <h2>8. Trattamento dei Dati e Privacy</h2>
    <p>L’informativa privacy è disponibile su <a href="https://www.martes-ai.com/privacy">https://www.martes-ai.com/privacy</a>.</p>

    <h2>9. Modifiche ai Termini di Servizio</h2>
    <p>Martes AI si riserva il diritto di modificare le presenti Condizioni Generali con un preavviso di <strong>30 giorni</strong>. Se il Cliente non accetta le modifiche, può recedere dal contratto senza penalità.</p>

    <h2>10. Forza Maggiore</h2>
    <p>Martes AI non sarà responsabile per ritardi o interruzioni dei Servizi causati da eventi di <strong>forza maggiore</strong>, inclusi disastri naturali o guasti tecnologici.</p>

    <h2>11. Legge Applicabile e Foro Competente</h2>
    <p>Le presenti Condizioni Generali sono regolate dalla <strong>legge italiana</strong>. Per eventuali controversie, il foro competente è <strong>Roma</strong>.</p>

    <h2>12. Contatti</h2>
    <p>Per informazioni o assistenza, contattaci via email all’indirizzo <a href="mailto:contact@martes-ai.com">contact@martes-ai.com</a>.</p>

        </div>
      </div>
    </div>
  );
}

export default Terms; 