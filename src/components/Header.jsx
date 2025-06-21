import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import logo from '../assets/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-full max-w-[90rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 rounded-2xl sm:rounded-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-1">
            <img 
              src={logo}
              alt="Aurevia Logo" 
              className="w-28 h-28 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-sm leading-tight">
              Aurevia
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-800/80 hover:text-orange-600 transition-colors duration-200 font-medium backdrop-blur-sm text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-gray-800/80 hover:text-orange-600 transition-colors duration-200 font-medium backdrop-blur-sm text-sm lg:text-base"
            >
              Showcase
            </a>
            <a
              href="#testimonials"
              className="text-gray-800/80 hover:text-orange-600 transition-colors duration-200 font-medium backdrop-blur-sm text-sm lg:text-base"
            >
              Reviews
            </a>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold backdrop-blur-sm border border-white/20 shadow-md text-sm lg:text-base whitespace-nowrap">
              Get Early Access
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-20 sm:top-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                onClick={toggleMenu}
                className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 text-center"
              >
                Features
              </a>
              <a
                href="#showcase"
                onClick={toggleMenu}
                className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 text-center"
              >
                Showcase
              </a>
              <a
                href="#testimonials"
                onClick={toggleMenu}
                className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 text-center"
              >
                Reviews
              </a>
              <div className="pt-2 border-t border-gray-200">
                <button 
                  onClick={toggleMenu}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
                >
                  Get Early Access
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;