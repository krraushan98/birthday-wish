import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ play }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when 'play' prop becomes true
  useEffect(() => {
    if (play && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Autoplay failed:", err);
          });
      }
    }
  }, [play]);

  // Toggle music manually
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Manual play failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop>
        <source src="/birthday-wish/happy-birthday-314197.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
