import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import './WelcomeVideo.css';

interface WelcomeVideoProps {
  isVisible: boolean;
  isActive: boolean;
  onClose: () => void;
  onReady?: () => void;
}

const WelcomeVideo: React.FC<WelcomeVideoProps> = ({ isVisible, isActive, onClose, onReady }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Buffer optimization: Pre-fetch video file
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch('/0427.mp4');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoBlobUrl(url);
        if (onReady) onReady();
      } catch (error) {
        console.error("Video buffering failed, falling back to direct source", error);
        setVideoBlobUrl('/0427.mp4');
        if (onReady) onReady();
      }
    };

    fetchVideo();
    return () => {
      if (videoBlobUrl) URL.revokeObjectURL(videoBlobUrl);
    };
  }, []);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.volume = 0.6;
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Autoplay unmuted failed, playing muted as fallback:", error);
            videoRef.current!.muted = true;
            setIsMuted(true);
            videoRef.current!.play().catch(e => console.error("Video blocked completely:", e));
          });
        }
      }, 150);

      // 2026 Strategy: Unlock audio on any global interaction
      const unlockAudio = () => {
        if (videoRef.current && videoRef.current.muted) {
          videoRef.current.muted = false;
          setIsMuted(false);
          // Force play again just in case
          videoRef.current.play().catch(() => {});
          
          // Cleanup listeners after first interaction
          window.removeEventListener('click', unlockAudio);
          window.removeEventListener('touchstart', unlockAudio);
          window.removeEventListener('scroll', unlockAudio);
        }
      };

      window.addEventListener('click', unlockAudio);
      window.addEventListener('touchstart', unlockAudio);
      window.addEventListener('scroll', unlockAudio);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
        window.removeEventListener('scroll', unlockAudio);
      };
    }
  }, [isActive]);

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
        {videoBlobUrl ? (
          <video
            ref={videoRef}
            className="welcome-video-player"
            playsInline
            muted={isMuted}
            autoPlay
            preload="auto"
            src={videoBlobUrl}
            onEnded={handleClose}
          />
        ) : (
          <div className="video-loading-placeholder">
            <div className="ma-spinner"></div>
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
