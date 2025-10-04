import React from 'react';
import FeatureCard from './FeatureCard';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';
// Fix: Import 'motion' from 'framer-motion' instead of accessing it from the window object.
import { motion } from 'framer-motion';

const FeaturesGrid: React.FC = () => {
  return (
    <section id="missions" className="py-20 bg-[#0c0a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 font-orbitron">Core Mission Objectives</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Our project focuses on key areas of space technology to provide groundbreaking insights and capabilities.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature: Feature, index: number) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;