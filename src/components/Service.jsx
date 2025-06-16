import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpa,
  faLeaf,
  faPaintBrush,
  faEye,
  faStar,
  faHandSparkles,
  faTint,
  faHands,
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: faSpa,
      title: 'Waxing',
      description: 'Smooth, radiant skin with professional waxing.',
      path: '/services/waxing',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faLeaf,
      title: 'Sugaring',
      description: 'Gentle, natural hair removal with sugaring.',
      path: '/services/sugaring',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faPaintBrush,
      title: 'Makeup',
      description: 'Flawless makeup for any occasion.',
      path: '/services/makeup',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faEye,
      title: 'Eyelashes',
      description: 'Lash extensions and lifts for stunning eyes.',
      path: '/services/eyelashes',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faStar,
      title: 'Facials',
      description: 'Rejuvenating facials for glowing skin.',
      path: '/services/facials',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faTint,
      title: 'Tinting',
      description: 'Bold eyebrow and eyelash tinting.',
      path: '/services/tinting',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faHands,
      title: 'Massage',
      description: 'Relaxing massages to ease stress.',
      path: '/services/massage',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
    {
      icon: faHandSparkles,
      title: 'Mani & Pedi',
      description: ' Custom websites. Smart web apps. SEO that gets you seen. E-commerce that converts. Maintenance that keeps you running.',
      path: '/services/mani-pedi',
      image: 'https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1528&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: -30,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
    },
  };

  const particles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 6;
    return (
      <motion.div
        key={i}
        className="particle"
        style={{ width: `${size}px`, height: `${size}px`, left: `${left}%` }}
        animate={{
          y: ['100vh', '-100vh'],
          opacity: [0, 0.4, 0],
          transition: {
            y: { duration: duration, repeat: Infinity, ease: 'linear' },
            opacity: { duration: duration, repeat: Infinity },
          },
        }}
      />
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-rose-50 flex items-center justify-center overflow-hidden"
    >
 
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          className="text-section mb-12 text-center sm:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-800 font-sans mb-4 tracking-tight"
            variants={textVariants}
          >
            Our Serivces
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg sm:text-xl font-sans max-w-3xl mx-auto sm:mx-0"
            variants={textVariants}
          >
            Custom websites. Smart web apps. SEO that gets you seen. E-commerce that converts. Maintenance that keeps you running.
            <br />
            I don’t just build websites — I craft digital experiences designed to grow your brand and boost your business. Whether you're launching, scaling, or reinventing, I offer end-to-end web services that combine sleek design, modern technology, and expert support.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="service-nav w-full lg:w-1/4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <ul className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className={`text-lg font-sans cursor-pointer py-2 px-4 rounded-lg transition-colors ${
                    activeService === index
                      ? 'bg-pink-50 text-pink-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FontAwesomeIcon icon={service.icon} className="mr-2" />{' '}
                  {service.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="card-container w-full lg:w-3/4 relative min-h-[400px] sm:min-h-[400px] lg:min-h-[400px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="card flex flex-col lg:flex-row bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border-l-4 border-pink-500 h-full hover:shadow-[0_15px_30px_rgba(244,63,94,0.3)] transition-shadow duration-300 w-full lg:w-[90%] mx-auto"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-full lg:w-1/2 h-60 lg:h-[400px] overflow-hidden"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-50"></div>
                </motion.div>
                <div className="flex flex-col justify-between p-6 sm:p-8 w-full lg:w-1/2 space-y-4">
                  <motion.div variants={contentVariants}>
                    <h3 className="text-2xl sm:text-3xl font-semibold font-sans text-pink-600 mb-3">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed line-clamp-3">
                      {services[activeService].description}
                    </p>
                    
                  </motion.div>
                   <motion.button
                    className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full font-sans text-base hover:from-pink-600 hover:to-pink-700 transition-all hover:shadow-lg self-start mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .services-watercolor-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(244, 63, 94, 0.0) 30%,
            rgba(225, 29, 72, 0.3) 50%,
            rgba(244, 63, 94, 0.2) 70%,
            rgba(255, 255, 255, 0.1) 100%
          );
          backdrop-filter: blur(12px);
          opacity: 0.7;
          z-index: 1;
          pointer-events: none;
        }
        .particle-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        .particle {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(244, 63, 94, 0.3),
            rgba(244, 63, 94, 0.1)
          );
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(244, 63, 94, 0.2);
        }
        .card-container {
          display: flex;
          align-items: stretch;
        }
        .card {
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          border-color: rgba(244, 63, 94, 0.8);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Services;
