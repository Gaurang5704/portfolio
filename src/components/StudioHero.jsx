import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StudioHero({ onSelectProjectById, onResumeClick }) {
  const canvasRef = useRef(null);

  // Subtle ambient particle grid matching the studio aesthetic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const dots = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.25 + 0.08,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 233, 226, ${dot.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" data-theme="dark">
      {/* Background Interactive Ambient Canvas */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Main Inner Grid */}
      <div className="hero__inner">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="sr-only">
            Gaurang Jadhav — Tech-cum-Management, Key Account Management &amp; Full-Stack Systems
          </span>
          <span className="hero__line hero__line--grotesk">GAURANG</span>
          <span className="hero__line hero__line--serif">Tech &amp; Operations</span>
        </motion.h1>

        <motion.div
          className="hero__aside"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero__desc">
            Software engineer and business operations specialist. With hands-on experience managing 150+ monthly client relationships through custom CRM pipelines and building full-stack web applications, I bring equal depth to technical architecture and commercial execution — transforming complex requirements into reliable, revenue-driving systems.
          </p>

          {/* Two CTA Action Buttons */}
          <div className="hero__actions">
            <button
              type="button"
              className="hero__btn hero__btn--primary"
              onClick={onResumeClick || (() => window.open('/resume.pdf', '_blank'))}
            >
              ↓ Download Resume
            </button>
            <button
              type="button"
              className="hero__btn hero__btn--ghost"
              onClick={() => handleScrollTo('#contact')}
            >
              Connect with me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee Ribbon matching studiors */}
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          <span>
            gaurang<span>jadhav</span> · 50% tech · 50% management · bizops &amp; systems · CRM pipelines ·
          </span>
          <span>
            gaurang<span>jadhav</span> · 50% tech · 50% management · bizops &amp; systems · CRM pipelines ·
          </span>
          <span>
            gaurang<span>jadhav</span> · 50% tech · 50% management · bizops &amp; systems · CRM pipelines ·
          </span>
        </div>
      </div>
    </section>
  );
}
