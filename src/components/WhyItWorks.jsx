import React from 'react';
import { CheckCircle, Zap, Users, Shield } from 'lucide-react';

const WhyItWorks = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "No more 'What should I wear?' stress 😌"
    },
    {
      icon: Zap,
      text: "Get ready 3x faster every morning ⚡"
    },
    {
      icon: Users,
      text: "Discover new style combinations you never thought of 💡"
    },
    {
      icon: Shield,
      text: "Your photos stay private and secure 🔒"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-lavender-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-lavender-700 bg-clip-text text-transparent">
                  Why it actually works
                </span>
                <br />
                <span className="bg-gradient-to-r from-mint-600 to-sky-blue-600 bg-clip-text text-transparent">
                  (and why you'll love it)
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We've studied thousands of wardrobes and style preferences to create an AI that truly gets your personal style. No generic suggestions, just outfits that feel authentically you.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lavender-500 to-lilac-500 rounded-full flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 pt-2 group-hover:text-gray-900 transition-colors duration-200">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Mock AI Interface */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-neon-pink-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-sky-blue-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-lavender-100 to-lilac-100 rounded-2xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Today's Outfit Suggestion</p>
                    <div className="flex space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-lavender-300 to-lilac-300 rounded-xl"></div>
                      <div className="w-16 h-16 bg-gradient-to-br from-mint-300 to-sky-blue-300 rounded-xl"></div>
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-blue-300 to-neon-pink-300 rounded-xl"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-mint-100 to-sky-blue-100 rounded-2xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Weather-Smart Recommendations</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-sky-blue-400 rounded-lg"></div>
                      <span className="text-sm text-gray-600">72°F - Perfect for a light jacket</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-sky-blue-100 to-neon-pink-100 rounded-2xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Mood: Confident ✨</p>
                    <div className="flex space-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-pink-300 to-lavender-300 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-lavender-300 to-lilac-300 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-lavender-300 to-lilac-300 rounded-full opacity-40 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-mint-300 to-sky-blue-300 rounded-full opacity-40 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;