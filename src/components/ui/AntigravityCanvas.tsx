"use client";

import * as React from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  pulsePhase: number;
  mass: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  alpha: number;
}

interface AntigravityCanvasProps {
  className?: string;
  particleCount?: number;
  connectDistance?: number;
  repelRadius?: number;
  repelStrength?: number;
  interactive?: boolean;
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function AntigravityCanvas({
  className = "",
  particleCount = 70,
  connectDistance = 100,
  repelRadius = 160,
  repelStrength = 2.8,
  interactive = true,
  containerRef,
}: AntigravityCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const shockwavesRef = React.useRef<Shockwave[]>([]);
  const mouseRef = React.useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    active: boolean;
  }>({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    active: false,
  });

  const animFrameRef = React.useRef<number | null>(null);

  // Palette matching Z INTECH: Copper, Amber, Warm White, Subtle Cyan Accent
  const palette = React.useMemo(
    () => [
      { color: "rgba(217, 119, 69, ", glow: "rgba(217, 119, 69, 0.4)" }, // Copper Primary
      { color: "rgba(245, 158, 11, ", glow: "rgba(245, 158, 11, 0.35)" }, // Amber Warmth
      { color: "rgba(245, 241, 233, ", glow: "rgba(245, 241, 233, 0.25)" }, // Editorial Cream
      { color: "rgba(56, 189, 248, ", glow: "rgba(56, 189, 248, 0.3)" }, // Neural Cyan Accent
    ],
    []
  );

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Re-initialize particles if empty or bounds changed significantly
      if (particlesRef.current.length === 0) {
        initParticles(width, height);
      } else {
        // Adjust existing particles within new bounds
        particlesRef.current.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = Math.random() * height;
        });
      }
    };

    const initParticles = (w: number, h: number) => {
      const count = window.innerWidth < 768 ? Math.floor(particleCount * 0.5) : particleCount;
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const colDef = palette[Math.floor(Math.random() * palette.length)];
        const baseRadius = Math.random() * 2.2 + 1.0;
        const baseAlpha = Math.random() * 0.5 + 0.25;
        // Zero-G upward float: particles slowly drift upwards (antigravity)
        const baseVy = -(Math.random() * 0.35 + 0.15);
        const baseVx = (Math.random() - 0.5) * 0.3;

        newParticles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          radius: baseRadius,
          baseRadius,
          alpha: baseAlpha,
          baseAlpha,
          color: colDef.color,
          glowColor: colDef.glow,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulsePhase: Math.random() * Math.PI * 2,
          mass: Math.random() * 1.5 + 0.8,
        });
      }

      particlesRef.current = newParticles;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Pointer event listeners (applied to target element or container)
    const targetElement = containerRef?.current || canvas.parentElement || canvas;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      if (
        clientX >= 0 &&
        clientX <= rect.width &&
        clientY >= 0 &&
        clientY <= rect.height
      ) {
        const mouse = mouseRef.current;
        if (!mouse.active) {
          mouse.prevX = clientX;
          mouse.prevY = clientY;
        }
        mouse.vx = (clientX - mouse.prevX) * 0.5;
        mouse.vy = (clientY - mouse.prevY) * 0.5;
        mouse.prevX = clientX;
        mouse.prevY = clientY;
        mouse.x = clientX;
        mouse.y = clientY;
        mouse.active = true;
      } else {
        mouseRef.current.active = false;
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      if (
        clientX >= 0 &&
        clientX <= rect.width &&
        clientY >= 0 &&
        clientY <= rect.height
      ) {
        // Trigger Antigravity Shockwave pulse
        shockwavesRef.current.push({
          x: clientX,
          y: clientY,
          radius: 10,
          maxRadius: Math.min(width, height) * 0.45,
          strength: 7.5,
          alpha: 0.8,
        });
      }
    };

    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      targetElement.addEventListener("pointerdown", handlePointerDown as EventListener, {
        passive: true,
      });
      targetElement.addEventListener("pointerleave", handlePointerLeave as EventListener, {
        passive: true,
      });
    }

    // Animation Loop with zero-G Antigravity Physics
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const shockwaves = shockwavesRef.current;

      // 1. UPDATE AND DRAW SHOCKWAVES
      for (let sIdx = shockwaves.length - 1; sIdx >= 0; sIdx--) {
        const sw = shockwaves[sIdx];
        sw.radius += 320 * dt;
        sw.alpha -= 0.9 * dt;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(sIdx, 1);
          continue;
        }

        // Draw delicate glowing shockwave wave front
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(217, 119, 69, ${sw.alpha * 0.45})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(245, 158, 11, ${sw.alpha * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 2. UPDATE PARTICLES PHYSICS
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse phase
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha =
          p.baseAlpha + Math.sin(p.pulsePhase) * (p.baseAlpha * 0.4);

        if (!prefersReducedMotion) {
          // Antigravity upward drift
          p.x += p.vx;
          p.y += p.vy;

          // Drag / damping toward base drift
          p.vx += (p.baseVx - p.vx) * 0.03;
          p.vy += (p.baseVy - p.vy) * 0.03;

          // Mouse Repulsion & Swirl Dynamics
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repelRadius && dist > 1) {
              const normalX = dx / dist;
              const normalY = dy / dist;
              const force = (1 - dist / repelRadius) * repelStrength * (1.8 / p.mass);

              // Radial push
              p.vx += normalX * force;
              p.vy += normalY * force;

              // Tangential swirl component based on mouse speed
              const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
              if (speed > 1) {
                const tangentX = -normalY;
                const tangentY = normalX;
                const swirlForce = Math.min(speed * 0.15, 2.5);
                p.vx += tangentX * swirlForce;
                p.vy += tangentY * swirlForce;
              }
            }
          }

          // Shockwave interaction
          for (let s = 0; s < shockwaves.length; s++) {
            const sw = shockwaves[s];
            const dx = p.x - sw.x;
            const dy = p.y - sw.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const waveDelta = Math.abs(dist - sw.radius);

            if (waveDelta < 30 && dist > 1) {
              const push = (1 - waveDelta / 30) * sw.strength * sw.alpha;
              p.vx += (dx / dist) * push;
              p.vy += (dy / dist) * push;
            }
          }

          // Screen wrap-around for infinite weightless floating
          if (p.y < -20) {
            p.y = height + 20;
            p.x = Math.random() * width;
          } else if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }

          if (p.x < -20) {
            p.x = width + 20;
          } else if (p.x > width + 20) {
            p.x = -20;
          }
        }

        // DRAW PARTICLE GLOW
        const currentRadius = p.baseRadius * (1 + Math.sin(p.pulsePhase) * 0.2);

        // Ambient radial glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          currentRadius * 3.5
        );
        gradient.addColorStop(0, `${p.color}${currentAlpha})`);
        gradient.addColorStop(0.4, `${p.color}${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `${p.color}0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core bright center
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 0.85, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(currentAlpha * 1.5, 1)})`;
        ctx.fill();
      }

      // 3. DRAW SYNAPTIC CONSTELLATION CONNECTION LINES
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = connectDistance * connectDistance;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / connectDistance) * 0.18;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(217, 119, 69, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // 4. DRAW DELICATE CURSOR MAGNETIC TETHER (if near particles)
      if (mouse.active && !prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repelRadius * 0.75) {
            const tetherAlpha = (1 - dist / (repelRadius * 0.75)) * 0.22;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${tetherAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener("pointermove", handlePointerMove);
        targetElement.removeEventListener("pointerdown", handlePointerDown as EventListener);
        targetElement.removeEventListener("pointerleave", handlePointerLeave as EventListener);
      }
    };
  }, [
    particleCount,
    connectDistance,
    repelRadius,
    repelStrength,
    interactive,
    palette,
    containerRef,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-[5] ${className}`}
      style={{
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}
