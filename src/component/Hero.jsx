// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
  className="text-3xl font-bold text-pink-200 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 rounded-2xl shadow-2xl animate-pulse"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  ✨ Happy Birthday, <span className="text-yellow-300">My Love❤️</span>! ✨
</motion.div>
  );
};

export default Hero;
