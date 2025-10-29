import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Location from './components/Location';
import Donations from './components/Donations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Activities />
      <Location />
      <Donations />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;