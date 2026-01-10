import LegalLayout from '../components/layout/LegalLayout';

const Terms = () => {
  return (
    <LegalLayout 
      title="Termini di Servizio" 
      description="Termini e Condizioni di utilizzo dei servizi Martes AI."
      lastUpdated="04/01/2026"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">1. Introduzione</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Le presenti Condizioni Generali di Servizio ("Condizioni Generali" o "Contratto") disciplinano i termini e le condizioni per l’uso del software e dei servizi <strong className="text-white">Martes AI</strong> offerti in modalità SaaS ("Servizi") da <strong className="text-white">Martes AI</strong>, accessibili attraverso il sito web <a href="https://www.martes-ai.com" className="text-martes-green hover:underline">https://www.martes-ai.com</a> ("Piattaforma").</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">2. Definizioni</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
          <li><strong className="text-white">"Cliente"</strong>: La persona fisica o giuridica che utilizza i Servizi di Martes AI.</li>
          <li><strong className="text-white">"Software"</strong>: Il software basato su AI fornito da Martes AI, incluso chatbot, automazioni e strumenti di analisi.</li>
          <li><strong className="text-white">"Servizi"</strong>: L'insieme delle funzionalità offerte, inclusi chatbot, automazioni e consulenze AI.</li>
          <li><strong className="text-white">"Dati del Cliente"</strong>: Qualsiasi informazione o contenuto caricato dal Cliente sulla Piattaforma.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">3. Oggetto del Contratto</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Martes AI concede al Cliente una <strong className="text-white">licenza d’uso non esclusiva</strong>, non trasferibile e non sub-licenziabile per accedere e utilizzare i Servizi.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">4. Registrazione e Accesso alla Piattaforma</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Gli utenti non creano un account su Martes AI. Per accedere ai Servizi, il Cliente può contattarci via email o prenotare un appuntamento tramite Calendly.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">5. Abbonamenti, Pagamenti e Disdetta</h2>
      
      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">5.1 Modalità di Pagamento</h3>
      <p className="text-neutral-300 leading-relaxed mb-4">Martes AI offre soluzioni software con:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Pagamenti one-shot (una tantum)</li>
        <li>Collaborazioni con rinnovo mensile o annuale</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">5.2 Disdetta e Rimborsi</h3>
      <p className="text-neutral-300 leading-relaxed mb-6">Le condizioni di disdetta e rimborsi sono stabilite individualmente nel contratto fornito al Cliente.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">6. Proprietà Intellettuale</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Martes AI detiene tutti i diritti sul Software, inclusi codice sorgente e algoritmi. Il Cliente non può copiare, modificare o distribuire il Software senza autorizzazione.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">7. Limitazione di Responsabilità</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Martes AI fornisce i Servizi "<strong className="text-white">così come sono</strong>" senza alcuna garanzia di risultato. Il Cliente è responsabile dei contenuti generati tramite il Software.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">8. Trattamento dei Dati e Privacy</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">L’informativa privacy è disponibile su <a href="https://www.martes-ai.com/privacy" className="text-martes-green hover:underline">https://www.martes-ai.com/privacy</a>.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">9. Modifiche ai Termini di Servizio</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Martes AI si riserva il diritto di modificare le presenti Condizioni Generali con un preavviso di 30 giorni. Se il Cliente non accetta le modifiche, può recedere dal contratto senza penalità.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">10. Forza Maggiore</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Martes AI non sarà responsabile per ritardi o interruzioni dei Servizi causati da eventi di forza maggiore, inclusi disastri naturali o guasti tecnologici.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">11. Legge Applicabile e Foro Competente</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Le presenti Condizioni Generali sono regolate dalla legge italiana. Per eventuali controversie, il foro competente è Roma.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">12. Contatti</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Per informazioni o assistenza, contattaci via email all’indirizzo <a href="mailto:contact@martes-ai.com" className="text-martes-green hover:underline">contact@martes-ai.com</a>.</p>
    </LegalLayout>
  );
}

export default Terms;
