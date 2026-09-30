import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Briefcase,
  Sparkles,
  Zap,
  Target,
  Users2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-[#cb6d51]" />,
      title: 'Technical Depth',
      desc: 'Full-stack MERN, GraphQL, Python, and cloud infrastructure. Able to review code, design schemas, and build working tools from scratch.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#769e84]" />,
      title: 'Operational Rigor',
      desc: 'Hands-on in managing 150+ monthly CRM accounts, SLA escalation matrices, and cross-functional workflows between sales and engineering.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#d9a045]" />,
      title: 'Bilingual Leadership',
      desc: 'Speaks fluently with developers about API latency and with executives about client retention, CAC, and operational turnaround.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#cb6d51] tracking-wider uppercase">
              01 // Profile & Philosophy
            </span>
            <div className="h-[1px] w-12 bg-[#cb6d51]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Engineering Precision Meets Operational Leadership.
          </h2>
        </div>

        {/* Narrative & Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Story */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base leading-relaxed">
            <p>
              I am a Computer Science student at <strong className="text-white font-semibold">ITM Skills University</strong> who realized early on that software doesn't succeed on code alone. It succeeds when engineering velocity directly aligns with client needs, operational pipelines, and business accountability.
            </p>
            <p>
              During my internship at <strong className="text-white font-semibold">HouseSeek.in (Future Real Estate)</strong>, I operated as the primary liaison between sales, marketing, and the tech team. I managed over <strong className="text-white font-semibold">150+ monthly client relationships</strong> through CRM systems while simultaneously diagnosing backend data bottlenecks—ultimately improving data accuracy by <strong className="text-[#769e84] font-semibold">70%</strong> and reducing turnaround time by <strong className="text-[#cb6d51] font-semibold">30%</strong>.
            </p>
            <p>
              Whether architecting a full-stack clinical platform like <span className="text-white font-medium">Practo Care</span>, designing an executive SLA monitoring tool like <span className="text-white font-medium">OpsPulse AI</span>, or pitching a venture business model like <span className="text-white font-medium">PropScale B2B</span>, I operate with an uncompromising standard for both system quality and human collaboration.
            </p>

            {/* Core Tenets Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#769e84] shrink-0" />
                <span>50% Tech · 50% Management</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#769e84] shrink-0" />
                <span>High-Fidelity CRM & Pipelines</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#769e84] shrink-0" />
                <span>National Chess Strategist</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#769e84] shrink-0" />
                <span>District Basketball Competitor</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all hover:bg-white/[0.04] space-y-2.5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#cb6d51]/10 to-transparent border border-[#cb6d51]/20 flex items-center justify-between">
              <div className="text-xs">
                <span className="font-semibold text-white block">Ready for Cross-Functional Impact</span>
                <span className="text-zinc-400">Targeting Product Ops, TPM & BizOps roles</span>
              </div>
              <a
                href="#hobbies"
                className="text-xs font-semibold text-[#cb6d51] hover:underline flex items-center gap-1"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
