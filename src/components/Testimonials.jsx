import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maya S.",
      username: "@mayastyles",
      avatar: "from-lavender-400 to-lilac-400",
      quote: "Literally saved my mornings. No more outfit anxiety! 🙌",
      rating: 5
    },
    {
      name: "Alex R.",
      username: "@alexrocks",
      avatar: "from-mint-400 to-sky-blue-400",
      quote: "The AI actually gets my style better than I do lol",
      rating: 5
    },
    {
      name: "Jordan K.",
      username: "@jordankstyle",
      avatar: "from-sky-blue-400 to-neon-pink-400",
      quote: "Best fashion app ever. Period. ✨",
      rating: 5
    },
    {
      name: "Sam P.",
      username: "@sampstyle",
      avatar: "from-neon-pink-400 to-lavender-400",
      quote: "Finally an app that understands my vibe 💯",
      rating: 5
    },
    {
      name: "Riley M.",
      username: "@rileymode",
      avatar: "from-lavender-400 to-mint-400",
      quote: "My friends keep asking where I get my outfit ideas from 😎",
      rating: 5
    },
    {
      name: "Casey L.",
      username: "@caseylooks",
      avatar: "from-mint-400 to-neon-pink-400",
      quote: "This is the future of getting dressed fr",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-lavender-50 to-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-lavender-700 bg-clip-text text-transparent">
              Don't just take our word for it
            </span> 💬
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of style-conscious Gen Z users who've transformed their wardrobes with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-lavender-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lavender-400 to-lilac-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-mint-400 to-sky-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-sky-blue-400 to-neon-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-neon-pink-400 to-lavender-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                +5K
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Join 5,000+ happy users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;