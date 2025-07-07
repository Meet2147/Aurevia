import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Showcase = () => {
  const outfits = [
    {
      title: "Casual Friday",
      description: "Effortless yet polished",
      rating: 4.9,
      category: "Work",
      gradient: "from-orange-200 to-red-200"
    },
    {
      title: "Weekend Brunch",
      description: "Comfy meets chic",
      rating: 4.8,
      category: "Casual",
      gradient: "from-amber-200 to-orange-300"
    },
    {
      title: "Date Night Magic",
      description: "Show-stopping elegance",
      rating: 5.0,
      category: "Evening",
      gradient: "from-red-200 to-pink-200"
    },
    {
      title: "Coffee Run",
      description: "Stylish & comfortable",
      rating: 4.7,
      category: "Everyday",
      gradient: "from-pink-200 to-orange-200"
    },
    {
      title: "Gym to Groceries",
      description: "Athleisure perfection",
      rating: 4.9,
      category: "Active",
      gradient: "from-orange-200 to-red-200"
    },
    {
      title: "Dinner Party",
      description: "Sophisticated charm",
      rating: 4.8,
      category: "Social",
      gradient: "from-red-200 to-orange-200"
    }
  ];

  return (
    <section id="showcase" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
              Look what it can do
            </span> ✨
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Real outfits curated by AI, loved by users. Every suggestion is personalized to your style, body type, and lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {outfits.map((outfit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className={`h-48 sm:h-56 md:h-64 bg-gradient-to-br ${outfit.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700">
                    {outfit.category}
                  </span>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 group-hover:bg-white transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-200 leading-tight">
                    {outfit.title}
                  </h3>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{outfit.rating}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-200 leading-relaxed">
                  {outfit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
            <span>See More Outfits</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;