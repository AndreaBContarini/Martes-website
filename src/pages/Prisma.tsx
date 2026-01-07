import { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, X, Sparkles, Rocket, Headphones, TrendingUp, Minus, Plus } from 'lucide-react';

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
                description="Prisma automatizza la reportistica dei tuoi dipendenti via WhatsApp. Fino a 450 ore risparmiate al mese."
            />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-martes-green/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
            </div>

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-20 container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-martes-green/20 bg-martes-green/5 text-martes-green text-sm font-bold tracking-wider mb-8 backdrop-blur-sm">
                        OPERATIVO IN 48 ORE
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Fino a <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            450 Ore
                        </span> al Mese<br />
                        Risparmiate.
                    </h1>

                    <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Automatizza la reportistica dei tuoi dipendenti. 
                        <br />
                        Libera il tuo team HR. Dati in tempo reale. Report automatici.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="https://cal.com/andrea-belli-contarini" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-martes-green text-martes-dark font-bold rounded-xl text-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Prova Prisma <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <button 
                            onClick={scrollToCalculator}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                        >
                            Calcola il tuo Risparmio
                        </button>
                    </div>
                </motion.div>

                {/* Video Container - Premium Look */}
                <motion.div 
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-24 max-w-5xl mx-auto relative group"
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
             <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <ValueCard 
                            title="Il Problema"
                            items={[
                                "Rapportini cartacei persi o mai compilati",
                                "Excel incompleti, dati che arrivano il giorno dopo",
                                "Fatturazione bloccata per giorni",
                                "HR che perde ore a inseguire i dipendenti"
                            ]}
                            accent="red"
                        />
                        <ValueCard 
                            title="La Soluzione"
                            items={[
                                "Prisma scrive ai dipendenti su WhatsApp automaticamente",
                                "Analizza vocali e immagini in tempo reale",
                                "Follow-up automatico a chi non risponde",
                                "Zero app da installare: tutto su WhatsApp, semplicissimo"
                            ]}
                            accent="green"
                            highlight
                        />
                         <ValueCard 
                            title="I Risultati"
                            items={[
                                "Dashboard in tempo reale sempre aggiornata",
                                "Report automatici per l'HR ogni giorno",
                                "Fino a 450 ore/mese risparmiate",
                                "ROI 12.5x dal primo mese"
                            ]}
                            accent="blue"
                        />
                    </div>
                </div>
             </section>

             {/* 3. CALCULATOR SECTION */}
             <section ref={calculatorRef} className="py-24 relative z-10">
                <div className="container mx-auto px-6">
                    <SavingsCalculatorReveal />
                </div>
             </section>

             {/* 4. PLATFORMS - Social Logos (No Box, Bigger) */}
            <section className="py-24 text-center border-t border-white/5 bg-white/[0.02] relative z-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Prisma non è solo su WhatsApp.</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-16 text-lg">
                        Può essere installato dove vuoi. È disponibile su:
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
             <section id="pricing" className="pt-32 pb-16 bg-black relative overflow-hidden z-20">
                 <div className="absolute inset-0 bg-gradient-to-b from-martes-green/5 to-transparent pointer-events-none" />
                 <div className="container mx-auto px-6 text-center relative z-10">
                     <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
                        Pricing <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            Semplice
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

                         <div className="text-neutral-400 font-bold mb-4 uppercase tracking-widest text-sm">Tutto Incluso</div>
                         <div className="flex items-baseline justify-center gap-2 mb-2">
                             <span className="text-6xl font-bold text-white tracking-tighter">€30</span>
                             <span className="text-xl text-neutral-500">/mese</span>
                         </div>
                         <div className="text-neutral-400 mb-10 text-sm">per dipendente</div>

                         <div className="space-y-4 mb-10 text-left pl-4 max-w-xs mx-auto">
                            <CheckListIcon text="Prisma Agent su WhatsApp" />
                            <CheckListIcon text="Dashboard di Controllo" />
                            <CheckListIcon text="Report PDF/Excel Illimitati" />
                            <CheckListIcon text="Supporto Prioritario" />
                            <CheckListIcon text="Aggiornamenti Inclusi" />
                         </div>

                         <a 
                            href="https://cal.com/andrea-belli-contarini" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-martes-green transition-colors shadow-lg"
                         >
                             Inizia Ora
                         </a>
                     </div>

                     {/* Savings Context Below - RESIZED BIGGER */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 max-w-3xl mx-auto"
                     >
                         <p className="text-neutral-500 text-xl mb-6">Perché è un no-brainer?</p>
                         <div className="inline-flex items-center gap-12 px-12 py-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group hover:border-martes-green/30 transition-colors">
                             <div className="text-left">
                                 <div className="text-sm text-neutral-500 uppercase font-bold tracking-wider mb-1">Investi</div>
                                 <div className="text-3xl font-bold text-white">€30<span className="text-lg text-neutral-500 font-normal">/mese</span></div>
                             </div>
                             <ArrowRight className="text-neutral-600 w-8 h-8 group-hover:text-martes-green transition-colors" />
                             <div className="text-left">
                                 <div className="text-sm text-martes-green uppercase font-bold tracking-wider mb-1">Risparmi</div>
                                 <div className="text-3xl font-bold text-white">€375+<span className="text-lg text-neutral-500 font-normal">/mese</span></div>
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
             <section className="py-24 bg-martes-dark relative z-10 border-t border-white/5">
                 <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                         I tuoi dati sono <span className="relative whitespace-nowrap inline-block">
                            <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                            al sicuro.
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
                                 <p className="text-neutral-400 text-lg">Prisma è progettato in conformità al GDPR europeo:</p>
                             </div>
                             
                             <ul className="space-y-4">
                                 <li className="flex items-start gap-3">
                                     <div className="w-6 h-6 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0 mt-0.5">
                                         <Check size={14} />
                                     </div>
                                     <span className="text-neutral-300">
                                         <strong className="text-white">Server in Europa</strong> – Dati ospitati su data center europei
                                     </span>
                                 </li>
                                 <li className="flex items-start gap-3">
                                     <div className="w-6 h-6 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0 mt-0.5">
                                         <Check size={14} />
                                     </div>
                                     <span className="text-neutral-300">
                                         <strong className="text-white">Crittografia end-to-end</strong> – Protetti in transito e a riposo
                                     </span>
                                 </li>
                                 <li className="flex items-start gap-3">
                                     <div className="w-6 h-6 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0 mt-0.5">
                                         <Check size={14} />
                                     </div>
                                     <span className="text-neutral-300">
                                         <strong className="text-white">Provider certificati</strong> – ISO/IEC 27001 Standard di sicurezza
                                     </span>
                                 </li>
                                 <li className="flex items-start gap-3">
                                     <div className="w-6 h-6 rounded-full bg-martes-green/10 flex items-center justify-center text-martes-green shrink-0 mt-0.5">
                                         <Check size={14} />
                                     </div>
                                     <span className="text-neutral-300">
                                         <strong className="text-white">DPA</strong> – Data Processing Agreement disponibile su richiesta
                                     </span>
                                 </li>
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
            <section id="faq" className="py-32 bg-martes-dark relative z-10 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Domande Frequenti</h2>
                    <div className="space-y-6">
                        <FAQItem 
                            question="I miei dipendenti non sono tecnologici, non useranno mai un sistema del genere" 
                            answer="Prisma non è un'app nuova da imparare. È WhatsApp, che i tuoi dipendenti usano già ogni giorno per messaggiare con amici e famiglia. Rispondono a 4-5 domande in 30 secondi e hanno finito. Zero formazione necessaria, zero complicazioni." 
                        />
                        <FAQItem 
                            question="Quanto tempo ci vuole per essere operativi?" 
                            answer="24-48 ore. Noi configuriamo tutto il sistema lato nostro: WhatsApp e l'intera infrastruttura per l'agente AI. Tu devi solo mandarci la lista dei dipendenti. Zero installazioni da parte tua, zero formazione da organizzare. In 2 giorni sei live." 
                        />
                        <FAQItem 
                            question="€30 al mese per dipendente mi sembra costoso" 
                            answer="Con Prisma risparmi in media 15 ore al mese per dipendente. A €25/ora (costo medio  di un dipendente nel settore edilizia, facility e immobiliare in Italia) sono €375 di risparmio. Prisma costa €30/mese. Stai guadagnando €345 netti al mese per dipendente. ROI 12.5x. È un investimento che si ripaga da solo 12 volte." 
                        />
                        <FAQItem 
                            question="E se i dipendenti dimenticano di rispondere a Prisma?" 
                            answer="Prisma manda promemoria automatici a fine giornata. Se qualcuno non risponde entro l'orario impostato, riceve un follow-up. Tu vedi subito dalla dashboard chi manca e puoi sollecitarlo se necessario. Il sistema è progettato per minimizzare i 'dimenticati'." 
                        />
                        <FAQItem 
                           question="Funziona solo su WhatsApp?" 
                           answer="WhatsApp è il default perché tutti lo usano. Ma se il tuo team comunica su altre piattaforme, nessun problema: abbiamo Prisma anche su Telegram, Slack e Microsoft Teams. Scegli tu dove vuoi che funzioni." 
                        />
                        <FAQItem 
                           question="I nostri dati sono al sicuro? Chi ha accesso?" 
                           answer="Solo tu e il tuo team autorizzato. I dati sono criptati end-to-end e salvati su server europei (100% GDPR compliant). Noi di Martes AI manteniamo l'infrastruttura tecnica, ma non accediamo mai ai tuoi dati senza un permesso esplicito da parte tua." 
                        />
                        <FAQItem 
                           question="Come funziona il periodo di prova?" 
                           answer="Primi 30 giorni completamente gratis per testare Prisma sul campo con i tuoi dipendenti reali. Nessuna carta di credito richiesta in anticipo. Zero vincoli contrattuali: se non ti convince, cancelli quando vuoi senza penali." 
                        />
                        <FAQItem 
                           question="Possiamo integrare Prisma con il nostro gestionale?" 
                           answer="Sì. Prisma esporta automaticamente i dati in Excel/CSV che puoi importare nel tuo gestionale. Se vuoi un'integrazione automatica diretta con il tuo gestionale specifico, si tratterebbe di un'integrazione custom. Valutiamola insieme in una chiamata per capire fattibilità e costi." 
                        />
                        <FAQItem 
                           question="I miei dipendenti a volte hanno molto da raccontare, Prisma gestisce messaggi lunghi?" 
                           answer="Assolutamente sì. Prisma può analizzare vocali anche di 5-6 minuti e molteplici immagini in un'unica conversazione. Se un dipendente ha avuto una giornata complessa con più interventi o problemi da segnalare, può mandare tutto: Prisma estrae automaticamente tutte le informazioni rilevanti (ore, materiali, problemi, location) e organizza le foto nella dashboard. Il dipendente parla naturalmente, Prisma fa il resto." 
                        />
                        <FAQItem 
                           question="Cosa succede se un dipendente manda informazioni sbagliate?" 
                           answer="Prisma salva tutto lo storico: vocali originali, foto, timestamp. Puoi sempre risalire alla conversazione completa per verificare. Inoltre, l'HR può correggere i dati dalla dashboard in qualsiasi momento. Hai controllo e trasparenza totali." 
                        />
                        <FAQItem 
                           question="Abbiamo già un sistema interno, perché dovremmo cambiare?" 
                           answer="La domanda è: il tuo sistema attuale ti fa risparmiare 15 ore al mese per dipendente? I tuoi dipendenti lo usano volentieri o lo vedono come un peso? Se stai ancora inseguendo qualcuno per i report, significa che il sistema non funziona. Prisma è progettato per essere così semplice che i dipendenti preferiscono usarlo piuttosto che compilare fogli." 
                        />
                        <FAQItem 
                           question="E se abbiamo dipendenti che lavorano in zone senza connessione internet?" 
                           answer="WhatsApp funziona anche con connessione dati limitata. Il dipendente può mandare il report appena torna in zona coperta (anche ore dopo). Prisma processa i messaggi non appena arrivano e aggiorna la dashboard automaticamente. Nessun dato perso." 
                        />
                        <FAQItem 
                           question="Prisma può gestire più sedi/cantieri/squadre contemporaneamente?" 
                           answer="Assolutamente sì. Prisma è multi-tenant: puoi avere sedi diverse, squadre diverse, progetti diversi, tutti gestiti dallo stesso sistema. Dalla dashboard puoi filtrare per sede, squadra, progetto, dipendente. Tutto organizzato e sotto controllo in un unico posto." 
                        />
                         <FAQItem 
                           question="I report sono personalizzabili?" 
                           answer="Sì. Durante il setup configuriamo insieme le domande che Prisma deve fare ai dipendenti in base al tuo settore e alle tue esigenze (ore, materiali, cliente, tipo intervento, problemi riscontrati, etc.). Anche i report automatici sono personalizzabili: scegli frequenza (giornaliera, settimanale), formato, e cosa includere." 
                        />
                         <FAQItem 
                           question="Cosa succede se Prisma smette di funzionare?" 
                           answer="Prisma è costruito su infrastruttura cloud enterprise-grade con uptime 99.9%. In caso di problemi tecnici rari, hai supporto prioritario via WhatsApp con risposta entro 1 ora durante l'orario lavorativo. Inoltre, tutti i dati storici rimangono sempre accessibili dalla dashboard anche offline." 
                        />
                    </div>
                </div>
            </section>

             {/* 9. FINAL CTA */}
             <section className="py-32 text-center relative overflow-hidden z-10">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-martes-green/10 blur-[150px] rounded-full pointer-events-none" />
                 <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 relative z-10 tracking-tighter">
                     Recupera il <br/><span className="serif-italic text-martes-green">tuo tempo.</span>
                 </h2>
                 <a 
                    href="https://cal.com/andrea-belli-contarini" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-martes-green text-black font-bold rounded-2xl text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(74,222,128,0.3)]"
                >
                    Inizia Ora <ArrowRight size={24} />
                </a>
             </section>
        </div>
    );
};

// --- TIMELINE COMPONENT (REFACTORED for GEOMETRIC PERFECTION) ---
const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    
    // Track scroll relative to the steps container
    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ["start 65%", "end 65%"] // Slightly adjusted offset
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="timeline" ref={containerRef} className="py-32 container mx-auto px-6 relative z-10">
             <div className="grid lg:grid-cols-2 gap-20 items-start">
                 {/* Sticky Left Content */}
                 <div className="lg:sticky lg:top-32">
                     <div className="inline-block px-4 py-1 rounded-full border border-martes-green/20 bg-martes-green/5 text-martes-green text-sm font-bold tracking-wider mb-6">
                          COME FUNZIONA
                     </div>
                     <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                         Attivo in 48h. <br/>
                         Tuo per sempre. <br/>
                         <span className="serif-italic text-martes-green">Supporto Incluso.</span>
                     </h2>
                     <a 
                         href="https://cal.com/andrea-belli-contarini" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-martes-green transition-colors"
                     >
                         Prenota Chiamata <ArrowRight size={20} />
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
                         title="Giorno 1: Setup Lampo"
                         desc="Configuriamo le domande su misura per il tuo settore. Integriamo Prisma con i tuoi software esistenti (o ti forniamo una dashboard pronta)."
                         progress={scrollYProgress}
                         index={0}
                         total={4}
                      />
                      <TimelineStep 
                          icon={<Rocket size={24} />}
                          title="Giorno 2: Lancio"
                          desc="Prisma va live. Il tuo team riceve il numero WhatsApp. Zero formazione necessaria: se sanno mandare un vocale, sanno usare Prisma."
                          progress={scrollYProgress}
                          index={1}
                          total={4}
                      />
                      <TimelineStep 
                          icon={<Headphones size={24} />}
                          title="Giorno 2-30: Supporto Continuo"
                          desc="Monitoriamo i primi giorni di utilizzo per assicurarci che tutto funzioni alla perfezione. Supporto diretto via WhatsApp per qualsiasi dubbio."
                          progress={scrollYProgress}
                          index={2}
                          total={4}
                      />
                      <TimelineStep 
                          icon={<TrendingUp size={24} />}
                          title="Mese 1+: Crescita"
                          desc="Vedi i primi risultati tangibili: ore risparmiate, report puntuali e dati strutturati per prendere decisioni migliori."
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
    const [step, setStep] = useState(1);
    const [employees, setEmployees] = useState<number | ''>(30); // Allow empty state for typing
    const [sector, setSector] = useState('edile');
    const [result, setResult] = useState(0);

    const calculate = () => {
        if (employees === '' || employees <= 0) {
            alert("Inserisci un numero valido di dipendenti");
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

    return (
        <div id="calculator" className="max-w-4xl mx-auto bg-black border border-white/10 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden hover:border-martes-green/50 hover:shadow-[0_0_50px_rgba(74,222,128,0.1)] transition-all duration-500 group">
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
                            Quanto puoi <span className="relative whitespace-nowrap inline-block">
                                <span className="absolute bg-martes-green bottom-0 left-0 w-full h-[30%] -z-10 -rotate-1 opacity-60 rounded-sm"></span>
                                risparmiare
                            </span> con Prisma?
                         </h3>
                         
                         <div className="grid md:grid-cols-2 gap-12 mb-12 text-left">
                             <div>
                                 <label className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-4 block">Settore</label>
                                 <div className="grid grid-cols-2 gap-3">
                                     {['Edile', 'Facility', 'Immobiliare', 'Altro'].map(s => (
                                         <button 
                                            key={s}
                                            onClick={() => setSector(s.toLowerCase())}
                                            className={`px-4 py-3 rounded-xl border transition-all font-medium ${sector === s.toLowerCase() ? 'bg-white text-black border-white shadow-lg' : 'bg-transparent border-white/20 text-neutral-400 hover:border-white hover:text-white'}`}
                                         >
                                             {s}
                                         </button>
                                     ))}
                                 </div>
                             </div>
                             <div>
                                  <label className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-4 block">Numero Dipendenti</label>
                                  
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
                             Scopri il Risparmio
                         </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <p className="text-neutral-500 text-lg mb-4">Risparmio annuo stimato</p>
                        <div className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter shadow-martes-green drop-shadow-lg">
                            €{new Intl.NumberFormat('it-IT').format(result * 12)}
                        </div>
                        <div className="text-martes-green font-serif italic text-2xl mb-4">
                            e {new Intl.NumberFormat('it-IT').format(Math.round(safeNumberDisplay(employees) * 15 * 12))} ore di lavoro recuperate
                        </div>

                        <p className="text-neutral-500 text-xs max-w-md mx-auto mb-12 italic">
                            *Calcolo basato su costo orario medio nazionale (include costi indiretti): 
                            {sector === 'edile' && ' €32/h per il settore Edile.'}
                            {sector === 'facility' && ' €28/h per il settore Facility.'}
                            {(sector === 'immobiliare' || sector === 'altro') && ' €30/h per il settore Immobiliare/Servizi.'}
                        </p>

                         <div className="flex gap-4">
                            <button 
                                onClick={() => setStep(1)}
                                className="px-6 py-3 rounded-xl text-neutral-500 hover:text-white transition-colors border border-transparent hover:border-white/20"
                            >
                                Ricalcola
                            </button>
                            <a 
                                href="https://cal.com/andrea-belli-contarini" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-martes-green transition-colors shadow-lg"
                            >
                                Ottieni questo risultato
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

// --- CASE STUDIES (COPIED FROM Cases.tsx) ---

// Cases Data specific for Prisma
const prismaCases = [
  {
    id: 'dolomiti',
    name: 'Dolomiti Strade',
    challenge: 'L\'HR era completamente sommerso dal lavoro: rapportini cartacei persi, Excel mai completati, 2-3 ore ogni sera per inseguire 30 operai. E non parliamo del tempo che ogni singolo operaio perdeva a compilare Excel, rapportini cartacei e poi doverli consegnare all\'HR. Un sistema totalmente inefficiente che faceva impazzire tutti.',
    solution: 'Con Prisma, i dipendenti mandano semplicemente vocali e foto su WhatsApp. Prisma trascrive i vocali, analizza le foto e salva tutto in una dashboard centralizzata. L\'HR riceve report settimanali automatici via email. Risultato? Zero inseguimenti, operai che adorano il nuovo sistema perché gli semplifica la vita, e un team HR finalmente liberato dal caos quotidiano.',
    results: [
      { value: '450h', label: 'Recuperate / Mese' },
      { value: '12.5x', label: 'ROI' },
    ],
  },
  {
    id: 'buildup',
    name: 'Build Up',
    challenge: '15 tecnici sul campo, 15 fogli Excel diversi da unire manualmente ogni settimana. I tecnici dimenticavano di segnare gli interventi, alcuni usavano carta, altri messaggi vocali sparsi ovunque. I report mensili richiedevano 2 interi giorni di lavoro manuale. Zero visibilità real-time su chi stava dove e cosa stava facendo. Un incubo operativo totale.',
    solution: 'Con Prisma, ogni tecnico chiude l\'intervento in 30 secondi da WhatsApp: cliente, ore, materiali, foto. Tutto viene centralizzato automaticamente in un\'unica dashboard. Export dei report in 1 click, pronti per la fatturazione. I tecnici apprezzano la semplicità (30 secondi e hanno finito), mentre l\'ufficio ha finalmente visibilità completa e dati organizzati senza sforzo.',
    results: [
      { value: '225h', label: 'Recuperate / Mese' },
      { value: '12.5x', label: 'ROI' },
    ],
  },
  {
    id: 'aquadra',
    name: 'Aquadra',
    challenge: 'I 18 dipendenti aspettavano il fine settimana per consegnare i rapportini, spesso compilati a memoria giorni dopo. Risultato: fatturazione con 7-10 giorni di ritardo costante, materiali non tracciati correttamente con conseguenti perdite economiche, e un HR che impazziva a ricostruire chi aveva fatto cosa. Il cash flow dell\'azienda ne risentiva pesantemente.',
    solution: 'Con Prisma, ogni dipendente manda il report da WhatsApp appena finisce il lavoro: cliente, ore, materiali, usati con foto di tutto. I dati sono disponibili in tempo reale per l\'ufficio amministrativo. La fatturazione ora parte in 24h invece di 7-10 giorni, i materiali sono tracciati al 100%, e i dipendenti apprezzano quanto è semplice (30 secondi su WhatsApp). L\'HR ha finalmente il controllo completo senza stress.',
    results: [
      { value: '270h', label: 'Recuperate / Mese' },
      { value: '12.5x', label: 'ROI' },
    ],
  },
];

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
    const [activeTab, setActiveTab] = useState(0);
  
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
              Alcune storie di{' '}
              <span className="serif-italic text-martes-green">Successo.</span>
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
            {prismaCases.map((caseItem, index) => (
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
                  {prismaCases[activeTab].id === 'dolomiti' && (
                    <img src={dolomitiLogo} alt="Dolomiti" className="h-44 md:h-52 w-auto object-contain brightness-0 invert" />
                  )}
                   {prismaCases[activeTab].id === 'buildup' && (
                    <img src={buildupLogo} alt="Build Up" className="h-20 md:h-24 w-auto object-contain brightness-0 invert" />
                  )}
                   {prismaCases[activeTab].id === 'aquadra' && (
                    <img src={aquadraLogo} alt="Aquadra" className="h-44 md:h-52 w-auto object-contain brightness-0 invert" />
                  )}
                </div>
  
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                      La Sfida
                    </h4>
                    <p className="text-neutral-400 leading-relaxed text-lg font-light">
                      {prismaCases[activeTab].challenge}
                    </p>
                  </div>
  
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2 opacity-70">
                      La Nostra Soluzione
                    </h4>
                    <p className="text-neutral-400 leading-relaxed text-lg font-light">
                      {prismaCases[activeTab].solution}
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col justify-center h-full border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-16">
                 <div className="space-y-10">
                    {prismaCases[activeTab].results.map((result, index) => (
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
