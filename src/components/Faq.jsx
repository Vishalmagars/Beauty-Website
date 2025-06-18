import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is sugaring hair removal?',
    answer:
      'Sugaring is a 100% natural hair removal method using a paste made of sugar, lemon juice, and water. It’s gentle, hygienic, and easily washes off with water.',
  },
  {
    question: 'How long do manicures last?',
    answer:
      'Our luxury manicures typically last 1-2 weeks, depending on nail care and polish type. We use high-quality products to ensure durability.',
  },
  {
    question: 'Are your products eco-friendly?',
    answer:
      'Yes, we use organic, eco-friendly products for all our services, ensuring a sustainable and safe experience.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-12 text-center tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-2xl border border-rose-200/50 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-sans text-lg sm:text-xl text-gray-900 font-semibold tracking-tight">
                  {faq.question}
                </h3>
                <span className="text-rose-400">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className="font-sans text-gray-700 text-base sm:text-lg leading-relaxed p-6 pt-0">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;