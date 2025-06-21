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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent block">
              Why it actually works
            </span>
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent block">
              (and why you'll love it)
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-2">
            We've studied thousands of wardrobes and style preferences to create an AI that truly gets your personal style. No generic suggestions, just outfits that feel authentically you.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 pt-1.5 sm:pt-2 group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                {/* Mock AI Interface */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rounded-full"></div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Today's Outfit */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Today's Outfit Suggestion</p>
                    <div className="flex space-x-2 sm:space-x-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg sm:rounded-xl"></div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg sm:rounded-xl"></div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-200 to-pink-200 rounded-lg sm:rounded-xl"></div>
                    </div>
                  </div>

                  {/* Weather Smart */}
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Weather-Smart Recommendations</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-md sm:rounded-lg flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">72°F - Perfect for a light jacket</span>
                    </div>
                  </div>

                  {/* Mood */}
                  <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Mood: Confident ✨</p>
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-300 to-orange-300 rounded-md sm:rounded-lg"></div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-md sm:rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-40 animate-pulse hidden sm:block"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-40 animate-bounce hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;