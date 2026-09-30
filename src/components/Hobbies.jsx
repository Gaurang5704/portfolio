import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Trophy,
  Mountain,
  Sparkles,
  Quote,
  Target,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { hobbiesAndPersonality } from '../data/portfolioData';

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#cb6d51] tracking-wider uppercase">
              05 // Passions & Mindset
            </span>
            <div className="h-[1px] w-12 bg-[#cb6d51]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Beyond The Screen: Strategy, Court Vision & Grit
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Technical and operational leadership isn't just learned from documentation. Competing in high-stakes sports at National and District levels forged the strategic foresight, rapid verbal communication, and stamina that define how I work.
          </p>
        </div>

        {/* 3 Dedicated Hobbies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbiesAndPersonality.map((hobby) => {
            const isChess = hobby.id === 'chess';
            const isBasketball = hobby.id === 'basketball';
            const isFitness = hobby.id === 'outdoor-fitness';

            return (
              <motion.div
                key={hobby.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-sm group hover:bg-white/[0.03]"
              >
                <div className="space-y-4">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="p-3.5 rounded-2xl"
                      style={{
                        backgroundColor: `${hobby.accentColor}18`,
                        color: hobby.accentColor,
                      }}
                    >
                      {isChess && <Crown className="w-6 h-6" />}
                      {isBasketball && <Trophy className="w-6 h-6" />}
                      {isFitness && <Mountain className="w-6 h-6" />}
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/[0.03] text-zinc-300 border border-white/[0.08]">
                      {hobby.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-[11px] font-mono text-[#cb6d51] uppercase tracking-wider block">
                      {hobby.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white mt-1 group-hover:text-[#cb6d51] transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mt-0.5">
                      {hobby.subtitle}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs italic text-zinc-300 leading-relaxed">
                    <Quote className="w-3 h-3 text-[#cb6d51] mb-1 opacity-80" />
                    "{hobby.quote}"
                  </div>

                  {/* Story */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {hobby.story}
                  </p>
                </div>

                {/* Workplace Parallel & Fast Facts */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                    <span className="font-semibold text-white block mb-1">Workplace Application:</span>
                    <span className="text-zinc-400 leading-relaxed">
                      {hobby.managementTakeaway}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    {hobby.stats.map((st, sIdx) => (
                      <div key={sIdx} className="p-2 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                        <div className="text-[10px] text-zinc-500 truncate">{st.label}</div>
                        <div className="text-xs font-bold text-white truncate mt-0.5">{st.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Quote Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-white/[0.03] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-bold font-heading text-white">
              "Disciplined Preparation, Calm Under Pressure, Rapid Team Execution"
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Whether defending a buzzer-beater transition on the basketball court, resolving a high-stakes client SLA escalation, or debugging an asynchronous database race condition, I bring high ownership and composure to the team.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-4 py-2 rounded-full text-xs font-semibold bg-[#769e84]/15 text-[#769e84] border border-[#769e84]/30">
              National & District Competitor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
