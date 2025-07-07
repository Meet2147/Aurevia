import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyItWorks from './components/WhyItWorks';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';
import ComingSoon from "./pages/ComingSoon";

const MainApp = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Features />
      <WhyItWorks />
      <EmailSignup />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
