import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Wand2, Palette, Minimize2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shirt,
      title: "Digitize Your Closet",
      description: "Snap photos of your clothes and let AI organize your entire wardrobe digitally.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-100 to-red-100",
    },
    {
      icon: Wand2,
      title: "Smart Outfit Suggestions",
      description: "Get AI-powered outfit recommendations based on weather, occasion, and your style.",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-100 to-orange-100",
    },
    {
      icon: Palette,
      title: "Style Canvas & AI Scoring",
      description: "Create outfits on our interactive canvas and get instant AI-powered style scores and feedback.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100 to-pink-100",
    },
    {
      icon: Minimize2,
      title: "Zero Clutter. Just Style.",
      description: "Clean, minimalist interface that makes getting dressed a joy, not a chore.",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-100 to-orange-100",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="features"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-white via-orange-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="block bg-gradient-to-r from-gray-900 to-orange-700 text-transparent bg-clip-text">
              Everything you need to
            </span>
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
              level up your style ✨
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your closet into a smart, organized, and inspiring space with AI-powered insights.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative rounded-2xl p-6 sm:p-7 md:p-8 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl`}
              ></div>

              {/* Glass Hover Overlay */}
              <div className="absolute inset-0 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl bg-white/10 z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-5 shadow-md`}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
