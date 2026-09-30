import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowUpRight, Sparkles, Code2, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const skillsData = [
  {
    id: '01',
    name: 'Key Account Management & CRM Systems',
    tagline: '150+ Enterprise Portfolios · Client Retention · SLA Governance',
    badge: 'Management Focus · Client Operations',
    metricValue: '150+',
    metricLabel: 'Monthly Enterprise Client Portfolios Managed',
    context: 'Future Real Estate / HouseSeek.in (Mumbai, Jul–Dec 2025)',
    outcomes: [
      'Orchestrated monthly relationships for 150+ active client accounts via custom CRM pipelines with zero missed follow-ups.',
      'Acted as bilingual technical liaison between client stakeholders and engineering, translating business feedback into sprint backlog tickets.',
      'Engineered early-warning churn mitigation process, flagging at-risk accounts for proactive check-ins.',
    ],
    techStack: [
      'CRM Pipeline Systems',
      'Lead Routing Logic',
      'HubSpot / Salesforce',
      'SLA Governance',
      'Data Auditing',
    ],
    relatedProjectId: 'opspulse-ai',
    relatedProjectName: 'OpsPulse AI',
  },
  {
    id: '02',
    name: 'Full-Stack Web Development & Frameworks',
    tagline: 'React · Next.js · TypeScript · Component Architecture · Web Performance',
    badge: 'Deep Tech · Frontend & Web Systems',
    metricValue: 'MERN + Next.js',
    metricLabel: 'Production-Ready Web Applications & Modern SPAs',
    context: 'Independent Production Systems & Full-Stack Projects (2023–2026)',
    outcomes: [
      'Engineered responsive, modular web applications utilizing React.js, Next.js, and custom hooks with zero layout shifts.',
      'Designed declarative state architectures with clean data flows, optimistic UI updates, and automated error boundaries.',
      'Optimized Core Web Vitals, code splitting, asset preloading, and client-side caching to achieve sub-second page loads.',
    ],
    techStack: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Redux Toolkit',
      'Vite',
    ],
    relatedProjectId: 'practo-care',
    relatedProjectName: 'Practo Care',
  },
  {
    id: '03',
    name: 'Backend Architecture, APIs & Databases',
    tagline: 'Node.js · Express · REST & GraphQL · MongoDB · PostgreSQL · Redis',
    badge: 'Deep Tech · Backend & Data Layer',
    metricValue: 'GraphQL + SQL',
    metricLabel: 'Scalable Microservices, Schema Design & API Gateways',
    context: 'Database Management, Server Architectures & API Engineering',
    outcomes: [
      'Architected normalized relational databases (PostgreSQL, MySQL) and document schemas (MongoDB) with indexed query execution plans.',
      'Implemented performant GraphQL schemas with batch resolvers (DataLoader) to eliminate the N+1 query problem.',
      'Secured endpoints with JWT tokens, bcrypt password hashing, CORS policies, rate limiters, and WebSocket live channels.',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'GraphQL',
      'REST APIs',
      'Redis Caching',
      'JWT Auth',
    ],
    relatedProjectId: 'practo-care',
    relatedProjectName: 'Practo Care',
  },
  {
    id: '04',
    name: 'Cloud Infrastructure, DevOps & Tooling',
    tagline: 'AWS (EC2, S3) · Docker · CI/CD · Git / GitHub · Linux / Bash',
    badge: 'Deep Tech · Cloud & Deployment',
    metricValue: 'AWS + Docker',
    metricLabel: 'Automated CI/CD Pipelines & Containerized Environments',
    context: 'Cloud Hosting, Version Control & Deployment Automation',
    outcomes: [
      'Provisioned cloud infrastructure on AWS including S3 media storage buckets and EC2 compute instances with custom security groups.',
      'Containerized multi-service applications using Docker and Docker Compose for consistent local development and staging.',
      'Automated continuous integration and deployment (CI/CD) pipelines with GitHub Actions, enforcing automated linting and build checks.',
    ],
    techStack: [
      'AWS (S3, EC2)',
      'Docker',
      'Git / GitHub',
      'GitHub Actions CI/CD',
      'Firebase',
      'Vercel',
      'Linux / Bash',
    ],
    relatedProjectId: 'edusync-stream',
    relatedProjectName: 'EduSync Stream',
  },
  {
    id: '05',
    name: 'Business Intelligence, SQL & Data Analytics',
    tagline: '+70% Accuracy · PowerBI Dashboards · Advanced SQL · Python Pandas',
    badge: 'Analytics Focus · Decision Modeling',
    metricValue: '+70%',
    metricLabel: 'Operational Data Reliability & Verification Gain',
    context: 'Data Integrity Audits & Executive Decision Modeling (HouseSeek.in)',
    outcomes: [
      'Authored multi-table SQL queries utilizing recursive CTEs, window functions, and complex aggregations to audit operational data.',
      'Built multi-page executive PowerBI dashboards connecting real estate deal pipelines, conversion funnels, and revenue projections.',
      'Achieved +70% improvement in internal data accuracy by implementing backend validation checks and purging duplicate entries.',
    ],
    techStack: [
      'PowerBI',
      'Advanced SQL',
      'Python (Pandas, NumPy)',
      'DAX Formulas',
      'Excel Financial Models',
      'Data Auditing',
    ],
    relatedProjectId: 'propscale-b2b',
    relatedProjectName: 'PropScale B2B',
  },
  {
    id: '06',
    name: 'Product Ownership & Operations Automation',
    tagline: '-30% Cycle Time · PRD Authoring · $14B TAM Modeling · Figma',
    badge: 'Hybrid 50/50 · Strategy & Execution',
    metricValue: '-30%',
    metricLabel: 'Reduction in Cross-Functional SLA Turnaround Time',
    context: 'Operational Workflow Diagnostics & Commercial Product Roadmaps',
    outcomes: [
      'Authored end-to-end Product Requirement Documents (PRDs) defining user personas, feature scopes, edge cases, and acceptance tests.',
      'Audited operational handoffs between sales, ops, and tech, restructuring workflows to reduce turnaround cycle time by 30%.',
      'Created high-fidelity Figma prototypes and modeled commercial venture unit economics (TAM/SAM/SOM $14B, CAC/LTV).',
    ],
    techStack: [
      'PRD Authoring',
      'Figma Prototyping',
      'Agile / Scrum Sprints',
      'Process Automation (Zapier)',
      'Unit Economics',
    ],
    relatedProjectId: 'propscale-b2b',
    relatedProjectName: 'PropScale B2B',
  },
];

export default function StudioServices({ onSelectProject }) {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  const handleOpenRelatedProject = (projectId) => {
    if (!onSelectProject) return;
    const project = projectsData.find((p) => p.id === projectId);
    if (project) {
      onSelectProject(project);
    }
  };

  return (
    <section className="skills-section" id="skills">
      {/* Anchor for backward compatibility with #services */}
      <div id="services" className="sr-only" aria-hidden="true" />

      {/* Header */}
      <motion.div
        className="skills-section__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="skills-section__eyebrow">
          <span>03</span>
          <span>Core Skills &amp; Operational Impact</span>
        </p>
        <h2 className="skills-section__title">
          <span>Technical Rigor.</span>
          <em>Client Impact.</em>
        </h2>
        <p className="skills-section__sub">
          I operate across the entire lifecycle: from architecting full-stack systems and cloud infrastructure to stewarding enterprise client relationships and optimizing cross-functional SLAs. Click any skill below to see its verified outcomes and metrics.
        </p>
      </motion.div>

      {/* Side-by-Side Matrix: Left Selector + Right Live Outcome */}
      <motion.div
        className="skills-matrix"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Column: Interactive Skill List */}
        <div className="skills-list" role="tablist" aria-label="Skills Selector">
          {skillsData.map((skill) => {
            const isActive = activeSkill.id === skill.id;
            return (
              <button
                key={skill.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`skill-row ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveSkill(skill)}
              >
                <div className="skill-row__meta">
                  <div className="skill-row__header">
                    <span className="skill-row__num">{skill.id}</span>
                    <span className="skill-row__name">{skill.name}</span>
                  </div>
                  <span className="skill-row__tagline">{skill.tagline}</span>
                </div>
                <span className="skill-row__arrow" aria-hidden="true">
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Outcome & Impact Card (Fitted exactly to 1–6 set) */}
        <div className="skill-outcome-panel">
          <div className="skill-outcome__top">
            {/* Top Badge & Counter */}
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="skill-outcome__badge">
                <Sparkles size={12} className="text-[#cb6d51]" />
                {activeSkill.badge}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                // {activeSkill.id} of 06
              </span>
            </div>

            {/* Metric Callout */}
            <div className="skill-outcome__metric">
              <span className="skill-outcome__metric-value">
                {activeSkill.metricValue}
              </span>
              <span className="skill-outcome__metric-label">
                {activeSkill.metricLabel}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                Context: {activeSkill.context}
              </span>
            </div>

            {/* 3 High-Impact Bullet Points */}
            <div className="skill-outcome__bullets">
              {activeSkill.outcomes.map((item, idx) => (
                <div key={idx} className="skill-outcome__bullet">
                  <CheckCircle2 size={15} className="skill-outcome__bullet-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Toolset & Action */}
          <div className="skill-outcome__bottom">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5 font-semibold">
                <Code2 size={13} className="text-[#cb6d51]" />
                Core Technical Stack &amp; Tools:
              </p>
              <div className="skill-outcome__tools">
                {activeSkill.techStack.map((t, idx) => (
                  <span key={idx} className="skill-outcome__tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action link */}
            {activeSkill.relatedProjectId && onSelectProject && (
              <button
                type="button"
                onClick={() => handleOpenRelatedProject(activeSkill.relatedProjectId)}
                className="skill-outcome__cta"
              >
                <span>View Related Project: {activeSkill.relatedProjectName}</span>
                <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
