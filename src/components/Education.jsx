import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react';
import { educationData, certificationsData, volunteeringData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0c0c0e]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#769e84] tracking-wider uppercase">
              06 // Credentials
            </span>
            <div className="h-[1px] w-12 bg-[#769e84]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Computer science academic foundation paired with verified certifications in algorithms, data modeling, and AI productivity tools.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#cb6d51]" />
              Academic History
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-4 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h4 className="text-xl font-bold font-heading text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-semibold text-[#cb6d51] mt-0.5">
                        {edu.degree} — {edu.major}
                      </p>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-zinc-400">
                    {edu.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#769e84] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Volunteering Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#769e84]" />
                <h4 className="text-sm font-bold font-heading text-white">
                  Leadership & Community
                </h4>
              </div>
              {volunteeringData.map((vol, vIdx) => (
                <div key={vIdx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>{vol.role} — {vol.event}</span>
                    <span className="text-zinc-500 font-mono">{vol.duration}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#769e84]" />
              Verified Certifications
            </h3>

            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold font-heading text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#cb6d51]">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-zinc-500 text-[11px]">Domain: {cert.category}</span>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#cb6d51] hover:underline font-semibold flex items-center gap-1 text-[11px]"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
