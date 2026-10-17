"use client";

import * as React from "react";

interface AntigravityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  enableGlow?: boolean;
}

export function AntigravityCard({
  children,
  className = "",
  maxTilt = 7,
  enableGlow = true,
  ...props
}: AntigravityCardProps) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [glowPos, setGlowPos] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = (x / rect.width - 0.5) * 2;
    const normalizedY = (y / rect.height - 0.5) * 2;

    setCoords({
      x: normalizedY * -maxTilt,
      y: normalizedX * maxTilt,
    });

    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {/* Specular Radial Light Reflection tracking cursor */}
      {enableGlow && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 240px at ${glowPos.x}% ${glowPos.y}%, rgba(217, 119, 69, 0.12), transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
