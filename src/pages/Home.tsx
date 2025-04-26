import Hero from '../components/Hero';
import ComparisonSection from '../components/ComparisonSection';
import ServicesSection from '../components/ServicesSection';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './animations.css';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    revenue: '',
    budget: '',
    startDate: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Stato per il form della newsletter
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const [isNewsletterEmailValid, setIsNewsletterEmailValid] = useState(false);

  // Validazione dell'email per la newsletter
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsNewsletterEmailValid(emailRegex.test(newsletterEmail));
  }, [newsletterEmail]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isNewsletterEmailValid) {
      setNewsletterError('Per favore, inserisci un indirizzo email valido.');
      return;
    }

    setIsNewsletterSubmitting(true);
    setNewsletterError('');

    try {
      const response = await fetch('https://hook.eu2.make.com/9jesbl0qp9wvi332ixouhgqs59suu58h', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio. Riprova più tardi.");
      }

      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterError(err instanceof Error ? err.message : "Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica che il budget sia stato selezionato
    if (!formData.budget) {
      alert("Per favore, seleziona un budget per il progetto");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    let normalizedWebsite = formData.website;
    if (normalizedWebsite && !normalizedWebsite.startsWith('http')) {
      normalizedWebsite = `https://${normalizedWebsite}`;
    }

    try {
      const response = await fetch('https://hook.eu2.make.com/785b6chfkp9eik40ishiktlea2pk7r3c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.project,
          revenue: formData.revenue,
          budget: formData.budget,
          startDate: formData.startDate,
          website: normalizedWebsite,
        }),
      });

      if (!response.ok) throw new Error('Errore nell\'invio dei dati');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        revenue: '',
        budget: '',
        startDate: '',
        website: '',
      });

      const formElement = document.querySelector('#contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }

    } catch (error) {
      console.error('Errore nell\'invio dei dati:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Martes AI | Automazioni AI, Agenti AI e Chatbot per il Business</title>
        <meta name="description" content="Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate per incrementare l'efficienza e il ROI della tua impresa." />
        <meta name="keywords" content="automazioni basate su AI, agenti AI, chatbot intelligenti, lead generation con AI, intelligenza artificiale per business, automazione processi aziendali, soluzioni AI personalizzate, AI per PMI, consulenza AI" />
        <meta property="og:title" content="Martes AI | Automazioni AI, Agenti AI e Chatbot per il Business" />
        <meta property="og:description" content="Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate per incrementare l'efficienza e il ROI." />
        <meta property="og:image" content="https://i.ibb.co/43C5cwp/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martes-ai.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martes AI | Automazioni AI, Agenti AI e Chatbot" />
        <meta name="twitter:description" content="Automazioni AI personalizzate, chatbot intelligenti e soluzioni di lead generation per ottimizzare i processi della tua azienda." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.martes-ai.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Martes AI",
            "url": "https://www.martes-ai.com",
            "logo": "https://i.ibb.co/43C5cwp/favicon.png",
            "description": "Sviluppiamo automazioni AI su misura per ottimizzare i processi aziendali. Chatbot avanzati, agenti AI e soluzioni personalizzate.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Aurelia 325",
              "addressLocality": "Roma",
              "addressCountry": "IT"
            },
            "vatID": "18026131005",
            "sameAs": [
              "https://www.linkedin.com/company/martes-ai",
              "https://www.instagram.com/martes_ai",
              "https://www.youtube.com/@riccardobellicontarini"
            ]
          })}
        </script>
      </Helmet>
      <div className="flex flex-col items-center w-full">
        <Hero />
        <ComparisonSection />
        <ServicesSection />
        
        {/* Sezione Newsletter */}
        <section className="py-20 w-full bg-black/20">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-black/30 p-8 rounded-lg border border-gray-800 shadow-lg hover:shadow-[#274f36]/20 transition-all duration-300 animate-fadeIn">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4 text-white animate-slideDown">Iscriviti alla nostra Newsletter</h2>
                <div className="w-24 h-1 bg-[#274f36] mx-auto mb-6 animate-scaleIn"></div>
                <p className="text-gray-300 animate-fadeIn">
                  Ricevi aggiornamenti e insight esclusivi direttamente nella tua casella di posta.
                </p>
              </div>
              
              {newsletterSubmitted ? (
                <div className="bg-[#274f36]/20 border border-[#274f36] rounded-lg p-6 text-center animate-fadeIn">
                  <h2 className="text-xl font-semibold mb-2">Grazie per esserti iscritto!</h2>
                  <p className="text-gray-300">Ti terremo aggiornato con le ultime novità dal mondo dell'AI.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-6 relative">
                  <div className="relative z-10">
                    <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Il tuo indirizzo email"
                      className={`w-full p-3 rounded-lg bg-white/10 border ${newsletterError ? 'border-red-500' : 'border-white/20'} focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition-all duration-300 ease-in-out hover:bg-white/15 focus:scale-[1.01]`}
                      style={{ pointerEvents: 'auto', opacity: 1 }}
                      required
                    />
                    {newsletterError && <p className="mt-2 text-sm text-red-500 animate-pulse">{newsletterError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isNewsletterSubmitting || !isNewsletterEmailValid}
                    className={`w-full bg-[#274f36] hover:bg-[#1a3524] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                      (isNewsletterSubmitting || !isNewsletterEmailValid) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isNewsletterSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Iscrivendoti, accetti la nostra <a href="/privacy" className="text-[#274f36] hover:underline hover:text-[#3a6c4a] transition-colors duration-300">Privacy Policy</a>. 
                    Non invieremo mai spam e potrai annullare l'iscrizione in qualsiasi momento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
        
        <section id="contact-form" className="py-20 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-black/40 rounded-3xl p-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                Hai un progetto in mente?
              </h2>
              <p className="text-center text-xl mb-8">
                Contattaci per condividere con noi la tua idea
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center">
                  Grazie per averci contattato! Ti risponderemo al più presto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
                  Si è verificato un errore. Per favore riprova più tardi o contattaci direttamente via email.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Inserisci il tuo nome"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Inserisci la tua email"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Numero di telefono:
                  </label>
                  <PhoneInput
                    country={'it'}
                    value={formData.phone}
                    onChange={phone => setFormData(prev => ({ ...prev, phone }))}
                    containerClass="w-full relative z-50"
                    inputClass="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition text-white"
                    buttonClass="border border-white/20 rounded-l-lg bg-white/10 hover:bg-white/20"
                    dropdownClass="bg-black/90 text-white absolute z-[100]"
                    searchClass="bg-white text-black"
                    enableSearch={true}
                    searchPlaceholder="Cerca paese..."
                    placeholder="Inserisci il tuo numero"
                    disableSearchIcon={false}
                    enableAreaCodes={true}
                    countryCodeEditable={true}
                    autoFormat={true}
                    disableDropdown={false}
                    inputStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: 'white',
                      width: '100%'
                    }}
                    buttonStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                      borderTopLeftRadius: '8px',
                      borderBottomLeftRadius: '8px',
                      cursor: 'pointer',
                      pointerEvents: 'auto'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parlaci del tuo progetto: dove vorresti applicare l'AI per migliorare la performance della tua attività?*
                  </label>
                  <textarea
                    name="project"
                    required
                    rows={4}
                    placeholder="Inserisci qui i dettagli"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.project}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Fatturato aziendale?
                  </label>
                  <input
                    type="text"
                    name="revenue"
                    placeholder="Inserisci un numero indicativo"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.revenue}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Investimento per il progetto:*
                  </label>
                  <div className="space-y-2" role="radiogroup" aria-required="true">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value="2000-2500"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === "2000-2500"}
                        required
                      />
                      2.000€ - 2.500€
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value="2500-3500"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === "2500-3500"}
                      />
                      2.500€ - 3.500€
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value="3500-5000"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === "3500-5000"}
                      />
                      3.500€ - 5.000€
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value="5000-10000"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === "5000-10000"}
                      />
                      5.000€ - 10.000€
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value=">10000"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === ">10000"}
                      />
                      Più di 10.000€
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quando vorresti iniziare il progetto?*
                  </label>
                  <input
                    type="text"
                    name="startDate"
                    required
                    placeholder="Es: Il prima possibile, Tra 2 mesi, etc."
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.startDate}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sito web aziendale:
                  </label>
                  <input
                    type="url"
                    name="website"
                    placeholder="Inserisci qui il link"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.website}
                    onFocus={(e) => {
                      if (!e.target.value) {
                        setFormData(prev => ({
                          ...prev,
                          website: 'https://'
                        }));
                      } else if (!e.target.value.startsWith('https://')) {
                        setFormData(prev => ({
                          ...prev,
                          website: `https://${e.target.value}`
                        }));
                      }
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#274f36] hover:bg-[#1a3524] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;