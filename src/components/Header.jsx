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

  const services = [
    { path: '/services/luxury-manicures', label: 'Luxury Manicures' },
    { path: '/services/pedicures', label: 'Pedicures' },
    { path: '/services/nail-art', label: 'Nail Art' },
    { path: '/services/gel-polish', label: 'Gel Polish' },
    { path: '/services/acrylics', label: 'Acrylics' },
    { path: '/services/spa-treatments', label: 'Spa Treatments' },
    { path: '/services/nail-repair', label: 'Nail Repair' },
    { path: '/services/custom-designs', label: 'Custom Designs' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 font-['Inter',sans-serif] transition-shadow duration-300 bg-white mb-16 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://via.placeholder.com/120x40/FFFFFF/1E3A8A?text=Luxe+Logo"
              alt="Luxe Nail Studio Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center"
                onClick={toggleServices}
              >
                Services
                <FaChevronDown className="ml-1 text-gray-500" />
              </button>
              <motion.div
                className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {service.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            <Link
              to="/portfolio"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              to="/book"
              className="inline-block bg-navy-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-navy-700 transition-colors duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lg focus:outline-none text-gray-700"
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
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
            <motion.nav
              ref={menuRef}
              className="md:hidden fixed top-0 left-0 h-screen w-4/5 z-50 bg-white shadow-lg border-r border-gray-100"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-start px-4 py-5 space-y-5 h-full">
                <Link to="/" className="flex items-center" onClick={toggleMenu}>
                  <img
                    src="https://nevasbeauty.com/banner_slogan.jpg"
                    alt="Luxe Nail Studio Logo"
                    className="h-8 w-auto object-contain"
                  />
                </Link>

                <div className="flex flex-col space-y-3 w-full">
                  <Link
                    to="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>

                  <div className="flex flex-col">
                    <button
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center"
                      onClick={toggleServices}
                    >
                      Services
                      <FaChevronDown className="ml-1 text-gray-500" />
                    </button>
                    {isServicesOpen && (
                      <motion.div
                        className="flex flex-col pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="text-xs text-gray-700 hover:text-gray-900 transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <Link
                    to="/portfolio"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/book"
                    className="inline-block bg-navy-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-navy-700 transition-colors duration-200 w-fit"
                    onClick={toggleMenu}
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
