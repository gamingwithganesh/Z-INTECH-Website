export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  challengesSolved: string[];
  keyComponents: string[];
  targetAudience: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "ai-workflow-transformation",
    slug: "ai-workflow-transformation",
    title: "AI-Powered Workflow Transformation",
    subtitle: "From manual back-and-forth to autonomous, validated decision engines",
    badge: "Enterprise AI",
    description:
      "Transform labor-intensive operational choke points into streamlined, AI-assisted workflows. We weave foundation models, structured prompts, and automated validation gates directly into your day-to-day business systems.",
    challengesSolved: [
      "Employees spending 30%+ of their day answering repetitive customer inquiries",
      "Manual routing and indexing of incoming invoices, requests, and documents",
      "Human error during repetitive multi-system data transfer",
      "Slow response times causing lost prospective client conversions",
    ],
    keyComponents: [
      "Custom Multi-Agent Orchestration Engine",
      "Private Enterprise Knowledge Retrieval (RAG)",
      "Automated Fallback & Human-in-the-Loop Approval Checkpoints",
      "Real-time System Webhooks and Automated Audit Trail",
    ],
    targetAudience:
      "Professional service firms, educational institutions, customer support teams, and growing enterprises looking to scale output without linearly scaling headcount.",
    deliverables: [
      "Custom fine-tuned RAG pipeline over internal files",
      "Multi-channel conversational interface (Web, WhatsApp, Slack)",
      "Executive analytics dashboard tracking deflection rate and response quality",
    ],
    metrics: [
      { label: "Query Resolution Speed", value: "< 2.5s" },
      { label: "Manual Triage Reduction", value: "Up to 75%" },
      { label: "Data Leakage Risk", value: "0% (Zero-Retention)" },
    ],
  },
  {
    id: "cloud-modernization-resilience",
    slug: "cloud-modernization-resilience",
    title: "Cloud Modernization & Scalable Infrastructure",
    subtitle: "Migrate legacy single-server setups to elastic, highly-available cloud foundations",
    badge: "Cloud Architecture",
    description:
      "Eliminate single points of failure and unpredictable server costs. We migrate and re-platform legacy applications to modern, containerized AWS environments featuring automatic failover, encrypted storage, and automated deployment pipelines.",
    challengesSolved: [
      "Frequent downtime during traffic spikes or software updates",
      "Uncertainty around disaster recovery, backups, and data corruption risks",
      "Painful manual FTP/SSH software deployments prone to human mistakes",
      "Spiraling, unmonitored server bills without transparent resource attribution",
    ],
    keyComponents: [
      "Multi-AZ High Availability VPC Topology",
      "Automated Zero-Downtime Blue/Green Deployments via GitHub Actions",
      "Containerized Microservices on AWS ECS / EKS with Auto-Scaling",
      "Continuous Infrastructure Monitoring with Prometheus & CloudWatch",
    ],
    targetAudience:
      "Growing companies outgrowing shared hosting or unmanaged VPS instances, and enterprises requiring audited security standards.",
    deliverables: [
      "Modular Terraform Infrastructure as Code repository",
      "Encrypted database clusters with point-in-time recovery",
      "Automated staging and production CI/CD workflows",
    ],
    metrics: [
      { label: "Historical Uptime Target", value: "99.95%" },
      { label: "Deployment Cycle Time", value: "< 4 mins" },
      { label: "Cloud Cost Efficiency", value: "30-45% Saved" },
    ],
  },
  {
    id: "intelligent-document-processing",
    slug: "intelligent-document-processing",
    title: "Intelligent Document & Data Processing",
    subtitle: "Automate ingestion, extraction, and validation of PDFs, invoices, and forms",
    badge: "Automation & OCR",
    description:
      "Turn mountains of unstructured documents into structured JSON records ready for your database. Our document pipelines combine computer vision, OCR, and Large Language Models to extract key-value data with 99%+ accuracy.",
    challengesSolved: [
      "Hundreds of hours spent manually retyping physical forms and scanned PDFs",
      "Mismatched vendor invoices leading to delayed billing cycles",
      "Regulatory audit nightmares due to missing or misfiled paperwork",
      "Difficulty searching through legacy document repositories",
    ],
    keyComponents: [
      "Adaptive Layout Recognition & Multi-Language OCR",
      "Context-Aware Entity Extraction (Names, Totals, Dates, Tax IDs)",
      "Automated Cross-Validation against Internal Databases & ERPs",
      "Manual Discrepancy Flagging UI for rapid team review",
    ],
    targetAudience:
      "Logistics providers, finance departments, educational registrar offices, and healthcare administration teams.",
    deliverables: [
      "Serverless Document Processing API endpoint",
      "Web-based batch upload and manual review portal",
      "Automated export pipelines to PostgreSQL / ERP systems",
    ],
    metrics: [
      { label: "Processing Speed per Doc", value: "< 1.8s" },
      { label: "Extraction Accuracy", value: "99.2%" },
      { label: "Operational Cost Reduction", value: "70%" },
    ],
  },
  {
    id: "bespoke-enterprise-portals",
    slug: "bespoke-enterprise-portals",
    title: "Bespoke Enterprise Portals & SaaS Platforms",
    subtitle: "Custom-built digital products designed to scale with your organization",
    badge: "Software Engineering",
    description:
      "Replace clunky spreadsheets and patchwork SaaS tools with a tailor-made web platform engineered to reflect your specific operating procedures, security protocols, and branding.",
    challengesSolved: [
      "Critical company data trapped in vulnerable, unshared spreadsheets",
      "Paying excessive monthly per-user licensing fees for generic SaaS platforms",
      "Inability to enforce strict role-based access control across diverse teams",
      "Poor client onboarding experience harming brand credibility",
    ],
    keyComponents: [
      "Next.js App Router with Server-Rendered Performance",
      "Role-Based Access Control (RBAC) with Multi-Factor Authentication",
      "Interactive Real-Time Data Tables, Filters, and PDF Export Engines",
      "Direct API integrations with existing payment gateways and ERPs",
    ],
    targetAudience:
      "Enterprises requiring proprietary client-facing portals, student management systems, partner dashboards, or custom SaaS products.",
    deliverables: [
      "Complete typed TypeScript web application",
      "Production-ready database migrations and seeding scripts",
      "Comprehensive end-user and administrator documentation",
    ],
    metrics: [
      { label: "Page Load Time (LCP)", value: "< 0.8s" },
      { label: "User Adoption Rate", value: "94%+" },
      { label: "SaaS Licensing Saved", value: "100% Owned" },
    ],
  },
];
