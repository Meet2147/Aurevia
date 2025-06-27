import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Zap, Users, Shield } from 'lucide-react';
import feat1 from '../assets/feat1.png';
import feat2 from '../assets/feat2.png';
import feat3 from '../assets/feat3.png';
import feat4 from '../assets/feat4.png';
import feat5 from '../assets/feat5.png';

const WhyItWorks = () => {
  const benefits = [
    { icon: CheckCircle, text: "No more 'What should I wear?' stress 😌" },
    { icon: Zap, text: 'Get ready 3x faster every morning ⚡' },
    { icon: Users, text: 'Discover new style combinations you never thought of 💡' },
    { icon: Shield, text: 'Your photos stay private and secure 🔒' },
  ];

  const features = [
    {
      title: 'Get Daily Outfit Recommendations',
      desc: 'Along with stats to your outfitting pattern + watchlist deal alerts',
      image: feat1,
    },
    {
      title: 'Be inspired by friends',
      desc: 'Follow your friends to see their outfits, moodboards and more',
      image: feat2,
    },
    {
      title: 'Get organised',
      desc: 'Use the planner to schedule outfits and pack smartly for trips',
      image: feat3,
    },
    {
      title: 'Create unlimited outfits',
      desc: 'Design endless outfits and organize them with lookbooks',
      image: feat4,
    },
    {
      title: 'Start styling',
      desc: 'Shuffle your wardrobe and discover new combinations daily',
      image: feat5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const total = features.length;
    const clampedIndex = (index + total) % total;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: clampedIndex * width,
      behavior: 'smooth',
    });
    setActiveIndex(clampedIndex);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      scrollToSlide(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent block">
              Why it actually works
            </span>
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent block">
              (and why you'll love it)
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've studied thousands of wardrobes and style preferences to create an AI that truly gets your personal style. No generic suggestions, just outfits that feel authentically you.
          </p>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex gap-8 items-start justify-center max-w-7xl mx-auto">
          <div className="w-1/2 space-y-4 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-orange-100 to-amber-100 border-orange-400 shadow-md'
                    : 'border-transparent hover:border-orange-300'
                }`}
              >
                <h3 className="font-semibold text-lg text-orange-900">{index + 1}. {feature.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex justify-center items-center relative h-[600px]">
            <div className="relative w-full h-full flex justify-center items-center">
              {features.map((feature, index) => {
                let position = index - activeIndex;
                if (position > 2) position -= features.length;
                if (position < -2) position += features.length;
                if (Math.abs(position) > 1) return null;

                const isActive = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      isActive 
                        ? 'z-30 scale-110' 
                        : isLeft 
                        ? 'z-20 scale-90 -translate-x-32 opacity-60' 
                        : 'z-20 scale-90 translate-x-32 opacity-60'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="object-contain w-72 h-[500px]" 
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          <div className="relative w-full">
            <div
              className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
              ref={carouselRef}
              onScroll={(e) => {
                const index = Math.round(e.target.scrollLeft / e.target.offsetWidth);
                setActiveIndex(index);
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="snap-center w-full px-4 shrink-0 flex justify-center"
                  onTouchStart={() => setIsPaused(true)}
                  onTouchEnd={() => setIsPaused(false)}
                  onTouchCancel={() => setIsPaused(false)}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-contain w-full max-w-md h-[400px] rounded-xl transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={() => scrollToSlide(activeIndex - 1)}
                className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
              >
                ◀
              </button>
              <button
                onClick={() => scrollToSlide(activeIndex + 1)}
                className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Description + Dot Indicators */}
          <div className="w-full px-4">
            <div className="p-4 rounded-xl bg-white">
              <h3 className="font-semibold text-lg text-orange-900">{features[activeIndex].title}</h3>
              <p className="text-gray-600 text-sm mt-1">{features[activeIndex].desc}</p>
            </div>

            {/* Dot Indicators with Animation */}
            <div className="flex justify-center mt-4 space-x-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 rounded-full ${
                    index === activeIndex
                      ? 'w-4 h-4 bg-orange-500 shadow-md scale-110'
                      : 'w-2.5 h-2.5 bg-gray-300 opacity-70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
