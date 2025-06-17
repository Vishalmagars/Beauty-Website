import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaYelp } from 'react-icons/fa';

const FindUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-t from-rose-900/90 to-rose-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight drop-shadow-lg">
            Visit Neva's Beauty
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-6">
            Get in touch with us easily—whether you have questions or want to book an appointment.
            Find our contact information and location on the map below—we're just a visit away!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info, Social Links, Yelp */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Contact Info */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-rose-200/50 mb-6">
              <h2 className="font-sans text-2xl sm:text-3xl text-rose-500 font-semibold mb-4">
                Get in Touch
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>Address:</strong> 2439 Lombard Street, San Francisco, CA 94123
              </p>
              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mt-2">
                <strong>Phone:</strong> 415-346-2238
              </p>
              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mt-2">
                <strong>Email:</strong> neva@nevasbeauty.com
              </p>
              <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mt-2">
                <strong>Hours:</strong> Mon-Sat: 10 AM - 7 PM, Sun: 10 AM - 6 PM
              </p>
            </div>

            {/* Social Links and Yelp */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-sans text-xl sm:text-2xl text-white font-semibold mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/luxenailstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 hover:text-rose-200 text-2xl sm:text-3xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/luxenailstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 hover:text-rose-200 text-2xl sm:text-3xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="https://www.twitter.com/luxenailstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 hover:text-rose-200 text-2xl sm:text-3xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://www.yelp.com/biz/luxe-nail-studio-new-york"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 hover:text-rose-200 text-2xl sm:text-3xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  aria-label="Review us on Yelp"
                >
                  <FaYelp />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Responsive Map Container */}
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6224546849267!2d-122.44458672495307!3d37.79888681077193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d405ae1d3b%3A0xd12d5a5a3619f0f0!2sNeva&#39;s%20Beauty!5e0!3m2!1sen!2sin!4v1749631742567!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxe Nail Studio Location"
              ></iframe>
            </div>
            {/* Glowing Effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,182,193,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;


