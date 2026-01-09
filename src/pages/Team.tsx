

import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/shared/SEOHead';
import { Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import riccardoImg from '../assets/team/riccardo.png';
import andreaImg from '../assets/team/andrea.png';
import tommasoImg from '../assets/team/tommaso.png';
import filippoImg from '../assets/team/filippo.png';
import giovanniImg from '../assets/team/giovanni.png';
import lucaImg from '../assets/team/luca.png';
import ilariaImg from '../assets/team/ilaria.png';
import paoloImg from '../assets/team/paolo.png';

export const Team = () => {
    const { t } = useTranslation();

    // Map images and static links to translated data
    // The order must match the 'tour.members' array in JSON
    const memberAssets = [
        {
             image: riccardoImg,
             linkedin: 'https://www.linkedin.com/in/riccardobellicontarini/',
             youtube: 'https://www.youtube.com/@riccardobellicontarini'
        },
        {
             image: andreaImg,
             linkedin: 'https://www.linkedin.com/in/andreabellicontarini/'
        },
        {
             image: tommasoImg,
             linkedin: 'https://www.linkedin.com/in/tommasomisiti/'
        },
        {
             image: paoloImg,
             linkedin: 'https://www.linkedin.com/in/paolo-pagliarini/'
        },
        {
             image: filippoImg,
             linkedin: 'https://www.linkedin.com/in/filippo-bartoletti-801641397/'
        },
        {
             image: giovanniImg,
             linkedin: 'https://www.linkedin.com/in/giovanni-fiore-8877331b6/'
        },
        {
             image: lucaImg,
             linkedin: 'https://www.linkedin.com/in/luca-tam/'
        },
        {
             image: ilariaImg,
             linkedin: 'https://www.linkedin.com/in/ilaria-pretolani-410b325/'
        }
    ];

    const membersData = t('team.members', { returnObjects: true }) as any[];
    const teamMembers = membersData.map((member, index) => ({
        ...member,
        ...memberAssets[index]
    }));

    return (
        <div className="bg-martes-dark min-h-screen relative overflow-hidden">
             <SEOHead 
                title={t('team.seo.title')}
                description={t('team.seo.description')}
            />

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-martes-green/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="pt-32 pb-20 container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-martes-green/30 bg-martes-green/10 text-martes-green text-sm font-bold tracking-wider mb-6">
                        {t('team.hero.badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('team.hero.title_start')} <span className="serif-italic text-martes-green">{t('team.hero.title_highlight')}</span>
                    </h1>
                    <p className="text-xl text-neutral-400 leading-relaxed">
                        {t('team.hero.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1200px] mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-gradient-to-b from-white/5 to-black/50 hover:border-martes-green/30 transition-all duration-500 shadow-2xl ${isOpen ? 'ring-2 ring-martes-green/50' : ''}`}
        >
             {/* Image Layer */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-2 md:p-4 transition-transform duration-500 ${isOpen ? 'scale-110 blur-sm grayscale opacity-30' : ''}`}>
                 {/* Spotlight Effect behind person */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-martes-green/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                 
                {member.image ? (
                     <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-auto h-auto max-h-[65%] md:max-h-[85%] max-w-[90%] object-contain transition-transform duration-700 group-hover:scale-105 relative z-10 mb-12 md:mb-0" 
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-serif italic text-white/10">
                            {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                        </span>
                    </div>
                )}
            </div>

            {/* Gradient Overlay - Stronger at bottom for text readability */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 z-20 ${isOpen ? 'opacity-95 bg-black/90' : 'opacity-80 group-hover:opacity-100'}`} />
            
            {/* Description Overlay (Visible when Open) */}
             <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-40 flex flex-col items-center justify-center p-4 md:p-6 text-center"
                    >
                        <div className="flex-1 flex items-center justify-center w-full overflow-y-auto custom-scrollbar">
                            <p className="text-white text-xs md:text-base leading-relaxed font-medium">
                                "{member.description}"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4 shrink-0">
                            {member.linkedin && (
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 md:p-3 bg-white/10 rounded-full hover:bg-martes-green hover:text-black transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Linkedin size={18} className="md:w-5 md:h-5" />
                                </a>
                            )}
                            {member.youtube && (
                                <a 
                                    href={member.youtube} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 md:p-3 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Youtube size={18} className="md:w-5 md:h-5" />
                                </a>
                            )}
                        </div>
                         <div className="mt-4 md:mt-8 text-[10px] md:text-xs text-white/30 font-medium uppercase tracking-widest shrink-0">
                            {t('team.cards.click_close')}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Content (Name & Role) - Hidden when open */}
            <motion.div 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-30 text-center pointer-events-none"
            >
                <div className="relative">
                    <h3 className="text-base md:text-xl font-bold text-white mb-1 group-hover:text-martes-green transition-colors leading-tight">
                        {member.name}
                    </h3>
                    <p className="text-[9px] md:text-xs font-bold text-martes-green uppercase tracking-widest opacity-80">
                        {member.role}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
