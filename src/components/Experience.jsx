import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Database,
  Users,
  Zap,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0c0c0e]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#769e84] tracking-wider uppercase">
              02 // Track Record
            </span>
            <div className="h-[1px] w-12 bg-[#769e84]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Industry Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Real-estate technology platform experience driving operations, key accounts, and software coordination.
          </p>
        </div>

        {/* Experience Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-8 shadow-sm">
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold font-heading text-white">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
                  {exp.badge}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
                <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#cb6d51]" />
                  {exp.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-2xl font-bold font-heading text-[#cb6d51]">150+</div>
              <div className="text-xs font-medium text-zinc-300 mt-0.5">Monthly Accounts</div>
              <div className="text-[11px] text-zinc-500">Active CRM cadences</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-2xl font-bold font-heading text-[#769e84]">+70%</div>
              <div className="text-xs font-medium text-zinc-300 mt-0.5">Data Accuracy</div>
              <div className="text-[11px] text-zinc-500">Backend schema validation</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-2xl font-bold font-heading text-[#d9a045]">-30%</div>
              <div className="text-xs font-medium text-zinc-300 mt-0.5">Turnaround Time</div>
              <div className="text-[11px] text-zinc-500">Cross-team SLA speed</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-2xl font-bold font-heading text-white">3</div>
              <div className="text-xs font-medium text-zinc-300 mt-0.5">Campaigns Run</div>
              <div className="text-[11px] text-zinc-500">Marketing & partner outreach</div>
            </div>
          </div>

          {/* Bullet Points with Strong Impact */}
          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <h4 className="font-heading font-semibold text-white text-base">
              Core Responsibilities & Impact:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cb6d51] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">CRM & Key Account Management:</strong> Managed 150+ monthly client and partner relationships through CRM systems, sustaining active follow-ups, resolving inbound escalations, and maintaining structured communications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#769e84] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Technical Operations & Backend Support:</strong> Audited and updated internal database schemas and property verification pipelines, boosting data accuracy by 70% and removing manual entry errors.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9a045] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Workflow & SLA Optimization:</strong> Standardized daily reporting and cross-functional ticketing between sales, marketing, and software engineering, reducing operational turnaround time by 30%.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Bilingual Stakeholder Translation:</strong> Served as the key point of alignment between non-technical business leaders and tech engineers, translating business requirements into clear sprint specs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cb6d51] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Marketing Campaign Execution:</strong> Coordinated the end-to-end planning and rollout of 3 major digital marketing campaigns, tracking timelines, deliverables, and partner acquisition channels.
                </span>
              </li>
            </ul>
          </div>

          {/* Skill Badges */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400 mr-1">Skills Applied:</span>
            {exp.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
