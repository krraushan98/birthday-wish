import { useEffect, useState } from 'react';

const Countdown = ({ onComplete }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-04-25T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="text-4xl font-bold bg-white/10 px-6 py-4 rounded-xl shadow-xl text-white">
      {timeLeft ? (
        <p>
          ⏳ Countdown: {timeLeft.days}days {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      ) : (
        <p>🎉 Time's up! Let the celebration begin!</p>
      )}
    </div>
  );
};

export default Countdown;
