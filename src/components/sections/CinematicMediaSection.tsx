"use client";

import * as React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

export function CinematicMediaSection() {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [isMuted, setIsMuted] = React.useState<boolean>(true);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="case-studies"
      className="bg-[#111110] text-[#F5F1E9] py-16 sm:py-24 border-t border-[#262523] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==========================================================
            Header: Clean, Neat & Authoritative
           ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1A] border border-[#2B2A27] text-[11px] font-mono tracking-[0.2em] uppercase text-[#D97745] mb-4">
              <Sparkles className="w-3 h-3 text-[#D97745]" />
              ENGINEERING INFRASTRUCTURE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#F5F1E9] leading-[1.08]">
              Built for developers <br />
              for the agent-first era
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#A6A39C] leading-relaxed">
              Z INTECH is engineered for production certainty &mdash; from resilient AWS multi-AZ cloud deployments to zero-retention autonomous agent orchestration.
            </p>
          </div>
        </div>

        {/* ==========================================================
            100% Full-Width Cinematic Screen (Neat & Clean)
           ========================================================== */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] min-h-[220px] sm:min-h-[400px] lg:min-h-[580px] w-full rounded-[20px] sm:rounded-[36px] overflow-hidden bg-[#181716] border border-[#2B2A27] shadow-2xl group">
          {/* Autoplay Video Stream */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src="/videos/hero-meeting-screen.mp4"
              autoPlay
              playsInline
              loop
              muted={isMuted}
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
            />
            {/* Cinematic Scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Center Resume Play Button: Appears only when video is paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Resume playback"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/70 hover:bg-[#D97745] text-white hover:text-white border border-white/20 hover:border-[#D97745] backdrop-blur-md flex items-center justify-center shadow-2xl scale-100 hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer group/btn"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 transition-transform group-hover/btn:scale-105" />
              </button>
            </div>
          )}

          {/* Bottom Floating Controls Bar (Minimal & Clean: Play/Pause, Mute/Unmute) */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-10 z-10 flex items-center pointer-events-auto">
            <div className="flex items-center gap-2 bg-[#161615]/75 backdrop-blur-xl p-1.5 rounded-full border border-white/15 text-xs font-mono text-[#F5F1E9] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-full hover:bg-white/10 hover:text-[#D97745] transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause playback" : "Start playback"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-full hover:bg-white/10 hover:text-[#D97745] transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
