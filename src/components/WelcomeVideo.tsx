import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, Play, Volume2, VolumeX } from 'lucide-react';
import './WelcomeVideo.css';

interface WelcomeVideoProps {
  isVisible: boolean;
  onClose: () => void;
  onReady?: () => void;
}

const WelcomeVideo: React.FC<WelcomeVideoProps> = ({ isVisible, onClose, onReady }) => {
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Set volume to 60%
      videoRef.current.volume = 0.6;
      
      // Small delay to ensure the overlay is rendered
      const timer = setTimeout(() => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay with audio blocked:", error);
              // Fallback: Try to play muted first, or show interaction prompt
              videoRef.current!.muted = true;
              setIsMuted(true);
              
              videoRef.current!.play().catch(() => {
                setNeedsInteraction(true);
              });
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
      setIsMuted(false);
      setNeedsInteraction(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  // If not visible and no onReady provided, we don't need to render anything
  if (!isVisible && !onReady) return null;

  return (
    <div 
      className={`welcome-video-overlay animate-reveal-in ${!isVisible ? 'preload-hidden' : ''}`}
      style={!isVisible ? { opacity: 0, pointerEvents: 'none', visibility: 'hidden' } : {}}
    >
      <div className="welcome-video-container">
        <video
          ref={videoRef}
          className="welcome-video-player"
          playsInline
          muted={isMuted}
          autoPlay
          src="/0427.mp4"
          onCanPlayThrough={() => onReady && onReady()}
          onEnded={() => setNeedsInteraction(true)}
        />

        {needsInteraction && (
          <div className="video-interaction-prompt" onClick={handleManualPlay}>
            <div className="play-icon-large">
              <Play size={40} fill="white" />
            </div>
            <span>Haga clic para reproducir con sonido</span>
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
            className="video-control-btn volume" 
            onClick={toggleMute}
            title={isMuted ? "Activar Sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
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
