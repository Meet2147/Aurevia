import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, you'd handle the email signup here
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-500 via-red-500 to-amber-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Be the First to Try It! 🚀
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our exclusive waitlist and get early access to the future of personal styling. Plus, get 3 months free when we launch!
          </p>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
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
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 flex items-center justify-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-white font-semibold text-base sm:text-lg text-center">
                  You're on the list! Check your email ✨
                </span>
              </div>
            </div>
          )}

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Early access perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;