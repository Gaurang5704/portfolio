import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function StudioNav({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position and detect background brightness for adaptive glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const elements = document.elementsFromPoint(window.innerWidth / 2, 50);
      if (elements && elements.length > 0) {
        const underlying = elements.find(
          (el) => !el.closest('#nav') && !el.closest('.mnav')
        );
        if (underlying) {
          const darkSection =
            underlying.closest('[data-theme="dark"]') ||
            underlying.closest('.contact') ||
            underlying.closest('.footer');
          setIsDark(Boolean(darkSection));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`nav ${isDark ? 'is-dark' : 'is-light'} ${scrolled ? 'is-scrolled' : ''}`} id="nav">
        {/* Brand with G monogram and split wordmark */}
        <div
          className="nav__brand"
          onClick={() => handleNavClick('#hero')}
          role="button"
          tabIndex={0}
        >
          <svg
            className="nav__mark"
            viewBox="0 0 320 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M280 45H90L35 100V200L90 255H235L285 205V140H160V185H235L215 210H105L80 185V115L105 90H260L280 45Z" />
          </svg>
          <span className="nav__name">
            gaurang<span>jadhav</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav__links" aria-label="Main Navigation">
          <button type="button" onClick={() => handleNavClick('#projets')}>
            Projects
          </button>
          <button type="button" onClick={() => handleNavClick('#profil')}>
            Profile
          </button>
          <button type="button" onClick={() => handleNavClick('#skills')}>
            Skills
          </button>
          <button type="button" onClick={() => handleNavClick('#methode')}>
            How I Work
          </button>
        </nav>

        {/* CTA with Pulsing Status Indicator */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="nav__cta"
            onClick={onContactClick || (() => handleNavClick('#contact'))}
          >
            <span className="nav__cta-dot" aria-hidden="true"></span>
            <span>Open to work</span>
          </button>

          {/* Hamburger Icon for Mobile */}
          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div className={`mnav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <p className="mnav__label">(Menu)</p>
        <nav className="mnav__links" aria-label="Mobile Navigation">
          <button type="button" onClick={() => handleNavClick('#projets')}>
            <i>01</i>Projects
          </button>
          <button type="button" onClick={() => handleNavClick('#profil')}>
            <i>02</i>Profile &amp; Metrics
          </button>
          <button type="button" onClick={() => handleNavClick('#skills')}>
            <i>03</i>Skills &amp; Impact
          </button>
          <button type="button" onClick={() => handleNavClick('#methode')}>
            <i>04</i>How I Work
          </button>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              if (onContactClick) onContactClick();
              else handleNavClick('#contact');
            }}
          >
            <i>05</i>Get In Touch
          </button>
        </nav>
        <div className="mnav__foot">
          <span>Gaurang Jadhav · Full-Stack &amp; Business Operations</span>
          <a href="mailto:gaurangjadhav53@gmail.com" className="text-white hover:underline">
            gaurangjadhav53@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
