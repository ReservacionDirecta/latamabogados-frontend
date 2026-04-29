import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, Volume2, VolumeX, Play } from 'lucide-react';
import './WelcomeVideo.css';

interface WelcomeVideoProps {
  isVisible: boolean;
  isActive: boolean;
  onClose: () => void;
  onReady?: () => void;
}

const WelcomeVideo: React.FC<WelcomeVideoProps> = ({ isVisible, isActive, onClose, onReady }) => {
  const [isMuted, setIsMuted] = useState(true); // start muted for autoplay policy
  const [isBuffering, setIsBuffering] = useState(true);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Signal ready as soon as component mounts — no pre-fetch blocking
  useEffect(() => {
    if (onReady) onReady();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsBuffering(false);
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isActive) return;

    video.currentTime = 0;
    video.muted = true; // Always start muted to pass mobile autoplay policies
    setIsMuted(true);
    setNeedsInteraction(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playing successfully — try to unmute after brief delay
          setTimeout(() => {
            if (video) {
              video.muted = false;
              setIsMuted(false);
            }
          }, 300);
        })
        .catch(() => {
          // Mobile blocked even muted play — show tap-to-play overlay
          setNeedsInteraction(true);
        });
    }
  }, [isActive]);

  const handleTapToPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
    setNeedsInteraction(false);
    video.play().catch(() => {
      // Still blocked: play muted
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });
  };

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
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div
      className={`welcome-video-overlay animate-reveal-in ${!isVisible ? 'preload-hidden' : ''}`}
      style={!isVisible ? { opacity: 0, pointerEvents: 'none', visibility: 'hidden' } : {}}
    >
      <div className="welcome-video-container">
        {/* Native streaming — no blob fetch, browser handles adaptive buffering */}
        <video
          ref={videoRef}
          className="welcome-video-player"
          playsInline          // Required for iOS inline playback
          muted={isMuted}
          preload="metadata"   // Load only metadata first; streaming starts on play()
          src="/0427.mp4"
          onEnded={handleClose}
          webkit-playsinline="true" // Legacy iOS Safari support
        />

        {/* Buffering spinner overlay */}
        {isBuffering && isActive && !needsInteraction && (
          <div className="video-buffering-overlay">
            <div className="ma-spinner" />
          </div>
        )}

        {/* Tap-to-play overlay for blocked mobile autoplay */}
        {needsInteraction && (
          <div className="video-interaction-prompt" onClick={handleTapToPlay}>
            <div className="play-icon-large">
              <Play size={32} color="white" fill="white" />
            </div>
            <p style={{ color: 'white', fontSize: '14px', marginTop: '12px', letterSpacing: '1px' }}>
              TAP PARA REPRODUCIR
            </p>
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
