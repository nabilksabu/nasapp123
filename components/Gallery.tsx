
import React from 'react';
// Fix: Import 'motion' from 'framer-motion' instead of accessing it from the window object.
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2093&auto=format&fit=crop", // Nebula
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop", // Earth
  "https://images.unsplash.com/photo-1545156521-77bd85175853?q=80&w=1935&auto=format&fit=crop", // Astronaut
  "https://images.unsplash.com/photo-1517976487-151248999813?q=80&w=2070&auto=format&fit=crop", // Saturn
  "https://images.unsplash.com/photo-1614728836526-79b0a1538317?q=80&w=2070&auto=format&fit=crop", // Mars Rover
  "https://images.unsplash.com/photo-1570284613060-766c33850e00?q=80&w=2070&auto=format&fit=crop"  // Rocket launch
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#110e24]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 font-orbitron">Cosmic Gallery</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
            A collection of stunning visuals captured and inspired by our celestial explorations.
          </p>
        </motion.div>
        <div className="columns-2 md:columns-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg shadow-black/30 hover:shadow-cyan-500/30 transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
