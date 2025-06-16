import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Service';
import ServiceDetail from './components/SerivceDetial';
import Header from './components/Header';
import Testimonials from './components/Testimoanl';
import FAQ from './components/Faq';
import Portfolio from './pages/Portfolio';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Waxing from './pages/Waxing';
import BookAppointment from './components/BookAppointment';
import HeroBookingBanner from './components/HeroBookingBanner';
import BusinessHighlights from './components/BusinessHighlights';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-rose-50/50">
              <Header/>
              <Hero />
               <Services />
              <About />
              <BusinessHighlights />
             
              <Testimonials/>
             
              <FindUs/>
              
            </div>
          }
        />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
         <Route path="/portfolio" element={
          <div className="min-h-screen bg-rose-50/50">
              <Header/>
             <Portfolio/>
             <FindUs/>
            </div>
         } />
         <Route path="/waxing" element={<div className="min-h-screen bg-rose-50/50">
              {/* <Header/> */}
            <Waxing/>
            <HeroBookingBanner/>
            <FindUs/>
            </div>
         } /><Route path="/book" element={<div className="min-h-screen bg-rose-50/50">
              <Header/>
            <BookAppointment/>
            <FindUs/>
           
            </div>
         } />
      </Routes>
    </Router>
  );
};

export default App;