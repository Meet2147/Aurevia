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
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const textVariants = {
    enter: {
      y: 15,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -15,
      opacity: 0,
    },
  };

  return (
    <section
      id="why"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-20 sm:opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        <div
          className="w-full h-full opacity-10 sm:opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(251,146,60,0.15)_1px,_transparent_1px)] [background-size:8px_8px] opacity-25 sm:opacity-35"></div>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-10 sm:-top-20 md:-top-40 -right-10 sm:-right-20 md:-right-40 w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-orange-200/20 to-red-200/20 sm:from-orange-200/30 sm:to-red-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-10 sm:-bottom-20 md:-bottom-40 -left-10 sm:-left-20 md:-left-40 w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/20 sm:from-amber-200/30 sm:to-orange-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-red-100/15 to-orange-100/15 sm:from-red-100/20 sm:to-orange-100/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience the
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 text-transparent bg-clip-text animate-pulse mt-1">
              Future of Fashion
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover how Aurevia transforms your wardrobe into endless possibilities
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Mobile Layout (stacked) */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 min-h-[580px] sm:min-h-[680px]">
              {/* Image Container - Mobile */}
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[320px] sm:h-[380px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={`mobile-${currentFeature.id}`}
                    className="absolute inset-0 flex items-center justify-center"
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
                  >
                    <img
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Text Content - Mobile */}
              <div className="text-center px-4 sm:px-6 max-w-lg w-full">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={`mobile-text-${currentFeature.id}`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div
                      className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-gradient-to-r ${currentFeature.color}`}
                    >
                      Feature {currentIndex + 1} of {features.length}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {currentFeature.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {currentFeature.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Desktop Layout (side by side) */}
          <div className="hidden lg:block">
            <div className="flex justify-center items-center min-h-[700px]">
              <div className="flex items-center gap-12 max-w-6xl mx-auto">
                {/* Image Container - Desktop */}
                <div className="relative w-[500px] h-[700px] flex items-center justify-center shrink-0">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={`desktop-${currentFeature.id}`}
                      className="absolute inset-0 flex items-center justify-center"
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
                    >
                      <img
                        src={currentFeature.image}
                        alt={currentFeature.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Text Content - Desktop */}
                <div className="flex-1 text-left max-w-lg">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={`desktop-text-${currentFeature.id}`}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 bg-gradient-to-r ${currentFeature.color}`}
                      >
                        Feature {currentIndex + 1} of {features.length}
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {currentFeature.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {currentFeature.desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-2 sm:space-x-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${currentFeature.color} scale-125`
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 sm:mt-8 max-w-md mx-auto">
          <div className="w-full bg-white/30 rounded-full h-1.5">
            <motion.div
              className={`h-1.5 rounded-full bg-gradient-to-r ${currentFeature.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-2">
            {currentIndex + 1} of {features.length} features
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;