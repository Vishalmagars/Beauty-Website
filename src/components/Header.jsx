import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const services = [
    { path: '/waxing', label: 'Waxing' },
    { path: '/make-up', label: 'Makeup Artistry' },
    { path: '/facials', label: 'Luxury Facials' },
    { path: '/tinting', label: 'Eyebrow Tinting' },
    { path: '/eyelashes', label: 'Eyelash Enhancements' },
    { path: '/mani-pedi', label: 'Manicure & Pedicure' },
    { path: '/massage', label: 'Spa Massage' },
    { path: '/sugaring', label: 'Sugaring' },
  ];

  return (
    <>
     <motion.header
  className="w-full z-50 font-sans transition-all duration-500 bg-gradient-to-b from-white to-rose-50"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <span className="text-2xl font-bold font-sans text-rose-400">Neva's</span>
              <span className="text-2xl font-bold font-sans text-green-900">Beauty</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 items-center">
            <Link
              to="/"
              className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rose-400 after:transition-all after:duration-500 hover:after:w-full"
              onClick={closeMenu}
            >
              Home
            </Link>

            <div className="relative">
              <motion.button
                className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300 flex items-center"
                onClick={toggleServices}
                whileHover={{ scale: 1.05 }}
              >
                Services
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <FaChevronDown className="ml-2 text-rose-400" />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-2xl rounded-xl mt-4 w-72 border border-rose-100/50 py-4 z-50"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={service.path}
                          className="block px-6 py-3 text-sm font-medium text-rose-800 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-300"
                          onClick={closeMenu}
                        >
                          {service.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rose-400 after:transition-all after:duration-500 hover:after:w-full"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book"
                className="inline-block bg-gradient-to-r from-rose-400 to-rose-600 text-white py-3 px-10 rounded-full text-base font-semibold hover:from-rose-500 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl focus:outline-none text-rose-900 hover:text-rose-600 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Modal Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={closeMenu}
            />
            <motion.nav
              ref={menuRef}
              className="md:hidden fixed top-0 left-0 h-screen w-80 max-w-[85%] z-50 bg-gradient-to-b from-white to-rose-50 shadow-2xl border-r border-rose-100/50"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-start px-6 py-8 space-y-8 h-full">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <span className="text-2xl font-bold font-sans text-rose-400">Neva's</span>
                    <span className="text-2xl font-bold font-sans text-green-900">Beauty</span>
                  </motion.div>
                </Link>

                <div className="flex flex-col space-y-6 w-full">
                  <Link
                    to="/"
                    className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  <div className="flex flex-col">
                    <motion.button
                      className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300 flex items-center"
                      onClick={toggleServices}
                      whileHover={{ x: 5 }}
                    >
                      Services
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <FaChevronDown className="ml-2 text-rose-400" />
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="flex flex-col pl-4 mt-4 space-y-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          {services.map((service, index) => (
                            <motion.div
                              key={service.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Link
                                to={service.path}
                                className="text-sm font-medium text-rose-800 hover:text-rose-600 transition-colors duration-300"
                                onClick={closeMenu}
                              >
                                {service.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/portfolio"
                    className="text-xl font-medium text-rose-900 hover:text-rose-600 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/book"
                      className="inline-block bg-gradient-to-r from-rose-400 to-rose-600 text-white py-3 px-10 rounded-full text-base font-semibold hover:from-rose-500 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={closeMenu}
                    >
                      Book Appointment
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;