import Modal from 'react-modal';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const SurpriseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
      >
        🎁 Click for Surprise
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="flex justify-center items-center min-h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        <motion.div
          className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-4">🎉 Surprise!</h2>
          <img src="/images/gift.gif" alt="Gift" className="w-60 mx-auto mb-4" />
          <p className="text-gray-700 text-lg">
            I hope this little surprise brings a big smile to your face. You deserve all the love and magic today! 💫
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Close
          </button>
        </motion.div>
      </Modal>
    </>
  );
};

export default SurpriseModal;
