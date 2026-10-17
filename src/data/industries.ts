export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  headline: string;
  applications: string[];
  operationalBenefits: string[];
  complianceNotes: string;
  recommendedStack: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "education",
    slug: "education",
    title: "Education & Academics",
    shortDesc:
      "Modernize admissions, automate student query resolution, and engineer secure academic administration portals.",
    headline: "Intelligent digital workflows for schools, universities, and coaching institutions.",
    applications: [
      "AI-Powered Admissions Assistants handling 24/7 course queries and application guidance",
      "Automated Certificate Generation, Verification & Student Record Portals",
      "Attendance, Fee Collection & Multi-Branch Management Systems",
      "Automated Exam Timetable & Room Allocation Algorithms",
    ],
    operationalBenefits: [
      "Instant query resolution for prospective students and parents during peak admissions cycles",
      "Drastic reduction in administrative paperwork for faculty and registrars",
      "Secure student data privacy adhering to institutional standards",
    ],
    complianceNotes: "Designed with student record isolation and role-based faculty permissions.",
    recommendedStack: ["Next.js", "PostgreSQL", "WhatsApp API", "FastAPI / Python"],
  },
  {
    id: "financial-services",
    slug: "financial-services",
    title: "Financial & Professional Services",
    shortDesc:
      "Automated invoice reconciliation, secure client reporting portals, and audited document extraction.",
    headline: "High-integrity software and automation for chartered accountants, consultants, and firms.",
    applications: [
      "Intelligent extraction of key financial figures from invoices, receipts, and bank statements",
      "Client Document Request & Encrypted Upload Portals",
      "Automated Tax Compliance & Due Date Notification Workflows",
      "Internal Knowledge Retrieval across legal frameworks, regulatory acts, and case laws",
    ],
    operationalBenefits: [
      "Accelerated monthly book reconciliation and financial close cycles",
      "Elimination of manual transcription errors across financial spreadsheets",
      "Encrypted transmission of sensitive customer accounting records",
    ],
    complianceNotes: "Built with zero-retention AI protocols and encrypted data-at-rest requirements.",
    recommendedStack: ["Python OCR / LLM", "AWS KMS", "PostgreSQL", "Docker"],
  },
  {
    id: "healthcare-admin",
    slug: "healthcare-admin",
    title: "Healthcare Administration",
    shortDesc:
      "Patient scheduling automation, digitized clinical records, and cloud backup systems for clinics and hospitals.",
    headline: "Reliable, patient-friendly administration systems that reduce front-desk bottlenecks.",
    applications: [
      "Automated Multi-Channel Patient Appointment Booking & WhatsApp Reminders",
      "Intelligent Clinic Workflow & Queue Management Systems",
      "Secure Cloud Storage & Disaster Recovery for Diagnostic Reports and X-Rays",
      "Internal Inventory & Medical Equipment Maintenance Tracking",
    ],
    operationalBenefits: [
      "Significantly reduced patient no-show rates via automated confirmations",
      "Faster front-desk intake and check-in workflows",
      "High-availability cloud backups preventing patient data loss",
    ],
    complianceNotes: "Engineered around strict access control logs and patient confidentiality boundaries.",
    recommendedStack: ["React", "Node.js", "Redis", "AWS S3 Encrypted Buckets"],
  },
  {
    id: "retail-commerce",
    slug: "retail-commerce",
    title: "Retail & Commerce",
    shortDesc:
      "Omnichannel inventory synchronization, automated order notification pipelines, and custom commerce storefronts.",
    headline: "Unified digital platforms that bridge in-store operations with digital sales channels.",
    applications: [
      "Real-Time Multi-Warehouse Inventory Tracking and Reorder Alerts",
      "Automated WhatsApp & SMS Order Status and Delivery Notifications",
      "Custom B2B Ordering Portals for Wholesale Dealers and Distributors",
      "AI Recommendation Engines based on customer purchase history",
    ],
    operationalBenefits: [
      "Prevention of stockouts and over-purchasing through predictive notifications",
      "Direct engagement with buyers through automated messaging channels",
      "Streamlined wholesale B2B repeat orders without manual quote exchanges",
    ],
    complianceNotes: "Adheres to secure payment gateway protocols and customer privacy norms.",
    recommendedStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Stripe / Razorpay API"],
  },
  {
    id: "manufacturing-operations",
    slug: "manufacturing-operations",
    title: "Manufacturing & Operations",
    shortDesc:
      "Production tracking dashboards, equipment maintenance logs, and supply chain dispatch automation.",
    headline: "Digital shop-floor visibility and supply chain automation for industrial enterprises.",
    applications: [
      "Shop-Floor Batch Tracking and Quality Control Inspection Forms",
      "Preventive Machinery Maintenance Scheduling and Automated Alerting",
      "Raw Material Supplier Order Tracking & Dispatch Validation",
      "Executive Operational KPI Dashboards accessible on mobile and tablets",
    ],
    operationalBenefits: [
      "Real-time operational visibility into production cycle delays",
      "Decreased unplanned equipment downtime through scheduled maintenance triggers",
      "Accurate historical batch traceability for quality audits",
    ],
    complianceNotes: "Designed for resilient offline-capable tablet operation in warehouse environments.",
    recommendedStack: ["Next.js PWA", "Node.js", "PostgreSQL", "MQTT / WebSockets"],
  },
  {
    id: "startups-technology",
    slug: "startups-technology",
    title: "Startups & High-Growth Companies",
    shortDesc:
      "Rapid MVP engineering, scalable cloud architecture, AI feature augmentation, and fractional CTO advisory.",
    headline: "Speed-to-market and production-grade architectures for modern technology ventures.",
    applications: [
      "Rapid Prototype & MVP Engineering using Next.js, TypeScript, and modern databases",
      "AI Copilot & Conversational Features integration into existing SaaS products",
      "Cloud Architecture Design engineered to pass enterprise security reviews",
      "Automated CI/CD pipelines and developer infrastructure setup",
    ],
    operationalBenefits: [
      "Go from concept to production launch in weeks rather than quarters",
      "Architecture built clean from Day 1 to avoid costly future rewrites",
      "Predictable infrastructure costs designed to scale linearly with user growth",
    ],
    complianceNotes: "Full intellectual property transfer with clean git commit history and documentation.",
    recommendedStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS / Vercel", "Prisma"],
  },
];
