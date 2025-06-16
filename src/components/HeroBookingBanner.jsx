import React from 'react';
import { Link } from 'react-router-dom';

const HeroBookingBanner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1742404481109-5e0870f9caa7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: 'fixed',  // This makes the bg sticky
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <Link
          to="/book"
          className="px-10 py-5 text-2xl sm:text-3xl font-semibold bg-rose-500 text-white  shadow-lg transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default HeroBookingBanner;
