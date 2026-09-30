import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  FileText,
  Layers,
  Cpu,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Maximize2,
  Calendar,
  Users,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose, onSelectProject, allProjects }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'tech' | 'management'
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#121214] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto space-y-6 max-h-[88vh] flex flex-col"
      >
        {/* Top Header */}
        <div className="p-6 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#cb6d51]/15 text-[#cb6d51] border border-[#cb6d51]/30">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
              {project.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
            >
              ← Prev
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
            >
              Next →
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 pb-6 overflow-y-auto space-y-6 flex-1">
          {/* Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-zinc-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Poster Screenshot Preview */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[16/9] max-h-80 w-full shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono mr-2">
              Action Links:
            </span>

            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] text-white text-xs font-semibold transition-all shadow-md shadow-[#cb6d51]/20 cursor-pointer"
              >
                <span>{project.links.demoLabel || 'Open Live App'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.presentation && (
              <a
                href={project.links.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#769e84]/15 hover:bg-[#769e84]/25 text-[#769e84] border border-[#769e84]/30 text-xs font-semibold transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{project.links.presentationLabel || 'View Pitch Deck / PRD'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{project.links.githubLabel || 'GitHub Repository'}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            <button
              onClick={() => handleCopy(project.links?.demo || window.location.href)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-400 hover:text-white transition-all cursor-pointer ml-auto"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#769e84]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.keyMetrics.map((km, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
              >
                <div className="text-xl font-bold font-heading text-[#cb6d51]">{km.value}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{km.label}</div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-white/10 text-xs font-semibold gap-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-[#cb6d51] text-white font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Executive Summary & Pitch
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'tech'
                  ? 'border-[#cb6d51] text-white font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Technical Architecture
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'management'
                  ? 'border-[#cb6d51] text-white font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Management & Stakeholder Value
            </button>
          </div>

          {/* Tab 1: Overview & Pitch */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-[#cb6d51]">
                  The Core Problem & Business Proposition
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.businessPitch}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-400">
                  Comprehensive Overview
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Technical Architecture */}
          {activeTab === 'tech' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-[#769e84]">
                  Architecture & Data Flow
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.techArchitecture}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-400">
                  Technical Specifications
                </span>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {project.technicalFeatures?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#769e84] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Management Value */}
          {activeTab === 'management' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-[#cb6d51]">
                  Executive & Operations Value
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.managementValue}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-400">
                  Management Features & Workflows
                </span>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {project.managementFeatures?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#cb6d51] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400 font-mono mr-2">Technologies:</span>
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
