import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    phase: 'Discovery & Audit',
    name: 'Audit',
    text: "I immerse myself in the operational ecosystem, customer touchpoints, and cross-team SLA bottlenecks. I do not begin engineering before pinpointing core points of friction and real business goals.",
    meta: 'CRM Audit · Process Mining · Stakeholder Interviews',
    icon: Search,
    detail: 'Workflow mapping & client churn risk diagnostics',
    theme: 'light',
  },
  {
    num: '02',
    phase: 'Architecture & Blueprint',
    name: 'Model',
    text: "I establish technical architecture and data schemas: relational/document models, API contracts, Figma interactive prototypes, and operational KPIs. A modular structure built to measure impact from day one.",
    meta: 'PRD Specifications · System Architecture · Wireframes',
    icon: Compass,
    detail: 'Data modeling & cross-team responsibility matrix',
    theme: 'dark',
  },
  {
    num: '03',
    phase: 'Production Engineering',
    name: 'Build',
    text: "I develop the platform end-to-end: responsive React interfaces, robust Node.js/Express APIs, optimized database queries, and pipeline automations with strict data integrity checks.",
    meta: 'MERN Full-Stack · REST & GraphQL · CI/CD Automation',
    icon: Cpu,
    detail: 'Maintainable clean code, integration tests & continuous delivery',
    theme: 'light',
  },
  {
    num: '04',
    phase: 'Rollout & Measurement',
    name: 'Optimize',
    text: "I deploy the system into production with clear documentation, onboard operational teams, and maintain real-time monitoring of SLAs to ensure direct bottom-line impact.",
    meta: 'Production Rollout · Team Enablement · SLA & KPI Tracking',
    icon: Rocket,
    detail: 'Post-launch monitoring, agile iterations & measurable turnaround reduction',
    theme: 'dark',
  },
];

export default function StudioProcess() {
  return (
    <section className="process" id="methode" aria-labelledby="processTitle">
      <div className="process__head">
        <div className="process__head-top">
          <p className="process__eyebrow">
            <span>04</span>
            <span>Engineering &amp; Problem-Solving Framework</span>
          </p>
          <p className="process__promise">
            Whether architecting an end-to-end web platform or diagnosing an enterprise CRM workflow, here is the disciplined approach I apply to deliver reliable results.
          </p>
        </div>

        <h2 className="process__title" id="processTitle">
          <span className="process__title-serif">How</span>
          <span className="process__title-main">I Work</span>
        </h2>

        <div className="process__head-bottom">
          <p className="process__sub">
            <span>Four phases.</span>
            <em>Zero shortcuts.</em>
          </p>
          <p className="process__scroll" aria-hidden="true">
            Scroll down <span>↓</span>
          </p>
        </div>

        <ol className="process__legend" aria-label="Process phases">
          {steps.map((step) => (
            <li key={step.num}>
              <span>{step.num}</span> {step.name}
            </li>
          ))}
        </ol>
      </div>

      {/* Alternating Process Cards: White-Black-White-Black, Left-Right-Left-Right */}
      <div className="process__cards" id="processCards">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isReverse = idx % 2 === 1; // 2 and 4 are reversed!
          return (
            <motion.article
              key={step.num}
              className={`process-card process-card--${step.theme} ${isReverse ? 'process-card--reverse' : ''}`}
              data-theme={step.theme}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-card__inner">
                {/* Main Content (Title, text, meta) */}
                <div className="process-card__main">
                  <div className="process-card__header">
                    <span className="process-card__num">{step.num}</span>
                    <span className="process-card__phase">{step.phase}</span>
                  </div>
                  <h3 className="process-card__name">{step.name}</h3>
                  <p className="process-card__text">{step.text}</p>
                  <p className="process-card__meta">{step.meta}</p>
                </div>

                {/* Deliverable Box */}
                <div className="process-card__visual">
                  <div className="process-card__box">
                    <div className="process-card__box-icon">
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p className="process-card__box-label">
                         Phase {step.num} · Deliverable
                      </p>
                      <p className="process-card__box-title">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle Background Ghost Number */}
                <span className="process-card__ghost" aria-hidden="true">
                  {step.num}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
