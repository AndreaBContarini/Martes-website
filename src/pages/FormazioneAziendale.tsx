import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/shared/SEOHead';
import { LogoTicker } from '../components/sections/LogoTicker';
import { Users, MonitorPlay, Zap, Bot, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/assets/home_images/formazione/pic1.jpeg', alt: 'Workshop AI dal vivo' },
  { src: '/assets/home_images/formazione/pic2.jpeg', alt: 'Team al lavoro' },
  { src: '/assets/home_images/formazione/pic3.jpeg', alt: 'Sessione pratica Prompt Engineering' },
  { src: '/assets/home_images/formazione/pic4.jpg', alt: 'Presentazione strategia AI' },
  { src: '/assets/home_images/formazione/pic5.jpg', alt: 'Formazione aziendale Martes AI' },
];

export const FormazioneAziendale = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <SEOHead
        title="Formazione Aziendale AI"
        description="Formazione AI pratica per aziende. Workshop dal vivo e online su Prompt Engineering, No-Code e Agenti AI."
      />

      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-martes-dark">
         <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-martes-green/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full" />
         </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Formazione <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-martes-green to-emerald-400">
                  Aziendale.
                </span>
              </h1>
              <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-xl">
                Dimenticati dei corsi teorici. <br/>
                <span className="text-white font-medium">Formazione AI concreta</span> per triplicare la produttività del tuo team.
              </p>
              
              <a 
                href="https://cal.com/martesai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-martes-green text-martes-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)]"
              >
                Scopri i Workshop
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <img 
                src="/assets/home_images/BOX2_Formazione.png" 
                alt="AI Training Box" 
                className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-martes-green/20 blur-[60px] transform scale-90 z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-12 bg-black/50 border-y border-white/5">
        <LogoTicker />
      </div>

      {/* Workshop Types */}
      <section className="py-32 bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Prepara il tuo Team alla <span className="text-martes-green italic">Rivoluzione.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
            <WorkshopCard 
              title="Dal Vivo" 
              desc="Formazione su misura direttamente nella tua sede."
              icon={<Users className="w-8 h-8 text-martes-green" />}
            />
            <WorkshopCard 
              title="Online" 
              desc="Sessioni interattive da remoto con esercizi pratici."
              icon={<MonitorPlay className="w-8 h-8 text-martes-green" />}
            />
          </div>

          {/* Detailed Tracks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <TrackCard 
               title="Fondamenti AI" 
               items={["Intro ai tool AI", "Applicazioni Business"]}
               icon={<Zap className="w-6 h-6 text-martes-green" />}
             />
             <TrackCard 
               title="Prompt Engineering" 
               items={["Prompt per Workflow", "Tecniche Avanzate"]}
               icon={<MessageSquareIcon className="w-6 h-6 text-martes-green" />}
             />
             <TrackCard 
               title="No-Code" 
               items={["Make & n8n", "Automazioni Rapide"]}
               icon={<img src="/assets/home_images/n8n_stilizzato.png" alt="NoCode" className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" />}
             />
             <TrackCard 
               title="Sviluppo Agenti" 
               items={["Progettazione Agenti", "Deploy & Test"]}
               icon={<Bot className="w-6 h-6 text-martes-green" />}
             />
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-center mb-16">Momenti di Formazione</h2>
           <Gallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Pronto a formare il tuo team?</h2>
          <a 
            href="https://cal.com/martesai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-martes-green text-martes-green px-10 py-5 rounded-full font-bold text-xl hover:bg-martes-green hover:text-black transition-all duration-300 overflow-hidden relative group"
          >
            <span className="relative z-10">Parla con noi</span>
            <div className="absolute inset-0 bg-martes-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0" />
          </a>
        </div>
      </section>
    </>
  );
};

// Subcomponents
import { MessageSquare as MessageSquareIcon } from 'lucide-react';

const WorkshopCard = ({ title, desc, icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-martes-green/50 transition-all duration-300"
  >
    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-neutral-400">{desc}</p>
  </motion.div>
);

const TrackCard = ({ title, items, icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-3 group-hover:text-martes-green transition-colors">{title}</h3>
    <ul className="text-sm text-neutral-400 space-y-2">
      {items.map((it: string, idx: number) => (
        <li key={idx}>• {it}</li>
      ))}
    </ul>
  </motion.div>
);

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group" onClick={() => setIsFullscreen(true)}>
        <AnimatePresence mode="wait">
          <motion.img 
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm border border-white/20">Clicca per ingrandire</span>
        </div>

        {/* Controls */}
        <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-martes-green hover:text-black transition-all">
          <ChevronLeft />
        </button>
        <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-martes-green hover:text-black transition-all">
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'w-8 bg-martes-green' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-martes-green">
              <X size={32} />
            </button>
            <motion.img 
              src={images[index].src}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()} 
            />
            {/* Fullscreen Nav */}
             <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">
               <ChevronLeft size={48} />
             </button>
             <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">
               <ChevronRight size={48} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
