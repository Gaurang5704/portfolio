import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  RotateCw,
  Terminal,
  CheckCircle2,
  Cpu,
  Database,
  Briefcase,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Code2,
} from 'lucide-react';

export default function SkillsLab() {
  const [selectedDemo, setSelectedDemo] = useState('crm');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [logs, setLogs] = useState([]);
  const [viewMode, setViewMode] = useState('output'); // 'output' | 'code'

  const demos = {
    crm: {
      id: 'crm',
      title: 'CRM Lead Pipeline & SLA Automation',
      category: 'Management & Ops',
      badge: '150+ Accounts',
      accentColor: '#cb6d51',
      codeSnippet: `// Operational Automation: CRM Follow-up Dispatcher
const runCrmCadence = async (accounts) => {
  const staleAccounts = accounts.filter(a => a.daysSinceTouchpoint > 5);
  for (const account of staleAccounts) {
    const priority = calculateSlaRisk(account.dealValue, account.stage);
    await dispatchNotification({
      target: account.owner,
      slaExpiry: "24h",
      action: "Trigger Retention Follow-up Cadence"
    });
  }
  return { dispatched: staleAccounts.length, status: "100% Pipeline Covered" };
};`,
      simulatedSteps: [
        'Fetching 154 active client accounts from CRM database...',
        'Scanning touchpoint timestamps across sales & partner pipelines...',
        'Identified 28 accounts approaching SLA expiration threshold (>5 days)...',
        'Assigning high-priority follow-up cadences and updating internal CRM records...',
        'SUCCESS: 154 accounts audited. 0 client drop-offs. SLA coverage: 100%.',
      ],
      outputMetrics: {
        metric1: { label: 'Accounts Scanned', val: '154' },
        metric2: { label: 'Cadences Dispatched', val: '28' },
        metric3: { label: 'Pipeline Retention', val: '99.4%' },
      },
    },
    graphql: {
      id: 'graphql',
      title: 'Full-Stack GraphQL API Engine',
      category: 'Technical Engineering',
      badge: 'MERN Stack',
      accentColor: '#769e84',
      codeSnippet: `// GraphQL Schema: Multi-Tenant Medical Consultation
query GetDoctorSchedule($doctorId: ID!, $date: String!) {
  doctor(id: $doctorId) {
    name
    specialty
    clinicQueue(date: $date) {
      slotTime
      patientId
      status
      bookingFrictionScore
    }
    dailyRevenueSummary {
      completedConsultations
      collectedFees
    }
  }
}`,
      simulatedSteps: [
        'Initializing GraphQL Apollo Server instance with JWT verification...',
        'Parsing query AST for multi-tenant doctor and clinic schedule...',
        'Executing MongoDB aggregation pipeline on appointment indices...',
        'Resolving nested relationships (Patient ↔ Doctor ↔ Clinic Calendar)...',
        'Payload returned in 18ms. Zero over-fetching. 200 OK.',
      ],
      outputMetrics: {
        metric1: { label: 'Query Execution', val: '18ms' },
        metric2: { label: 'Over-fetching', val: '0%' },
        metric3: { label: 'Endpoint Status', val: '200 OK' },
      },
    },
    dataAccuracy: {
      id: 'dataAccuracy',
      title: 'Backend Data Verification Script',
      category: 'Tech-Enabled Ops',
      badge: '+70% Accuracy',
      accentColor: '#d9a045',
      codeSnippet: `import pandas as pd
from schema_validator import PropertyRecordSchema

def audit_real_estate_records(raw_dataset):
    validated_records = []
    anomalies_detected = 0
    for record in raw_dataset:
        if PropertyRecordSchema.is_valid(record):
            validated_records.append(record)
        else:
            anomalies_detected += 1
            trigger_auto_remediation(record)
    
    accuracy_rate = len(validated_records) / len(raw_dataset)
    return {"accuracy": f"{accuracy_rate:.1%}", "anomalies": anomalies_detected}`,
      simulatedSteps: [
        'Ingesting 1,240 property listings from external broker feeds...',
        'Executing schema integrity validator (price, coordinates, square footage)...',
        'Flagging 382 inconsistent records with missing metadata...',
        'Applying automated sanitization rules & cross-referencing GIS coordinates...',
        'Data accuracy rate elevated from 54% to 92% (+70% net improvement).',
      ],
      outputMetrics: {
        metric1: { label: 'Records Audited', val: '1,240' },
        metric2: { label: 'Anomalies Cleaned', val: '382' },
        metric3: { label: 'Net Accuracy Gain', val: '+70%' },
      },
    },
    slaOptimization: {
      id: 'slaOptimization',
      title: 'Operational SLA Turnaround Engine',
      category: 'Process Optimization',
      badge: '-30% Turnaround',
      accentColor: '#cb6d51',
      codeSnippet: `// Cross-Functional Task Router: Tech <-> Business
const routeOperationalTicket = (ticket) => {
  const category = classifyIntent(ticket.description);
  const route = category.isTechnical ? 'ENG_SPRINT_TRIAGE' : 'BIZ_CLIENT_SUCCESS';
  
  const estimatedHours = computeSlaEstimate(route, ticket.urgency);
  notifySlackChannel(route, { ticketId: ticket.id, maxTurnaround: "33h" });
  return { routedTo: route, turnaroundTarget: "-30% SLA" };
};`,
      simulatedSteps: [
        'Analyzing cross-departmental ticketing queue (Sales ↔ Engineering)...',
        'Classifying ticket urgency and routing directly to sprint backlogs...',
        'Eliminating manual email ping-pongs and asynchronous handoff delays...',
        'Automated Slack/Email dispatch sent to technical owners...',
        'Average resolution turnaround reduced from 48 hours to 33 hours (-31%).',
      ],
      outputMetrics: {
        metric1: { label: 'Baseline SLA', val: '48 hrs' },
        metric2: { label: 'Optimized SLA', val: '33 hrs' },
        metric3: { label: 'Time Saved', val: '31.2%' },
      },
    },
  };

  const current = demos[selectedDemo];

  const runSimulation = (demoKey) => {
    const target = demos[demoKey];
    setSelectedDemo(demoKey);
    setIsRunning(true);
    setProgress(0);
    setLogs([]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProgress(Math.min(step * 20, 100));

      if (step <= target.simulatedSteps.length) {
        setLogs((prev) => [...prev, target.simulatedSteps[step - 1]]);
      }

      if (step >= target.simulatedSteps.length) {
        clearInterval(interval);
        setTimeout(() => setIsRunning(false), 300);
      }
    }, 450);
  };

  // Initial load
  React.useEffect(() => {
    setLogs(current.simulatedSteps);
  }, []);

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#cb6d51]/15 text-[#cb6d51]">
              <Zap className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#cb6d51]">
              Live Competency Simulator
            </span>
          </div>
          <h3 className="text-2xl font-bold font-heading text-white mt-1">
            On-The-Spot Skill Demonstration
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Select a skill below to trigger an on-the-spot execution simulation with live telemetry.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(demos).map((key) => {
            const d = demos[key];
            const isSelected = selectedDemo === key;
            return (
              <button
                key={key}
                onClick={() => runSimulation(key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#cb6d51] text-white font-semibold shadow-md shadow-[#cb6d51]/25'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <span>{d.title.split(' ')[0]}</span>
                <span className="text-[10px] opacity-75 font-mono">({d.badge})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal & Simulation Display */}
      <div className="rounded-2xl bg-[#080809] border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Title Bar */}
        <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
            <div className="w-3 h-3 rounded-full bg-[#eab308]/60" />
            <div className="w-3 h-3 rounded-full bg-[#22c55e]/60" />
            <span className="text-xs font-mono text-zinc-400 ml-2">
              simulator://gaurang/{selectedDemo}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
              <button
                onClick={() => setViewMode('output')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'output' ? 'bg-[#cb6d51] text-white font-bold' : 'text-zinc-400'
                }`}
              >
                Live Output
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'code' ? 'bg-[#cb6d51] text-white font-bold' : 'text-zinc-400'
                }`}
              >
                Source Code
              </button>
            </div>

            <button
              onClick={() => runSimulation(selectedDemo)}
              disabled={isRunning}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Re-run simulation"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin text-[#cb6d51]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Live Loading Bar */}
        {isRunning && (
          <div className="w-full h-1 bg-white/[0.05] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#cb6d51] to-[#769e84]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        )}

        {/* Terminal Content */}
        <div className="p-6 font-mono text-xs leading-relaxed min-h-[200px]">
          {viewMode === 'output' ? (
            <div className="space-y-2.5">
              <div className="text-zinc-500 flex items-center gap-2">
                <span>[system] Initializing {current.title}...</span>
                {isRunning && (
                  <span className="w-2 h-2 rounded-full bg-[#cb6d51] animate-ping" />
                )}
              </div>

              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-2 text-zinc-300"
                >
                  <span className="text-[#769e84] font-bold">›</span>
                  <span>{log}</span>
                </motion.div>
              ))}

              {!isRunning && logs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-2 text-[#769e84] font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Execution verified. Telemetry passed all unit assertions.</span>
                </motion.div>
              )}
            </div>
          ) : (
            <pre className="text-zinc-300 overflow-x-auto whitespace-pre font-mono text-xs">
              <code>{current.codeSnippet}</code>
            </pre>
          )}
        </div>

        {/* Live Metrics Footer Strip */}
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06] grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              {current.outputMetrics.metric1.label}
            </div>
            <div className="text-base font-bold font-heading text-white mt-0.5">
              {current.outputMetrics.metric1.val}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              {current.outputMetrics.metric2.label}
            </div>
            <div className="text-base font-bold font-heading text-[#cb6d51] mt-0.5">
              {current.outputMetrics.metric2.val}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase">
              {current.outputMetrics.metric3.label}
            </div>
            <div className="text-base font-bold font-heading text-[#769e84] mt-0.5">
              {current.outputMetrics.metric3.val}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
