
import React from 'react';
// Fix: Import 'motion' from 'framer-motion' instead of accessing it from the window object.
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1780&auto=format&fit=crop')" }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-orbitron mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the Cosmos
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dive into a universe of data and imagery from NASA's most ambitious missions. Your journey through space starts here.
        </motion.p>
        <motion.a
          href="#missions"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl shadow-cyan-500/40 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        >
          Start Your Journey
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
