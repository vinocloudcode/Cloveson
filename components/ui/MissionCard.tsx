'use client';

import { motion } from 'framer-motion';
import React from 'react';

const MissionCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
      <p className="text-gray-600">
        To provide high-quality, innovative products...
      </p>
    </motion.div>
  );
};

export default MissionCard;
