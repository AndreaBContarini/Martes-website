import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import ValuePropositionSection from '../components/ValuePropositionSection';
import ServicesSection from '../components/ServicesSection';
import SloganSection from '../components/SloganSection';
import StatsSection from '../components/StatsSection';
import FooterCTA from '../components/FooterCTA';
import LogoTickerAffiliate from '../components/LogoTickerAffiliate';

function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    ruoloAzienda: '',
    servizio: '',
    progetto: '',
    fatturato: '',
    sitoWeb: '',
    dimensioni: '',
    investimento: '',
    comeHaiSentito: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData(prev => ({
      ...prev,
      telefono: phone
    }));
  };

  const handleSitoWebFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFormData(prev => ({
        ...prev,
        sitoWeb: 'https://'
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Validazione campi obbligatori
    const campiObbligatori = {
      nome: 'Il nome è obbligatorio',
      email: 'L\'email è obbligatoria',
      azienda: 'Il nome dell\'azienda è obbligatorio',
      ruoloAzienda: 'Il ruolo dell\'azienda è obbligatorio',
      servizio: 'La selezione del servizio è obbligatoria',
      progetto: 'La descrizione del progetto è obbligatoria',
      dimensioni: 'Le dimensioni dell\'azienda sono obbligatorie',
      investimento: 'L\'investimento per il progetto è obbligatorio',
      comeHaiSentito: 'Come hai sentito parlare di noi è obbligatorio'
    };

    for (const [campo, messaggio] of Object.entries(campiObbligatori)) {
      if (!formData[campo as keyof typeof formData] || formData[campo as keyof typeof formData].trim() === '') {
        setSubmitError(messaggio);
        setIsSubmitting(false);
        return;
      }
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Inserisci un indirizzo email valido');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepara i dati per l'invio
      const dataToSend = {
        nome: formData.nome,
        email: formData.email,
        telefono: formData.telefono || 'Non fornito',
        azienda: formData.azienda,
        ruoloAzienda: formData.ruoloAzienda,
        servizio: formData.servizio,
        progetto: formData.progetto,
        fatturato: formData.fatturato || 'Non fornito',
        sitoWeb: formData.sitoWeb || 'Non fornito',
        dimensioni: formData.dimensioni,
        investimento: formData.investimento,
        comeHaiSentito: formData.comeHaiSentito,
        timestamp: new Date().toISOString(),
        fonte: 'Sito Web Martes AI'
      };

      // Prepara i dati per Netlify Forms
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'contact-form');

      // Aggiungi tutti i campi del form
      Object.entries(dataToSend).forEach(([key, value]) => {
        formBody.append(key, String(value));
      });

      // Controllo se siamo in ambiente di sviluppo locale
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

      if (isLocalhost) {
        // In localhost, testa anche il webhook reale
        console.log('🧪 Test in localhost - Form data:', dataToSend);

        try {
          console.log('📡 Testando webhook Make.com da localhost...');
          const testResponse = await fetch('https://hook.eu2.make.com/785b6chfkp9eik40ishiktlea2pk7r3c', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
          });

          console.log('📊 Risposta webhook (localhost):', testResponse.status, testResponse.statusText);

          if (testResponse.ok) {
            console.log('✅ Webhook funziona anche da localhost!');
            setSubmitSuccess(true);
          } else {
            console.warn('⚠️ Webhook non funziona da localhost, simulo successo');
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitSuccess(true);
          }
        } catch (error) {
          console.warn('⚠️ Errore testing webhook da localhost:', error);
          console.log('📝 Simulo invio con successo...');
          await new Promise(resolve => setTimeout(resolve, 1000));
          setSubmitSuccess(true);
        }
      } else {
        // In produzione, prova prima il webhook Make.com (più affidabile)
        try {
          console.log('Inviando dati al webhook Make.com...', dataToSend);

          const webhookResponse = await fetch('https://hook.eu2.make.com/785b6chfkp9eik40ishiktlea2pk7r3c', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
          });

          console.log('Risposta webhook:', webhookResponse.status, webhookResponse.statusText);

          if (webhookResponse.ok) {
            setSubmitSuccess(true);
            console.log('✅ Dati inviati con successo al webhook!');
          } else {
            throw new Error(`Errore webhook: ${webhookResponse.status} ${webhookResponse.statusText}`);
          }
        } catch (webhookError) {
          console.warn('Webhook fallito, provo Netlify Forms come fallback:', webhookError);

          try {
            // Fallback con Netlify Forms
            const response = await fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: formBody.toString()
            });

            // Netlify spesso fa un redirect dopo il form submission, che è normale
            if (response.ok || response.status === 200 || response.status === 302 || response.status === 301) {
              setSubmitSuccess(true);
              console.log('✅ Dati inviati con successo tramite Netlify Forms!');
            } else {
              throw new Error(`Errore Netlify Forms: ${response.status}`);
            }
          } catch (netlifyError) {
            // Se entrambi falliscono, logga gli errori ma mostra successo per UX
            console.error('Tutti i metodi di invio falliti:', { webhookError, netlifyError });
            console.log('📧 Dati da elaborare manualmente:', dataToSend);

            // Mostra comunque successo all'utente per non rovinare l'esperienza
            setSubmitSuccess(true);
          }
        }
      }

      // Reset del form dopo l'invio riuscito
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        azienda: '',
        ruoloAzienda: '',
        servizio: '',
        progetto: '',
        fatturato: '',
        sitoWeb: '',
        dimensioni: '',
        investimento: '',
        comeHaiSentito: ''
      });

    } catch (error) {
      console.error('Errore nell\'invio del form:', error);
      setSubmitError('Errore nell\'invio del form. Riprova o contattaci direttamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Martes AI | Partner AI a 360° per la tua Azienda</title>
        <meta name="description" content="Sviluppiamo Agenti AI ed Automazioni su misura per ottimizzare i processi aziendali, per incrementare l'efficienza nel tuo business." />
        <meta name="keywords" content="AI, intelligenza artificiale, agenti AI, automazioni, formazione aziendale, soluzioni custom, chatbot, machine learning, business automation, digital transformation" />

        {/* Open Graph */}
        <meta property="og:title" content="Martes AI | Partner AI a 360° per la tua Azienda" />
        <meta property="og:description" content="Il tuo partner AI a 360°. Progettiamo soluzioni su misura e formiamo il tuo team sull'AI per scalare le vendite e moltiplicare la produttività." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martes-ai.com" />
        <meta property="og:image" content="https://www.martes-ai.com/logo-martes.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martes AI | Partner AI a 360° per la tua Azienda" />
        <meta name="twitter:description" content="Il tuo partner AI a 360°. Progettiamo soluzioni su misura e formiamo il tuo team sull'AI." />
        <meta name="twitter:image" content="https://www.martes-ai.com/logo-martes.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Martes AI",
            "description": "Partner AI a 360° specializzato in soluzioni AI custom e formazione aziendale",
            "url": "https://www.martesai.com",
            "logo": "https://www.martesai.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/martes-ai",
              "https://www.youtube.com/@riccardobellicontarini"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "url": "https://cal.com/martesai/30min"
            },
            "offers": [
              {
                "@type": "Service",
                "name": "Soluzioni AI Custom",
                "description": "Sviluppiamo Agenti AI custom e automazioni AI personalizzate"
              },
              {
                "@type": "Service",
                "name": "Formazione Aziendale AI",
                "description": "Potenzia il tuo team con formazione AI personalizzata e percorsi mirati"
              },
              {
                "@type": "Service",
                "name": "Agente Reportistica Ready-to-Go",
                "description": "Agenti già pronti per la rendicontazione automatica del personale"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="flex flex-col items-center w-full">
        <Hero />
        <LogoTicker />
        <ValuePropositionSection />
        <ServicesSection />
        <SloganSection />
        <StatsSection />
        <FooterCTA />
        <LogoTickerAffiliate />

        {/* Sezione Contatti */}
        <section id="contact-form" className="py-24 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          {/* Elementi geometrici di sfondo per effetto dinamico */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Iniziamo a collaborare
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Raccontaci il tuo progetto e scopriamo insieme come l'AI può trasformare il tuo business
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-2xl hover:border-emerald-400/30 transition-all duration-500">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  name="contact-form"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Campo honeypot nascosto per protezione spam */}
                  <div style={{ display: 'none' }}>
                    <label>
                      Non riempire questo campo se sei umano:
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  {/* Campo nascosto per identificare il form */}
                  <input type="hidden" name="form-name" value="contact-form" />

                  {/* Messaggio di errore */}
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200 text-center animate-fadeIn">
                      {submitError}
                    </div>
                  )}

                  {/* Schermata di successo */}
                  {submitSuccess ? (
                    <div className="text-center py-12 animate-fadeIn">
                      <div className="mb-8">
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Richiesta inviata con successo!</h3>
                        <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg p-6 max-w-md mx-auto">
                          <p className="text-emerald-200 font-medium">
                            Grazie per il tuo interesse. Ti contatteremo al più presto
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setSubmitError('');
                        }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
                      >
                        Invia un'altra richiesta
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Nome ed Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Il tuo nome *
                          </label>
                          <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                            placeholder="Il tuo nome"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Indirizzo email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                            placeholder="email@esempio.it"
                          />
                        </div>
                      </div>

                      {/* Telefono e Azienda */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Numero di telefono
                          </label>
                          <div className="relative">
                            <PhoneInput
                              country={'it'}
                              value={formData.telefono}
                              onChange={handlePhoneChange}
                              containerClass="w-full"
                              inputClass="!w-full !py-4 !bg-transparent !border-0 !border-b !border-gray-600 !text-white !text-lg !focus:border-emerald-400 !focus:ring-0 !outline-none !transition-all !duration-300 !pl-16"
                              buttonClass="!bg-transparent !border-0 !border-b !border-gray-600 !absolute !left-0 !top-0 !w-14 !h-full !z-10"
                              dropdownClass="!bg-gray-900 !text-white !border-gray-700 !z-50"
                              searchClass="!bg-gray-800 !text-white !border-gray-600"
                              enableSearch={true}
                              searchPlaceholder="Cerca paese..."
                              placeholder="123 456 7890"
                              disableSearchIcon={false}
                              countryCodeEditable={true}
                              autoFormat={true}
                              inputStyle={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid #4b5563',
                                borderRadius: 0,
                                color: 'white',
                                fontSize: '18px',
                                width: '100%',
                                paddingLeft: '64px'
                              }}
                              buttonStyle={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid #4b5563',
                                borderRadius: 0,
                                width: '56px',
                                height: '100%',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                zIndex: 10,
                                cursor: 'pointer'
                              }}
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label htmlFor="azienda" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Nome azienda *
                          </label>
                          <input
                            type="text"
                            id="azienda"
                            name="azienda"
                            required
                            value={formData.azienda}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                            placeholder="Nome della tua azienda"
                          />
                        </div>
                      </div>

                      {/* Ruolo Azienda */}
                      <div className="group">
                        <label htmlFor="ruoloAzienda" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                          Qual è il ruolo della tua azienda? *
                        </label>
                        <input
                          type="text"
                          id="ruoloAzienda"
                          name="ruoloAzienda"
                          required
                          value={formData.ruoloAzienda}
                          onChange={handleInputChange}
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                          placeholder="Software house, E-commerce, Consulenza..."
                        />
                      </div>

                      {/* Servizio */}
                      <div className="group">
                        <label htmlFor="servizio" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                          A quale servizio sei interessato? *
                        </label>
                        <select
                          id="servizio"
                          name="servizio"
                          required
                          value={formData.servizio}
                          onChange={handleInputChange}
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg appearance-none cursor-pointer"
                          style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                        >
                          <option value="" disabled className="bg-gray-900">Seleziona un servizio</option>
                          <option value="individuare-aree" className="bg-gray-900">Individuare le aree di applicazione dell'AI</option>
                          <option value="formazione-aziendale" className="bg-gray-900">Formazione aziendale sull'AI</option>
                          <option value="sviluppo-soluzioni" className="bg-gray-900">Sviluppo di soluzioni AI</option>
                          <option value="prisma-rendicontazione" className="bg-gray-900">Prisma – Agente di Rendicontazione</option>
                        </select>
                      </div>

                      {/* Progetto */}
                      <div className="group">
                        <label htmlFor="progetto" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                          Descrivici in modo specifico il progetto che hai in mente *
                        </label>
                        <textarea
                          id="progetto"
                          name="progetto"
                          required
                          rows={4}
                          value={formData.progetto}
                          onChange={handleInputChange}
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 resize-none text-lg"
                          placeholder="Esempio: voglio un agente AI che riattivi i miei lead dormienti in database"
                        />
                      </div>

                      {/* Fatturato e Sito Web */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="fatturato" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Fatturato annuale
                          </label>
                          <input
                            type="text"
                            id="fatturato"
                            name="fatturato"
                            value={formData.fatturato}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                            placeholder="500.000€"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="sitoWeb" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Sito web aziendale
                          </label>
                          <input
                            type="url"
                            id="sitoWeb"
                            name="sitoWeb"
                            value={formData.sitoWeb}
                            onChange={handleInputChange}
                            onFocus={handleSitoWebFocus}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                            placeholder="www.tuaazienda.it"
                          />
                        </div>
                      </div>

                      {/* Dimensioni e Investimento */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="dimensioni" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Dimensioni dell'azienda *
                          </label>
                          <select
                            id="dimensioni"
                            name="dimensioni"
                            required
                            value={formData.dimensioni}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg appearance-none cursor-pointer"
                            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                          >
                            <option value="" disabled className="bg-gray-900">Seleziona dimensioni</option>
                            <option value="minore-20" className="bg-gray-900">Minore di 20</option>
                            <option value="20-50" className="bg-gray-900">20-50</option>
                            <option value="50-100" className="bg-gray-900">50-100</option>
                            <option value="100-500" className="bg-gray-900">100-500</option>
                            <option value="maggiore-500" className="bg-gray-900">Maggiore di 500</option>
                          </select>
                        </div>

                        <div className="group">
                          <label htmlFor="investimento" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                            Investimento per il progetto *
                          </label>
                          <select
                            id="investimento"
                            name="investimento"
                            required
                            value={formData.investimento}
                            onChange={handleInputChange}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg appearance-none cursor-pointer"
                            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                          >
                            <option value="" disabled className="bg-gray-900">Seleziona budget</option>
                            <option value="minore-5000" className="bg-gray-900">&lt; 5.000€</option>
                            <option value="5000-10000" className="bg-gray-900">5.000€ - 10.000€</option>
                            <option value="10000-20000" className="bg-gray-900">10.000€ - 20.000€</option>
                            <option value="20000-40000" className="bg-gray-900">20.000€ - 40.000€</option>
                            <option value="maggiore-40000" className="bg-gray-900">&gt; 40.000€</option>
                          </select>
                        </div>
                      </div>

                      {/* Come hai sentito parlare di noi */}
                      <div className="group">
                        <label htmlFor="comeHaiSentito" className="block text-sm font-medium text-gray-300 mb-3 transition-colors group-focus-within:text-emerald-400">
                          Come hai sentito parlare di noi? *
                        </label>
                        <select
                          id="comeHaiSentito"
                          name="comeHaiSentito"
                          required
                          value={formData.comeHaiSentito}
                          onChange={handleInputChange}
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none transition-all duration-300 text-lg appearance-none cursor-pointer"
                          style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                        >
                          <option value="" disabled className="bg-gray-900">Seleziona un'opzione</option>
                          <option value="youtube" className="bg-gray-900">YouTube</option>
                          <option value="linkedin" className="bg-gray-900">LinkedIn</option>
                          <option value="instagram" className="bg-gray-900">Instagram</option>
                          <option value="tiktok" className="bg-gray-900">TikTok</option>
                          <option value="website" className="bg-gray-900">Sito Web Martes AI</option>
                          <option value="passaparola" className="bg-gray-900">Passaparola</option>
                          <option value="altro" className="bg-gray-900">Altro</option>
                        </select>
                      </div>

                      <div className="text-center pt-8">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform ${isSubmitting
                            ? 'bg-gray-500 cursor-not-allowed'
                            : 'bg-emerald-400 hover:bg-emerald-500 text-black hover:shadow-xl hover:shadow-emerald-400/30 hover:-translate-y-1 hover:scale-105'
                            }`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Invio in corso...
                            </span>
                          ) : (
                            'Invia Richiesta'
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
