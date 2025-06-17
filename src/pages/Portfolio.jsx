import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbG9ufGVufDB8fDB8fHww',
    service: 'Nail Art',
  },
  {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Fsb258ZW58MHx8MHx8fDA%3D',
    service: 'Luxury Manicure',
  },
  {
    image: 'https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D',
    service: 'Spa Pedicure',
  },
  {
    image: 'https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D',
    service: 'Massage Therapy',
  },
  {
    image: 'https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D',
    service: 'Gel Polish',
  },
  {
    image: 'https://images.unsplash.com/photo-1610992015836-7c249d75782d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D',
    service: 'Acrylic Design',
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-100/50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-15 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold tracking-tight drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="font-sans text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-6">
            Explore our portfolio to see the beauty transformations we’ve created for our happy clients.
From stunning lash extensions to flawless brows and radiant skin—let our work speak for itself.
Get inspired and discover the Neva's Beauty touch in every detail.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl group bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.service}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Glowing Effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,182,193,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Hover Overlay (Desktop) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-rose-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:block hidden">
                <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-['Playfair_Display'] text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-tight drop-shadow-lg text-center px-4">
                  {item.service}
                </h3>
              </div>
              {/* Service Name (Mobile) */}
              <div className="sm:hidden bg-white p-4 text-center border-t border-rose-200/50">
                <h3 className="font-sans text-lg sm:text-xl text-rose-500 font-semibold tracking-tight">
                  {item.service}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;