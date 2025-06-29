import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleEarlyAccess = () => {
    navigate('/coming-soon');
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-full max-w-[90rem] bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-xl border border-white/30 shadow-2xl shadow-orange-500/10 rounded-3xl sm:rounded-full px-4 sm:px-6 hover:shadow-3xl hover:shadow-orange-500/15 transition-all duration-300">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo Section */}
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            <div className="relative">
              <img 
                src={logo}
                alt="Aurevia Logo" 
                className="w-8 sm:w-10 object-contain filter drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg leading-tight tracking-tight">
              Aurevia
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button onClick={() => scrollToId('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToId('why')} className="nav-link">Showcase</button>
            <button onClick={() => scrollToId('email-signup')} className="nav-link">Waitlist</button>
            <button
              onClick={handleEarlyAccess}
              className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm border border-white/30 shadow-lg text-sm lg:text-base whitespace-nowrap ml-2 overflow-hidden group"
            >
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-full bg-white/25 backdrop-blur-md border border-white/30 hover:bg-white/35 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={toggleMenu}></div>
          <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white/95 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-6 animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToId('features')} className="mobile-nav-link">Features</button>
              <button onClick={() => scrollToId('why')} className="mobile-nav-link">Showcase</button>
              <button onClick={() => scrollToId('email-signup')} className="mobile-nav-link">Waitlist</button>
              <div className="pt-4 border-t border-orange-200">
                <button
                  onClick={handleEarlyAccess}
                  className="relative w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 font-semibold overflow-hidden group"
                >
                  <span className="relative z-10">Get Early Access</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
          text-gray-800/90;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 0.5rem 0.75rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
          background-color: transparent;
        }
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ea580c;
        }
        .mobile-nav-link {
          text-align: center;
          color: #1f2937;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          transition: all 0.2s ease;
        }
        .mobile-nav-link:hover {
          background: linear-gradient(to right, #fff7ed, #fee2e2);
          color: #ea580c;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
      `}</style>
    </>
  );
};

export default Header;
