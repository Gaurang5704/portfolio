import React from 'react';
import PageTransition from '../components/PageTransition';
import SkillsLab from '../components/SkillsLab';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#cb6d51] tracking-wider uppercase">
                COMPETENCY SUITE
              </span>
              <div className="h-[1px] w-12 bg-[#cb6d51]/40" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Interactive Skills Lab & Matrix
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Experience on-the-spot simulations of my operational automations and software engineering pipelines, paired with the curated 50/50 competency breakdown.
            </p>
          </div>

          {/* Interactive Live Simulator */}
          <SkillsLab />

          {/* Structured Curated Matrix */}
          <Skills />
        </div>
      </div>
    </PageTransition>
  );
}
