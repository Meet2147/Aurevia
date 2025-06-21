import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maya S.",
      username: "@mayastyles",
      avatar: "from-orange-400 to-red-400",
      quote: "Literally saved my mornings. No more outfit anxiety! 🙌",
      rating: 5
    },
    {
      name: "Alex R.",
      username: "@alexrocks",
      avatar: "from-amber-400 to-orange-400",
      quote: "The AI actually gets my style better than I do lol",
      rating: 5
    },
    {
      name: "Jordan K.",
      username: "@jordankstyle",
      avatar: "from-red-400 to-pink-400",
      quote: "Best fashion app ever. Period. ✨",
      rating: 5
    },
    {
      name: "Sam P.",
      username: "@sampstyle",
      avatar: "from-orange-500 to-red-500",
      quote: "Finally an app that understands my vibe 💯",
      rating: 5
    },
    {
      name: "Riley M.",
      username: "@rileymode",
      avatar: "from-amber-500 to-orange-500",
      quote: "My friends keep asking where I get my outfit ideas from 😎",
      rating: 5
    },
    {
      name: "Casey L.",
      username: "@caseylooks",
      avatar: "from-red-500 to-orange-500",
      quote: "This is the future of getting dressed fr",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
              Don't just take our word for it
            </span> 
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of style-conscious Gen Z users who've transformed their wardrobes with AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105"
            >
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.username}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-orange-200 max-w-full">
            <div className="flex -space-x-1.5 sm:-space-x-2 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                +5K
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
              Join 5,000+ happy users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;