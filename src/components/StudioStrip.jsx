import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function StudioStrip({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const index = Math.min(
      projectsData.length,
      Math.max(1, Math.round(scrollLeft / 360) + 1)
    );
    setActiveIndex(index);
  };

  return (
    <section className="strip" id="projets" aria-labelledby="stripTitle">
      <motion.header
        className="strip__head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="strip__eyebrow">
          <span>02</span>
          <span>Selected Projects</span>
        </p>

        <h2 className="strip__title" id="stripTitle">
          <span>Featured</span>
          <em>Work.</em>
        </h2>

        <div className="strip__intro">
          <p>
            A curated selection of full-stack platforms and operational systems built from architecture to production code.
          </p>
          <span aria-hidden="true">↘</span>
        </div>
      </motion.header>

      {/* Horizontal Viewport */}
      <motion.div
        className="strip__viewport"
        ref={scrollRef}
        onScroll={handleScroll}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="strip__rail" aria-label="4 featured projects">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="strip-card"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectProject(project);
              }}
            >
              <div className="strip-card__float">
                <figure className="strip-card__media">
                  {/* Project Demo Placeholder Poster Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="project-visual w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#1a1a18] via-[#121211] to-[#0a0a09] border-b border-black/10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/90">
                          {project.category}
                        </span>
                        <span className="text-xs font-serif italic text-white/50">
                          {project.year || '2026'}
                        </span>
                      </div>

                      <div className="my-auto py-4">
                        <p className="text-xs text-white/60 font-mono mb-1">
                          {project.roleFocus}
                        </p>
                        <h4 className="text-2xl font-grotesk font-bold text-white tracking-tight leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-xs text-white/70 line-clamp-2 mt-2 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div className="flex gap-1.5">
                          {project.techStack?.slice(0, 3).map((t, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Pill Button */}
                  <span className="strip-card__open">
                    View Project <ArrowUpRight size={13} className="inline ml-0.5" />
                  </span>
                </figure>

                {/* Card Meta Bar */}
                <div className="strip-card__meta">
                  <p>
                    <span>0{idx + 1}</span> {project.title}
                  </p>
                  <p>{project.type || 'Tech & Ops'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Progress Counter */}
      <p className="strip__progress" aria-hidden="true">
        <span>0{activeIndex}</span>
        <span>/</span>
        <span>0{projectsData.length}</span>
      </p>

      {/* Foot Bar */}
      <footer className="strip__foot">
        <p>Featured Selection · 04 Projects</p>
        <div className="works__more">
          <button
            type="button"
            onClick={() => onSelectProject(projectsData[0])}
            className="hover:underline font-grotesk font-bold"
          >
            Explore All PRD Specifications <sup>(04)</sup>
          </button>
        </div>
      </footer>
    </section>
  );
}
