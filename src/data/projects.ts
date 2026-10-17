export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: "Concept Demonstration" | "Internal Engineering Flagship";
  category: string;
  industry: string;
  overview: string;
  businessChallenge: string;
  solutionOverview: string;
  architectureDetails: string[];
  technologies: string[];
  engineeringBenchmarks: {
    metric: string;
    description: string;
  }[];
  keyFeatures: string[];
  implementationTimeline: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "nexus-rag-enterprise",
    slug: "nexus-rag-enterprise",
    title: "Nexus Enterprise Knowledge Copilot",
    tagline: "High-precision conversational retrieval pipeline over confidential organizational documents",
    badge: "Internal Engineering Flagship",
    category: "AI & RAG Architecture",
    industry: "Enterprise Knowledge Management",
    overview:
      "Nexus is an internal engineering architecture designed by Z INTECH to demonstrate secure, low-latency document search over proprietary manuals, regulatory guidelines, and standard operating procedures.",
    businessChallenge:
      "Enterprise employees lose hours each week sifting through scattered PDFs, intranet portals, and fragmented documentation. Off-the-shelf public AI models expose confidential proprietary intellectual property to third-party model retraining.",
    solutionOverview:
      "We engineered a private Retrieval-Augmented Generation (RAG) pipeline utilizing dense semantic vector search, dynamic document chunking with metadata tagging, and strict zero-data-retention model endpoints.",
    architectureDetails: [
      "Document ingestion pipeline parsing PDFs, Markdown, and docx files into semantic passages",
      "Vector embedding generation stored in high-performance pgvector PostgreSQL instance",
      "Hybrid reranking step combining semantic cosine similarity with BM25 keyword matching",
      "Strict citation generator ensuring every AI answer includes direct page and paragraph references",
      "Role-based access filtering ensuring users only receive answers from documents they have clearance to view",
    ],
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Python FastAPI",
      "LangChain",
      "PostgreSQL (pgvector)",
      "Docker",
    ],
    engineeringBenchmarks: [
      {
        metric: "< 1.4s Query Latency",
        description: "End-to-end vector retrieval, reranking, and initial streaming token response time",
      },
      {
        metric: "100% Sourced Citations",
        description: "Zero hallucinated citations through strict temperature controls and prompt boundaries",
      },
      {
        metric: "Zero Data Retention",
        description: "Engineered with ephemeral inference memory and strict VPC firewalling",
      },
    ],
    keyFeatures: [
      "Natural language multi-turn conversational interface",
      "Interactive source document previewer highlighting relevant excerpts",
      "Administrator document upload and re-indexing queue",
      "Query feedback telemetry for continuous retrieval tuning",
    ],
    implementationTimeline: "Built as a production-grade blueprint over 4 engineering sprint cycles",
  },
  {
    id: "strata-cloud-orchestrator",
    slug: "strata-cloud-orchestrator",
    title: "Strata Cloud Deployment Blueprint",
    tagline: "Infrastructure as Code framework for automated multi-environment cloud provisioning",
    badge: "Internal Engineering Flagship",
    category: "Cloud & DevOps",
    industry: "Cloud Infrastructure",
    overview:
      "Strata represents Z INTECH's standardized AWS deployment blueprint. It packages enterprise VPC segmentation, automated container builds, zero-downtime rolling updates, and monitoring into reusable Terraform modules.",
    businessChallenge:
      "Early-stage companies and modernizing businesses frequently rely on manual server setups, leading to configuration drift, missed security patches, and catastrophic single-point-of-failure outages during peak traffic.",
    solutionOverview:
      "We codified a complete Infrastructure as Code (IaC) repository that provisions a secure, self-healing AWS infrastructure stack in under 20 minutes, backed by GitHub Actions CI/CD and CloudWatch alarms.",
    architectureDetails: [
      "Isolated multi-tier VPC with public, private app, and private database subnets across 2 Availability Zones",
      "Elastic Container Service (ECS Fargate) for serverless container execution with auto-scaling",
      "PostgreSQL RDS Multi-AZ instance with automatic automated daily snapshots and KMS encryption",
      "AWS Application Load Balancer with TLS termination and AWS WAF rate-limiting rules",
      "Automated CI/CD pipeline triggered on git tag push with automated rollbacks on health check failure",
    ],
    technologies: [
      "AWS (ECS, RDS, VPC, ALB, WAF)",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Prometheus & CloudWatch",
    ],
    engineeringBenchmarks: [
      {
        metric: "99.95% Target Availability",
        description: "Multi-AZ active-passive failover and automated container health recovery",
      },
      {
        metric: "< 5 Min Automated Deployments",
        description: "From code commit push to live rolling update without taking existing connections down",
      },
      {
        metric: "Strict Encryption at Rest & Transit",
        description: "TLS 1.3 enforced at load balancer with AES-256 encrypted EBS and RDS storage",
      },
    ],
    keyFeatures: [
      "One-command multi-environment provisioning (dev, staging, prod)",
      "Centralized log streaming and alerting to Slack / email",
      "Automated cost allocation tags for precise billing visibility",
      "Pre-configured bastion host with session manager (no open SSH ports)",
    ],
    implementationTimeline: "Continuously refined across 2+ years of production infrastructure work",
  },
  {
    id: "flowsync-process-engine",
    slug: "flowsync-process-engine",
    title: "FlowSync Intelligent Workflow Engine",
    tagline: "Automated business event routing, multi-tier approvals, and webhook orchestration",
    badge: "Concept Demonstration",
    category: "Intelligent Automation",
    industry: "Business Operations",
    overview:
      "A prototype and demonstration of an event-driven automation middleware connecting customer intake channels, database records, and automated notification loops with human-in-the-loop checkpoints.",
    businessChallenge:
      "Organizations lose days when critical requests bounce between email inboxes, spreadsheets, and legacy software with no central accountability or status transparency.",
    solutionOverview:
      "FlowSync connects external webhooks and intake forms to a stateful orchestration engine. It automatically validates incoming data, requests manager approvals via interactive WhatsApp/Slack notifications, and updates core databases upon approval.",
    architectureDetails: [
      "Node.js event broker consuming webhooks with Redis-backed rate limiting and deduplication",
      "Visual state machine managing transitions (Submitted → Under Review → Approved → Executed)",
      "Interactive webhook actions for Slack and WhatsApp Business API",
      "Comprehensive audit trail recording actor, action, timestamp, and metadata for every state change",
    ],
    technologies: [
      "Node.js",
      "Redis",
      "PostgreSQL",
      "Tailwind CSS",
      "WhatsApp Business API",
    ],
    engineeringBenchmarks: [
      {
        metric: "Sub-50ms Event Ingestion",
        description: "Immediate webhook acknowledgement with asynchronous background job dispatch",
      },
      {
        metric: "Zero Duplicate Processing",
        description: "Strict idempotency key verification preventing repeat executions",
      },
      {
        metric: "Full Audit Traceability",
        description: "100% of event transitions logged with immutable cryptographic timestamps",
      },
    ],
    keyFeatures: [
      "Interactive drag-and-drop workflow visualizer",
      "One-click approval/rejection triggers from mobile notifications",
      "Automated exception alerts and dead-letter queue monitoring",
      "Exportable compliance transaction logs",
    ],
    implementationTimeline: "Architectural prototype built for demonstration and client workflow pilots",
  },
  {
    id: "omniportal-enterprise-suite",
    slug: "omniportal-enterprise-suite",
    title: "OmniPortal Custom Management Platform",
    tagline: "Modern, responsive enterprise management suite with role-based permissions",
    badge: "Concept Demonstration",
    category: "Custom Software Engineering",
    industry: "SaaS & Enterprise Portals",
    overview:
      "A conceptual digital portal blueprint demonstrating high-speed data tables, responsive mobile navigation, multi-role access controls, and automated reporting for growing organizations.",
    businessChallenge:
      "Standard off-the-shelf software tools charge steep per-seat fees while failing to adapt to unique corporate approval hierarchies, custom document fields, and local compliance requirements.",
    solutionOverview:
      "We engineered a scalable Next.js and Tailwind CSS portal template featuring fine-grained permission control, optimistic UI data grids, and instantaneous document exports.",
    architectureDetails: [
      "Server-side rendered dashboard components for instant First Contentful Paint (<0.8s)",
      "Granular role-based access control (Admin, Manager, Auditor, Field Staff)",
      "Virtualized data tables capable of rendering 10,000+ records smoothly without DOM thrashing",
      "Client-side CSV/PDF report generation with customizable branding headers",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide Icons",
    ],
    engineeringBenchmarks: [
      {
        metric: "< 0.8s First Contentful Paint",
        description: "Optimized server rendering and streamlined client hydration",
      },
      {
        metric: "100% Strict Type Safety",
        description: "End-to-end typed contracts between UI components and API responses",
      },
      {
        metric: "Fully Accessible UI",
        description: "Compliant with WCAG 2.1 AA keyboard navigation and contrast ratios",
      },
    ],
    keyFeatures: [
      "Customizable widgets and operational metrics",
      "Granular permission matrix per user role",
      "Batch bulk actions and inline table editing",
      "Comprehensive dark/light high-contrast theme support",
    ],
    implementationTimeline: "Engineered as an internal reusable component framework",
  },
];
