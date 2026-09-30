import React, { useState } from 'react';
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
  Compass,
  Play,
  RotateCcw,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function SportsPage() {
  const [activeChessTactic, setActiveChessTactic] = useState(0);
  const [activeBasketballPlay, setActiveBasketballPlay] = useState(0);

  const chessTactics = [
    {
      concept: 'Prophylaxis & 10-Step Foresight',
      chessAnalogy: 'Stopping the opponent’s aggressive pawn break before they even see the opportunity.',
      workplaceParallel: 'Anticipating client churn 3 months before renewal by monitoring low CRM login velocity and feature drop-offs.',
      rule: 'Never react to emergencies that you could have prevented five moves ago.',
    },
    {
      concept: 'Positional Trade-offs & Material Balance',
      chessAnalogy: 'Sacrificing an exchange (Rook for Bishop) to dominate the dark squares and control open files.',
      workplaceParallel: 'Trading short-term feature velocity to build robust backend verification scripts—yielding +70% data accuracy long-term.',
      rule: 'Tactics flow from a superior position; build resilient foundational infrastructure first.',
    },
    {
      concept: 'Endgame Conversion Under Clock Pressure',
      chessAnalogy: 'Converting a subtle one-pawn endgame advantage with only 30 seconds on the digital clock.',
      workplaceParallel: 'Staying emotionally composed during critical deployment rollbacks or high-stakes SLA contract negotiations.',
      rule: 'Panic is a choice; disciplined calculation under pressure wins the game.',
    },
  ];

  const basketballPlays = [
    {
      play: 'Point Guard Court Vision & Floor Spacing',
      courtAnalogy: 'Reading off-ball defender hips in 100 milliseconds to find the open corner shooter.',
      workplaceParallel: 'Identifying cross-departmental bottlenecks between sales reps and software developers before deliverables stall.',
    },
    {
      play: 'Defensive Anchor & Rapid Communication',
      courtAnalogy: 'Loudly calling out screens, rotations, and box-outs from the paint to coordinate five players as one unit.',
      workplaceParallel: 'Running blameless post-mortems and keeping stakeholders proactively informed during urgent bug escalations.',
    },
    {
      play: 'Fast-Break Transition Rhythm',
      courtAnalogy: 'Securing the defensive rebound and sprinting the floor within 4 seconds for an uncontested layup.',
      workplaceParallel: 'Translating newly closed enterprise client requests into prioritized Jira backlog tickets to cut turnaround by 30%.',
    },
  ];

  const summits = [
    { name: 'Kalsubai Peak', altitude: '1,646 m', tag: 'Highest Peak in Maharashtra', feat: 'Extreme gradient endurance' },
    { name: 'Harishchandragad', altitude: '1,422 m', tag: 'Konkan Kada Cliff', feat: 'Vertical rock traverse' },
    { name: 'Rajgad Fort', altitude: '1,375 m', tag: 'Historical King of Forts', feat: 'Long-range ridge endurance' },
    { name: 'Torna Fort', altitude: '1,403 m', tag: 'Prachandagad Citadel', feat: 'High winds & steep ascent' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ATHLETIC FOUNDATION</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
              Strategy, Court Vision & Relentless Grit.
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              My management philosophy wasn't born in a lecture hall. Competing in high-stakes sports at National and District levels forged the calculated composure, team trust, and stamina I bring to engineering and operations teams.
            </p>
          </div>

          {/* 1. National Chess Strategy Interactive Board */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#cb6d51]/15 text-[#cb6d51] border border-[#cb6d51]/30">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-heading text-white">
                      National-Level Chess Player
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      National Competitor
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Positional Mastery, Pattern Recognition & High-Pressure Calculation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                {chessTactics.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChessTactic(idx)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeChessTactic === idx
                        ? 'bg-[#cb6d51] text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Tactic 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Chess Tactic Breakdown Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-[#cb6d51] uppercase tracking-wider font-semibold">
                  Tactic 0{activeChessTactic + 1} // {chessTactics[activeChessTactic].concept}
                </span>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-xs font-mono text-zinc-500 uppercase">ON THE CHESSBOARD</div>
                  <div className="text-sm font-semibold text-white">
                    {chessTactics[activeChessTactic].chessAnalogy}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#cb6d51]/5 border border-[#cb6d51]/20 space-y-1">
                  <div className="text-xs font-mono text-[#cb6d51] uppercase font-semibold">
                    IN BUSINESS & OPERATIONS
                  </div>
                  <div className="text-sm text-zinc-200 leading-relaxed">
                    {chessTactics[activeChessTactic].workplaceParallel}
                  </div>
                </div>

                <div className="pt-2 text-xs italic text-zinc-400 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#cb6d51] shrink-0" />
                  <span>Rule: "{chessTactics[activeChessTactic].rule}"</span>
                </div>
              </div>

              {/* Graphic Chessboard Representation */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080809] border border-white/10 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="grid grid-cols-4 gap-2 w-48 h-48 p-2 rounded-xl bg-white/[0.02] border border-white/10">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-md flex items-center justify-center text-xs font-mono ${
                        (Math.floor(i / 4) + i) % 2 === 0
                          ? 'bg-white/[0.08] text-white'
                          : 'bg-[#cb6d51]/20 text-[#cb6d51]'
                      } ${i === 5 ? 'ring-2 ring-[#cb6d51]' : ''}`}
                    >
                      {i === 5 ? '♔' : i === 10 ? '♘' : i === 2 ? '♙' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  Calculated Risk · Positional Dominance · Time Control
                </div>
              </div>
            </div>
          </div>

          {/* 2. District Basketball Team Playbook */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#769e84]/15 text-[#769e84] border border-[#769e84]/30">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-heading text-white">
                      District-Level Basketball Player
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      District Championship Contender
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    High-Tempo Team Synergy, Court Vision & Fast-Break Execution
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                {basketballPlays.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBasketballPlay(idx)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeBasketballPlay === idx
                        ? 'bg-[#769e84] text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Play 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Basketball Play Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-[#769e84] uppercase tracking-wider font-semibold">
                  Play 0{activeBasketballPlay + 1} // {basketballPlays[activeBasketballPlay].play}
                </span>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-xs font-mono text-zinc-500 uppercase">ON THE COURT</div>
                  <div className="text-sm font-semibold text-white">
                    {basketballPlays[activeBasketballPlay].courtAnalogy}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#769e84]/5 border border-[#769e84]/20 space-y-1">
                  <div className="text-xs font-mono text-[#769e84] uppercase font-semibold">
                    IN AGILE CROSS-FUNCTIONAL TEAMS
                  </div>
                  <div className="text-sm text-zinc-200 leading-relaxed">
                    {basketballPlays[activeBasketballPlay].workplaceParallel}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080809] border border-white/10 flex flex-col items-center justify-center space-y-3 text-center">
                <div className="w-48 h-32 rounded-xl border border-white/20 relative flex items-center justify-center bg-white/[0.01]">
                  <div className="w-16 h-16 rounded-full border border-white/20" />
                  <div className="absolute left-0 w-8 h-14 border-r border-white/20 rounded-r-full" />
                  <div className="absolute right-0 w-8 h-14 border-l border-white/20 rounded-l-full" />
                  <span className="text-xs font-mono text-[#769e84] font-bold">COURT VISION</span>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  Unselfish Ball Movement · Instant Verbal Trust · Agile Fast Breaks
                </div>
              </div>
            </div>
          </div>

          {/* 3. Sahyadri Western Ghats Trekking & Fitness */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6 shadow-xl">
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.06]">
              <div className="p-3 rounded-2xl bg-[#d9a045]/15 text-[#d9a045] border border-[#d9a045]/30">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading text-white">
                  Western Ghats Trekking & High-Altitude Stamina
                </h2>
                <p className="text-xs text-zinc-400">
                  12+ Sahyadri Mountain Summits Conquered · Endurance Swimming & Daily Discipline
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {summits.map((summit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all space-y-2"
                >
                  <div className="text-xl font-bold font-heading text-white">
                    {summit.name}
                  </div>
                  <div className="text-base font-extrabold font-mono text-[#d9a045]">
                    {summit.altitude}
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-300">
                    {summit.tag}
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    {summit.feat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
