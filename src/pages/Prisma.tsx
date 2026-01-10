import { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, X, Sparkles, Rocket, Headphones, TrendingUp, Minus, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Client Assets
import dolomitiLogo from '../assets/clients/dolomiti-strade-logo.png';
import buildupLogo from '../assets/clients/Logo-Build-Up.png';
import aquadraLogo from '../assets/clients/Aquadra.png';
import gdprImage from '../assets/gdpr/gdpr.png';

// Social Assets
import whatsappLogo from '../assets/socials/whatsapp.png';
import telegramLogo from '../assets/socials/telegram.png';
import slackLogo from '../assets/socials/slack.png';
import teamsLogo from '../assets/socials/teams.png';

export const Prisma = () => {
    const { t } = useTranslation();
    
    useEffect(() => {
        window.scrollTo(0, 0);

        // Handle hash scroll if present (e.g. redirected from home)
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });
                }
            }, 500); // Small delay to ensure render
        }
    }, []);

    const calculatorRef = useRef<HTMLDivElement>(null);
    const scrollToCalculator = () => {
        calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-martes-dark min-h-screen font-sans text-neutral-200 overflow-x-hidden selection:bg-martes-green/30">
            <SEOHead
                title="Prisma Agent | Martes AI"
                description={t('prisma.hero.subtitle').split('\n')[0]} 
            />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-martes-green/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
            </div>

            {/* 1. HERO SECTION */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-20 container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-martes-green/20 bg-martes-green/5 text-martes-green text-sm font-bold tracking-wider mb-8 backdrop-blur-sm">
                        {t('prisma.hero.badge')}
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {t('prisma.hero.title_start')} <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            {t('prisma.hero.title_highlight')}
                        </span> <span className="whitespace-pre-line">{t('prisma.hero.title_end')}</span>
                    </h1>

                    <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light whitespace-pre-line">
                        {t('prisma.hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="https://cal.com/andrea-belli-contarini" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-martes-green text-martes-dark font-bold rounded-xl text-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('prisma.hero.cta_primary')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <button 
                            onClick={scrollToCalculator}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                        >
                            {t('prisma.hero.cta_secondary')}
                        </button>
                    </div>
                </motion.div>

                {/* Video Container - Premium Look */}
                <motion.div 
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-12 md:mt-24 max-w-5xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-tr from-martes-green/20 via-transparent to-blue-500/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="aspect-video bg-black rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl z-10">
                         <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/108G8bcgN10"
                            title="Prisma Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </motion.div>
            </section>

             {/* 2. VALUE PROPOSITION */}
             <section className="py-16 md:py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <ValueCard 
                            title={t('prisma.valueProps.problem.title')}
                            items={t('prisma.valueProps.problem.items', { returnObjects: true })}
                            accent="red"
                        />
                        <ValueCard 
                            title={t('prisma.valueProps.solution.title')}
                            items={t('prisma.valueProps.solution.items', { returnObjects: true })}
                            accent="green"
                            highlight
                        />
                         <ValueCard 
                            title={t('prisma.valueProps.results.title')}
                            items={t('prisma.valueProps.results.items', { returnObjects: true })}
                            accent="blue"
                        />
                    </div>
                </div>
             </section>

             {/* 3. CALCULATOR SECTION */}
             <section ref={calculatorRef} className="py-12 md:py-24 relative z-10">
                <div className="container mx-auto px-6">
                    <SavingsCalculatorReveal />
                </div>
             </section>

             {/* 4. PLATFORMS - Social Logos (No Box, Bigger) */}
            <section className="py-12 md:py-24 text-center border-t border-white/5 bg-white/[0.02] relative z-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('prisma.platforms.title')}</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-16 text-lg">
                        {t('prisma.platforms.subtitle')}
                    </p>
                    
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                         <img src={whatsappLogo} alt="WhatsApp" className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                         <img src={telegramLogo} alt="Telegram" className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                         <img src={slackLogo} alt="Slack" className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                         <img src={teamsLogo} alt="Teams" className="h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS - PERFECT SCROLL TIMELINE */}
            <TimelineSection />

             {/* 6. PRICING */}
             <section id="pricing" className="pt-16 pb-12 md:pt-32 md:pb-16 bg-black relative overflow-hidden z-20">
                 <div className="absolute inset-0 bg-gradient-to-b from-martes-green/5 to-transparent pointer-events-none" />
                 <div className="container mx-auto px-6 text-center relative z-10">
                     <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
                        {t('prisma.pricing.title')} <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            {t('prisma.pricing.title_highlight')}
                        </span>
                     </h2>

                     {/* Main Pricing Card */}
                     <div 
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                        }}
                        className="spotlight-element max-w-xl mx-auto rounded-3xl border border-martes-green/30 bg-martes-green/5 backdrop-blur-sm p-12 relative overflow-hidden group hover:border-martes-green/50 transition-colors duration-500"
                    >
                         {/* Glow */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-martes-green/10 blur-[80px] rounded-full pointer-events-none" />

                         <div className="text-neutral-400 font-bold mb-4 uppercase tracking-widest text-sm">{t('prisma.pricing.badge')}</div>
                         <div className="flex items-baseline justify-center gap-2 mb-2">
                             <span className="text-6xl font-bold text-white tracking-tighter">€30</span>
                             <span className="text-xl text-neutral-500">/mese</span>
                         </div>
                         <div className="text-neutral-400 mb-10 text-sm">{t('prisma.pricing.perEmployee')}</div>

                         <div className="space-y-4 mb-10 text-left pl-4 max-w-xs mx-auto">
                            {(t('prisma.pricing.features', { returnObjects: true }) as string[]).map((feature, i) => (
                                <CheckListIcon key={i} text={feature} />
                            ))}
                         </div>

                         <a 
                            href="https://cal.com/andrea-belli-contarini" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-martes-green transition-colors shadow-lg"
                         >
                             {t('prisma.pricing.cta')}
                         </a>
                     </div>

                     {/* Savings Context Below - RESIZED BIGGER */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 max-w-3xl mx-auto"
                     >
                         <p className="text-neutral-500 text-xl mb-6">{t('prisma.pricing.comparison.title')}</p>
                         <div className="inline-flex flex-row items-center gap-6 md:gap-12 px-6 py-4 md:px-10 md:py-5 rounded-full border border-white/10 bg-[#050505] shadow-2xl w-auto max-w-[95vw] mx-auto justify-between">
                             <div className="text-left shrink-0">
                                 <div className="text-[10px] md:text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">{t('prisma.pricing.comparison.invest')}</div>
                                 <div className="text-xl md:text-3xl font-bold text-white">€30<span className="text-sm md:text-lg text-neutral-600 font-normal">/mese</span></div>
                             </div>
                             <ArrowRight className="text-neutral-700 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                             <div className="text-left shrink-0">
                                 <div className="text-[10px] md:text-xs text-martes-green uppercase font-bold tracking-widest mb-1">{t('prisma.pricing.comparison.save')}</div>
                                 <div className="text-xl md:text-3xl font-bold text-white">€375+<span className="text-sm md:text-lg text-neutral-600 font-normal">/mese</span></div>
                             </div>
                         </div>
                     </motion.div>

                 </div>
             </section>

             {/* 7. SOCIAL PROOF & CASE STUDIES */}
             <div id="case-studies">
                <CaseStudiesSection />
             </div>

             {/* GDPR SECTION */}
             <section className="py-16 md:py-24 bg-martes-dark relative z-10 border-t border-white/5">
                 <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                         {t('prisma.gdpr.title_start')} <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            {t('prisma.gdpr.title_highlight')}
                         </span>
                     </h2>

                     <div 
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                        }}
                        className="spotlight-element max-w-5xl mx-auto rounded-3xl bg-white/5 p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-12 group"
                     >
                         
                         {/* Text Content */}
                         <div className="flex-1 text-left space-y-6">
                             <div>
                                 <p className="text-neutral-400 text-lg">{t('prisma.gdpr.desc')}</p>
                             </div>
                             
                             <ul className="space-y-4">
                                {(t('prisma.gdpr.items', { returnObjects: true }) as Array<{bold: string, text: string}>).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0 mt-0.5">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-neutral-300">
                                            <strong className="text-white">{item.bold}</strong> {item.text}
                                        </span>
                                    </li>
                                ))}
                             </ul>
                         </div>

                         {/* Image Content */}
                         <div className="flex-1 flex justify-center w-full md:w-auto">
                              <div className="relative">
                                  <img 
                                    src={gdprImage} 
                                    alt="GDPR Compliance" 
                                    className="w-full max-w-[300px] md:max-w-sm h-auto object-contain relative z-10 drop-shadow-2xl"
                                  />
                              </div>
                         </div>

                     </div>
                 </div>
             </section>

             {/* 8. FAQ */}
            <section id="faq" className="py-16 md:py-32 bg-martes-dark relative z-10 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">{t('prisma.faq.title')}</h2>
                    <div className="space-y-6">
                        {(t('prisma.faq.items', { returnObjects: true }) as Array<{q: string, a: string}>).map((item, i) => (
                             <FAQItem 
                                key={i}
                                question={item.q} 
                                answer={item.a} 
                            />
                        ))}
                    </div>
                </div>
            </section>

             {/* 9. FINAL CTA */}
             <section className="py-16 md:py-32 text-center relative overflow-hidden z-10">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-martes-green/10 blur-[150px] rounded-full pointer-events-none" />
                 <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 relative z-10 tracking-tighter">
                     {t('prisma.finalCta.title')} <br/><span className="serif-italic text-martes-green">{t('prisma.finalCta.title_highlight')}</span>
                 </h2>
                 <a 
                    href="https://cal.com/andrea-belli-contarini" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-martes-green text-black font-bold rounded-2xl text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(74,222,128,0.3)]"
                >
                    {t('prisma.finalCta.cta')} <ArrowRight size={24} />
                </a>
             </section>
        </div>
    );
};

// --- TIMELINE COMPONENT (REFACTORED for GEOMETRIC PERFECTION) ---
const TimelineSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    
    // Track scroll relative to the steps container
    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ["start 65%", "end 65%"] // Slightly adjusted offset
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const steps = t('prisma.timeline.steps', { returnObjects: true }) as Record<string, { title: string, desc: string }>;

    return (
        <section id="timeline" ref={containerRef} className="py-16 md:py-32 container mx-auto px-6 relative z-10">
             <div className="grid lg:grid-cols-2 gap-20 items-start">
                 {/* Sticky Left Content */}
                 <div className="lg:sticky lg:top-32">
                     <div className="inline-block px-4 py-1 rounded-full border border-martes-green/20 bg-martes-green/5 text-martes-green text-sm font-bold tracking-wider mb-6">
                          {t('prisma.timeline.badge')}
                     </div>
                     <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                         {t('prisma.timeline.title')} <br/>
                         <span className="serif-italic text-martes-green">{t('prisma.timeline.title_highlight')}</span>
                     </h2>
                     <a 
                         href="https://cal.com/andrea-belli-contarini" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-martes-green transition-colors"
                     >
                         {t('prisma.timeline.cta')} <ArrowRight size={20} />
                     </a>
                 </div>
                 
                 {/* Vertical Timeline Steps - FIXED GEOMETRY */}
                 <div ref={stepsRef} className="relative space-y-32"> 
                    {/* The Reference Line is strictly at 3rem (48px) from left */}
                      {/* Background Line (Gray) */}
                      <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-neutral-800 -translate-x-1/2 z-0" />
                      
                      {/* Animated Green Line */}
                      <motion.div 
                        className="absolute left-12 top-0 w-[2px] bg-martes-green -translate-x-1/2 origin-top z-0"
                        style={{ height: lineHeight }}
                      />

                      <TimelineStep 
                         icon={<Sparkles size={24} />}
                         title={steps[0].title}
                         desc={steps[0].desc}
                         progress={scrollYProgress}
                         index={0}
                         total={4}
                      />
                      <TimelineStep 
                          icon={<Rocket size={24} />}
                          title={steps[1].title}
                          desc={steps[1].desc}
                          progress={scrollYProgress}
                          index={1}
                          total={4}
                      />
                      <TimelineStep 
                          icon={<Headphones size={24} />}
                          title={steps[2].title}
                          desc={steps[2].desc}
                          progress={scrollYProgress}
                          index={2}
                          total={4}
                      />
                      <TimelineStep 
                          icon={<TrendingUp size={24} />}
                          title={steps[3].title}
                          desc={steps[3].desc}
                          progress={scrollYProgress}
                          index={3}
                          total={4}
                      />
                 </div>
             </div>
        </section>
    )
}

const TimelineStep = ({ title, desc, icon, progress, index, total }: any) => {
    // Calculate precise thresholds based on index steps
    const step = 0.98 / (total - 1); 
    const threshold = index * step; 
    
    // Tighter activation window
    const borderColor = useTransform(
        progress,
        [threshold, threshold + 0.05], 
        ["rgba(38, 38, 38, 1)", "rgba(74, 222, 128, 1)"] // neutral-800 to martes-green
    );
     const iconColor = useTransform(
        progress,
        [threshold, threshold + 0.05], 
        ["rgb(115, 115, 115)", "rgb(74, 222, 128)"] // neutral-500 to martes-green
    );

    const shadow = useTransform(
        progress,
        [threshold, threshold + 0.05],
        ["none", "0 0 20px rgba(74, 222, 128, 0.3)"]
    );


    return (
        <div className="relative pl-32"> 
            {/* Icon container positioned fixed at left-12 (matching line) */}
            <motion.div 
                className="absolute left-12 top-0 w-16 h-16 -translate-x-1/2 rounded-full border bg-black flex items-center justify-center transition-all z-10"
                style={{
                    borderColor: borderColor,
                    color: iconColor,
                    boxShadow: shadow
                }}
            >
                {icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">{desc}</p>
        </div>
    )
}

// --- SUBCOMPONENTS ---

const ValueCard = ({ title, items, accent, highlight }: any) => {
    const isGreen = accent === 'green';
    const isRed = accent === 'red';
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${highlight ? 'bg-white/5 border-martes-green/30 shadow-2xl shadow-martes-green/10' : 'bg-transparent border-white/10 hover:border-white/20'}`}
        >
            {highlight && <div className="absolute top-0 right-0 w-64 h-64 bg-martes-green/5 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />}
            
            <h3 className={`text-3xl font-bold mb-8 ${isGreen ? 'text-martes-green' : 'text-white'}`}>{title}</h3>
            <ul className="space-y-6">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-neural-300">
                         {isRed ? (
                             <X size={20} className="text-red-500/70 mt-1 shrink-0" />
                         ) : (
                             <Check size={20} className={`${isGreen ? 'text-martes-green' : 'text-blue-400'} mt-1 shrink-0`} />
                         )}
                         <span className={`${highlight ? 'text-white' : 'text-neutral-400'}`}>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

const SavingsCalculatorReveal = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [employees, setEmployees] = useState<number | ''>(30); // Allow empty state for typing
    const [sector, setSector] = useState('edile');
    const [result, setResult] = useState(0);

    const calculate = () => {
        if (employees === '' || employees <= 0) {
            alert(t('prisma.calculator.employees_error') || "Inserisci un numero valido di dipendenti");
            return;
        }

        try {
            let hourlyRate = 30; // default Altro
            if (sector === 'edile') hourlyRate = 32;
            if (sector === 'facility') hourlyRate = 28;
            if (sector === 'immobiliare') hourlyRate = 30;

            const hoursSavedPerEmployee = 15;
            const prismaCost = 30 * employees;
            const grossSavings = employees * hoursSavedPerEmployee * hourlyRate;
            const netSavings = grossSavings - prismaCost;
            
            // Monthly Savings
            const res = Math.round(netSavings);
            
            if (isNaN(res)) throw new Error("Calculation Error");
            
            setResult(res);
            setStep(2);
        } catch (e) {
            console.error(e);
            alert("Errore nel calcolo. Riprova.");
        }
    }
    
    const safeNumberDisplay = (val: number | string) => {
         const num = Number(val);
         return isNaN(num) ? 0 : num;
    }

    const changeEmployees = (delta: number) => {
        const current = employees === '' ? 0 : employees;
        const newVal = Math.max(1, current + delta);
        setEmployees(newVal);
    }

    const sectors = ['edile', 'facility', 'immobiliare', 'altro'];

    return (
        <div id="calculator" className="max-w-4xl mx-auto bg-black border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-center relative overflow-hidden hover:border-martes-green/50 hover:shadow-[0_0_50px_rgba(74,222,128,0.1)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none group-hover:from-martes-green/10 transition-colors duration-500" />
            
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="relative z-10"
                    >
                         <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">
                            {t('prisma.calculator.title_start')} <span className="relative whitespace-nowrap inline-block">
                                <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                                {t('prisma.calculator.title_highlight')}
                            </span> {t('prisma.calculator.title_end')}
                         </h3>
                         
                         <div className="grid md:grid-cols-2 gap-12 mb-12 text-left">
                             <div>
                                 <label className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-4 block">{t('prisma.calculator.sector')}</label>
                                 <div className="grid grid-cols-2 gap-3">
                                     {sectors.map(s => (
                                         <button 
                                            key={s}
                                            onClick={() => setSector(s.toLowerCase())}
                                            className={`px-4 py-3 rounded-xl border transition-all font-medium ${sector === s.toLowerCase() ? 'bg-white text-black border-white shadow-lg' : 'bg-transparent border-white/20 text-neutral-400 hover:border-white hover:text-white'}`}
                                         >
                                             {t(`prisma.calculator.sectors.${s}`)}
                                         </button>
                                     ))}
                                 </div>
                             </div>
                             <div>
                                  <label className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-4 block">{t('prisma.calculator.employees')}</label>
                                  
                                  {/* CUSTOM INPUT WITH SPINNERS */}
                                  <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-martes-green transition-colors">
                                      <button 
                                        onClick={() => changeEmployees(-1)}
                                        className="p-4 hover:bg-white/10 transition-colors text-white"
                                      >
                                          <Minus size={20} />
                                      </button>
                                      
                                      <input 
                                        type="number" 
                                        placeholder="Es. 30"
                                        min="1"
                                        value={employees} 
                                        onChange={(e) => setEmployees(e.target.value === '' ? '' : parseInt(e.target.value))}
                                        className="w-full py-4 text-center bg-transparent border-none text-white text-xl placeholder-neutral-600 focus:outline-none focus:ring-0 appearance-none m-0"
                                        style={{ MozAppearance: 'textfield' }} // Hide firefox spinners
                                      />
                                      <style>{`
                                        input[type=number]::-webkit-inner-spin-button, 
                                        input[type=number]::-webkit-outer-spin-button { 
                                          -webkit-appearance: none; 
                                          margin: 0; 
                                        }
                                      `}</style>
                                      
                                      <button 
                                        onClick={() => changeEmployees(1)}
                                        className="p-4 hover:bg-white/10 transition-colors text-white"
                                      >
                                          <Plus size={20} />
                                      </button>
                                  </div>
                             </div>
                         </div>

                         <button 
                            onClick={calculate}
                            className="px-10 py-5 bg-martes-green text-black font-bold rounded-2xl text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(74,222,128,0.3)]"
                         >
                             {t('prisma.calculator.cta')}
                         </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <p className="text-neutral-500 text-lg mb-4">{t('prisma.calculator.result_title')}</p>
                        <div className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter shadow-martes-green drop-shadow-lg">
                            €{new Intl.NumberFormat('it-IT').format(result * 12)}
                        </div>
                        <div className="text-martes-green font-serif italic text-2xl mb-4">
                            e {new Intl.NumberFormat('it-IT').format(Math.round(safeNumberDisplay(employees) * 15 * 12))} {t('prisma.calculator.hours_saved')}
                        </div>

                        <p className="text-neutral-500 text-xs max-w-md mx-auto mb-12 italic">
                            {t('prisma.calculator.disclaimer_prefix')} 
                            {sector === 'edile' && ` ${t('prisma.calculator.disclaimer_edile')}`}
                            {sector === 'facility' && ` ${t('prisma.calculator.disclaimer_facility')}`}
                            {(sector === 'immobiliare' || sector === 'altro') && ` ${t('prisma.calculator.disclaimer_other')}`}
                        </p>

                         <div className="flex gap-4">
                            <button 
                                onClick={() => setStep(1)}
                                className="px-6 py-3 rounded-xl text-neutral-500 hover:text-white transition-colors border border-transparent hover:border-white/20"
                            >
                                {t('prisma.calculator.recalculate')}
                            </button>
                            <a 
                                href="https://cal.com/andrea-belli-contarini" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-martes-green transition-colors shadow-lg"
                            >
                                {t('prisma.calculator.get_result')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const CheckListIcon = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0">
            <Check size={12} />
        </div>
        <span className="text-neutral-300 font-medium">{text}</span>
    </div>
);


const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/20">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="font-bold text-lg text-white pr-8">{question}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-martes-green text-black rotate-45 border-martes-green' : 'text-neutral-400'}`}>
                    <Plus size={16} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-neutral-400 leading-relaxed font-light border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CaseStudiesSection = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    
    const cases = t('prisma.cases.items', { returnObjects: true }) as Array<{
        id: string;
        name: string;
        challenge: string;
        solution: string;
        results: Array<{ value: string; label: string; }>;
    }>;
  
    return (
      <section className="pt-16 pb-24 border-b border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              {t('prisma.cases.title_start')} <span className="serif-italic text-martes-green">{t('prisma.cases.title_highlight')}</span>
            </h2>
          </motion.div>
  
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {cases.map((caseItem, index) => (
              <button
                key={caseItem.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeTab === index
                    ? 'bg-white text-black border-white'
                    : 'border-white/10 text-neutral-600 hover:bg-white/10'
                }`}
              >
                {caseItem.name}
              </button>
            ))}
          </motion.div>
  
          {/* Active Case */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
            className="spotlight-element rounded-3xl p-10 md:p-16 border border-white/5 bg-[#0A0A0A]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
              <div>
                <div className="mb-8 h-52 flex items-center">
                  {cases[activeTab].id === 'dolomiti' && (
                    <img src={dolomitiLogo} alt="Dolomiti" className="h-44 md:h-52 w-auto object-contain brightness-0 invert" />
                  )}
                   {cases[activeTab].id === 'buildup' && (
                    <img src={buildupLogo} alt="Build Up" className="h-20 md:h-24 w-auto object-contain brightness-0 invert" />
                  )}
                   {cases[activeTab].id === 'aquadra' && (
                    <img src={aquadraLogo} alt="Aquadra" className="h-44 md:h-52 w-auto object-contain brightness-0 invert" />
                  )}
                </div>
  
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                      {t('prisma.valueProps.problem.title')} {/* Using generic problem title or add specific one */}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed text-lg font-light">
                      {cases[activeTab].challenge}
                    </p>
                  </div>
  
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                      {t('prisma.valueProps.solution.title')}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed text-lg font-light">
                      {cases[activeTab].solution}
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col justify-center h-full border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-16">
                 <div className="space-y-10">
                    {cases[activeTab].results.map((result, index) => (
                      <div key={index}>
                        <div className="text-6xl font-bold text-white mb-2 tracking-tighter">
                          {result.value}
                        </div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </motion.div>
  
        </div>
      </section>
    );
};
