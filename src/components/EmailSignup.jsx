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
    <section className="py-24 bg-gradient-to-br from-lavender-500 via-lilac-500 to-mint-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Try It! 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to the future of personal styling. Plus, get 3 months free when we launch!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-lavender-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">
                  You're on the list! Check your email ✨
                </span>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Early access perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;