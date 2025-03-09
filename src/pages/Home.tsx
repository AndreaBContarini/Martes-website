import Hero from '../components/Hero';
import ComparisonSection from '../components/ComparisonSection';
import ServicesSection from '../components/ServicesSection';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    revenue: '',
    budget: '',
    startDate: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    let normalizedWebsite = formData.website.trim();

    if (normalizedWebsite) {
      normalizedWebsite = normalizedWebsite.replace(/^https?:\/\//, '');
      normalizedWebsite = normalizedWebsite.replace(/^www\./, '');
      normalizedWebsite = `https://www.${normalizedWebsite}`;
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
        <meta name="description" content="Trasforma il tuo business con soluzioni di intelligenza artificiale personalizzate: automazioni basate su AI, chatbot avanzati e agenti AI per lead generation. Ottimizza i processi aziendali e aumenta i risultati con Martes AI." />
        <meta name="keywords" content="automazioni basate su AI, agenti AI e chatbot lead generation con AI, intelligenza artificiale per business, automazione processi aziendali, soluzioni AI personalizzate, AI per PMI, consulenza AI" />
        <meta property="og:title" content="Martes AI | Automazioni AI, Agenti AI e Chatbot per il Business" />
        <meta property="og:description" content="Soluzioni di intelligenza artificiale personalizzate per il tuo business: automazioni AI, chatbot avanzati e lead generation con AI. Scopri come ottimizzare i tuoi processi con Martes AI." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martes-ai.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martes AI | Automazioni AI, Agenti AI e Chatbot" />
        <meta name="twitter:description" content="Soluzioni di intelligenza artificiale personalizzate: Automazioni AI, Agenti AI e Chatbot e lead generation per il tuo business." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.martes-ai.com" />
      </Helmet>
      <div className="flex flex-col items-center w-full">
        <Hero />
        <ComparisonSection />
        <ServicesSection />
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
                    Parlaci del tuo progetto: dove vorresti applicare l'intelligenza
                    artificiale per migliorare il tuo lavoro?*
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
                    Quanto fattura la tua azienda?*
                  </label>
                  <input
                    type="text"
                    name="revenue"
                    required
                    placeholder="Inserisci un numero indicativo"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.revenue}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget per il progetto*
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value="1500-2500"
                        className="mr-2"
                        onChange={handleChange}
                        checked={formData.budget === "1500-2500"}
                      />
                      1.500€ - 2.500€
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
                    Sito internet della tua azienda
                  </label>
                  <input
                    type="url"
                    name="website"
                    placeholder="Inserisci qui il link"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#274f36] focus:ring-1 focus:ring-[#274f36] transition"
                    onChange={handleChange}
                    value={formData.website}
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