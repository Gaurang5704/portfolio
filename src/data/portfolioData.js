export const personalData = {
  name: "Gaurang Jadhav",
  roleTitle: "Tech-cum-Management Professional",
  tagline: "Bridging Full-Stack Engineering with Business Operations & Strategic Account Management",
  summary:
    "Business operations and technical professional with a balanced 50/50 dual fluency: hands-on in managing 150+ monthly client relationships, CRM lead pipelines, and cross-functional team coordination, backed by a rigorous full-stack development foundation (MERN, GraphQL, Python, AWS). Expert at translating executive business goals into actionable engineering deliverables, optimizing operational workflows, and building data-driven tools that leadership can actually use.",
  location: "Mumbai, Maharashtra, India",
  email: "gaurangjadhav53@gmail.com",
  phone: "+91 93218 81190",
  github: "Gaurang5704",
  githubUrl: "https://github.com/Gaurang5704",
  linkedin: "gaurang-jadhav-73683a2a3",
  linkedinUrl: "https://www.linkedin.com/in/gaurang-jadhav-73683a2a3/",
  status: "Open to Tech-cum-Management Roles",
  dualFocusRatio: "50% Tech / 50% Management",
  availability: "Immediate / Summer 2025 onwards",
};

export const executiveKpis = [
  {
    id: "clients",
    label: "Monthly CRM Pipeline",
    value: "150+",
    change: "+100% client coverage",
    changeType: "positive",
    category: "Management",
    description: "Active B2B client & partner accounts managed with systematic follow-up cadences.",
    metricTag: "Account Operations",
  },
  {
    id: "accuracy",
    label: "Data Accuracy Optimization",
    value: "70%",
    change: "+70% accuracy uplift",
    changeType: "positive",
    category: "Tech",
    description: "Streamlined database schemas and validation scripts eliminating manual data leakage.",
    metricTag: "Systems Engineering",
  },
  {
    id: "turnaround",
    label: "Ops Turnaround Time",
    value: "-30%",
    change: "30% faster resolution",
    changeType: "positive",
    category: "Management",
    description: "Standardized ticketing workflows and cross-team alignment protocols between sales & tech.",
    metricTag: "Process Optimization",
  },
  {
    id: "dual_ratio",
    label: "Hybrid Role Balance",
    value: "50 / 50",
    change: "Engineering × BizOps",
    changeType: "neutral",
    category: "Hybrid",
    description: "Equal mastery: fluent in code repositories, API payloads, executive PRDs, and P&L levers.",
    metricTag: "Dual Focus",
  },
];

export const experienceData = [
  {
    id: "houseseek",
    company: "Future Real Estate (HouseSeek.in)",
    role: "Tech & Business Operations Intern",
    location: "Mumbai, Maharashtra",
    duration: "Jul 2025 – Dec 2025",
    type: "Internship",
    badge: "50% Tech / 50% Management",
    summary:
      "Owned end-to-end operational workflows for a fast-growing prop-tech platform, coordinating across engineering, sales, and digital marketing while managing data integrity and key accounts.",
    highlights: [
      {
        metric: "150+ Clients",
        text: "Managed 150+ monthly client relationships through CRM, driving structured follow-ups, retention touchpoints, and CRM pipeline health.",
        type: "management",
      },
      {
        metric: "+70% Accuracy",
        text: "Spearheaded technical operations and backend data verification, elevating property and client data accuracy by 70%.",
        type: "tech",
      },
      {
        metric: "-30% Turnaround",
        text: "Overhauled cross-team task coordination and daily reporting, reducing operational turnaround time by 30%.",
        type: "management",
      },
      {
        metric: "Tech Liaison",
        text: "Served as the core technical point-of-contact between business stakeholders and software engineers, communicating requirements and expediting issue resolution.",
        type: "hybrid",
      },
      {
        metric: "3 Campaigns",
        text: "Coordinated cross-functional planning and execution of 3 digital marketing campaigns, tracking timelines, creative deliverables, and partner acquisition metrics.",
        type: "management",
      },
    ],
    skills: ["CRM Management", "Cross-Functional Coordination", "Backend Data Support", "SLA Tracking", "Campaign Operations", "Stakeholder Alignment"],
  },
];

export const projectsData = [
  {
    id: "opspulse-ai",
    title: "OpsPulse AI — Executive Operations & SLA Intelligence Suite",
    category: "Management Tool",
    categoryLabel: "Tech Built for Management",
    badge: "Executive Tool",
    focus: "50/50 Hybrid",
    shortDesc:
      "An operational intelligence control center built specifically for Operations Leads and Engineering VPs to monitor cross-team bottlenecks, CRM SLA breaches, and client account health.",
    fullDesc:
      "OpsPulse AI addresses the common disconnect between business leadership and software delivery teams. Built as a command center for management personnel, it ingests CRM follow-up pipelines, support tickets, and sprint velocity data to deliver real-time operational telemetry. Features automated escalation matrices, predictive SLA breach warnings, and executive-ready KPI summaries to prevent account churn before it happens.",
    businessPitch:
      "Operational blindspots cost tech organizations up to 25% in delayed client deliverables. OpsPulse centralizes SLA compliance, automates team handoffs, and gives executives actionable oversight without micromanaging Jira or CRM sheets.",
    techArchitecture:
      "Engineered with React 19, Node.js microservices, GraphQL for unified querying across CRM & bug-trackers, MongoDB Atlas for operational logs, and custom SVG analytical charting.",
    managementValue:
      "Automates cross-team escalation paths, reduces reporting overhead by 40%, and provides C-level visibility into client account health and team turnaround times.",
    keyMetrics: [
      { label: "Resolution Bottlenecks", value: "-40%" },
      { label: "Target User", value: "Ops Leads & VPs" },
      { label: "Data Pipeline Refresh", value: "Real-time" },
      { label: "Accounts Monitored", value: "150+" },
    ],
    techStack: ["React.js", "Node.js", "GraphQL", "MongoDB", "Tailwind CSS", "Data Analytics"],
    managementFeatures: [
      "Real-time SLA breach countdowns and escalation alerts",
      "Executive KPI rollup with automated status reporting",
      "Cross-functional team velocity & turnaround analytics",
      "Client retention risk scoring based on CRM follow-up frequency",
    ],
    technicalFeatures: [
      "GraphQL query layer aggregating disparate operations databases",
      "Event-driven alerting architecture for rapid escalation dispatch",
      "Dynamic data visualization with custom responsive charts",
      "Role-based access control (C-Level, Ops Lead, Contributor)",
    ],
    links: {
      demo: "https://opspulse-executive-preview.vercel.app",
      demoLabel: "Live App Preview",
      github: "https://github.com/Gaurang5704/opspulse-ai-management-suite",
      githubLabel: "GitHub Repository",
      presentation: "https://opspulse.notion.site/OpsPulse-Executive-PRD-Documentation",
    },
    image: "/images/projects/opspulse-ai.svg",
    featured: true,
  },
  {
    id: "propscale-b2b",
    title: "PropScale B2B — Commercial Asset Deal Pipeline & Broker Platform",
    category: "Business Pitch",
    categoryLabel: "Fully Business-Pitched Project",
    badge: "Business Pitch Deck & Model",
    focus: "Business & Management",
    shortDesc:
      "A complete B2B venture business model, investor pitch deck, and partner acquisition engine targeting high-ticket commercial real estate leasing.",
    fullDesc:
      "Synthesizing hands-on real estate market insights gained at HouseSeek.in, PropScale B2B is a venture-grade business proposition designed to digitize fragmented commercial leasing. The project includes a 15-slide investor pitch deck, multi-tier broker commission models, comprehensive unit economics (CAC, LTV, Payback period), and a high-fidelity interactive broker portal prototype.",
    businessPitch:
      "Commercial real estate leasing in Tier-1 metropolitan hubs suffers from a 65-day average transaction cycle and zero transparency. PropScale modernizes this $14B opportunity by incentivizing top brokerage networks through digitized inventory, standardized SLA verification, and a 1.5% take-rate monetization engine.",
    techArchitecture:
      "Data-backed financial modeling in Google Sheets/Excel, PowerBI deal-velocity dashboards, and interactive high-fidelity Figma user journey prototypes simulating broker-to-tenant transactions.",
    managementValue:
      "Comprehensive Go-To-Market (GTM) playbook, B2B partner acquisition funnels, SLA guarantees for corporate tenants, and five-year financial revenue pro-forma projections.",
    keyMetrics: [
      { label: "TAM Market Size", value: "$14B" },
      { label: "Projected LTV / CAC", value: "3.4x" },
      { label: "Deal Cycle Reduction", value: "65d → 28d" },
      { label: "Year-2 Projected ARR", value: "$1.2M" },
    ],
    techStack: ["PowerBI", "Financial Modeling", "Figma Prototype", "Market Analytics", "Excel / DAX", "Notion GTM"],
    managementFeatures: [
      "15-Slide Investor Pitch Deck (Problem, TAM, Solution, Traction, Financials)",
      "Multi-tier partner commission structures and broker SLA contracts",
      "Unit economics breakdown: CAC, LTV, Payback period, and Churn analysis",
      "Pilot rollout strategy across 150+ regional commercial brokerages",
    ],
    technicalFeatures: [
      "PowerBI interactive revenue and deal-velocity dashboard",
      "High-fidelity interactive Figma wireframes with verified user flows",
      "Automated financial sensitivity model with variable churn and commission rates",
      "Competitive benchmarking matrix vs traditional property portals",
    ],
    links: {
      demo: "https://propscale-dealflow-model.web.app",
      demoLabel: "Deal Flow Model Portal",
      presentation: "https://pitch.com/p/propscale-commercial-growth-deck-gaurang",
      presentationLabel: "15-Slide Investor Pitch Deck",
      github: "https://figma.com/@gaurang/propscale-b2b-portal-prototype",
      githubLabel: "Interactive Figma Prototype",
    },
    image: "/images/projects/propscale-b2b.svg",
    featured: true,
  },
  {
    id: "practo-care",
    title: "Practo Care — Full-Stack Healthcare Consultation & Clinic Engine",
    category: "Full Stack Tech",
    categoryLabel: "Product & Engineering Ownership",
    badge: "Solo Shipped Product",
    focus: "Technical & Product",
    shortDesc:
      "Independently owned from requirements to launch. Balanced dual stakeholder needs (patients booking vs. doctors managing clinics) with GraphQL and MERN.",
    fullDesc:
      "Practo Care is a production-ready medical appointment and clinic operations platform. Acting as the sole decision-maker across product, design, and engineering, Gaurang balanced competing priorities between two disparate stakeholder groups: anxious patients needing friction-free slot discovery and busy doctors needing clinic queue control and schedule predictability.",
    businessPitch:
      "Solving appointment drop-offs by reducing patient booking steps to under 45 seconds while equipping clinics with automated SMS notifications, reducing no-show rates by an estimated 25%.",
    techArchitecture:
      "Architected using MongoDB, Express.js, React.js, Node.js (MERN) with GraphQL for high-efficiency querying. Features JWT authentication, role-based dashboards, and automated email/calendar alerts.",
    managementValue:
      "Demonstrates end-to-end product ownership without supervision: stakeholder persona mapping, feature scoping, tradeoff prioritization, and full lifecycle execution.",
    keyMetrics: [
      { label: "Product Lifecycle", value: "100% Owned" },
      { label: "Stakeholders Balanced", value: "Patients & Doctors" },
      { label: "Query Architecture", value: "GraphQL + REST" },
      { label: "Deployment", value: "Live & Scalable" },
    ],
    techStack: ["React.js", "GraphQL", "Node.js", "Express", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    managementFeatures: [
      "Balanced trade-offs between doctor administrative controls and patient UI speed",
      "Comprehensive product roadmap from user research to staging deployment",
      "Dual user journey optimization: 45s booking vs clinic calendar management",
    ],
    technicalFeatures: [
      "GraphQL API for granular appointment fetching and nested doctor profiles",
      "Dual role-based dashboards with patient history and doctor appointment queues",
      "Responsive UI built with clean Tailwind design tokens and notification toasts",
      "MongoDB aggregation pipelines for clinical revenue and appointment analytics",
    ],
    links: {
      demo: "https://practo-health-engine.web.app",
      demoLabel: "Live Application",
      github: "https://github.com/Gaurang5704/practo-doctor-appointment-platform",
      githubLabel: "GitHub Repository",
    },
    image: "/images/projects/practo-care.svg",
    featured: true,
  },
  {
    id: "edusync-stream",
    title: "EduSync Stream — Student-Focused Collaborative Learning Platform",
    category: "Team Leadership",
    categoryLabel: "Cross-Functional Team Delivery",
    badge: "Team Project & Alignment",
    focus: "50/50 Hybrid",
    shortDesc:
      "Coordinated a cross-functional engineering team, translating unstructured student learning needs into prioritized features: study playlists, meetups, and watchrooms.",
    fullDesc:
      "A modern video-centric collaborative learning ecosystem inspired by modern streaming apps. Gaurang coordinated a multi-member cross-functional team, steering sprint prioritization, resolving competing inputs, and acting as the bridge between UI designers and backend engineers to deliver synchronized study watch-parties and peer study playlists.",
    businessPitch:
      "Transformed passive YouTube study material into active collaborative study cohorts, addressing the 70% attrition rate in self-paced digital education.",
    techArchitecture:
      "Built with React on the frontend, MongoDB for content and user metadata, Socket.io for millisecond-synchronized video states, and Node.js REST APIs.",
    managementValue:
      "Managed sprint backlogs, facilitated standups, resolved conflicting code and design priorities, and kept team delivery on schedule across milestones.",
    keyMetrics: [
      { label: "Team Alignment", value: "Point of Contact" },
      { label: "Sync Accuracy", value: "< 100ms" },
      { label: "Features Shipped", value: "Watchrooms, Meet, Playlists" },
      { label: "Architecture", value: "Component-Based" },
    ],
    techStack: ["React.js", "Socket.io", "MongoDB", "Node.js", "Express", "WebRTC", "Git Collab"],
    managementFeatures: [
      "Prioritized roadmap trade-offs between complex video sync and study room chats",
      "Facilitated team alignment between frontend and backend contributors",
      "Conducted user interviews with 25+ university peers to validate features",
    ],
    technicalFeatures: [
      "Real-time video synchronization across multiple remote watchroom peers",
      "Collaborative playlist management with shared upvoting and study tags",
      "Component-based React architecture with clean state management",
    ],
    links: {
      demo: "https://edusync-streaming-hub.web.app",
      demoLabel: "Live App Demo",
      github: "https://github.com/Gaurang5704/edusync-learning-platform",
      githubLabel: "GitHub Repository",
    },
    image: "/images/projects/edusync-stream.svg",
    featured: true,
  },
];

export const skillsData = {
  management: [
    {
      name: "Key Account Management & Client Retention",
      level: 92,
      tag: "Core",
      description: "Managing 150+ monthly accounts, relationship cadences, and contract renewals.",
    },
    {
      name: "Cross-Functional Team Leadership",
      level: 90,
      tag: "Core",
      description: "Bridging engineering sprints with sales targets, PRDs, and C-suite expectations.",
    },
    {
      name: "CRM & Pipeline Architecture",
      level: 94,
      tag: "Core",
      description: "End-to-end lead stages, follow-up automations, data hygiene, and funnel visibility.",
    },
    {
      name: "Operations Optimization & SLA Tracking",
      level: 88,
      tag: "Core",
      description: "Overhauling handoffs and operational bottlenecks; reduced turnaround by 30%.",
    },
    {
      name: "Data-Driven Decision Making & KPI Reporting",
      level: 91,
      tag: "Analytical",
      description: "Translating messy operational telemetry into clear executive KPI dashboards.",
    },
    {
      name: "Product Lifecycle Ownership & Prioritization",
      level: 87,
      tag: "Product",
      description: "Defining user personas, managing tradeoffs, writing PRDs, and driving MVPs.",
    },
    {
      name: "Stakeholder Negotiation & Conflict Resolution",
      level: 89,
      tag: "Executive",
      description: "Aligning conflicting priorities between technical teams and business partners.",
    },
  ],
  technical: [
    {
      name: "Full-Stack Development (MERN Stack)",
      level: 90,
      tag: "Engineering",
      description: "MongoDB, Express.js, React.js, Node.js component architecture & state handling.",
    },
    {
      name: "Python & Data Engineering",
      level: 88,
      tag: "Data",
      description: "Data analysis, data transformation pipelines, backend automation scripts.",
    },
    {
      name: "GraphQL & RESTful API Architecture",
      level: 86,
      tag: "Systems",
      description: "Structured query schemas, rate limiting, token authentication, and endpoints.",
    },
    {
      name: "Business Intelligence & PowerBI",
      level: 92,
      tag: "Analytics",
      description: "DAX formulas, executive dashboards, data modeling, and business visualizations.",
    },
    {
      name: "Cloud, Firebase & AWS Fundamentals",
      level: 84,
      tag: "Cloud",
      description: "Cloud storage, serverless functions, authentication, and database hosting.",
    },
    {
      name: "Git, Version Control & CI/CD",
      level: 89,
      tag: "DevOps",
      description: "Branching strategies, code reviews, PR management, and deployment pipelines.",
    },
    {
      name: "UI/UX & Systems Wireframing (Figma)",
      level: 85,
      tag: "Design",
      description: "High-fidelity interactive prototyping, design tokens, and user flow mapping.",
    },
  ],
};

export const educationData = [
  {
    institution: "ITM Skills University",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    duration: "2023 – 2027",
    location: "Mumbai, Maharashtra",
    gradeBadge: "Enrolled / In Progress",
    description:
      "Core coursework bridging rigorous computer science foundations (Data Structures, Algorithms, Software Engineering, Database Systems) with business strategy, technology management, and entrepreneurship.",
    highlights: [
      "Focus: Software Architecture, Enterprise Systems & Database Engineering",
      "Hands-on Project Lead across university technical and management hackathons",
      "Active participant in technical symposiums and tech-community events",
    ],
  },
  {
    institution: "Chhatrapati Shivaji University, Kolhapur",
    degree: "Central Board of Secondary Education (CBSE)",
    major: "Higher Secondary Certificate (Science & Mathematics)",
    duration: "2021 – 2023",
    location: "Maharashtra, India",
    gradeBadge: "Completed",
    description:
      "Strong analytical foundation in Physics, Chemistry, and Advanced Mathematics with an emphasis on analytical problem-solving and computer fundamentals.",
    highlights: [
      "Rigorous training in mathematics, probability, and quantitative analysis",
      "Competed in regional academic Olympiads and sports tournaments",
    ],
  },
];

export const certificationsData = [
  {
    title: "Python Certified Developer",
    issuer: "HackerRank",
    category: "Technical",
    badge: "Verified Skill",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Automation"],
    verificationUrl: "https://www.hackerrank.com/certificates/gaurang-python",
  },
  {
    title: "Java Certified Developer",
    issuer: "HackerRank",
    category: "Technical",
    badge: "Verified Skill",
    skills: ["Backend Architecture", "OOP Design Patterns", "Memory Management", "Multithreading"],
    verificationUrl: "https://www.hackerrank.com/certificates/gaurang-java",
  },
  {
    title: "PowerBI Data Analytics Specialist",
    issuer: "Office Master",
    category: "Management & Data",
    badge: "Enterprise Analytics",
    skills: ["Executive Dashboards", "DAX Calculations", "Data Modeling", "Business KPIs"],
    verificationUrl: "https://officemaster.in/certificates/gaurang-powerbi",
  },
  {
    title: "AI Tools & Executive Productivity",
    issuer: "B10X",
    category: "Tech & Operations",
    badge: "Productivity",
    skills: ["Prompt Engineering", "Workflow Automation", "AI-Powered Research", "Ops Efficiency"],
    verificationUrl: "https://b10x.in/certificates/gaurang-ai-tools",
  },
];

export const volunteeringData = [
  {
    role: "Event Volunteer Coordinator",
    event: "FlutterFlow Community Day",
    type: "Tech Community",
    duration: "2024",
    location: "Mumbai",
    description:
      "Assisted in event logistics, workshop coordination, and supported 100+ participants with hands-on app-building activities, debugging workflow logic, and integrating third-party APIs.",
  },
];

export const hobbiesAndPersonality = [
  {
    id: "chess",
    title: "National-Level Chess Player",
    subtitle: "Strategic Foresight & High-Pressure Calculation",
    category: "Strategic Mindset",
    badge: "National Competitor",
    accentColor: "#cb6d51", // terracotta
    icon: "Crown",
    quote: "A bad plan is better than no plan at all — but an adaptable strategy wins the endgame.",
    story:
      "Competing at the National level in Chess fundamentally shaped how I approach complex engineering projects and business operations. In chess, every pawn move alters the entire board dynamic; you must foresee 5 to 10 moves ahead, prepare counter-strategies for aggressive competitor moves, and manage your clock under intense time pressure.",
    managementTakeaway:
      "Directly applies to roadmap trade-offs, anticipating pipeline bottlenecks, and negotiating high-stakes client renewals with composure.",
    stats: [
      { label: "Competitive Level", value: "National" },
      { label: "Preferred Style", value: "Positional & Dynamic" },
      { label: "Core Muscle", value: "Pattern Recognition" },
    ],
  },
  {
    id: "basketball",
    title: "District-Level Basketball Player",
    subtitle: "High-Tempo Communication, Court Vision & Trust",
    category: "Team Synergy",
    badge: "District Competitor",
    accentColor: "#769e84", // sage green
    icon: "Trophy",
    quote: "Individual brilliance wins possessions, but synchronized team rhythm wins championships.",
    story:
      "Playing basketball at the District level taught me that high performance is all about rapid verbal communication, defensive discipline, and instantaneous trust. When breaking a full-court press, there is no time for hesitation; you read off-ball movements, anticipate passing lanes, and execute fast-breaks as one cohesive unit.",
    managementTakeaway:
      "Translates to leading cross-functional teams: setting clear lane responsibilities, backing up teammates during crisis escalations, and maintaining unrelenting momentum.",
    stats: [
      { label: "Competitive Level", value: "District" },
      { label: "On-Court Role", value: "Playmaker & Defense" },
      { label: "Core Muscle", value: "Rapid Team Sync" },
    ],
  },
  {
    id: "outdoor-fitness",
    title: "Outdoor Trekking & Endurance Fitness",
    subtitle: "Resilience, Mental Clarity & Physical Tenacity",
    category: "Grit & Endurance",
    badge: "Lifestyle & Stamina",
    accentColor: "#d9a045", // warm amber
    icon: "Mountain",
    quote: "The summit is merely the halfway point; the journey requires sustained pacing and mental resolve.",
    story:
      "Beyond the screen, I recharge through rigorous high-altitude trekking in the Western Ghats and disciplined physical training (swimming, functional calisthenics, and endurance workouts). Pushing through steep gradients and adverse weather conditions builds deep mental tenacity and emotional calm during workplace stress.",
    managementTakeaway:
      "Brings sustained energy, high work capacity, and an unshakeable calmness when navigating chaotic launch deadlines and operational fires.",
    stats: [
      { label: "Sahyadri Treks Conquered", value: "12+" },
      { label: "Discipline", value: "Swimming & Calisthenics" },
      { label: "Core Muscle", value: "Unflinching Grit" },
    ],
  },
];

export const dualFocusComparison = [
  {
    dimension: "Core Motivation",
    techPerspective: "Building resilient, performant, elegant software and data tools.",
    managementPerspective: "Driving revenue retention, reducing SLA delays, and optimizing people & pipelines.",
    synthesis: "Building the exact technical tools that operations leadership needs to scale.",
  },
  {
    dimension: "Day-to-Day Output",
    techPerspective: "React components, GraphQL schemas, database models, automation scripts.",
    managementPerspective: "CRM pipeline health, 150+ client touchpoints, partner alignment, marketing execution.",
    synthesis: "Bilingual communicator who translates executive business logic into pristine Jira PRDs.",
  },
  {
    dimension: "Measurable Impact",
    techPerspective: "70% data accuracy improvement, bug-free deployments, clean APIs.",
    managementPerspective: "30% turnaround reduction, 100% active account coverage, on-time campaign delivery.",
    synthesis: "Delivering measurable business outcomes backed by verifiable technical implementations.",
  },
];
