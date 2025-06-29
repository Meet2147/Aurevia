import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const launchDate = new Date("2025-07-01T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-orange-500 via-red-500 to-amber-500 text-white overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-ping"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Hype Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI Meets Personal Style
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Be the First to Try It! 🚀
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and unlock 3 months of AI-powered outfit suggestions — personalized just for you.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-5 font-bold text-lg sm:text-xl mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
            const value = Object.values(timeLeft)[index];
            return (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4 }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-inner min-w-[70px]"
              >
                <div>{value.toString().padStart(2, '0')}</div>
                <div className="text-xs sm:text-sm text-white/80">{label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Email Form or Confirmation */}
        {!isSubmitted ? (
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-base sm:text-lg min-w-0"
                required
              />
              <button
                onClick={handleSubmit}
                className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap text-base sm:text-lg"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-base sm:text-lg text-center">
                You're on the list! Check your email ✨
              </span>
            </div>
          </motion.div>
        )}

        {/* Feature Teasers */}
        <motion.div
          className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm sm:text-base text-white/90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            'Smart daily outfit picks',
            'Weather + vibe aware',
            'Launch perks & free months'
          ].map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
 