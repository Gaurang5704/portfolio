import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isCurtain, setIsCurtain] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= 100) {
        start = 100;
        setCount(100);
        clearInterval(interval);

        // Trigger curtain lift after monogram is filled (~2.6s)
        setTimeout(() => {
          setIsCurtain(true);
        }, 220);

        // Hide preloader fully (~3.0s total)
        setTimeout(() => {
          setIsHidden(true);
          if (onComplete) onComplete();
        }, 600);
      } else {
        setCount(start);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div className={`preloader ${isCurtain ? 'curtain-lift' : ''}`} aria-hidden="true">
      {/* Central Geometric G Monogram */}
      <svg
        className="preloader__logo"
        viewBox="0 0 320 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280 45H90L35 100V200L90 255H235L285 205V140H160V185H235L215 210H105L80 185V115L105 90H260L280 45Z" />
      </svg>

      {/* Infinite Horizontal Running Marquee */}
      <div className="preloader__marquee">
        <div className="preloader__track">
          <span>GAURANG JADHAV · TECH & OPERATIONS · PORTFOLIO 2026 · </span>
          <span>GAURANG JADHAV · TECH & OPERATIONS · PORTFOLIO 2026 · </span>
          <span>GAURANG JADHAV · TECH & OPERATIONS · PORTFOLIO 2026 · </span>
          <span>GAURANG JADHAV · TECH & OPERATIONS · PORTFOLIO 2026 · </span>
        </div>
      </div>

      {/* Numeric Percentage Counter */}
      <div className="preloader__counter">
        <span>{count}</span>
        <em>%</em>
      </div>

      {/* Curtain reveal overlay */}
      <div className="preloader__curtain"></div>
    </div>
  );
}
