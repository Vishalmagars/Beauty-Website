import React, { useEffect, useState } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1658492055212-e1acbccfca5a?q=80&w=1374&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?q=80&w=1414&auto=format&fit=crop',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = slides[currentSlide];
    img.onload = () => setIsLoaded(true);

    const interval = setInterval(() => {
      setIsLoaded(false);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <header
      className="relative min-h-screen w-full font-['Playfair_Display'] bg-rose-50/50 flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-rose-900/50 transition-opacity duration-1000" />

      {/* Loading Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
          <div className="h-12 w-12 border-4 border-t-gold-300 border-white/50 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight drop-shadow-xl animate__animated animate__fadeIn">
          Welcome to Neva's Beauty
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-['Lora'] text-white/90 drop-shadow-md animate__animated animate__fadeIn animate__delay-1s">
          Experience expert care, luxurious treatments, and radiant results in a space where beauty meets relaxation.
        </p>
        <a
          href="#booking"
          className="inline-block bg-rose-400  py-3 px-8 sm:px-10 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base animate__animated animate__fadeIn animate__delay-2s"
        >
          Reserve Your Appointment
        </a>
      </div>
    </header>
  );
};

export default Hero;
