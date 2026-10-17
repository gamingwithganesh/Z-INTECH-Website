"use client";

import * as React from "react";

function subscribePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const finePointer = window.matchMedia("(pointer: fine)");
  finePointer.addEventListener("change", callback);
  return () => finePointer.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerPointerSnapshot() {
  return false;
}

export function AntigravityCursor() {
  const isFinePointer = React.useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);

  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const haloRef = React.useRef<HTMLDivElement | null>(null);

  const mousePos = React.useRef({ x: -100, y: -100 });
  const haloPos = React.useRef({ x: -100, y: -100 });
  const animFrameRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hovered interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select") ||
          target.closest("[data-cursor='hover']") ||
          target.closest(".interactive-card") ||
          target.closest(".media-frame-cinematic")
      );

      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    // Smooth Lerp loop for the trailing ambient halo
    const loop = () => {
      const { x: targetX, y: targetY } = mousePos.current;

      // Inner dot: instant tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Outer halo: smooth spring/lerp (easing factor 0.18)
      haloPos.current.x += (targetX - haloPos.current.x) * 0.18;
      haloPos.current.y += (targetY - haloPos.current.y) * 0.18;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. OUTER AMBIENT HALO (Smooth Lerp Floating Physics) */}
      <div
        ref={haloRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-200 ease-out will-change-transform ${
          isClicking
            ? "w-7 h-7 bg-[#D97745]/30 border border-[#D97745]/70 shadow-[0_0_20px_rgba(217,119,69,0.5)]"
            : isHovering
            ? "w-14 h-14 bg-[#D97745]/15 border border-[#D97745]/60 shadow-[0_0_30px_rgba(217,119,69,0.35)] backdrop-blur-[1px]"
            : "w-9 h-9 bg-[#D97745]/10 border border-[#D97745]/35 shadow-[0_0_15px_rgba(217,119,69,0.2)]"
        }`}
      />

      {/* 2. INNER CORE POINTER DOT (Sharp Immediate Feedback) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 will-change-transform ${
          isHovering
            ? "w-2.5 h-2.5 bg-[#F5F1E9] shadow-[0_0_8px_#D97745]"
            : "w-1.5 h-1.5 bg-[#D97745] shadow-[0_0_6px_#D97745]"
        }`}
      />
    </div>
  );
}
