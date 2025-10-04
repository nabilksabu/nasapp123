import React from 'react';
import type { Feature } from '../types';
// Fix: Import 'motion' from 'framer-motion' instead of accessing it from the window object.
import { motion } from 'framer-motion';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const { title, description, imageUrl } = feature;
  
  return (
    <motion.div
      className="bg-[#1a162d]/50 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/20 backdrop-blur-sm border border-purple-500/20 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;