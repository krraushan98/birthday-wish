// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const balloons = [1, 2, 3];

const FloatingBalloons = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around z-0">
      {balloons.map((id) => (
        <motion.div
          key={id}
          initial={{ y: 200 }}
          animate={{ y: -800 }}
          transition={{ duration: 10 + id, repeat: Infinity, delay: id }}
        >
          🎈
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
