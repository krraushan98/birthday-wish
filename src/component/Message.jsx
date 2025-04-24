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
        Dear My Love,<br /><br />
        I can't put into
        words how thankful I am for you-for
        walking into my life and filling it
        with so much light Thank you for
        being the reason behind my smiles, for
        understanding me like no one else can,
        and for standing by my side no
        matter what life throws our way<br /><br />


        You're my
        blessing from the universe, my proof that
        miracles do happen. I'll always be grateful
        for the day I found you, and
        even more grateful that you stayed.
      </p>
    </motion.div>
  );
};

export default Message;
