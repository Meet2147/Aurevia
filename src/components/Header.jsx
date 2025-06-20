import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lavender-500 to-lilac-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-lavender-600 to-lilac-600 bg-clip-text text-transparent">
              Aurevia
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-lavender-600 transition-colors duration-200">Features</a>
            <a href="#showcase" className="text-gray-700 hover:text-lavender-600 transition-colors duration-200">Showcase</a>
            <a href="#testimonials" className="text-gray-700 hover:text-lavender-600 transition-colors duration-200">Reviews</a>
            <button className="bg-gradient-to-r from-lavender-500 to-lilac-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get Early Access
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;