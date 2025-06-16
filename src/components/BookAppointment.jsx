import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaSpa, FaCommentDots } from 'react-icons/fa';

const waxingServices = [
  { name: 'Eyebrow Design', price: 25 },
  { name: 'Eyebrow Maintenance', price: 20 },
  { name: 'Upper Lip', price: 15 },
  { name: 'Chin', price: 15 },
  { name: 'Sideburn', price: 18 },
  { name: 'Nostril', price: 12 },
  { name: 'Ears', price: 15 },
  { name: 'Chest', price: 40 },
  { name: 'Shoulder', price: 30 },
  { name: 'Back (Full)', price: 50 },
  { name: 'Stomach', price: 35 },
  { name: 'Underarms', price: 25 },
  { name: 'Arms (Half)', price: 30 },
  { name: 'Arms (Full)', price: 45 },
  { name: 'Legs with Knees (Lower)', price: 40 },
  { name: 'Legs with Knees (Upper)', price: 45 },
  { name: 'Legs (Full)', price: 70 },
  { name: 'Bikini Line', price: 35 },
  { name: 'Bikini (Extended)', price: 45 },
  { name: 'Brazilian Nude/Customs', price: 60 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

const PremiumAppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dateTime: '',
    services: [],
    message: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const filteredServices = waxingServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      // Updated email regex to be more permissive
      if (!formData.email.match(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/))
        newErrors.email = 'Please enter a valid email address';
      // Clean mobile input and validate
      const cleanedMobile = formData.mobile.replace(/[\s()-]/g, '');
      if (!cleanedMobile.match(/^\d{10,15}$/))
        newErrors.mobile = 'Please enter a valid phone number (10-15 digits)';
    }
    if (step === 2) {
      if (!formData.dateTime) newErrors.dateTime = 'Date and time are required';
      if (formData.services.length === 0)
        newErrors.services = 'Please select at least one service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'mobile' ? value.replace(/[^0-9\s()-]/g, '') : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      const existingIndex = prev.services.findIndex((s) => s.name === service.name);
      let newServices;
      if (existingIndex !== -1) {
        newServices = prev.services.filter((_, i) => i !== existingIndex);
      } else {
        newServices = [...prev.services, service];
      }
      return { ...prev, services: newServices };
    });
    setErrors((prev) => ({ ...prev, services: null }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      if (step < 3) setStep(step + 1);
      else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          dateTime: '',
          services: [],
          message: '',
        });
        setStep(1);
        setSearchTerm('');
        setServiceDropdownOpen(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section
      className="min-h-screen bg-navy-950 bg-opacity-90 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] py-12 sm:py-16 px-4 sm:px-6"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center text-gold-300 mb-8 tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Schedule Your <span className="text-gold-400">Luxury Experience</span>
        </motion.h1>
        <motion.form
          onSubmit={handleNext}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gold-200/20"
          noValidate
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaUser className="text-gold-400 w-5 h-5" />
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaEnvelope className="text-gold-400 w-5 h-5" />
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaPhone className="text-gold-400 w-5 h-5" />
                    Phone Number
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                    autoComplete="tel"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaCalendarAlt className="text-gold-400 w-5 h-5" />
                    Preferred Date & Time
                  </label>
                  <input
                    name="dateTime"
                    type="datetime-local"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                  />
                  {errors.dateTime && <p className="text-red-500 text-sm mt-1">{errors.dateTime}</p>}
                </div>
                <div className="space-y-2 relative">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaSpa className="text-gold-400 w-5 h-5" />
                    Select Waxing Services
                  </label>
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setServiceDropdownOpen(true);
                    }}
                    onFocus={() => setServiceDropdownOpen(true)}
                    onBlur={() => setTimeout(() => setServiceDropdownOpen(false), 200)}
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
                  />
                  {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                  {serviceDropdownOpen && (
                    <motion.div
                      className="absolute z-30 top-full w-full max-h-60 overflow-auto bg-white border border-gold-200 rounded-lg mt-2 shadow-xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredServices.length ? (
                        filteredServices.map((service) => {
                          const isSelected = formData.services.some((s) => s.name === service.name);
                          return (
                            <label
                              key={service.name}
                              className={`flex justify-between items-center px-4 py-3 cursor-pointer transition hover:bg-gold-100/50 ${isSelected ? 'bg-gold-100' : ''}`}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              <span className="flex items-center gap-2 text-navy-900">
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => toggleService(service)}
                                  className="cursor-pointer text-gold-400 focus:ring-gold-400"
                                />
                                {service.name}
                              </span>
                              <span className="font-semibold text-gold-600">${service.price}</span>
                            </label>
                          );
                        })
                      ) : (
                        <div className="px-4 py-3 text-gold-500 italic text-center">No services found.</div>
                      )}
                    </motion.div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-navy-900 font-semibold text-lg">
                    <FaCommentDots className="text-gold-400 w-5 h-5" />
                    Message / Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Add any special requests or questions..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-navy-50/10 text-navy-900 placeholder-gold-300/70 focus:outline-none focus:ring-2 focus:ring-gold-400 transition resize-none"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="text-center space-y-6 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gold-400 tracking-wide">Thank You!</h2>
                <p className="text-navy-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  Your appointment has been successfully booked. We look forward to welcoming you for a luxurious experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-10">
            {step > 1 ? (
              <motion.button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-full bg-navy-100 text-navy-900 font-semibold tracking-wide hover:bg-navy-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back
              </motion.button>
            ) : (
              <div />
            )}
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold tracking-wide shadow-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {step === 3 ? 'Finish' : 'Next'}
            </motion.button>
          </div>
        </motion.form>

        <AnimatePresence>
          {showToast && (
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gold-400 px-8 py-3 rounded-full shadow-lg text-navy-900 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              Appointment booked successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(234, 179, 8, 0.3);
          border-radius: 16px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(234, 179, 8, 0.5);
        }
      `}</style>
    </section>
  );
};

export default PremiumAppointmentForm;