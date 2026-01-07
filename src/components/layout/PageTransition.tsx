import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
  className?: string; // Allow passing extra classes if needed
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Keep the elegant ease but slower
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
