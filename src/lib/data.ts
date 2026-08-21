export const levels = ["hero", "level01", "level02", "level03", "level04", "contact"] as const;

export const hero = {
  eyebrow: "// 2026 PORTFOLIO",
  headlineLine1: "AI / ML",
  headlineLine2: "ENGINEER",
  subtext:
    "Prakrati Chadda — building agentic AI systems on SAP-connected infrastructure. Final-year CS @ Bennett University.",
  startHref: "#level01",
  marquee: ["ABOUT ME", "EXPERIENCE", "PROJECTS", "SKILLS"],
};

export const player = {
  dialogue: {
    hello: "HELLO!!",
    lines: [
      "PLAYER: Prakrati Chadda",
      "ROLE: AI/ML Engineer",
      "MISSION: Build agentic AI systems that don't hallucinate through SAP finance & ops workflows.",
      "STATUS: Ready to ship.",
    ],
  },
  techStack: ["PY", "RAG", "DKR", "SQL", "TF", "GAN", "FLASK"],
  trainingLog: ["B.Tech CSE", "Bennett University", "2023–2027", "CGPA 8.68/10"],
  specialAbility: [
    "Deterministic Python for anything that must be correct (matching, classifying, calculating).",
    "LLM reasoning only for language, ambiguity & retrieval.",
    "Result: agents that don't hallucinate through finance.",
  ],
};

export type QuestStatus = "done" | "active" | "locked";

export const quest = {
  role: "AI Engineer Intern · Jan 2026–Present",
  org: "Coreops.ai",
  roster: [
    { name: "P2P / O2C Exception Handler", label: "● MOST ACTIVE", status: "active" as QuestStatus },
    { name: "Ask SAP Anything", label: "▶ IN PROGRESS", status: "active" as QuestStatus },
    { name: "Finance Close Copilot", label: "▶ IN PROGRESS", status: "active" as QuestStatus },
    { name: "HR / SuccessFactors Agent", label: "🔒 BLOCKED", status: "locked" as QuestStatus },
    { name: "Audit / SOX Evidence Agent", label: "🔒 BLOCKED", status: "locked" as QuestStatus },
  ],
  objectives: [
    {
      text: "Financial Variance Agent — reads annual reports and doubles as a Q&A chatbot. Teams ask it questions directly instead of digging through pages by hand.",
      bold: "Financial Variance Agent",
      impact: "cuts manual report review time for SAP/finance teams.",
    },
    {
      text: "Two deterministic P2P/O2C classifiers baked into a custom OCR sandbox image.",
      bold: "P2P/O2C classifiers",
    },
    {
      text: "PDF extraction tool added to the platform's shared tool catalog — used by multiple agents, not just mine.",
      bold: "PDF extraction tool",
    },
    {
      text: "Invoice Duplicate Validator — four-tier matching mirroring SAP VIM logic, fully deterministic.",
      bold: "Invoice Duplicate Validator",
    },
    {
      text: "Boss fight: found & fixed a platform-wide env-var mismatch silently breaking sandboxed code execution.",
      bold: "Boss fight:",
      emoji: "🐛",
    },
    {
      text: "QA swept the low-code agent builder — found a template undeployable from retired node types.",
    },
  ],
};

export type Project = {
  num: string;
  fileName: string;
  title: string;
  desc: string;
  detail: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    num: "01 · GENAI",
    fileName: "variance_agent",
    title: "FINANCIAL VARIANCE AGENT",
    desc: "Reads annual reports, explains what changed, and answers questions directly.",
    detail:
      "Extraction tool → sandboxed analysis → multi-section prompting → auto-report. Also runs as a chatbot for SAP/finance teams — saving real review time.",
    stack: ["PYTHON", "CHATBOT"],
  },
  {
    num: "02 · DETERMINISTIC",
    fileName: "invoice_validator",
    title: "INVOICE DUPLICATE VALIDATOR",
    desc: "Four-tier duplicate detector mirroring SAP VIM logic.",
    detail: "Provably correct, not probably right — pure Python, no model in the loop.",
    stack: ["PYTHON", "SAP VIM"],
  },
  {
    num: "03 · COMPUTER VISION",
    fileName: "forgery_detector",
    title: "ART FORGERY DETECTOR",
    desc: "GAN-based forgery detection, cross-architecture evaluation.",
    detail:
      "ResNet50 transfer learning — same pattern-detection backbone used in industrial defect detection.",
    stack: ["GAN", "RESNET50"],
    link: "https://github.com/jboiie/historic-artwork-forgery-detection",
  },
  {
    num: "04 · IOT + ML",
    fileName: "driver_auth",
    title: "ANTI-THEFT CAR SYSTEM",
    desc: "Driver authentication via behavioral anomaly detection.",
    detail: "LightGBM driver-auth module, CAN-bus anomaly detection, AES/TLS-secured comms.",
    stack: ["LIGHTGBM", "YOLO"],
    link: "https://github.com/amankalsi3627/Anti-Theft-Car-System",
  },
];

export const sideQuest =
  "+1 SIDE QUEST: also designed & built the website for VILIP Fashion Fabrics, a clothing boutique e-commerce site.";

export const inventory = [
  {
    label: "GENAI & AGENTS",
    chips: ["LLM apps", "RAG pipelines", "Knowledge graphs", "Agentic AI", "Prompt engineering"],
  },
  {
    label: "DEEP LEARNING & CV",
    chips: ["TensorFlow", "Keras", "CNNs", "GANs", "ResNet50", "YOLO"],
  },
  {
    label: "CLASSICAL ML",
    chips: ["LightGBM", "Anomaly detection", "Feature engineering"],
  },
  {
    label: "CORE & INFRA",
    chips: ["Python", "SQL", "Docker", "Django REST", "Flask", "Git"],
  },
];

export type Cert = { icon: string; label: string; featured?: boolean };

export const education = {
  exchange: {
    title: "NUS Exchange Program",
    subtitle: "Big Data & Deep Learning — National University of Singapore",
    date: "Jun 2025",
  },
  certs: [
    { icon: "🏅", label: "SmartBU Hackathon — Top 100" },
    { icon: "🏅", label: "Deloitte Simulation" },
    { icon: "🏅", label: "IIT Roorkee — Data Science" },
    { icon: "🏅", label: "IISc — Deep Learning" },
    { icon: "🏅", label: "IBM — SQL" },
    { icon: "👑", label: "IIT Madras — LLMs (Top 5%)", featured: true },
  ] satisfies Cert[],
};

export const finish = {
  heading: "GAME COMPLETE",
  subtext: "Building something that needs both correctness and language? Let's talk.",
  buttons: [
    { label: "EMAIL ✉", href: "mailto:chaddaprakrati@gmail.com" },
    { label: "LINKEDIN", href: "https://linkedin.com/in/prakrati-chadda" },
    { label: "GITHUB", href: "https://github.com/prakratichadda" },
  ],
  footer: "Prakrati Chadda © 2026 · Noida, India",
};
