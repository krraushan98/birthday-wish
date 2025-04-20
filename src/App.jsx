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

function App() {
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleSurpriseClick = () => {
    setShowContent(true);
    setPlayMusic(true); // now tell MusicPlayer to start
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <StarryBackground />

      <div className="relative z-10 flex flex-col justify-center items-center gap-10 text-center p-6">
        <Countdown onComplete={() => setCountdownFinished(true)} />

        {countdownFinished && !showContent && (
          <button
            onClick={handleSurpriseClick}
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition shadow-lg"
          >
            🎁 Click for Surprise
          </button>
        )}

        {showContent && (
          <>
            <Fireworks />
            <ConfettiEffect />
            <FloatingBalloons />
            <PhotoSlideshow />
            <Hero />
            <PersonalLetter />
            <Message />
            {/* <SurpriseModal /> */}
            <MusicPlayer play={playMusic} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
