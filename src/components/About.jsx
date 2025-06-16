import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-sans mb-4 tracking-tight">
            About Neva's Beauty
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl font-sans max-w-3xl mx-auto sm:mx-0">
            At <span className="font-semibold text-rose-900">Neva's Beauty</span>, we are passionate about delivering exceptional beauty services that combine professionalism, quality, and care. Our experienced team is dedicated to providing personalized treatments that leave you feeling confident and refreshed. From glamorous lash extensions and natural brow and lash tinting to expertly designed brows, rejuvenating facials, full-body waxing, and soothing manicures and pedicures, we offer a full range of services tailored to your unique needs. We also use premium organic skincare products to ensure the highest quality care for your skin.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl font-sans max-w-3xl mx-auto sm:mx-0">
           We believe that beauty is not just about appearance—it's about how you feel. That’s why we’ve created a warm, welcoming environment where you can relax and indulge in a truly pampering experience. At Neva's Beauty, your satisfaction is our top priority, and we’re committed to helping you look and feel your best. Thank you for choosing us—we’re honored to be part of your beauty journey.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative">
            <img
              src="https://s3-media0.fl.yelpcdn.com/bphoto/_N7K83wCQJsgoz6GCmMWcQ/o.jpg"
              alt="Luxe Nail Studio Interior"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;