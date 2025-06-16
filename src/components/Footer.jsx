import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-rose-900/90 to-rose-800/90 py-12 sm:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Brand and Description */}
          <div className="flex flex-col">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-lg mb-4">
              Luxe Nail Studio
            </h3>
            <p className="font-['Lora'] text-sm sm:text-base text-rose-100 leading-relaxed max-w-xs">
              Elevate your beauty with our bespoke nail artistry and luxurious spa experiences in the heart of New York.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-rose-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="font-['Lora'] text-sm sm:text-base text-rose-100 hover:text-white transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="font-['Lora'] text-sm sm:text-base text-rose-100 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/find-us"
                  className="font-['Lora'] text-sm sm:text-base text-rose-100 hover:text-white transition-colors duration-300"
                >
                  Find Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font-['Lora'] text-sm sm:text-base text-rose-100 hover:text-white transition-colors duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="font-['Lora'] text-sm sm:text-base text-rose-100 hover:text-white transition-colors duration-300"
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-rose-300 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 font-['Lora'] text-sm sm:text-base text-rose-100">
              <li>123 Elegance St, Suite 100</li>
              <li>New York, NY 10001</li>
              <li>(212) 555-7890</li>
              <li>info@luxenailstudio.com</li>
              <li>Mon-Sat: 9 AM - 7 PM</li>
              <li>Sun: 11 AM - 5 PM</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col">
            <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-rose-300 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/luxenailstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-rose-400 text-2xl sm:text-3xl transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/luxenailstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-rose-400 text-2xl sm:text-3xl transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://www.twitter.com/luxenailstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-rose-400 text-2xl sm:text-3xl transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Follow us on Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://www.yelp.com/biz/luxe-nail-studio-new-york"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-rose-400 text-2xl sm:text-3xl transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Review us on Yelp"
              >
                <FaYelp />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-8 lg:mt-12 border-t border-rose-200/50 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-['Lora'] text-sm sm:text-base text-rose-100">
            &copy; {new Date().getFullYear()} Luxe Nail Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;