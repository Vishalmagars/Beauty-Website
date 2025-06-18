import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const waxingServices = [
  { name: 'Eyebrow Design', price: 25, desc: 'Precision shaping with luxury care.' },
  { name: 'Upper Lip', price: 15, desc: 'Gentle removal with soothing finish.' },
  { name: 'Brazilian Nude', price: 60, desc: 'Full intimate waxing with comfort wax.' },
  { name: 'Legs (Full)', price: 70, desc: 'Smooth waxing from thigh to ankle.' },
  { name: 'Underarms', price: 25, desc: 'Long-lasting clean and smooth look.' },
  { name: 'Back (Full)', price: 50, desc: 'Complete back waxing for a polished feel.' },
  { name: 'Arms (Full)', price: 45, desc: 'Soft arms with our gentle waxing.' },
  { name: 'Bikini Extended', price: 45, desc: 'Perfect for beach-ready results.' },
  { name: 'Stomach', price: 35, desc: 'Subtle and smooth finish.' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
};

const contentVariants = {
  hidden: { opacity: 0, height: 0, scale: 0.95 },
  visible: { opacity: 1, height: 'auto', scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, height: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const WaxingPremiumAlt = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-rose-50 p-4 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 w-full mx-auto text-gray-700 text-left">
            Waxing Services
          </h1>
          <p className="mt-4 w-full mx-auto  text-gray-700 text-lg sm:text-xl text-left">
            Discover our premium waxing treatments designed to pamper you with smooth, radiant skin.
          </p>
        </motion.header>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {waxingServices.map(({ name, price, desc }, idx) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 shadow-lg transition-transform duration-500 cursor-pointer select-none"
              onClick={() => toggle(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') toggle(idx); }}
              aria-expanded={openIndex === idx}
              aria-controls={`service-desc-${idx}`}
              aria-label={`${name}, price $${price}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800-700">{name}</h3>
                <span className="font-bold text-rose-500 text-lg">${price}</span>
                <div className="ml-3 text-rose-700">
                  {openIndex === idx ? <FaMinus size={18} aria-hidden="true" /> : <FaPlus size={18} aria-hidden="true" />}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`service-desc-${idx}`}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-4 text-gray-600 text-sm leading-relaxed"
                  >
                    {desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Button */}
      

      </div>

      <style jsx>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        /* Scrollbar styling for better UX if ever needed */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(79, 70, 229, 0.3);
          border-radius: 16px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(79, 70, 229, 0.5);
        }
      `}</style>
    </section>
  );
};

export default WaxingPremiumAlt;
