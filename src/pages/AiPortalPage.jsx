import React from 'react';
import PageTransition from '../components/PageTransition';
import AiAssistant from '../components/AiAssistant';
import { Sparkles, Bot, Zap, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AiPortalPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE PORTAL INTELLIGENCE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Ask Gaurang's AI Copilot
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Query my operations telemetry, project architectures, or leadership background in real-time. Powered by a structured portfolio knowledge graph.
            </p>
          </div>

          {/* Dedicated AI Copilot Console */}
          <AiAssistant />

          {/* Quick Context Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-[#cb6d51] uppercase font-bold">150+ ACCOUNTS</span>
              <h4 className="text-sm font-bold font-heading text-white">CRM & Follow-up Telemetry</h4>
              <p className="text-xs text-zinc-400">
                Trained on real pipeline management data from HouseSeek.in internship.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-[#769e84] uppercase font-bold">50 / 50 HYBRID</span>
              <h4 className="text-sm font-bold font-heading text-white">Full-Stack × Operations</h4>
              <p className="text-xs text-zinc-400">
                Fluent in codebases (MERN/GraphQL) and executive business metrics.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-[#d9a045] uppercase font-bold">CHESS & BASKETBALL</span>
              <h4 className="text-sm font-bold font-heading text-white">High-Pressure Calculation</h4>
              <p className="text-xs text-zinc-400">
                National and District competitive sports mindset mapped to workplace leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
