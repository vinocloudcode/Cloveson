'use client';

import { motion } from 'framer-motion';
import React from 'react';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  bgColor?: string; // Tailwind class, e.g., 'bg-green-900'
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgColor = 'bg-green-900',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${bgColor} text-white text-center px-6 py-20 rounded-b-xl shadow-sm`}
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-4xl font-bold"
        >
          {title}
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-lg text-green-100"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};


 
export default HeroSection;
