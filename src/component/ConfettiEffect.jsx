import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = () => {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ConfettiEffect;
