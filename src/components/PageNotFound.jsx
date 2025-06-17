import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-100/50 to-white flex items-center justify-center w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-sans text-6xl sm:text-8xl text-rose-500 font-bold mb-6 tracking-tight drop-shadow-lg">
            404
          </h1>
          <h2 className="font-sans text-2xl sm:text-4xl text-gray-700 font-semibold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="font-sans text-gray-600 text-lg sm:text-xl leading-relaxed max-w-md mx-auto mb-8">
            It looks like the page you're looking for doesn't exist. Let's get you back to the beauty!
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 rounded-full text-base font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PageNotFound;