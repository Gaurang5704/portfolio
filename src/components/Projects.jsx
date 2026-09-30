import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  FileText,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Briefcase,
  Users,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Management Tool', label: 'Tech for Management' },
    { id: 'Business Pitch', label: 'Business-Pitched Project' },
    { id: 'Full Stack Tech', label: 'Full-Stack Systems' },
    { id: 'Team Leadership', label: 'Team Leadership' },
  ];

  const filtered = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter === false ? false : p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#cb6d51] tracking-wider uppercase">
                03 // Selected Work
              </span>
              <div className="h-[1px] w-12 bg-[#cb6d51]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Featured Projects & Pitches
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              From executive operations suites built for leadership, to investor-ready business pitch decks, and solo full-stack systems. Click any project to open detailed PRD specs and live links.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  filter === c.id
                    ? 'bg-[#cb6d51] text-white font-semibold shadow-sm shadow-[#cb6d51]/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectProject(project)}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all hover:bg-white/[0.03] flex flex-col justify-between cursor-pointer group shadow-sm"
            >
              <div className="space-y-5">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                      {project.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#769e84]">
                    {project.focus}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#cb6d51] transition-colors flex items-center justify-between">
                    <span>{project.title.split('—')[0]}</span>
                    <ArrowRight className="w-5 h-5 text-[#cb6d51] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-xs font-medium text-zinc-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  {project.keyMetrics.map((km, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-bold font-heading text-white">{km.value}</div>
                      <div className="text-[10px] text-zinc-400 truncate mt-0.5">{km.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Direct Link Buttons */}
              <div className="pt-6 border-t border-white/[0.06] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] text-zinc-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div
                  className="flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.links?.presentation && (
                    <a
                      href={project.links.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#769e84] border border-[#769e84]/30 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <span>Deck</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
