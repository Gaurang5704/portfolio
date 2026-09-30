import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Layers,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onContactClick }) {
  const stats = [
    { label: 'Monthly CRM Accounts', value: '150+', detail: 'Active partner relationships & follow-ups' },
    { label: 'Data Accuracy Gain', value: '+70%', detail: 'Backend verification & database schemas' },
    { label: 'Turnaround Reduction', value: '-30%', detail: 'Cross-team SLA & ticketing workflows' },
    { label: 'Role Positioning', value: '50 / 50', detail: 'Equal mastery: Engineering × Operations' },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#cb6d51]/20 via-[#ba5337]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#769e84]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-zinc-300 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#769e84] animate-pulse" />
          <span className="text-zinc-200 font-semibold">{personalData.status}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#cb6d51]" />
            {personalData.location}
          </span>
        </motion.div>

        {/* Main Title & Value Proposition */}
        <div className="space-y-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.08]">
              Gaurang Jadhav
              <span className="block text-2xl sm:text-4xl lg:text-4xl font-normal text-zinc-400 mt-3">
                Bridging Full-Stack Systems & Business Operations.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl"
          >
            {personalData.summary}
          </motion.p>
        </div>

        {/* Action Button Strip & Social Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] text-white font-semibold text-sm shadow-lg shadow-[#cb6d51]/25 hover:shadow-xl hover:shadow-[#cb6d51]/35 active:scale-95 transition-all"
          >
            <span>Explore Featured Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm active:scale-95 transition-all cursor-pointer backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-[#cb6d51]" />
            <span>Get in Touch</span>
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 sm:ml-4">
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Minimal Metric Cards Strip (Clean counters, NOT charts!) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10"
        >
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all hover:bg-white/[0.04]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {st.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300 mt-1">
                {st.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">
                {st.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
