import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeatureCarousel = () => {
  const features = [
    {
      title: 'Smart Analytics Dashboard',
      description: 'Advanced insights and real-time data visualization to drive informed decisions',
      image: 'src/assets/feat1.png',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and workflows effortlessly',
      image: 'src/assets/feat2.png',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance',
      image: 'src/assets/feat3.png',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Collaborative Workspace',
      description: 'Enhanced team collaboration with real-time updates and shared resources',
      image: 'src/assets/feat4.png',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to your workflow patterns',
      image: 'src/assets/feat5.png',
      gradient: 'from-orange-400 to-amber-500'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const total = features.length;
    const clampedIndex = ((index % total) + total) % total;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: clampedIndex * width,
      behavior: 'smooth',
    });
    setActiveIndex(clampedIndex);
  };

  const nextSlide = () => scrollToSlide(activeIndex + 1);
  const prevSlide = () => scrollToSlide(activeIndex - 1);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, nextSlide]);

  const handleScroll = (e) => {
    const target = e.target;
    const index = Math.round(target.scrollLeft / target.offsetWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop View */}
        <div className="hidden lg:flex gap-12 items-center justify-center">
          {/* Feature List */}
          <div className="w-1/2 space-y-5">
            <div className="mb-10">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 blur-xl rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                    <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Features</span>
                  </div>
                  <h2 className="text-7xl font-black leading-[0.9] tracking-tight">
                    <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent block mb-3 drop-shadow-sm">
                      Discover
                    </span>
                    <span className="text-gray-900 block relative">
                      powerful features
                      <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-80"></div>
                    </span>
                  </h2>
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                Experience next-generation capabilities designed to transform your workflow with 
                <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-lg"> intelligent solutions</span>
              </p>
            </div>
            
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`group p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white shadow-xl shadow-orange-200/40 border border-orange-200 transform scale-[1.01]'
                    : 'hover:bg-white/70 hover:shadow-lg hover:shadow-orange-100/30'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className={`mt-3 h-1 rounded-full bg-gradient-to-r ${feature.gradient} transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} />
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="w-1/2 relative">
            <div className="relative h-[750px] flex items-center justify-center">
              {features.map((feature, index) => {
                let position = index - activeIndex;
                if (position > 2) position -= features.length;
                if (position < -2) position += features.length;
                if (Math.abs(position) > 1) return null;

                const isActive = position === 0;
                const isLeft = position === -1;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-out ${
                      isActive 
                        ? 'z-30 scale-100 opacity-100' 
                        : isLeft 
                        ? 'z-20 scale-75 -translate-x-32 opacity-40 blur-sm' 
                        : 'z-20 scale-75 translate-x-32 opacity-40 blur-sm'
                    }`}
                  >
                    <div className="relative group">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-[450px] h-[650px] object-contain rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl" 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 blur-xl rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Features</span>
                  <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full ml-3"></div>
                </div>
                <h2 className="text-6xl font-black leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent block mb-3 drop-shadow-sm">
                    Discover
                  </span>
                  <span className="text-gray-900 block relative">
                    powerful features
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-80"></div>
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
              Experience next-generation capabilities with 
              <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-lg"> intelligent solutions</span>
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div
              className="overflow-x-auto flex snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              ref={carouselRef}
              onScroll={handleScroll}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="snap-center w-full px-4 shrink-0"
                >
                  <div className="relative group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[500px] object-contain rounded-3xl shadow-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent rounded-b-3xl p-6">
                      <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed text-white">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-orange-200/50 transition-all duration-200 hover:scale-110 border border-orange-100"
            >
              <ChevronLeft className="w-5 h-5 text-orange-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-orange-200/50 transition-all duration-200 hover:scale-110 border border-orange-100"
            >
              <ChevronRight className="w-5 h-5 text-orange-700" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg'
                    : 'w-3 h-3 bg-orange-200 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;