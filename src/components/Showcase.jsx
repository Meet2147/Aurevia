import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Showcase = () => {
  const outfits = [
    {
      title: "Casual Friday",
      description: "Effortless yet polished",
      rating: 4.9,
      category: "Work",
      gradient: "from-lavender-200 to-lilac-200"
    },
    {
      title: "Weekend Brunch",
      description: "Comfy meets chic",
      rating: 4.8,
      category: "Casual",
      gradient: "from-mint-200 to-sky-blue-200"
    },
    {
      title: "Date Night Magic",
      description: "Show-stopping elegance",
      rating: 5.0,
      category: "Evening",
      gradient: "from-sky-blue-200 to-neon-pink-200"
    },
    {
      title: "Coffee Run",
      description: "Stylish & comfortable",
      rating: 4.7,
      category: "Everyday",
      gradient: "from-neon-pink-200 to-lavender-200"
    },
    {
      title: "Gym to Groceries",
      description: "Athleisure perfection",
      rating: 4.9,
      category: "Active",
      gradient: "from-lavender-200 to-mint-200"
    },
    {
      title: "Dinner Party",
      description: "Sophisticated charm",
      rating: 4.8,
      category: "Social",
      gradient: "from-mint-200 to-neon-pink-200"
    }
  ];

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-lavender-700 bg-clip-text text-transparent">
              Look what it can do
            </span> ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real outfits curated by AI, loved by users. Every suggestion is personalized to your style, body type, and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outfits.map((outfit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${outfit.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {outfit.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-lavender-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-lavender-700 transition-colors duration-200">
                    {outfit.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{outfit.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                  {outfit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-lavender-500 to-lilac-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <span>See More Outfits</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;