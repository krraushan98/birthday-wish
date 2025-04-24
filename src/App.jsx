import { useState } from 'react';
import Countdown from './component/countdown';
import StarryBackground from './component/StarryBackground';
import Fireworks from './component/Fireworks';
import ConfettiEffect from './component/ConfettiEffect';
import FloatingBalloons from './component/FloatingBalloons';
import Hero from './component/Hero';
import PhotoSlideshow from './component/PhotoSlideshow';
import PersonalLetter from './component/PersonalLetter';
import Message from './component/message';
import SurpriseModal from './component/SurpriseModal';
import MusicPlayer from './component/MusicPlayer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './conuntcss.css'

function App() {
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleSurpriseClick = () => {
    setShowContent(true);
    setPlayMusic(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white count-bg">
      {!showContent ? (
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-4">
          <Countdown onComplete={() => setCountdownFinished(true)} />
          {countdownFinished && (
            <button
              onClick={handleSurpriseClick}
              className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition shadow-lg"
            >
              🎁 Click for Surprise
            </button>
          )}
        </div>
      ) : (
        <>
          <StarryBackground />
          <div className="relative z-10 overflow-y-auto h-screen px-4 pt-20 pb-10 scroll-smooth">
            <Fireworks />
            <ConfettiEffect />
            <FloatingBalloons />
            <div className="flex flex-col items-center text-center space-y-10 max-w-[800px] mx-auto w-full">
              <PhotoSlideshow />
              <Hero />
              <Message />
              <PersonalLetter />
            </div>
            {/* <SurpriseModal /> */}
            <MusicPlayer play={playMusic} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
