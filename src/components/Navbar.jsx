import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Mail,
  Sparkles,
  Bot,
  Layers,
  Zap,
  Briefcase,
  Trophy,
  GraduationCap,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', to: '/' },
    { label: 'AI Copilot', to: '/copilot', isSpecial: true },
    { label: 'Work', to: '/work' },
    { label: 'Skills Lab', to: '/skills' },
    { label: 'Experience', to: '/experience' },
    { label: 'Sports & Mindset', to: '/sports' },
    { label: 'Credentials', to: '/credentials' },
  ];

  return (
    <>
      {/* Floating Center Navbar (Matching AI portal & Craftfolio reference) */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0f0f12]/90 border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60'
              : 'bg-[#141416]/80 border-white/10 backdrop-blur-lg'
          }`}
        >
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group pl-1 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#cb6d51] via-[#ba5337] to-[#769e84] flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              GJ
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-sm tracking-tight text-white group-hover:text-[#cb6d51] transition-colors">
                Gaurang Jadhav
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-xs'
                      : link.isSpecial
                      ? 'text-[#cb6d51] hover:text-white hover:bg-[#cb6d51]/15 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.isSpecial && <Bot className="w-3.5 h-3.5 text-[#cb6d51]" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border border-white/15 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Available Pill & Connect */}
          <div className="flex items-center gap-2">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#769e84]/10 text-[#769e84] border border-[#769e84]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#769e84] animate-pulse" />
              50% Tech · 50% Mgmt
            </span>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] active:scale-95 text-white text-xs font-semibold shadow-md shadow-[#cb6d51]/20 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl bg-[#121214] border border-white/10 shadow-2xl backdrop-blur-2xl lg:hidden space-y-4"
          >
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#cb6d51] text-white font-bold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                    }`
                  }
                >
                  {link.isSpecial && <Bot className="w-3.5 h-3.5 text-[#cb6d51]" />}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#769e84] animate-pulse" />
                Open for Opportunities
              </span>
              <a
                href={`mailto:${personalData.email}`}
                className="text-[#cb6d51] font-medium"
              >
                {personalData.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
