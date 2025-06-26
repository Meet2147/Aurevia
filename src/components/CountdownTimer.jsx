import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const launchDate = new Date("2025-07-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Launching In:
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 text-white font-bold text-xl sm:text-2xl">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
            const value = Object.values(timeLeft)[index];
            return (
              <div
                key={label}
                className="bg-gradient-to-br from-orange-400 to-red-400 px-5 py-3 rounded-xl shadow-md min-w-[80px]"
              >
                <div>{value.toString().padStart(2, '0')}</div>
                <div className="text-sm sm:text-base font-medium text-white/80">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
