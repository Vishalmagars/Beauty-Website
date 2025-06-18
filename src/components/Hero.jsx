import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?q=80&w=1374&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?q=80&w=1414&auto=format&fit=crop',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = slides[currentSlide];
    img.onload = () => setIsLoaded(true);

    const interval = setInterval(() => {
      setIsLoaded(false);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <header className="relative h-[50vh] md:h-screen w-full font-sansbg-gradient-to-b from-rose-50 to-white overflow-hidden">
      {/* Main Content */}
      <div className="relative h-full flex flex-row items-center justify-center max-w-full mx-auto">
        {/* Left: Text Content with White Background */}
        <motion.div
          className="w-[70%] md:w-[45%] h-full bg-gradient-to-b from-rose-50 to-white 
             flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 
             border-b-8 border-rose-900"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >

          <div className="max-w-md mx-auto md:mx-0  text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rose-900 tracking-tight drop-shadow-md mb-3 sm:mb-4 md:mb-5">
              Welcome to Neva's Beauty
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-gray-800/90 mb-4 sm:mb-5 md:mb-6 max-w-sm">
              Indulge in bespoke beauty crafted to elevate your radiance in a sanctuary of celestial elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
              <motion.a
                href="/book"
                className="inline-block bg-gradient-to-r from-rose-400 to-rose-600 text-white py-2 sm:py-2.5 px-5 sm:px-6 md:px-7 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide shadow-md hover:shadow-rose-500/40 transition-all duration-400"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(244, 198, 167, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                Book Now
              </motion.a>
              {/* <motion.a
                href="#services"
                className="inline-block bg-transparent border-2 border-rose-400 text-rose-600 py-2 sm:py-2.5 px-5 sm:px-6 md:px-7 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide hover:bg-rose-100/30 transition-all duration-400"
                whileHover={{ scale: 1.05, borderColor: 'rgb(251, 191, 155)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              >
                Explore Services
              </motion.a> */}
            </div>
          </div>
        </motion.div>

        {/* Right: Image Carousel */}
        <div className="w-[30%] md:w-[55%] h-full relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide]})` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-rose-900/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
          {/* Loading Spinner */}
          {!isLoaded && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/30 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-t-rose-400 border-white/70 rounded-full animate-spin" />
            </motion.div>
          )}
        </div>

        {/* Wavy Divider */}
        <div className="absolute inset-y-0 left-[75%] md:left-[48%] w-8 sm:w-10 md:w-12 z-20">
          <svg className="w-full h-full fill-current text-rose-900" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path d="M0 0 C50 100, 50 700, 0 800 L100 800 L100 0 Z" />
          </svg>
        </div>
      </div>

      {/* Floating Particles on Left Side */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-300/60 rounded-full"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Bottom Decorative Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-t from-rose-100/30 to-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
    </header>
  );
};

export default Hero;
