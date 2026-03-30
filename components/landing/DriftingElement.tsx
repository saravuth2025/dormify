'use client';

import { motion } from 'framer-motion';

export const DriftingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className={className}
  >
    {children}
  </motion.div>
);
