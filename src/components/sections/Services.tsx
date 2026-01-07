import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import boxATP from '../../assets/boxes/box_ATP.png';
import boxPRISMA from '../../assets/boxes/box_prisma.png';

const services = [
  {
    title: "AI Transformation Partner",
    subtitle: "Formazione, Analisi e Sviluppo.",
    description: "Insegniamo al tuo team a usare l'AI ogni giorno. Analizziamo i tuoi processi per capire dove implementare l'AI, eliminare i colli di bottiglia e sviluppare soluzioni su misura.",
    link: "/ai-transformation-partner",
    linkText: "INIZIA ORA",
    image: boxATP,
    alt: "AI Transformation Partner Box"
  },
  {
    title: "Prisma Agent",
    subtitle: "L'agente AI per la rendicontazione su Whatsapp",
    description: " Prisma contatta il team e trasforma vocali, foto e messaggi in dati strutturati e report settimanali. Risparmia 20 minuti al giorno per dipendente e libera l’HR da ore di lavoro manuale.",
    link: "/prisma",
    linkText: "SCOPRI PRISMA",
    image: boxPRISMA,
    alt: "Prisma Agent Box"
  }
];

export const Services = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.spotlight-element');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Scegli il tuo <span className="text-green-400">percorso</span>.
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Automazioni su misura o prodotti pronti all'uso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="spotlight-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="spotlight-element rounded-[2rem] p-10 md:p-14 flex flex-col group hoverable relative overflow-hidden"
              style={{ minHeight: '700px' }}
            >
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-4xl md:text-5xl text-white mb-8 font-medium leading-tight min-h-[3em] lg:min-h-[2.5em]">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {word === 'Partner' || word === 'Agent' ? (
                        <span className="serif-italic text-green-400">{word}</span>
                      ) : (
                        word
                      )}{' '}
                    </span>
                  ))}
                </h3>

                <div className="flex-shrink-0 mb-10 flex items-center justify-center" style={{ height: '300px' }}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link to={service.link} className="mt-auto flex items-center gap-3 text-white text-sm font-bold uppercase tracking-wider group-hover:gap-5 transition-all pt-8 border-t border-white/5 hover:text-martes-green">
                  {service.linkText}
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
