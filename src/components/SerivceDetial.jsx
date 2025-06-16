import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <section className="min-h-screen bg-rose-50/50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold mb-6 tracking-tight capitalize">
          {serviceId.replace('-', ' & ')}
        </h1>
        <p className="font-['Lora'] text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
          Discover the luxurious experience of our {serviceId.replace('-', ' & ')} services at Luxe Nail Salon. Our expert artisans use premium, eco-friendly products to deliver personalized results in a serene environment.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-rose-400 to-gold-300 text-white px-6 py-3 rounded-full text-sm sm:text-base hover:from-rose-500 hover:to-gold-400 hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetail;