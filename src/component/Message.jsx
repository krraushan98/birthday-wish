// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 max-w-lg text-lg text-gray-700 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <p>
        Dear [Her Name],<br /><br />
        Wishing you all the joy, love, and cake this world can offer! 🥳  
        May your day be as wonderful and inspiring as you are. 🌸💖<br /><br />
        – From someone who truly cares 💫
      </p>
    </motion.div>
  );
};

export default Message;
