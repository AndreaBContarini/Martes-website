import LegalLayout from '../components/layout/LegalLayout';

const Cookies = () => {
  return (
    <LegalLayout 
      title="Cookie Policy" 
      description="Informativa sui Cookie di Martes AI."
      lastUpdated="04/01/2026"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">1. Cosa sono i cookie</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">2. Tipologie di cookie utilizzati</h2>
      
      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2.1 Cookie tecnici essenziali</h3>
      <p className="text-neutral-300 leading-relaxed mb-4">Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati. Includono:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Cookie di sessione per la gestione del login</li>
        <li>Cookie per il salvataggio delle preferenze di consenso</li>
        <li>Cookie di sicurezza</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2.2 Cookie analitici</h3>
      <p className="text-neutral-300 leading-relaxed mb-4">Utilizziamo Google Analytics per raccogliere informazioni anonime su come gli utenti interagiscono con il nostro sito:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Statistiche di visualizzazione delle pagine</li>
        <li>Tempo di permanenza sul sito</li>
        <li>Provenienza geografica degli utenti</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2.3 Cookie di marketing</h3>
      <p className="text-neutral-300 leading-relaxed mb-4">Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Cookie per il retargeting pubblicitario</li>
        <li>Cookie per l'analisi del comportamento degli utenti</li>
        <li>Cookie dei social media</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">3. Durata dei cookie</h2>
      <p className="text-neutral-300 leading-relaxed mb-4">I cookie hanno durate diverse:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li><strong className="text-white">Cookie di sessione</strong>: vengono eliminati alla chiusura del browser</li>
        <li><strong className="text-white">Cookie persistenti</strong>: rimangono attivi fino alla loro data di scadenza</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">4. Come gestire i cookie</h2>
      <p className="text-neutral-300 leading-relaxed mb-4">Puoi gestire le tue preferenze sui cookie in diversi modi:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Attraverso il banner dei cookie presente sul nostro sito</li>
        <li>Dalle impostazioni del tuo browser</li>
        <li>Utilizzando strumenti di opt-out specifici per i cookie di terze parti</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">5. Cookie di terze parti</h2>
      <p className="text-neutral-300 leading-relaxed mb-4">Il nostro sito utilizza servizi di terze parti che potrebbero impostare i loro cookie:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-300">
        <li>Google Analytics</li>
        <li>Google Ads</li>
        <li>Meta Pixel</li>
        <li>LinkedIn Insight Tag</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">6. Aggiornamenti della Cookie Policy</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Ci riserviamo il diritto di modificare questa cookie policy in qualsiasi momento. Le modifiche saranno effettive dal momento della pubblicazione sul sito.</p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6">7. Contatti</h2>
      <p className="text-neutral-300 leading-relaxed mb-6">Per qualsiasi domanda relativa alla nostra cookie policy, puoi contattarci all'indirizzo email: <a href="mailto:contact@martes-ai.com" className="text-martes-green hover:underline">contact@martes-ai.com</a></p>
    </LegalLayout>
  );
}

export default Cookies;
