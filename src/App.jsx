import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyItWorks from './components/WhyItWorks';
import Showcase from './components/Showcase';
import CountdownTimer from './components/CountdownTimer';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Features />
      <WhyItWorks />
      <Showcase />
      {/* <CountdownTimer /> */}
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;