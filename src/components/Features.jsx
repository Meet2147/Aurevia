import React from 'react';
import { Shirt, Wand2, Heart, Minimize2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shirt,
      title: "Digitize Your Closet",
      description: "Snap photos of your clothes and let AI organize your entire wardrobe digitally.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-100 to-red-100"
    },
    {
      icon: Wand2,
      title: "Smart Outfit Suggestions",
      description: "Get AI-powered outfit recommendations based on weather, occasion, and your style.",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-100 to-orange-100"
    },
    {
      icon: Heart,
      title: "Mood-based Styling",
      description: "Tell us how you're feeling and we'll curate outfits that match your vibe perfectly.",
      color: "from-pink-500 to-red-400",
      bgColor: "from-pink-100 to-red-100"
    },
    {
      icon: Minimize2,
      title: "Zero Clutter. Just Style.",
      description: "Clean, minimalist interface that makes getting dressed a joy, not a chore.",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-100 to-orange-100"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              level up your style ✨
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Transform your closet into a smart, organized, and inspiring space with AI-powered insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} mb-4 sm:mb-5 md:mb-6 shadow-lg`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-200 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;