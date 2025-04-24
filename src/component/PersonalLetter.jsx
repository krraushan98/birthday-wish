// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
const PersonalLetter = () => {
    return (
      <motion.div
     // className="bg-white rounded-2xl p-6 max-w-lg text-lg text-gray-700 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="max-w-2xl bg-white/80 backdrop-blur p-6 rounded-xl shadow-xl text-left text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">A Letter Just for You 💌</h2>
        <p className="leading-relaxed">
          Dear My Love,<br /><br />
          I can't put into words how thankful I am for you-for
          walking into my life and filling it
          with so much light Thank you for
          being the reason behind my smiles, for
          understanding me like no one else can,
          and for standing by my side no
          matter what life throws our way<br/><br />

          You're my
          blessing from the universe, my proof that
          miracles do happen. I'll always be grateful
          for the day I found you, and
          even more grateful that you stayed.
          <br /><br />
          With all my heart,  
          <br />— Your Love 💖
        </p>
      </div>
      </motion.div>
    );
  };
  
  export default PersonalLetter;
  