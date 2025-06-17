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
import Waxing from './pages/Waxing';
import BookAppointment from './components/BookAppointment';
import HeroBookingBanner from './components/HeroBookingBanner';
import BusinessHighlights from './components/BusinessHighlights';
import PageNotFound from './components/PageNotFound';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-rose-50/50 m-0 p-0 box-border">
        <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
          *, *:before, *:after {
            box-sizing: border-box;
          }
        `}</style>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <Hero />
                  <Services />
                  <About />
                  <BusinessHighlights />
                  <Testimonials />
                  <FAQ />
                  <FindUs />
                </main>
              </>
            }
          />
          <Route
            path="/services/:serviceId"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <ServiceDetail />
                </main>
               
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <Portfolio />
                  <FindUs />
                </main>
                
              </>
            }
          />
          <Route
            path="/waxing"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <Waxing />
                  <HeroBookingBanner />
                  <FindUs />
                </main>
               
              </>
            }
          />
          <Route
            path="/book"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <BookAppointment />
                  <FindUs />
                </main>
               
              </>
              
              
            }
          />
           <Route
            path="*"
            element={
              <>
                <Header />
                <main className="w-full mx-auto">
                  <PageNotFound />
                  <FindUs/>
                </main>
              
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;