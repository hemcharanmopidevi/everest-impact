"use client";

import React, { useEffect, useRef } from "react";

// Google Brand Colors
const GOOGLE_COLORS = [
  "#4285F4", // Google Blue
  "#EA4335", // Google Red
  "#FBBC05", // Google Yellow
  "#34A853", // Google Green
];

interface Particle {
  x: number;
  y: number;
  baseVx: number;
  baseVy: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  type: "dot" | "ring";
  angle: number;
  angleSpeed: number;
  floatAmplitude: number;
  mass: number;
}

export function AntigravityParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Mouse tracking relative to container
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
      radius: 130, // Influence radius
    };

    // Helper: resize canvas with HiDPI support
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      if (width === 0 || height === 0) return;

      // Density: ~1 particle per 18,000 px², bounded between 35 and 65 for optimal performance
      const count = Math.min(Math.max(Math.floor((width * height) / 18000), 35), 65);
      particles = [];

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2.2 + 2.0; // 2.0px to 4.2px
        const color = GOOGLE_COLORS[i % GOOGLE_COLORS.length];
        const isRing = Math.random() < 0.22; // ~22% are elegant hollow rings
        const speed = Math.random() * 0.35 + 0.15;
        const angle = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseVx: Math.cos(angle) * speed,
          baseVy: (Math.sin(angle) * speed) - 0.12, // Slight natural antigravity upward bias
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.12,
          radius,
          color,
          alpha: Math.random() * 0.3 + 0.65, // 0.65 to 0.95
          type: isRing ? "ring" : "dot",
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          floatAmplitude: Math.random() * 0.4 + 0.2,
          mass: radius * 1.2,
        });
      }
    };

    // Mouse listeners on container
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isHovering = true;
      }
    };

    const onTouchEnd = () => {
      mouse.isHovering = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    // Optional click ripple impulse
    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 0) {
          const force = (1 - dist / 180) * 4.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("click", onClick, { passive: true });

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    handleResize();

    // Intersection observer: pause animation when hero is off-screen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    // Animation Loop
    const render = () => {
      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse interpolation
        if (mouse.isHovering) {
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        } else {
          mouse.x = -1000;
          mouse.y = -1000;
        }

        // Draw and update each particle
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // 1. Natural antigravity buoyancy wobble
          p.angle += p.angleSpeed;
          const wobbleX = Math.cos(p.angle) * p.floatAmplitude * 0.25;
          const wobbleY = Math.sin(p.angle) * p.floatAmplitude * 0.25;

          // 2. Interactive mouse repulsion physics
          if (mouse.isHovering) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0) {
              // Smooth inverse quadratic push force
              const forceFactor = (1 - dist / mouse.radius);
              const pushStrength = (forceFactor * forceFactor * 2.8) / p.mass;

              p.vx += (dx / dist) * pushStrength;
              p.vy += (dy / dist) * pushStrength;
            }
          }

          // 3. Velocity damping towards baseline drift (soft friction)
          p.vx = p.vx * 0.96 + p.baseVx * 0.04;
          p.vy = p.vy * 0.96 + p.baseVy * 0.04;

          // 4. Update position
          p.x += p.vx + wobbleX;
          p.y += p.vy + wobbleY;

          // 5. Wrap around boundaries smoothly with margin
          const margin = p.radius * 3 + 10;
          if (p.x < -margin) p.x = width + margin;
          else if (p.x > width + margin) p.x = -margin;

          if (p.y < -margin) p.y = height + margin;
          else if (p.y > height + margin) p.y = -margin;

          // 6. Render particle
          ctx.save();
          ctx.globalAlpha = p.alpha;

          if (p.type === "ring") {
            // Elegant hollow ring
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Crisp solid dot with subtle luminous ambient glow
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            // Very subtle outer glow halo for Google Antigravity aesthetic
            ctx.globalAlpha = p.alpha * 0.22;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}
