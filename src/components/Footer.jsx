import React from 'react';
import { Sparkles, Instagram, Twitter, BookIcon as TikTok } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-lavender-500 to-lilac-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-lavender-400 to-lilac-400 bg-clip-text text-transparent">
                Aurevia
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Transform your closet into a smart, organized, and inspiring space with AI-powered styling. Your personal fashion assistant that actually gets your style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Features</a></li>
              <li><a href="#showcase" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Showcase</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">About</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lavender-400 transition-colors duration-200">Get Early Access</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Aurevia. All rights reserved. Made with ✨ for Gen Z.
            </p>
            
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-lavender-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lavender-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lavender-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <TikTok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;