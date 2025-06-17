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
  { path: '/waxing', label: 'WAXING' },
  { path: '/make-up', label: 'MAKE UP' },
  { path: '/facials', label: 'FACIALS' },
  { path: '/tinting', label: 'TINTING' },
  { path: '/eyelashes', label: 'EYELASHES' },
  { path: '/mani-pedi', label: 'MANI & PEDI' },
  { path: '/massage', label: 'MASSAGE' },
  { path: '/sugaring', label: 'SUGARING' },
];


  return (
    <>
      <motion.header
        className={`w-full z-50 font-['Inter',sans-serif] transition-all duration-300 ${
          isScrolled ? 'bg-gradient-to-r from-rose-50 to-rose-100 shadow-lg' : 'bg-white shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="https://nevasbeauty.com/banner_logo.jpg"
              alt="Luxe Nail Studio Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rose-600 after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeMenu}
            >
              Home
            </Link>

            <div className="relative">
              <button
                className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300 flex items-center"
                onClick={toggleServices}
              >
                Services
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="ml-2 text-gray-500" />
                </motion.span>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-xl rounded-lg mt-4 w-64 border border-rose-100 py-3 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rose-600 after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white py-2.5 px-8 rounded-full text-base font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none text-gray-800 hover:text-rose-600 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Modal Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <motion.nav
              ref={menuRef}
              className="md:hidden fixed top-0 left-0 h-screen w-80 max-w-[80%] z-50 bg-gradient-to-b from-rose-50 to-white shadow-2xl border-r border-rose-100"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-start px-6 py-6 space-y-6 h-full">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <img
                    src="https://nevasbeauty.com/banner_logo.jpg"
                    alt="Luxe Nail Studio Logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <div className="flex flex-col space-y-5 w-full">
                  <Link
                    to="/"
                    className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  <div className="flex flex-col">
                    <button
                      className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300 flex items-center"
                      onClick={toggleServices}
                    >
                      Services
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="ml-2 text-gray-500" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="flex flex-col pl-4 mt-3 space-y-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-300"
                              onClick={closeMenu}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/portfolio"
                    className="text-lg font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/book"
                    className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white py-2.5 px-8 rounded-full text-base font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={closeMenu}
                  >
                    Book Now
                  </Link>
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