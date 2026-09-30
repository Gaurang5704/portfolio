import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Scale,
} from 'lucide-react';
import { skillsData, dualFocusComparison } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0c0c0e]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#cb6d51] tracking-wider uppercase">
              04 // Skill Matrix
            </span>
            <div className="h-[1px] w-12 bg-[#cb6d51]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            High-Impact Competencies
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            A balanced 50/50 technical and managerial toolkit. Focused only on high-leverage skills verified through shipped products and operational outcomes.
          </p>
        </div>

        {/* 2-Column Balanced Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Business Operations & Management */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Operations & Management
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Accounts, CRM pipelines, and team alignment
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#cb6d51]/15 text-[#cb6d51] border border-[#cb6d51]/30">
                50% Focus
              </span>
            </div>

            <div className="space-y-3">
              {skillsData.management.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#cb6d51]/40 transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#cb6d51] bg-[#cb6d51]/10 px-2 py-0.5 rounded-full">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Technical & Systems Engineering */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#769e84]/15 text-[#769e84] border border-[#769e84]/30">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Technical & Systems Engineering
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Full-stack MERN, GraphQL, Python & APIs
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#769e84]/15 text-[#769e84] border border-[#769e84]/30">
                50% Focus
              </span>
            </div>

            <div className="space-y-3">
              {skillsData.technical.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#769e84]/40 transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#769e84] bg-[#769e84]/10 px-2 py-0.5 rounded-full">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dual Focus Synergy Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#cb6d51]" />
              <h4 className="font-heading font-semibold text-white text-base">
                Why this combination matters:
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Engineers often build without understanding client churn or P&L tradeoffs; managers often plan without understanding technical debt or API limits. I operate right at the intersection—building the exact systems operations teams need to scale.
            </p>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-[#cb6d51]/10 border border-[#cb6d51]/20 text-center shrink-0">
            <span className="text-2xl font-bold font-heading text-white">50 / 50</span>
            <span className="text-xs font-semibold text-[#cb6d51] block">Balanced Advantage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
