import React from 'react';
import { Shirt, Wand2, Heart, Minimize2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shirt,
      title: "Digitize Your Closet",
      description: "Snap photos of your clothes and let AI organize your entire wardrobe digitally.",
      color: "from-lavender-500 to-lilac-500",
      bgColor: "from-lavender-50 to-lilac-50"
    },
    {
      icon: Wand2,
      title: "Smart Outfit Suggestions",
      description: "Get AI-powered outfit recommendations based on weather, occasion, and your style.",
      color: "from-mint-500 to-sky-blue-500",
      bgColor: "from-mint-50 to-sky-blue-50"
    },
    {
      icon: Heart,
      title: "Mood-based Styling",
      description: "Tell us how you're feeling and we'll curate outfits that match your vibe perfectly.",
      color: "from-sky-blue-500 to-neon-pink-500",
      bgColor: "from-sky-blue-50 to-neon-pink-50"
    },
    {
      icon: Minimize2,
      title: "Zero Clutter. Just Style.",
      description: "Clean, minimalist interface that makes getting dressed a joy, not a chore.",
      color: "from-neon-pink-500 to-lavender-500",
      bgColor: "from-neon-pink-50 to-lavender-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-lavender-700 bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-mint-600 to-sky-blue-600 bg-clip-text text-transparent">
              level up your style ✨
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your closet into a smart, organized, and inspiring space with AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;