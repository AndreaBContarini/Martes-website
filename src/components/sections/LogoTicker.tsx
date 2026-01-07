import { motion } from 'framer-motion';
import { allClients, type Client } from '../../data/clients';

interface LogoTickerProps {
    clients?: Client[];
    speed?: number; // Optional speed control
}

export const LogoTicker = ({ clients = allClients, speed = 45 }: LogoTickerProps) => {
  return (
    <section className="border-b border-white/5 bg-black/40 py-16 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full overflow-hidden relative">
          {/* Scrolling logos */}
          <div className="flex gap-20 items-center">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: speed, 
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-20 items-center shrink-0 pr-20"
            >
              {[...clients, ...clients].map((client, index) => {
                // Dimensioni specifiche per loghi che necessitano ingrandimento EXTRA
                const needsExtraEnlargement = ['Bluvacanze', 'Dolomiti'].includes(client.name);
                const isWinesuite = client.name === 'Winesuite';
                const needsEnlargement = ['Aquadra', 'Toscanini', 'Fantozzi & Associati', 'Turnover', 'Swiss Natural Med'].includes(client.name);

                let logoClass;
                if (needsExtraEnlargement) {
                  logoClass = "min-h-[200px] max-h-[240px] min-w-[300px] max-w-[450px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-125";
                } else if (isWinesuite) {
                  logoClass = "min-h-[70px] max-h-[85px] min-w-[120px] max-w-[180px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-125";
                } else if (needsEnlargement) {
                  logoClass = "min-h-[110px] max-h-[130px] min-w-[180px] max-w-[260px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-125";
                } else {
                  logoClass = "min-h-[90px] max-h-[105px] min-w-[160px] max-w-[220px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-125";
                }

                return (
                  <div
                    key={`${client.name}-${index}`}
                    className="relative group hoverable flex items-center justify-center"
                    style={{
                      minWidth: '180px',
                      height: '120px',
                    }}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={logoClass}
                      style={{
                        filter: 'brightness(0) invert(1) opacity(0.65)',
                      }}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
