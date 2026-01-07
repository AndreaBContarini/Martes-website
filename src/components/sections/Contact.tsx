import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, AlertCircle, ChevronDown } from 'lucide-react';

const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  name, 
  placeholder = "Seleziona..." 
}: { 
  options: string[], 
  value: string, 
  onChange: (e: { target: { name: string, value: string } }) => void, 
  name: string,
  placeholder?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable cursor-pointer flex justify-between items-center transition-all ${isOpen ? 'border-martes-green shadow-[0_0_0_4px_rgba(74,222,128,0.1)]' : ''}`}
      >
        <span className={value ? 'text-white' : 'text-neutral-500'}>
          {value || placeholder}
        </span>
        <ChevronDown size={20} className={`text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-[#0f0f0f] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <div 
                key={option}
                onClick={() => {
                  onChange({ target: { name, value: option } });
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${value === option ? 'bg-martes-green/10 text-martes-green' : 'text-neutral-300 hover:bg-white/5'}`}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PrefixSelect = ({ 
  value, 
  onChange 
}: { 
  value: string, 
  onChange: (value: string) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = [
    { code: "+39", flag: "🇮🇹" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+33", flag: "🇫🇷" },
    { code: "+49", flag: "🇩🇪" },
    { code: "+34", flag: "🇪🇸" },
    { code: "+41", flag: "🇨🇭" },
    { code: "+971", flag: "🇦🇪" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.code === value) || options[0];

  return (
    <div className="relative" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#0f0f0f] border border-white/[0.08] border-r-0 text-neutral-300 rounded-l-lg pl-4 pr-2 py-3 h-[50px] cursor-pointer flex items-center gap-2 hover:bg-white/5 transition-colors min-w-[100px] justify-between ${isOpen ? 'border-martes-green/50' : ''}`}
      >
        <span className="flex items-center gap-2 text-sm">
          <span>{selectedOption.flag}</span>
          <span>{selectedOption.code}</span>
        </span>
        <ChevronDown size={14} className={`text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute top-full left-0 mt-2 w-[140px] bg-[#0f0f0f] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto z-50 py-1"
          >
            {options.map((option) => (
              <div 
                key={option.code}
                onClick={() => {
                  onChange(option.code);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2 ${value === option.code ? 'bg-martes-green/10 text-martes-green' : 'text-neutral-300 hover:bg-white/5'}`}
              >
                <span>{option.flag}</span>
                <span>{option.code}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    prefisso: '+39',
    azienda: '',
    ruolo: '',
    servizio: 'AI Transformation Partner',
    progetto: '',
    fatturato: '< 500k',
    sitoWeb: '',
    dipendenti: '1-10 dipendenti',
    budget: '< 5.000 €',
    sorgente: 'LinkedIn'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (e: { target: { name: string, value: string } }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePrefixChange = (newPrefix: string) => {
    setFormData(prev => ({
      ...prev,
      prefisso: newPrefix
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Create payload with combined phone number
      const payload = {
        ...formData,
        telefono: `${formData.prefisso} ${formData.telefono}`,
        // Add redundant fields for webhook compatibility
        dimensione_azienda: formData.dipendenti,
        company_size: formData.dipendenti
      };

      const response = await fetch('https://hook.eu2.make.com/785b6chfkp9eik40ishiktlea2pk7r3c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefono: '',
          prefisso: '+39',
          azienda: '',
          ruolo: '',
          servizio: 'AI Transformation Partner',
          progetto: '',
          fatturato: '< 500k',
          sitoWeb: '',
          dipendenti: '1-10 dipendenti',
          budget: '< 5.000 €',
          sorgente: 'LinkedIn'
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Errore durante l\'invio');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Si è verificato un errore. Riprova più tardi o scrivici a info@martes.ai');
    }
  };

  return (
    <section id="contact" className="pb-24 pt-0 px-6 relative bg-black z-10">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-martes-green/30 bg-martes-green/10 text-martes-green text-sm font-bold tracking-wider mb-6">
            CONTATTACI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Parliamo del tuo <span className="text-martes-green">progetto.</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Compila il form qui sotto per fissare una call conoscitiva.
          </p>
        </div>

        <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-martes-green/20 flex items-center justify-center text-martes-green mb-6">
                  <Check size={48} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Richiesta Inviata!</h3>
                <p className="text-neutral-400 max-w-md">
                  Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none focus:shadow-[0_0_0_4px_rgba(74,222,128,0.1)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Email aziendale *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none focus:shadow-[0_0_0_4px_rgba(74,222,128,0.1)] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Numero di telefono
                    </label>
                    <div className="flex">
                      <PrefixSelect 
                        value={formData.prefisso}
                        onChange={handlePrefixChange}
                      />
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full bg-[#0f0f0f] border border-white/[0.08] border-l-0 text-white rounded-r-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none transition-all h-[50px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Nome azienda *
                    </label>
                    <input
                      type="text"
                      name="azienda"
                      value={formData.azienda}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none focus:shadow-[0_0_0_4px_rgba(74,222,128,0.1)] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                    Qual è il ruolo della tua azienda? *
                  </label>
                  <input
                    type="text"
                    name="ruolo"
                    value={formData.ruolo}
                    onChange={handleChange}
                    required
                    placeholder="es. CEO, Marketing Manager, Developer..."
                    className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none focus:shadow-[0_0_0_4px_rgba(74,222,128,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                    A quale servizio sei interessato? *
                  </label>
                  <CustomSelect 
                    name="servizio"
                    value={formData.servizio}
                    onChange={handleSelectChange}
                    options={[
                      "AI Transformation Partner",
                      "Prisma Agent",
                      "Altro"
                    ]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                    Descrivici in modo specifico il progetto *
                  </label>
                  <textarea
                    rows={4}
                    name="progetto"
                    value={formData.progetto}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none focus:shadow-[0_0_0_4px_rgba(74,222,128,0.1)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Fatturato annuale
                    </label>
                    <CustomSelect
                      name="fatturato"
                      value={formData.fatturato}
                      onChange={handleSelectChange}
                      options={[
                        "< 500k",
                        "500k - 1M",
                        "1M - 5M",
                        "5M - 10M",
                        "10M - 50M",
                        "> 50M"
                      ]}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Sito web aziendale
                    </label>
                    <input
                      type="url"
                      name="sitoWeb"
                      value={formData.sitoWeb}
                      onChange={handleChange}
                      className="w-full bg-[#0f0f0f] border border-white/[0.08] text-white rounded-lg px-4 py-3 hoverable focus:border-martes-green focus:outline-none transition-all"
                      placeholder="www.tuaazienda.it"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Dimensioni dell'azienda *
                    </label>
                    <CustomSelect
                      name="dipendenti"
                      value={formData.dipendenti}
                      onChange={handleSelectChange}
                      options={[
                        "1-10 dipendenti",
                        "11-50 dipendenti",
                        "51-150 dipendenti",
                        "150+ dipendenti"
                      ]}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                      Investimento per il progetto *
                    </label>
                    <CustomSelect
                      name="budget"
                      value={formData.budget}
                      onChange={handleSelectChange}
                      options={[
                        "< 5.000 €",
                        "5.000 € - 10.000 €",
                        "10.000 € - 20.000 €",
                        "20.000 € - 40.000 €",
                        "> 40.000 €"
                      ]}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold">
                    Come hai sentito parlare di noi? *
                  </label>
                  <CustomSelect
                    name="sorgente"
                    value={formData.sorgente}
                    onChange={handleSelectChange}
                    options={[
                      "LinkedIn",
                      "YouTube",
                      "Instagram",
                      "TikTok",
                      "Passaparola",
                      "Altro"
                    ]}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                      <AlertCircle size={20} />
                      <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-martes-green hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] text-black py-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition-all hoverable disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? 'Invio in corso...' : (
                      <>
                        Invia Richiesta <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
      </div>
    </section>
  );
};
