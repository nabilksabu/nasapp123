import React from 'react';
// Fix: Import 'motion' from 'framer-motion' instead of accessing it from the window object.
import { motion } from 'framer-motion';

const Bar: React.FC<{ height: string; delay: number }> = ({ height, delay }) => {
  return (
    <motion.div
      className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-sm"
      style={{ height: '0%' }}
      whileInView={{ height }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    />
  );
};

const DataVizPlaceholder: React.FC = () => {
  const bars = ["40%", "75%", "60%", "90%", "50%", "80%", "65%", "45%", "95%", "70%"];

  return (
    <section id="data" className="py-20 bg-[#0c0a1a]">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 font-orbitron">Live Telemetry Data</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Visualizing complex data streams to make informed decisions in real-time. This is a placeholder for future data integration.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1a162d]/50 p-8 rounded-lg shadow-2xl shadow-purple-900/20 backdrop-blur-sm border border-purple-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end h-64 gap-4 border-l-2 border-b-2 border-gray-700/50 p-4">
            {bars.map((height, index) => (
              <Bar key={index} height={height} delay={index * 0.1 + 0.5} />
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">Signal Strength (dBm)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVizPlaceholder;