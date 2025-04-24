// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <motion.div
      className="max-w-2xl bg-white/80 backdrop-blur p-6 rounded-xl shadow-xl text-left text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <p>
        Dear Love,<br /><br />
        Wishing you all the joy, love, and cake this world can offer! 🥳  
        May your day be as wonderful and inspiring as you are. 🌸💖<br /><br />
        – From someone who truly cares 💫
      </p>
    </motion.div>
  );
};

export default Message;
