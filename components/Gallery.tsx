
import React from 'react';

declare const motion: any;

const galleryImages = [
  "https://picsum.photos/seed/nebula/500/700",
  "https://picsum.photos/seed/stars/500/300",
  "https://picsum.photos/seed/planet/500/400",
  "https://picsum.photos/seed/rocket/500/600",
  "https://picsum.photos/seed/astronaut/500/500",
  "https://picsum.photos/seed/observatory/500/400"
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
