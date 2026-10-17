"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Video } from "lucide-react";

export function HeroSection() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  // Typewriter state for "Stand apart." text animation
  const [standApartText, setStandApartText] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStandApartText("Stand apart.");
      return;
    }

    let isMounted = true;
    let timer: NodeJS.Timeout;

    const fullText = "Stand apart.";
    let idx = 0;
    let mode: "type" | "hold" | "del" | "wait" = "type";

    const step = () => {
      if (!isMounted) return;

      if (mode === "type") {
        if (idx < fullText.length) {
          idx++;
          setStandApartText(fullText.slice(0, idx));
          timer = setTimeout(step, 65 + Math.random() * 20);
        } else {
          mode = "hold";
          timer = setTimeout(step, 3800); // Hold for 3.8s for clean reading
        }
      } else if (mode === "hold") {
        mode = "del";
        timer = setTimeout(step, 35);
      } else if (mode === "del") {
        if (idx > 0) {
          idx--;
          setStandApartText(fullText.slice(0, idx));
          timer = setTimeout(step, 25);
        } else {
          mode = "wait";
          timer = setTimeout(step, 450);
        }
      } else if (mode === "wait") {
        mode = "type";
        timer = setTimeout(step, 120);
      }
    };

    timer = setTimeout(step, 250);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center bg-[#111110] text-[#F5F1E9] overflow-hidden pt-10 pb-16 sm:py-24 lg:py-28"
    >
      {/* 1. CINEMATIC BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-team-arch.jpg"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-[1.12] transition-opacity duration-1000 scale-105"
        >
          <source src="/videos/hero-collaboration.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Dark Editorial Overlays */}
        {/* Top shadow gradient for navbar separation */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#111110] via-[#111110]/80 to-transparent pointer-events-none" />

        {/* Radial ambient copper warm glow behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(217,119,69,0.14)_0%,transparent_70%)] pointer-events-none" />

        {/* Overall dark scrim to ensure perfect text contrast */}
        <div className="absolute inset-0 bg-[#111110]/60 pointer-events-none" />

        {/* Bottom vignette gradient transitioning into next section */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#111110] via-[#111110]/90 to-transparent pointer-events-none" />
      </div>

      {/* 2. FOREGROUND DOMINANT HERO EDITORIAL CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center justify-center my-auto">
        {/* Majestic Oversized Serif Headline: 'Build intelligently.' is static, 'Stand apart.' is animated */}
        <h1
          className="font-serif text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[-0.03em] text-[#F5F1E9] leading-[1.08] mb-5 sm:mb-8 font-normal select-none drop-shadow-md min-h-[2.16em] flex flex-col justify-center items-center"
          aria-label="Build intelligently. Stand apart."
        >
          <span className="min-h-[1.08em] inline-flex items-center justify-center">
            Build intelligently.
          </span>
          <span className="font-serif italic text-[#D97745] font-light min-h-[1.08em] inline-flex items-center justify-center">
            <span>{standApartText || "\u00A0"}</span>
            <span
              className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.8em] bg-[#D97745] ml-1 sm:ml-2 align-middle animate-pulse"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#A6A39C] max-w-2xl mx-auto leading-relaxed font-sans font-normal mb-8 sm:mb-10 text-balance drop-shadow px-2">
          AI, automation, and cloud solutions engineered to move your business forward.
        </p>

        {/* Action Buttons (Full width on mobile, inline on desktop) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12 max-w-xs sm:max-w-none">
          <Link
            href="/#contact"
            className="antigravity-levitate inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-[#D97745]/30 hover:shadow-[#D97745]/50 w-full sm:w-auto text-center"
          >
            <span className="text-white font-semibold">Let&apos;s build something</span>
            <ArrowRight className="w-4 h-4 shrink-0 text-white" />
          </Link>
          <Link
            href="/services"
            className="antigravity-levitate inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#161615]/75 hover:bg-[#161615]/90 border border-white/10 hover:border-white/20 text-[#F5F1E9] font-medium text-sm transition-all duration-200 backdrop-blur-xl shadow-lg shadow-black/40 w-full sm:w-auto text-center"
          >
            <span>Explore our capabilities</span>
          </Link>
        </div>
      </div>

      {/* 3. HERO BOTTOM TELEMETRY & ACCESSIBLE VIDEO CONTROLS */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 max-w-7xl mx-auto flex items-center justify-between text-xs text-[#78756F] z-20 pointer-events-auto">
        {/* Narrative / Context Label */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#A6A39C]">
          <Video className="w-3.5 h-3.5 text-[#D97745]" />
          <span>Engineering collaboration on system architecture &mdash; Nagpur &amp; Wardha Hubs</span>
        </div>

        {/* Accessible Play / Pause Background Video Control (Liquid Glass Pill) */}
        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161615]/75 hover:bg-[#161615]/95 border border-white/10 text-[#A6A39C] hover:text-[#F5F1E9] text-[11px] font-mono transition-colors backdrop-blur-xl cursor-pointer shadow-md shadow-black/30"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-[#D97745]" />
              <span>Pause Ambience</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#D97745]" />
              <span>Play Ambience</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
