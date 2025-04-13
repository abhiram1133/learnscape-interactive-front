
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

interface VideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
  poster?: string;
}

export function VideoPlayer({ src, title, className, poster }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / duration) * 100);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setMuted(newVolume === 0);
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      if (muted) {
        videoRef.current.volume = volume > 0 ? volume : 0.5;
        setVolume(videoRef.current.volume);
      } else {
        videoRef.current.volume = 0;
      }
      setMuted(!muted);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      const seekTime = (value[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(value[0]);
    }
  };
  
  const handleVideoClick = () => {
    togglePlay();
    setShowControls(true);
    resetControlsTimeout();
  };
  
  const handleMouseMove = () => {
    setShowControls(true);
    resetControlsTimeout();
  };
  
  const resetControlsTimeout = () => {
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
    
    if (playing) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };
  
  const handleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 15;
    }
  };
  
  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 15;
    }
  };
  
  return (
    <div 
      className={cn("relative group", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (playing) {
          resetControlsTimeout();
        }
      }}
    >
      <video
        ref={videoRef}
        onClick={handleVideoClick}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlaying(false)}
        className="w-full h-full rounded-lg"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 transition-opacity",
          showControls ? "opacity-100" : "opacity-0",
          playing ? "cursor-none" : ""
        )}
      >
        {title && (
          <div className="text-white text-sm font-medium mb-2 line-clamp-1">{title}</div>
        )}
        
        <div className="flex items-center mb-2">
          <Slider 
            value={[progress]} 
            onValueChange={handleSeek}
            className="flex-1 mr-2"
            max={100}
            step={0.01}
          />
          <div className="text-white text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={togglePlay} 
              className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button 
              onClick={skipBackward}
              className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white"
            >
              <SkipBack size={16} />
            </button>
            
            <button 
              onClick={skipForward}
              className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white"
            >
              <SkipForward size={16} />
            </button>
            
            <div className="flex items-center ml-1 relative group">
              <button 
                onClick={toggleMute}
                className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white"
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              
              <div className="absolute left-8 hidden group-hover:block w-24">
                <Slider 
                  value={[muted ? 0 : volume]}
                  onValueChange={handleVolumeChange}
                  max={1}
                  step={0.01}
                />
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleFullScreen}
            className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white"
          >
            <Maximize size={16} />
          </button>
        </div>
      </div>
      
      {!playing && !poster && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button 
            onClick={togglePlay}
            className="bg-brand-600 hover:bg-brand-700 rounded-full p-4 text-white"
          >
            <Play size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
