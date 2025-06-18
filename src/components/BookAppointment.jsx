import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaSpa, FaCommentDots, FaTimes } from 'react-icons/fa';

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
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
  const [modal, setModal] = useState({ show: false, message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const filteredServices = waxingServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.match(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/))
        newErrors.email = 'Please enter a valid email address';
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

  const toggleService = (service, e) => {
    e.preventDefault();
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

  const removeService = (serviceName) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.name !== serviceName),
    }));
    setErrors((prev) => ({ ...prev, services: null }));
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    if (step === 1) {
      setStep(2);
      return;
    }

    setIsLoading(true);
    const sheetDbData = new FormData();
    sheetDbData.append('data[name]', formData.name);
    sheetDbData.append('data[email]', formData.email);
    sheetDbData.append('data[mobile]', formData.mobile.replace(/[\s()-]/g, ''));
    sheetDbData.append('data[dateTime]', formData.dateTime);
    sheetDbData.append('data[services]', formData.services.map((s) => s.name).join(', '));
    sheetDbData.append('data[message]', formData.message);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/a6enicr3xjwj7', {
        method: 'POST',
        body: sheetDbData,
      });

      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);

      setModal({
        show: true,
        message: 'Appointment booked successfully!',
        type: 'success',
      });
      setFormData({
        name: '',
        email: '',
        mobile: '',
        dateTime: '',
        services: [],
        message: '',
      });
      setStep(3);
      setSearchTerm('');
      setServiceDropdownOpen(false);
    } catch (error) {
      setModal({
        show: true,
        message: `Error: ${error.message}`,
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    setStep(1);
    setModal({ show: false, message: '', type: '' });
  };

  const closeModal = () => {
    setModal({ show: false, message: '', type: '' });
  };

  return (
    <section className="min-h-screen bg-rose-50 py-12 sm:py-16 px-4 sm:px-6 relative">
      <motion.div className="max-w-2xl mx-auto relative" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Schedule Your <span className="text-rose-400">Luxury Experience</span>
        </motion.h1>
        <motion.form
          onSubmit={handleNext}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-400/20 relative"
          noValidate
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaUser className="text-rose-400 w-5 h-5" />
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaEnvelope className="text-rose-400 w-5 h-5" />
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaPhone className="text-rose-400 w-5 h-5" />
                    Phone Number
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                    autoComplete="tel"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaCalendarAlt className="text-rose-400 w-5 h-5" />
                    Preferred Date & Time
                  </label>
                  <input
                    name="dateTime"
                    type="datetime-local"
                    value={formData.dateTime}
                    onChange={handleInputChange}focus:ring-gray-600
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2  transition"
                    min={new Date().toISOString().slice(0, 16)}
                  />
                  {errors.dateTime && <p className="text-red-500 text-sm mt-1">{errors.dateTime}</p>}
                </div>
                <div className="space-y-2 relative">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaSpa className="text-rose-400 w-5 h-5" />
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                  />
                  {formData.services.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.services.map((service) => (
                        <div
                          key={service.name}
                          className="flex items-center gap-2 px-3 py-1 bg-rose-100 rounded-full text-gray-900 text-sm"
                        >
                          <span>{service.name} (${service.price})</span>
                          <button
                            type="button"
                            onClick={() => removeService(service.name)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <FaTimes size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                  <AnimatePresence>
                    {serviceDropdownOpen && (
                      <motion.div
                        className="absolute z-30 top-full w-full max-h-60 overflow-auto bg-white border border-gray-400 rounded-lg mt-2 shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        {filteredServices.length ? (
                          filteredServices.map((service) => {
                            const isSelected = formData.services.some((s) => s.name === service.name);
                            return (
                              <div
                                key={service.name}
                                className={`flex justify-between items-center px-4 py-3 cursor-pointer transition hover:bg-rose-100/50 ${isSelected ? 'bg-rose-100' : ''}`}
                                onMouseDown={(e) => toggleService(service, e)}
                              >
                                <span className="flex items-center gap-2 text-gray-900">
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => {}}
                                    className="cursor-pointer text-rose-400 focus:ring-gray-600"
                                  />
                                  {service.name}
                                </span>
                                <span className="font-semibold text-rose-600">${service.price}</span>
                              </div>
                            );
                          })
                        ) : (
                          <div className="px-4 py-3 text-rose-500 italic text-center">No services found.</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                    <FaCommentDots className="text-rose-400 w-5 h-5" />
                    Message / Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Add any special requests or questions..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50/10 text-gray-900 placeholder-gary-300/70 focus:outline-none focus:ring-2 focus:ring-gray-600 transition resize-none"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="text-center space-y-6 py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-rose-400 tracking-wide">Thank You!</h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  Your appointment has been successfully booked. We look forward to welcoming you for a luxurious experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-10 relative">
            {step > 1 && (
              <motion.button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-full bg-gray-100 text-gray-900 font-semibold tracking-wide hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                Back
              </motion.button>
            )}
            {step < 3 && (
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-gray-900 font-semibold tracking-wide shadow-lg hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : step === 2 ? 'Finish' : 'Next'}
              </motion.button>
            )}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-2xl">
                <div className="w-8 h-8 border-4 border-t-rose-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </motion.form>

        <AnimatePresence>
          {modal.show && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full z-50"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className={`bg-white rounded-2xl p-6 w-full text-center relative ${modal.type === 'success' ? 'border-rose-400' : 'border-red-500'} border-2 shadow-xl`}>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition"
                >
                  <FaTimes size={16} />
                </button>
                <h3 className={`text-xl font-bold mb-3 ${modal.type === 'success' ? 'text-rose-400' : 'text-red-500'}`}>
                  {modal.type === 'success' ? 'Success!' : 'Error'}
                </h3>
                <p className="text-gray-700 mb-4">{modal.message}</p>
               
              </div>
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
          background-color: rgba(244, 63, 94, 0.3);
          border-radius: 16px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(244, 63, 94, 0.5);
        }
      `}</style>
    </section>
  );
};

export default PremiumAppointmentForm;