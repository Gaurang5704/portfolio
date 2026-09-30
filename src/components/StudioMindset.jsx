import React from 'react';
import { motion } from 'framer-motion';

const hobbies = [
  {
    title: 'National Level Chess Player',
    sticker: '♟️ National Level',
    desc: 'Competing at the national level, calculating deep tactical lines under strict clock pressure, and anticipating opponent counterplay. A lifelong masterclass in strategic discipline.',
    tilt: 'md:-rotate-2 hover:rotate-0',
    bg: 'bg-[#ffffff]',
    badgeBg: 'bg-[#f2efe9] text-[#2c2b28]',
  },
  {
    title: 'Freestyle Swimming',
    sticker: '🏊 1,000m Laps',
    desc: 'Freestyle laps and rhythmic breathing in the pool. Diving into the water is my absolute favorite way to wash away screen fatigue and recharge both endurance and mental clarity.',
    tilt: 'md:rotate-2 hover:rotate-0 md:translate-y-2',
    bg: 'bg-[#ffffff]',
    badgeBg: 'bg-[#ebf4f6] text-[#1b4b5a]',
  },
  {
    title: 'District Level Basketball',
    sticker: '🏀 District Level',
    desc: 'Competing at the district championship level. High-tempo transition play, creating passing lanes under physical defense, and executing coordinated team strategy on the court.',
    tilt: 'md:-rotate-1 hover:rotate-0',
    bg: 'bg-[#ffffff]',
    badgeBg: 'bg-[#fdf3ec] text-[#b85438]',
  },
];

export default function StudioMindset() {
  return (
    <section
      className="w-full bg-[#ece9e2] text-[#0e0e0d] py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-black/15 relative z-10"
      id="mindset"
      data-theme="light"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Clear, distinct header on ivory canvas */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/15"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#cb6d51] font-semibold">
              Beyond The Screen
            </span>
            <h3 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-[#0e0e0d] tracking-tight mt-1">
              Personal Passions &amp; Hobbies
            </h3>
          </div>
          <p className="text-sm text-[#4a4742] max-w-md leading-relaxed font-sans">
            A quick glimpse of who I am outside of code and business spreadsheets. Athletics and strategy games keep my composure and focus grounded.
          </p>
        </motion.div>

        {/* 3 Scattered / Informal Hobby Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {hobbies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`p-7 rounded-2xl ${item.bg} ${item.tilt} border border-black/10 shadow-[0_12px_28px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_38px_-10px_rgba(0,0,0,0.14)] transition-all duration-300 flex flex-col justify-between gap-6 relative group`}
            >
              {/* Top Tape / Sticker Effect */}
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono px-3 py-1 rounded-full font-semibold tracking-wide ${item.badgeBg}`}>
                  {item.sticker}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-black/15 group-hover:bg-[#cb6d51] transition-colors" />
              </div>

              <div>
                <h4 className="font-grotesk font-bold text-xl text-[#0e0e0d] mb-2.5">
                  {item.title}
                </h4>
                <p className="text-sm text-[#4b4843] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
