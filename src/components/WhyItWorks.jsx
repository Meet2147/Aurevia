import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import feat1 from "../assets/feat1.png";
import feat2 from "../assets/feat2.png";
import feat3 from "../assets/feat3.png";
import feat4 from "../assets/feat4.png";
import feat5 from "../assets/feat5.png";

const features = [
  {
    id: "smart-daily",
    title: "Smart Daily Recommendations",
    desc: "Get personalized outfit suggestions powered by AI, complete with style analytics and exclusive deal alerts on your favorite brands",
    image: feat1,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "social-style",
    title: "Social Style Discovery",
    desc: "Connect with fashion-forward friends, explore their curated outfits, and get inspired by their unique style boards",
    image: feat2,
    color: "from-red-500 to-pink-500",
  },
  {
    id: "effortless-org",
    title: "Effortless Organization",
    desc: "Plan your weekly looks with our smart calendar and never overpack again with our intelligent trip planner",
    image: feat3,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "infinite-style",
    title: "Infinite Style Combinations",
    desc: "Mix, match, and create endless outfit possibilities with our advanced styling engine and custom lookbook collections",
    image: feat4,
    color: "from-orange-600 to-red-600",
  },
  {
    id: "daily-adventures",
    title: "Daily Style Adventures",
    desc: "Discover fresh combinations from your existing wardrobe with our daily shuffle feature and style challenges",
    image: feat5,
    color: "from-red-600 to-orange-500",
  },
];

const WhyItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const currentFeature = features[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsAutoPlaying(false);
    },
    [currentIndex]
  );

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200, // Reduced from 300
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200, // Reduced from 300
      opacity: 0,
      scale: 0.8,
    }),
  };

  const textVariants = {
    enter: {
      y: 20, // Reduced from 30
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20, // Reduced from -30
      opacity: 0,
    },
  };

  return (
    <section
      id="why"
      className="py-8 md:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(251,146,60,0.15)_1px,_transparent_1px)] [background-size:10px_10px] opacity-35"></div>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-red-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-6 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience the
            <span className="block bg-gradient-to-r from-orange-300 via-red-300 to-amber-300 text-transparent bg-clip-text animate-pulse">
              Future of Fashion
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover how StyleSense transforms your wardrobe into endless possibilities
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
              {/* Image */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[320px] h-[200px] sm:h-[280px] md:h-[400px] shrink-0 flex items-center justify-center mx-auto lg:mx-0">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentFeature.id}
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-auto object-contain relative z-10"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 },
                    }}
                  />
                </AnimatePresence>
              </div>
              {/* Text */}
              <div className="flex-1 text-center lg:text-left max-w-lg px-4 sm:px-6 lg:px-0">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={`text-${currentFeature.id}`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div
                      className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r ${currentFeature.color}`}
                    >
                      Feature {currentIndex + 1} of {features.length}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                      {currentFeature.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                      {currentFeature.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 space-x-2 sm:space-x-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${currentFeature.color} scale-125`
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6 md:mt-8 max-w-md mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1">
            <motion.div
              className={`h-1 rounded-full bg-gradient-to-r ${currentFeature.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p className="text-center text-gray-400 text-xs sm:text-sm mt-2">
            {currentIndex + 1} of {features.length} features
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;