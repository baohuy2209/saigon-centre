import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;