import React from 'react';
import { motion } from 'framer-motion';

export default function StudioFooter({ onContactClick, onResumeClick }) {
  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer__grid"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brand Summary */}
        <div className="footer__brand">
          <svg
            className="footer__brand-logo"
            viewBox="0 0 320 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M280 45H90L35 100V200L90 255H235L285 205V140H160V185H235L215 210H105L80 185V115L105 90H260L280 45Z" />
          </svg>
          <p>
            Gaurang Jadhav.<br />
            Full-Stack Software Engineer &amp; Business Operations Specialist.
          </p>
        </div>

        {/* Menu Links */}
        <nav className="footer__col" aria-label="Footer Navigation">
          <p className="footer__col-title">Navigation</p>
          <button type="button" onClick={() => scrollTo('#projets')}>
            Featured Projects
          </button>
          <button type="button" onClick={() => scrollTo('#profil')}>
            Philosophy &amp; Stats
          </button>
          <button type="button" onClick={() => scrollTo('#skills')}>
            Skills &amp; Impact
          </button>
          <button type="button" onClick={() => scrollTo('#methode')}>
            How I Work
          </button>
          <button type="button" onClick={() => scrollTo('#contact')}>
            Get In Touch
          </button>
        </nav>

        {/* Networks / Links */}
        <nav className="footer__col" aria-label="Professional Networks">
          <p className="footer__col-title">Networks</p>
          <a
            href="https://www.linkedin.com/in/gaurang-jadhav-73683a2a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Gaurang5704"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <button
            type="button"
            className="text-left hover:underline text-[#ece9e2] opacity-80 hover:opacity-100 transition-opacity"
            onClick={onResumeClick || (() => window.open('/resume.pdf', '_blank'))}
          >
            View / Download Resume (PDF) ↗
          </button>
        </nav>

        {/* Contact info */}
        <div className="footer__col">
          <p className="footer__col-title">Direct Inquiries</p>
          <a href="mailto:gaurangjadhav53@gmail.com">gaurangjadhav53@gmail.com</a>
          <p>Mumbai, India</p>
          <p className="text-xs text-[#8d8a83] mt-1">
            Open to global remote &amp; on-site opportunities
          </p>
        </div>
      </motion.div>

      {/* Meta Bar */}
      <div className="footer__meta">
        <p>© 2026 Gaurang Jadhav · Personal Portfolio · 50% Tech &amp; 50% Management</p>
        <p>Engineered with architectural rigor &amp; execution precision</p>
      </div>

      {/* Giant studiors Wordmark with Geometric G Monogram */}
      <motion.div
        className="footer__wordmark"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          className="footer__logo"
          viewBox="0 0 320 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M280 45H90L35 100V200L90 255H235L285 205V140H160V185H235L215 210H105L80 185V115L105 90H260L280 45Z" />
        </svg>
        <span className="footer__giant">
          gaurang<em>jadhav</em>
        </span>
      </motion.div>
    </footer>
  );
}
