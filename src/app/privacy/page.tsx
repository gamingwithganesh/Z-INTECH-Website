import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy — Z INTECH Private Limited",
  description:
    "Review Z INTECH Private Limited's privacy policy, enterprise data protection protocols, and zero third-party AI training guarantees.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 bg-[#111110] text-[#F5F1E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Badge variant="blue" className="mb-4">
            Governance &amp; Privacy
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E9] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#78756F] font-mono">
            Effective Date: October 2026 &bull; {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="bg-[#161615] rounded-3xl p-8 sm:p-12 border border-[#2B2A27] shadow-sm space-y-8 text-sm sm:text-base text-[#A6A39C] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              1. Overview &amp; Commitment
            </h2>
            <p>
              {COMPANY_INFO.legalName} (&ldquo;Z INTECH&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
              is committed to protecting the privacy and confidentiality of individuals and business entities
              interacting with our websites, software products, and consulting engagements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              2. Strict AI Model &amp; Enterprise Data Safeguards
            </h2>
            <p>
              When clients engage Z INTECH for artificial intelligence, Retrieval-Augmented Generation (RAG),
              or automation solutions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-[#F5F1E9]">Zero Public Training:</strong> We mandate zero-data-retention APIs and private VPC endpoints.
                Your proprietary documentation, emails, and database records are never used to train or refine public AI models.
              </li>
              <li>
                <strong className="text-[#F5F1E9]">Data Isolation:</strong> All vector embeddings and parsed documents are stored in dedicated,
                tenant-isolated databases with encryption at rest (AES-256) and in transit (TLS 1.3).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              3. Information We Collect
            </h2>
            <p>
              We collect information that you explicitly provide when requesting consultations or submitting forms:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>Contact details: Name, business email, phone number, and organization name.</li>
              <li>Technical specifications: Project descriptions, estimated budgets, and architectural requirements.</li>
              <li>Technical telemetry: Standard server access logs, IP hashes for rate limiting, and browser user-agent strings.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              4. How We Use Collected Data
            </h2>
            <p>
              Data collected through this website is used solely to respond to inquiries, schedule discovery sessions,
              and prepare commercial proposals. We never sell, rent, or trade your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              5. Contact Information &amp; Data Rights
            </h2>
            <p>
              To request access, correction, or deletion of your data, contact our data protection team:
            </p>
            <div className="p-5 rounded-2xl bg-[#1C1C1A] border border-[#2B2A27] text-xs font-mono space-y-1.5 text-[#F5F1E9]">
              <div>Email: <span className="text-[#D97745]">{COMPANY_INFO.contacts.email}</span></div>
              <div>Phone: <span className="text-[#D97745]">{COMPANY_INFO.contacts.phonePrimary}</span> / {COMPANY_INFO.contacts.phoneSecondary}</div>
              <div className="text-[#78756F]">Registered Operations: Nagpur &amp; Wardha, Maharashtra, India</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
