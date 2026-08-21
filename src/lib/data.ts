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
  trainingLog: ["B.Tech CSE", "Bennett University", "2023–2027", "CGPA 8.68/10"],
  specialAbility:
    "Deterministic logic where correctness matters. LLM reasoning only for language & ambiguity.",
};

export const missionBriefing = {
  paragraphs: [
    "B.Tech CSE undergraduate (CGPA 8.68/10, Bennett University) with hands-on experience building and deploying machine learning and generative AI systems in production. Currently building a suite of SAP-connected AI agents at Coreops.ai — combining deep learning (CNNs, GANs, transfer learning), classical ML (LightGBM, anomaly detection), and LLM applications (RAG pipelines, agentic workflows, prompt engineering).",
    "Comfortable taking a system from experimentation through evaluation to deployment using Python, Docker, and REST APIs — with one consistent principle across every agent shipped: keep deterministic logic deterministic, and scope LLM reasoning to what it's actually good at.",
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

export const secondQuest = {
  role: "Intern",
  org: "Vaco Binary Semantics LLP",
  date: "Jun–Jul 2024",
  bullets: [
    "Designed functional and integration test pipelines for an AI-based Resume Scanner (RAG system) — API-level and end-to-end coverage.",
    "Logged and tracked defects in JIRA, documenting workflows to support release readiness.",
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
    num: "01 · COMPUTER VISION",
    fileName: "forgery_detector",
    title: "ART FORGERY DETECTOR",
    desc: "GAN-based forgery detection, cross-architecture evaluation.",
    detail:
      "ResNet50 transfer learning — same pattern-detection backbone used in industrial defect detection.",
    stack: ["GAN", "RESNET50"],
    link: "https://github.com/jboiie/historic-artwork-forgery-detection",
  },
  {
    num: "02 · IOT + ML",
    fileName: "driver_auth",
    title: "ANTI-THEFT CAR SYSTEM",
    desc: "Driver authentication via behavioral anomaly detection.",
    detail: "LightGBM driver-auth module, CAN-bus anomaly detection, AES/TLS-secured comms.",
    stack: ["LIGHTGBM", "YOLO"],
    link: "https://github.com/amankalsi3627/Anti-Theft-Car-System",
  },
  {
    num: "03 · NLP",
    fileName: "ai_chartered_accountant",
    title: "AI CHARTERED ACCOUNTANT",
    desc: "Automates invoice processing and expense categorization.",
    detail:
      "End-to-end pipeline with transaction anomaly detection — cut manual data entry time by 30%.",
    stack: ["FLASK", "NLTK"],
    link: "https://github.com/prakratichadda/CA",
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

export type Cert = { icon: string; label: string; href: string; featured?: boolean };

export const education = {
  exchange: {
    title: "NUS Exchange Program",
    subtitle: "Big Data & Deep Learning — National University of Singapore",
    date: "Jun 2025",
  },
  topCerts: [
    {
      icon: "🏅",
      label: "SmartBU Hackathon — Top 100",
      href: "https://drive.google.com/file/d/1TMMazllokg5wIrCyX57_3ELjH8QkMx89/view",
    },
    {
      icon: "👑",
      label: "IIT Madras — LLMs (Top 5%)",
      href: "https://drive.google.com/file/d/1Eb_g9BBf8ywZ8Il1kcI0ONuxfsYUfINJ/view",
      featured: true,
    },
    {
      icon: "🏅",
      label: "IIT Madras — BI & Analytics",
      href: "https://drive.google.com/file/d/1GkMYx1q9QS9dj0X_en9dxIvCrW89wRHX/view",
    },
  ] satisfies Cert[],
  alsoCerts: [
    {
      icon: "🏅",
      label: "Deloitte Simulation",
      href: "https://drive.google.com/file/d/1wECnaSnuFpzUW4biXnNY1cKnfdfx1YKq/view",
    },
    {
      icon: "🏅",
      label: "IIT Roorkee — Data Science",
      href: "https://drive.google.com/file/d/1ai75dLafFl0ZfohL_LcCBLnlopvSjVyK/view",
    },
    {
      icon: "🏅",
      label: "IISc — Deep Learning",
      href: "https://drive.google.com/file/d/19clN5z2iEDvWtp75P7GS-TYkt_RjS2Mr/view",
    },
    {
      icon: "🏅",
      label: "IBM — SQL",
      href: "https://www.coursera.org/account/accomplishments/certificate/6BO4RWYHDHL5",
    },
    {
      icon: "🏅",
      label: "NUS — Big Data & Deep Learning",
      href: "https://drive.google.com/file/d/1mbFrFobFhDvktBAlqV5vRtC0dWOi2W5t/view",
    },
    {
      icon: "🏅",
      label: "UC San Diego — Data Structures",
      href: "https://www.coursera.org/account/accomplishments/certificate/2I6FUXO121V2",
    },
    {
      icon: "🏅",
      label: "UC San Diego — Combinatorics & Probability",
      href: "https://www.coursera.org/account/accomplishments/certificate/GBSCYNZN8LCD",
    },
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
