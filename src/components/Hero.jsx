import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cloth from '../assets/cloth1.jpg';
import datenight from '../assets/datenight.jpg';
import work from '../assets/work.jpg';
import casual from '../assets/casual.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden pt-20 sm:pt-24">
      {/* Grid & Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        ></div>
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(251,146,60,0.15)_1px,_transparent_1px)] [background-size:10px_10px] opacity-35"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-red-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 sm:gap-20 items-center">
          {/* Left */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left lg:mr-12 xl:mr-20">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-orange-200/50 shadow-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                <span className="text-xs sm:text-sm font-medium text-orange-700">AI-Powered Styling</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-orange-700 to-red-700 bg-clip-text text-transparent">
                  Your Closet.
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Now Smarter.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                AI-powered outfit curation made just for you. No more "What should I wear?" stress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/coming-soon')}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Try It Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600 hover:bg-white/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"></div>
                <span>Free to try</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                <span>No credit card</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></div>
                <span>Privacy first</span>
              </div>
            </div>
          </div>

          {/* Right (Images) */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
              {/* Left Column */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="animate-float bg-white/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-orange-100/50 col-span-2">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={cloth}
                      alt="Featured clothing item"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Featured Style</h3>
                  <p className="text-sm sm:text-base text-gray-600">AI-curated just for you</p>
                </div>

                <div className="animate-float bg-white/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-amber-100/50" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={work}
                      alt="Work ready outfit"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Work Ready</h3>
                  <p className="text-sm sm:text-base text-gray-600">Confident & professional</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8 md:mt-12">
                <div className="animate-float bg-white/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-pink-100/50 col-span-2" style={{ animationDelay: '2s' }}>
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={casual}
                      alt="Weekend casual outfit"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Weekend Vibe</h3>
                  <p className="text-sm sm:text-base text-gray-600">Comfy meets cute</p>
                </div>

                <div className="animate-float bg-white/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-red-100/50" style={{ animationDelay: '3s' }}>
                  <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={datenight}
                      alt="Date night outfit"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Date Night</h3>
                  <p className="text-sm sm:text-base text-gray-600">Stunning & stylish</p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-300/60 to-red-300/60 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-300/60 to-orange-300/60 rounded-full animate-bounce-slow"></div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-300/40 to-pink-300/40 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
