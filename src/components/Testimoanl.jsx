import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    quote: 'The best nail salon experience! The staff is so professional, and my manicure lasted weeks!',
    author: 'Emily R.',
  },
  {
    quote: 'I love the relaxing atmosphere and their eco-friendly products. My nails have never looked better!',
    author: 'Sarah K.',
  },
  {
    quote: 'The nail art here is incredible! They brought my vision to life perfectly.',
    author: 'Mia L.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: false, // Disable mouse tracking to avoid conflicts with desktop hover
    delta: 10, // Minimum swipe distance
  });

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-100/50 to-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Title and Content */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-gray-700 font-bold mb-6 tracking-tight drop-shadow-lg">
            Voices of Elegance
          </h2>
          <p className="font-sans text-gray-700 text-lg sm:text-xl leading-relaxed max-w-md">
            Hear what our happy clients have to say about their experience at Neva's Beauty.
            Real results, real reviews—from glowing skin to flawless brows and beyond!
          </p>
        </motion.div>

        {/* Right Side: Testimonial Cards (Carousel) */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            {...swipeHandlers}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <motion.div
                    className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-rose-200/50 max-w-md w-full overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-gold-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,182,193,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <FaQuoteLeft className="absolute top-4 sm:top-6 left-4 sm:left-6 text-rose-300 opacity-30 text-2xl sm:text-3xl" />
                    <p className="font-sans text-gray-700 text-base sm:text-lg leading-relaxed mb-6 mt-8 sm:mt-10 relative z-10">
                      {testimonial.quote}
                    </p>
                    <h4 className="font-sans text-lg sm:text-xl text-rose-500 font-semibold text-right relative z-10">
                      — {testimonial.author}
                    </h4>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Arrows (Hidden on Mobile) */}
            <button
              className="hidden md:block absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2 text-rose-400 hover:text-rose-500 text-xl sm:text-2xl focus:outline-none transition-colors duration-300"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>
            <button
              className="hidden md:block absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2 text-rose-400 hover:text-rose-500 text-xl sm:text-2xl focus:outline-none transition-colors duration-300"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-6 py-2 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-rose-400 scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;