export type NavItem = {
  index: string;
  label: string;
  sublabel: string;
  href: string;
};

export type Tag = string;

export type FeaturedProject = {
  slug: string;
  index: string;
  category: string;
  title: string;
  subtitle: string;
  tags: Tag[];
  description: string;
  highlight?: string;
  annotation: string[];
  image?: string;
  href?: string;
};

export type ArchiveProject = {
  index: string;
  title: string;
  descriptor: string;
  stack: string;
  href?: string;
};

export type SkillGroup = {
  label: string;
  items: { name: string; icon: string }[];
};

export type Certification = {
  title: string;
  issuer: string;
  description: string;
  logo: string;
  href?: string;
};

export const meta = {
  name: "Danish Khan",
  title: "ERPNext/Frappe Developer | Full-Stack Engineer | Python Developer",
  shortTitle: "Full-Stack Engineer | ERPNext Developer",
  bio: "Full-Stack Developer specialising in ERPNext/Frappe and Python-based backends. Currently at ADRS Techno Pvt. Ltd. building enterprise ERP systems, REST APIs, and full-stack apps using Django, FastAPI, React, Next.js, and Power BI. Mobile apps live on both app stores.",
  tagline: "ENGINEERING SOLUTIONS FOR A BETTER TOMORROW",
  edition: "PORTFOLIO / 2026",
  coordinates: "INDIA / 2026 / ERP / API / WEB / DATA",
  mantra: ["BUILD", "LEARN", "SOLVE", "REPEAT"],
} as const;

export const nav: NavItem[] = [
  { index: "01", label: "INDEX", sublabel: "Home", href: "#index" },
  { index: "02", label: "WORK", sublabel: "Projects", href: "#work" },
  { index: "03", label: "SYSTEMS", sublabel: "Skills", href: "#systems" },
  { index: "04", label: "EXPERIENCE", sublabel: "Journey", href: "#experience" },
  { index: "05", label: "CERTIFICATIONS", sublabel: "Credentials", href: "#certifications" },
  { index: "06", label: "CONTACT", sublabel: "Let's Talk", href: "#contact" },
];

export const stats = [
  { value: "10+", label: "Projects" },
  { value: "500+", label: "APIs Built" },
  { value: "95%", label: "Process Improvement" },
  { value: "∞", label: "Keep Building" },
];

export const heroAnnotation = ["Build", "Automate", "Improve", "Repeat"];

export const diagramPrinciples = ["SCALABLE", "MODULAR", "REAL-WORLD", "SOLUTIONS"];

export const diagramFlow = ["IDEAS", "SYSTEMS", "IMPACT"];

export const diagramFooter = [
  "ENTERPRISE SYSTEMS",
  "API ECOSYSTEM",
  "DATA-DRIVEN SOLUTIONS",
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "shastriji",
    index: "01",
    category: "MOBILE APP / MARKETPLACE",
    title: "SHASTRI JI",
    subtitle: "Pandit Booking & Spiritual Services",
    tags: ["Flutter", "Django", "Frappe", "REST API"],
    description:
      "Live on Play Store & App Store. Pandit booking, puja supplies, Panchang, real-time booking management and push notifications.",
    annotation: ["TRADITION", "MEETS", "TECHNOLOGY"],
  },
  {
    slug: "yojanaai",
    index: "02",
    category: "WEB + MOBILE / AI PLATFORM",
    title: "YOJANAAI",
    subtitle: "Government Scheme Discovery Platform",
    tags: ["Django", "Next.js", "Flutter", "AI / NLP"],
    description:
      "Voice-first, bilingual AI platform for discovering Indian government welfare schemes. Multilingual search, AI scheme matching, web + mobile.",
    annotation: ["SCHEMES", "FOR EVERY", "CITIZEN"],
  },
  {
    slug: "icd-container",
    index: "03",
    category: "ERP / ENTERPRISE",
    title: "ICD CONTAINER DEPOT",
    subtitle: "Billing & Operations System",
    tags: ["ERPNext", "Frappe", "Python", "MariaDB"],
    description:
      "Custom ERPNext app for a container depot — automated billing, gate pass generation, detention charges.",
    highlight: "95% improvement in processing time.",
    annotation: ["95%", "FASTER", "PROCESSING"],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    index: "04",
    title: "Insight Dashboard",
    descriptor: "Amazon Review Analytics",
    stack: "Power BI · DAX",
  },
  {
    index: "05",
    title: "Sentimind",
    descriptor: "AI Sentiment Analysis API",
    stack: "FastAPI · FAISS · Scikit-learn · Docker",
  },
  {
    index: "06",
    title: "Nutripulse",
    descriptor: "Food Tracking App",
    stack: "Django · JavaScript",
  },
  {
    index: "07",
    title: "Face Recognition",
    descriptor: "Flask + OpenCV",
    stack: "Flask · OpenCV · Python",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "LANGUAGES",
    items: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    label: "BACKEND",
    items: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Frappe / ERPNext", icon: "frappe" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    label: "FRONTEND",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Flutter", icon: "flutter" },
      { name: "HTML / CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "DATABASE",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MariaDB", icon: "mariadb" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    label: "TOOLS & INFRA",
    items: [
      { name: "Git / GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Power BI", icon: "powerbi" },
      { name: "DAX", icon: "dax" },
    ],
  },
  {
    label: "WORKFLOW",
    items: [
      { name: "Agile / Scrum", icon: "agile" },
      { name: "JIRA", icon: "jira" },
      { name: "Linux / Bash", icon: "linux" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export const learning = {
  heading: ["// CONTINUOUSLY", "LEARNING"],
  items: ["Better tools", "Cleaner systems", "Real impact", "Always curious"],
};

export const experience = [
  {
    start: "SEP 2025",
    end: "PRESENT",
    role: "ERPNext / Frappe Developer",
    company: "ADRS Techno Pvt. Ltd.",
    type: "Full-time",
    bullets: [
      "Develop and customise ERPNext/Frappe modules — doctypes, server scripts, print formats, REST APIs — for clients in logistics, healthcare and manufacturing.",
      "Built ICD Container Depot billing system, cutting processing time by 95%.",
      "Deliver full-stack features using Django, FastAPI, React, Next.js, Flutter and Power BI dashboards.",
      "Work in Agile/Scrum with JIRA and Confluence.",
    ],
    stack: [
      "ERPNext",
      "Frappe",
      "Python",
      "Django",
      "FastAPI",
      "React",
      "Next.js",
      "Flutter",
      "Power BI",
      "MySQL",
      "MariaDB",
      "Docker",
    ],
  },
];

export const experienceAnnotation = ["BIGGER", "SYSTEMS", "AHEAD"];

export const certifications: Certification[] = [
  {
    title: "CCNA: M1 M2 M3",
    issuer: "Cisco",
    description: "IP addressing, Ethernet, switch-router configuration.",
    logo: "cisco",
    href: "https://www.credly.com/badges/e1256118-1b4e-4dd4-83e7-ba856be8082c/linked_in_profile",
  },
  {
    title: "Power BI Certification",
    issuer: "OfficeMaster",
    description: "AI-powered dashboards, DAX and data analysis.",
    logo: "powerbi",
    href: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61376309",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    description: "OOP, data structures and problem solving.",
    logo: "cisco",
    href: "https://www.credly.com/earner/earned/share/5134f39e-9996-482a-a19e-362805a08b5e",
  },
  {
    title: "Microsoft Copilot for Productivity",
    issuer: "Microsoft & LinkedIn Learning",
    description: "Productivity and AI tools for modern work.",
    logo: "microsoft",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    description: "Security fundamentals and best practices.",
    logo: "cisco",
    href: "https://www.credly.com/earner/earned/share/84b8e669-c624-4983-927f-fb80eb119041",
  },
];

export const certificationsQuote = ["KNOWLEDGE", "CREATES", "OPPORTUNITIES."];

export const contact = {
  headline: ["LET'S BUILD SOMETHING", "THAT WORKS."],
  note: "Open for exciting opportunities, collaborations and impactful projects.",
  email: "danish.prof21@gmail.com",
  linkedin: {
    label: "linkedin.com/in/danish-khan-507b0228a",
    href: "https://www.linkedin.com/in/danish-khan-507b0228a/",
  },
  github: {
    label: "github.com/KDanish-21",
    href: "https://github.com/KDanish-21",
  },
  rights: "© 2026 Danish Khan. All rights reserved.",
  keywords: ["ENGINEER", "CREATE", "AUTOMATE", "IMPACT"],
};
