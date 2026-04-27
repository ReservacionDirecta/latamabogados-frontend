import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, Play } from 'lucide-react';
import './WelcomeVideo.css';

interface WelcomeVideoProps {
  isVisible: boolean;
  onClose: () => void;
}

const WelcomeVideo: React.FC<WelcomeVideoProps> = ({ isVisible, onClose }) => {
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Small delay to ensure the overlay is rendered
      const timer = setTimeout(() => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay blocked:", error);
              setNeedsInteraction(true);
            });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleRepeat = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setNeedsInteraction(false);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setNeedsInteraction(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="welcome-video-overlay animate-reveal-in">
      <div className="welcome-video-container">
        <video
          ref={videoRef}
          className="welcome-video-player"
          playsInline
          src="/0427.mp4"
          onEnded={() => setNeedsInteraction(true)}
        />

        {needsInteraction && (
          <div className="video-interaction-prompt" onClick={handleManualPlay}>
            <div className="play-icon-large">
              <Play size={40} fill="white" />
            </div>
            <span>Haga clic para reproducir</span>
          </div>
        )}

        <div className="welcome-video-controls">
          <button 
            className="video-control-btn close" 
            onClick={handleClose}
            title="Cerrar"
          >
            <X size={24} />
          </button>
          <button 
            className="video-control-btn repeat" 
            onClick={handleRepeat}
            title="Repetir"
          >
            <RotateCcw size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeVideo;
