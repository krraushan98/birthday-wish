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
       मेरी प्रिये को, ❤️<br /><br />

      इस दुनिया की सारी खुशियाँ, प्यार और मीठे केक 🎂 तुम्हारे हिस्से में आएं! 🥳
      तुम्हारा ये खास दिन उतना ही खूबसूरत, रोशन और प्रेरणादायक हो जितनी कि तुम हो। 🌸💖
      तुम्हारी मुस्कान मेरी दुनिया को रोशन कर देती है, और तुम्हारा साथ मेरा सबसे बड़ा तोहफा है। ✨💑<br /><br />

      – एक ऐसा दिल जो सिर्फ तुम्हारा है 💫❤️
      </p>
    </motion.div>
  );
};

export default Message;
