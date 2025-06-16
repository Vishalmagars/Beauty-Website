import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Boutique Elegance',
    description: 'Indulge in tailored services within a refined, intimate ambiance.',
    icon: (
      <svg className="text-rose-600 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Exceptional Value',
    description: 'Premium quality crafted to complement your budget.',
    icon: (
      <svg className="text-rose-600 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Connectivity',
    description: 'Stay connected with complimentary high-speed Wi-Fi.',
    icon: (
      <svg className="text-rose-600 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'Legacy of Expertise',
    description: 'Trusted excellence honed over 15 years.',
    icon: (
      <svg className="text-rose-600 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Unrivaled Satisfaction',
    description: 'Your delight is our relentless pursuit.',
    icon: (
      <svg className="text-rose-600 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const BusinessHighlights = () => {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/40 to-rose-900/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-gray-900 px-4 py-16 sm:py-20 lg:py-24">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-white tracking-wide font-sans uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Highlights from the Business
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg border border-rose-100/20 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className="relative mb-5 p-3 bg-rose-100/50 rounded-full">
                {highlight.icon}
                <div className="absolute inset-0 bg-rose-200/30 rounded-full blur-lg -z-10 scale-125"></div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-900 font-sans tracking-tight text-center">{highlight.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHighlights;