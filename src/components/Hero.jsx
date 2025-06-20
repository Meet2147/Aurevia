import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 via-mint-50 to-sky-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-lavender-200">
                <Sparkles className="w-4 h-4 text-lavender-600" />
                <span className="text-sm font-medium text-lavender-700">AI-Powered Styling</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-lavender-700 to-lilac-700 bg-clip-text text-transparent">
                  Your Closet.
                </span>
                <br />
                <span className="bg-gradient-to-r from-mint-600 to-sky-blue-600 bg-clip-text text-transparent">
                  Now Smarter.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
                AI-powered outfit curation made just for you. No more "What should I wear?" stress.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-lavender-500 to-lilac-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Try It Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-lavender-400 hover:text-lavender-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mint-400 rounded-full"></div>
                <span>Free to try</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-blue-400 rounded-full"></div>
                <span>No credit card</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-lilac-400 rounded-full"></div>
                <span>Privacy first</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {/* Floating Cards */}
              <div className="space-y-6">
                <div className="animate-float bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-lavender-100">
                  <div className="w-full h-32 bg-gradient-to-br from-lavender-200 to-lilac-200 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-800">Casual Chic</h3>
                  <p className="text-sm text-gray-600">Perfect for brunch</p>
                </div>
                
                <div className="animate-float bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-mint-100" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-32 bg-gradient-to-br from-mint-200 to-sky-blue-200 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-800">Work Ready</h3>
                  <p className="text-sm text-gray-600">Confident & professional</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <div className="animate-float bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sky-blue-100" style={{ animationDelay: '2s' }}>
                  <div className="w-full h-32 bg-gradient-to-br from-sky-blue-200 to-neon-pink-200 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-800">Date Night</h3>
                  <p className="text-sm text-gray-600">Stunning & stylish</p>
                </div>
                
                <div className="animate-float bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-neon-pink-100" style={{ animationDelay: '3s' }}>
                  <div className="w-full h-32 bg-gradient-to-br from-neon-pink-200 to-lavender-200 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-gray-800">Weekend Vibe</h3>
                  <p className="text-sm text-gray-600">Comfy meets cute</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-lavender-300 to-lilac-300 rounded-full opacity-60 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-mint-300 to-sky-blue-300 rounded-full opacity-60 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;