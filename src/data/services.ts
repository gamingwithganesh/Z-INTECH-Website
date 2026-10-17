export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  heroTag: string;
  tagline: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  businessImpact: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions & Autonomous Agents",
    shortDescription:
      "Enterprise foundation model integration, goal-directed autonomous agents, private zero-retention RAG search, and cognitive process automation.",
    category: "Artificial Intelligence",
    heroTag: "Autonomous Systems",
    tagline: "Turn unstructured enterprise knowledge and manual decisions into autonomous agentic engines.",
    overview:
      "Z INTECH architects practical, secure, and production-tested artificial intelligence and autonomous agent systems. We engineer goal-directed multi-agent architectures that plan, reason, and invoke tools, combined with Retrieval-Augmented Generation (RAG) pipelines over proprietary documentation with strict zero data retention.",
    capabilities: [
      "Autonomous Multi-Agent Tool Orchestration & Cognitive Planning",
      "Custom Conversational AI & Domain-Tuned Assistants",
      "Retrieval-Augmented Generation (RAG) with Vector Databases",
      "Intelligent Document Processing (IDP) & OCR Pipelines",
      "Cognitive SRE & Telemetry Anomaly Triage Agents",
      "LLM Guardrails, Safety Validation & Zero-Retention Security",
      "Fine-Tuned Open Source Models for On-Premise/Private Cloud",
    ],
    deliverables: [
      "End-to-end vector indexing and RAG pipeline",
      "Domain-specific conversational interface with citations",
      "Automated document extraction and parsing microservice",
      "Observability dashboard tracking query latency, accuracy, and token economics",
      "Full API documentation and secure access controls",
    ],
    techStack: [
      "OpenAI API",
      "Anthropic Claude API",
      "Llama 3 / Mistral",
      "LangChain & LlamaIndex",
      "Pinecone / Qdrant / pgvector",
      "FastAPI & Python",
    ],
    architectureHighlights: [
      {
        title: "Hybrid Retrieval Architecture",
        description:
          "Combines dense semantic vector embeddings with sparse keyword search (BM25) for sub-millisecond, high-precision document recall.",
      },
      {
        title: "Enterprise Data Isolation",
        description:
          "Zero-retention policies and private VPC tenant isolation ensuring company IP and confidential customer records are never used for third-party model training.",
      },
    ],
    businessImpact: [
      "Up to 80% reduction in customer response latency",
      "Elimination of repetitive manual document triage",
      "Zero compliance leakage via strict automated redaction and guardrails",
    ],
  },
  {
    id: "business-automation",
    slug: "business-automation",
    title: "Intelligent Business Automation",
    shortDescription:
      "End-to-end workflow orchestration, automated approval chains, third-party system integrations, and scheduled operational pipelines.",
    category: "Automation",
    heroTag: "Operational Efficiency",
    tagline: "Unify fragmented software silos into self-governing business workflows.",
    overview:
      "Operational friction slows growing businesses down. Z INTECH designs resilient automation pipelines that connect your ERP, CRM, communication channels, and databases. We eliminate duplicate data entry, accelerate cross-department approval loops, and trigger automated alerts when exceptions occur.",
    capabilities: [
      "Multi-System Workflow Orchestration & Decision Engines",
      "Agentic AutoPay & Automated Billing Reconciliation",
      "Automated Multi-Tier Approval Workflows & Human-in-the-Loop",
      "Webhook & Event-Driven Message Brokers (Kafka / SQS)",
      "Custom Zapier / Make / n8n / Python Automation Engines",
      "Exception Handling, Self-Recovery & Escalation Protocols",
    ],
    deliverables: [
      "Audit of legacy operational bottlenecks & mapping diagram",
      "Resilient workflow connectors with automatic retries and dead-letter queues",
      "Automated Slack/Email/WhatsApp notification bots",
      "Admin monitor showing transaction volume and error states",
    ],
    techStack: [
      "n8n / Temporal",
      "Node.js & Python",
      "Redis Queue / Celery",
      "REST & GraphQL Webhooks",
      "PostgreSQL",
    ],
    architectureHighlights: [
      {
        title: "Idempotent Transaction Handling",
        description:
          "Guarantees that network drops or duplicate webhook emissions never result in duplicate orders, invoices, or charges.",
      },
      {
        title: "Stateful Audit Trails",
        description:
          "Every step of the automated workflow logs timestamped state changes to an immutable ledger for auditing and compliance.",
      },
    ],
    businessImpact: [
      "65% decrease in operational transaction turnaround times",
      "Complete elimination of copy-paste manual data entry errors",
      "Real-time operational visibility for management",
    ],
  },
  {
    id: "cloud-services",
    slug: "cloud-services",
    title: "Secure Cloud Services & DevOps",
    shortDescription:
      "Resilient AWS and multi-cloud architecture, serverless container orchestration, automated CI/CD pipelines, and active security monitoring.",
    category: "Infrastructure",
    heroTag: "Cloud & DevOps",
    tagline: "High-availability, audited cloud foundations engineered for 99.9% uptime.",
    overview:
      "Z INTECH architecturally structures cloud environments that withstand sudden traffic surges while remaining strictly cost-efficient. From initial cloud migration to automated Kubernetes deployment pipelines and continuous security hardening, our cloud practice guarantees peace of mind.",
    capabilities: [
      "AWS & Multi-Cloud Architecture Design",
      "Containerization (Docker) & Orchestration (ECS / Kubernetes)",
      "Infrastructure as Code (Terraform & Pulumi)",
      "Automated Zero-Downtime CI/CD Pipelines",
      "Cloud Cost Auditing & FinOps Optimization",
      "Automated Daily Backups & Disaster Recovery Protocols",
    ],
    deliverables: [
      "Production-ready Infrastructure as Code repositories",
      "Secure VPC setup with private subnets, NAT gateways, and WAF protection",
      "Automated GitHub Actions CI/CD pipeline",
      "24/7 CloudWatch / Grafana monitoring alerts and health checks",
    ],
    techStack: [
      "Amazon Web Services (AWS)",
      "Docker & Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Nginx & Cloudflare",
      "Prometheus & Grafana",
    ],
    architectureHighlights: [
      {
        title: "Zero-Trust Network Perimeter",
        description:
          "Database and internal services reside in isolated private VPC subnets accessible only via encrypted bastion or VPN endpoints.",
      },
      {
        title: "Automated Elastic Scaling",
        description:
          "Dynamic autoscaling groups that scale computing resources up during peak operational windows and down during off-hours.",
      },
    ],
    businessImpact: [
      "Up to 40% reduction in wasteful cloud infrastructure spend",
      "Zero-downtime rolling releases for new software versions",
      "Continuous compliance adherence with automated encrypted backups",
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Engineering",
    shortDescription:
      "Modern full-stack web applications, enterprise client portals, multi-tenant SaaS platforms, and resilient REST & GraphQL APIs.",
    category: "Engineering",
    heroTag: "Custom Platforms",
    tagline: "Bespoke digital software tailored to your proprietary competitive advantage.",
    overview:
      "Off-the-shelf software rarely accommodates the distinctive workflows of ambitious organizations. Z INTECH builds bespoke web and enterprise software using modern typed architectures like Next.js, React, Node.js, and PostgreSQL. Every line of code is modular, tested, and built for maintainability.",
    capabilities: [
      "Enterprise Web Applications & Internal Portals",
      "Multi-Tenant SaaS Architecture",
      "High-Throughput REST & GraphQL API Design",
      "Role-Based Access Control (RBAC) & Single Sign-On (SSO)",
      "Database Modeling, Normalization & Query Tuning",
      "Legacy Codebase Refactoring & Migration",
    ],
    deliverables: [
      "Clean, fully typed TypeScript codebase with zero vendor lock-in",
      "Comprehensive unit, integration, and end-to-end test suite",
      "Interactive Swagger/OpenAPI documentation",
      "Production deployment documentation and architectural runbooks",
    ],
    techStack: [
      "Next.js (App Router)",
      "React 19 & TypeScript",
      "Node.js & Express / NestJS",
      "PostgreSQL & Prisma / Drizzle",
      "Redis & Tailwind CSS",
    ],
    architectureHighlights: [
      {
        title: "Clean Layered Architecture",
        description:
          "Strict separation of concerns between presentation, domain logic, and data repository layers to ensure maintainability over years.",
      },
      {
        title: "Optimistic UI & Edge Caching",
        description:
          "Sub-100ms page transitions via Next.js server components and incremental static regeneration.",
      },
    ],
    businessImpact: [
      "Complete ownership of intellectual property with zero recurring license penalties",
      "Infinite customizability aligned precisely to company workflows",
      "High user adoption thanks to consumer-grade interface aesthetics",
    ],
  },
  {
    id: "mobile-digital-products",
    slug: "mobile-digital-products",
    title: "Mobile & Digital Products",
    shortDescription:
      "High-performance native and cross-platform mobile apps, responsive PWAs, interactive design systems, and product prototyping.",
    category: "Product Design & Mobile",
    heroTag: "Mobile & Interfaces",
    tagline: "Fluid, tactile, and responsive digital experiences across all viewports.",
    overview:
      "We design and build engaging mobile and digital experiences that delight end users and perform reliably in the field. From Android enterprise utilities to full cross-platform customer applications, our products focus on speed, offline resilience, and modern visual polish.",
    capabilities: [
      "Android & Cross-Platform Mobile Applications",
      "Progressive Web Apps (PWAs) with Offline Caching",
      "Enterprise Design Systems & UI Kits in Figma",
      "Interactive Rapid Product Prototyping",
      "Biometric Authentication & Hardware Integration",
      "App Store & Google Play Deployment Management",
    ],
    deliverables: [
      "Production mobile application bundle (APK / AAB)",
      "Figma design system with comprehensive tokens and component variants",
      "Offline sync engine and local storage layer",
      "Push notification service setup via Firebase Cloud Messaging",
    ],
    techStack: [
      "React Native & Expo",
      "Android SDK / Kotlin",
      "Figma",
      "Firebase / Supabase",
      "Tailwind CSS & Framer Motion",
    ],
    architectureHighlights: [
      {
        title: "Offline-First Data Sync",
        description:
          "Local SQLite/IndexedDB caching allowing technicians and field operators to continue working with zero cellular connectivity.",
      },
      {
        title: "Design Token Synchronization",
        description:
          "Single-source-of-truth styling system linking Figma variables directly to mobile code constants.",
      },
    ],
    businessImpact: [
      "Expanded customer reach through native device presence",
      "Higher field team productivity through offline-capable apps",
      "Accelerated time-to-market using modular UI components",
    ],
  },
  {
    id: "consulting-modernization",
    slug: "consulting-modernization",
    title: "Technology Consulting & Modernization",
    shortDescription:
      "Strategic digital transformation roadmaps, legacy system audits, cloud cost optimization, and technology modernization advisory.",
    category: "Consulting",
    heroTag: "Strategic Advisory",
    tagline: "Pragmatic technical guidance to de-risk investments and accelerate growth.",
    overview:
      "Before writing a single line of code, strategic alignment is essential. Z INTECH provides fractional technical leadership and modernization roadmaps for business leaders seeking to replace brittle legacy software, adopt AI safely, or prepare their infrastructure for exponential scale.",
    capabilities: [
      "Comprehensive Legacy Codebase & Security Audits",
      "AI Readiness & Feasibility Assessments",
      "Cloud Infrastructure Cost & Performance Auditing",
      "Technical Architecture Planning & System Design",
      "Vendor Evaluation & Build vs. Buy Decision Framing",
      "Compliance, Data Governance & Security Roadmaps",
    ],
    deliverables: [
      "Executive Technology Audit Report with prioritized findings",
      "Comprehensive 3-phase Modernization Blueprint",
      "Architecture diagram & data flow blueprints",
      "Target Cloud Cost Projection & ROI Model",
    ],
    techStack: [
      "System Architecture Blueprints",
      "OWASP Security Benchmarks",
      "AWS Well-Architected Framework",
      "FinOps Tooling",
    ],
    architectureHighlights: [
      {
        title: "Strangler Fig Migration Pattern",
        description:
          "Incrementally replace legacy monolithic systems piece-by-piece to avoid risky high-stakes 'big bang' rewrites.",
      },
      {
        title: "Measurable Milestones",
        description:
          "Deliver value at each 2-week cycle rather than waiting months for initial production validation.",
      },
    ],
    businessImpact: [
      "Mitigation of millions in prospective architectural technical debt",
      "Clarity on software project budgets and timelines",
      "Empowered stakeholders with transparent technical roadmaps",
    ],
  },
];
