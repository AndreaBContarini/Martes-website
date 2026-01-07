import { useEffect, useRef, useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import boxATP from '../assets/boxes/box_ATP.png';
import { LogoTicker } from '../components/sections/LogoTicker';

// Education Images
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.jpeg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';
import identificationInfo from '../assets/infographics/identification.png';
import developmentInfo from '../assets/infographics/development.png';

export const AITransformationPartner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="bg-martes-dark min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-martes-green/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-martes-green/5 blur-[150px] rounded-full pointer-events-none" />

      <SEOHead 
        title="AI Transformation Partner - Martes AI"
        description="Guida la tua azienda nella trasformazione AI con il nostro Framework EID: Education, Identification, Development."
      />

      {/* Hero Section */}
      <div className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        
        {/* Header with Box */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
            >
                <div className="inline-block px-4 py-1 rounded-full border border-martes-green/30 bg-martes-green/10 text-martes-green text-sm font-bold tracking-wider mb-6">
                    IL METODO MARTES AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Framework <span className="text-martes-green serif-italic">EID</span>
                </h1>
                <p className="text-xl text-neutral-300 leading-relaxed max-w-lg mb-8">
                    Education. Identification. Development. <br/>
                
                    L'approccio strutturato per trasformare la tua azienda con l'AI.
                </p>
                <a 
                        href="https://cal.com/martesai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-martes-green text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                        Inizia Ora <ArrowRight size={20} />
                </a>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
            >
                <div className="relative w-full max-w-md aspect-square">
                    {/* Glow effect behind the box */}
                    <div className="absolute inset-0 bg-martes-green/20 blur-[100px] rounded-full" />
                    <img 
                        src={boxATP} 
                        alt="AI Transformation Partner Box" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </motion.div>
        </div>
      </div>

      {/* Clients Section Ticker - Full Width */}
      <div className="mb-32">
            <div className="text-center mb-12 relative z-10 px-6">
                <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
                    Aziende che si <span className="serif-italic text-martes-green">fidano</span> del nostro metodo
                </p>
            </div>
            <LogoTicker />
      </div>

      <div className="pt-10 pb-20 container mx-auto px-6 relative z-10">
        {/* EID Steps */}
        <div className="space-y-32 relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-martes-green/0 via-martes-green/30 to-martes-green/0 hidden lg:block -translate-x-1/2" />

            {/* Education */}
            <Step 
                number="01" 
                title="Education" 
                description="Abilitiamo il vostro team all'uso pratico dell'AI per massimizzare la produttività e risparmiare ore ogni giorno."
                details={[
                    <span><strong>Assessment di AI Readiness:</strong> Misuriamo la maturità AI del vostro team.</span>,
                    <span><strong>Workshop Strategico:</strong> Formazione pratica su tools e modelli AI per risparmiare tempo.</span>,
                    <span><strong>Workshop Verticali:</strong> Focus specifici per dipartimento sui workflow a maggior impatto.</span>
                ]}
                alignment="left"
                customVisual={<EducationCarousel />}
            />

            {/* Identification */}
            <Step 
                number="02" 
                title="Identification" 
                description="Analizziamo i processi per identificare soluzioni AI ad alto impatto e definire una roadmap strategica di 12 mesi basata sul ROI."
                details={[
                    <span><strong>Audit Processi:</strong> Analisi operativa completa e interviste agli stakeholder.</span>,
                    <span><strong>Report & Roadmap:</strong> Strategia a 12 mesi con obiettivi misurabili e piano di sviluppo.</span>,
                    <span><strong>Matrice Impatto/Complessità:</strong> Prioritizziamo le iniziative per ROI e complessità.</span>
                ]}
                alignment="right"
                customVisual={
                    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                         {/* Glow effect */}
                         <div className="absolute inset-0 bg-martes-green/20 blur-[100px] rounded-full pointer-events-none" />
                        
                        <div className="relative w-[90%] h-[90%] flex items-center justify-center animate-float">
                            <img 
                                src={identificationInfo} 
                                alt="Identification Process" 
                                className="w-full h-full object-contain"
                                style={{
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                                }}
                            />
                        </div>
                    </div>
                }
            />

            {/* Development */}
            <Step 
                number="03" 
                title="Development" 
                description="Trasformiamo la roadmap in realtà: sviluppiamo le soluzioni AI su misura, le integriamo nei vostri sistemi e garantiamo deployment, manutenzione e supporto continuo."
                details={[
                    "Sviluppo soluzioni AI su misura",
                    "Integrazione con sistemi esistenti",
                    "Monitoraggio performance e calcolo ROI"
                ]}
                alignment="left"
                customVisual={
                    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                         {/* Glow effect */}
                         <div className="absolute inset-0 bg-martes-green/20 blur-[100px] rounded-full pointer-events-none" />
                        
                        <div className="relative w-[90%] h-[90%] flex items-center justify-center animate-float">
                            <img 
                                src={developmentInfo} 
                                alt="Development Process" 
                                className="w-full h-full object-contain"
                                style={{
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                                }}
                            />
                        </div>
                    </div>
                }
            />
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 mb-20 text-center relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-martes-green/20 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white relative z-10 tracking-tight">
                Il futuro della tua azienda <span className="text-martes-green serif-italic">inizia qui.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                Non lasciare che la tecnologia ti superi. Guidiamo la tua trasformazione digitale passo dopo passo.
            </p>
            <a 
                href="https://cal.com/martesai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-martes-green text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] relative z-10"
            >
                Contattaci ora <ArrowRight size={20} />
            </a>
        </div>

      </div>
    </div>
  );
};

const EducationCarousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const images = [pic1, pic2, pic3, pic4, pic5, pic6];

    const imageIndex = ((page % images.length) + images.length) % images.length; // Fixed modulo for negative numbers

    // Preload images
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            zIndex: 0
        }),
        center: {
            zIndex: 1,
            x: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%'
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group border border-white/10 shadow-2xl bg-black transform-gpu">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "tween", ease: "easeInOut", duration: 0.3 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDragEnd={(_, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0 w-full h-full will-change-transform"
                >
                     <img 
                        src={images[imageIndex]} 
                        alt={`Education session ${imageIndex + 1}`} 
                        className="w-full h-full object-cover pointer-events-none" 
                        draggable={false}
                        decoding="sync"
                        loading="eager"
                    />
                     {/* Overlay to ensure controls are visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" /> 
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Side Centered */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
                <button 
                    onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-martes-green hover:text-black text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 pointer-events-auto hover:scale-110 active:scale-95 shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); paginate(1); }}
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-martes-green hover:text-black text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 pointer-events-auto hover:scale-110 active:scale-95 shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                    <button
                        key={i} 
                        onClick={() => setPage([page + (i - imageIndex), i - imageIndex])}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === imageIndex ? 'w-8 bg-martes-green' : 'w-2 bg-white/50 hover:bg-white'}`} 
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Step = ({ number, title, description, details, alignment, icon, customVisual }: { 
    number: string, 
    title: string, 
    description: string, 
    details: React.ReactNode[], 
    alignment: 'left' | 'right', 
    icon?: React.ReactNode,
    customVisual?: React.ReactNode
}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: alignment === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className="flex-1 text-center lg:text-left">
                <div className={`flex items-center gap-4 mb-6 justify-center ${alignment === 'left' ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <span className="text-6xl font-bold text-martes-green">{number}</span>
                    {icon && (
                        <div className="w-16 h-16 rounded-2xl bg-martes-green/10 flex items-center justify-center text-martes-green border border-martes-green/20">
                            {icon}
                        </div>
                    )}
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${alignment === 'right' ? 'lg:text-right' : ''}`}>{title}</h2>
                <p className={`text-lg text-neutral-400 leading-relaxed mb-8 ${alignment === 'right' ? 'lg:text-right' : ''}`}>
                    {description}
                </p>
                <ul className={`space-y-3 inline-block text-left ${alignment === 'right' ? 'ml-auto' : ''}`}>
                    {details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-300">
                             <div className="mt-1 w-5 h-5 rounded-full bg-martes-green/20 flex items-center justify-center flex-shrink-0">
                                <Check size={12} className="text-martes-green" />
                             </div>
                             {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 relative w-full">
                {customVisual ? (
                    customVisual
                ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center relative overflow-hidden group">
                         <div className="absolute inset-0 bg-martes-green/5" />
                         <div className="w-32 h-32 rounded-full border border-martes-green/20 absolute top-10 left-10 animate-pulse" />
                         <div className="w-48 h-48 rounded-full border border-white/5 absolute bottom-10 right-10" />
                         <div className="text-neutral-600 font-mono text-xs">VISUAL {title.toUpperCase()}</div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
