import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service — Z INTECH Private Limited",
  description:
    "Review the commercial terms of service, intellectual property ownership agreements, and engagement guidelines for Z INTECH Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 bg-[#111110] text-[#F5F1E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Badge variant="blue" className="mb-4">
            Legal Terms &amp; Agreement
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E9] leading-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#78756F] font-mono">
            Last Updated: October 2026 &bull; {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="bg-[#161615] rounded-3xl p-8 sm:p-12 border border-[#2B2A27] shadow-sm space-y-8 text-sm sm:text-base text-[#A6A39C] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website at https://zintech.in or engaging {COMPANY_INFO.legalName}
              for consulting, design, or engineering services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              2. Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              Unless otherwise specified in a formal Master Services Agreement (MSA):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-[#F5F1E9]">Client Ownership:</strong> Upon receipt of full payment for contracted milestones,
                all custom code, repository commits, and proprietary assets created specifically for the client
                transfer fully to the client.
              </li>
              <li>
                <strong className="text-[#F5F1E9]">Background IP:</strong> Pre-existing frameworks, open-source libraries, and reusable
                architectural scaffolding remain subject to their respective open-source or proprietary licenses.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              3. Scope of Commercial Engagements
            </h2>
            <p>
              All software development, cloud provisioning, and AI integrations are executed under
              mutually agreed Statements of Work (SOWs) specifying sprint milestones, deliverables,
              and acceptance testing criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any legal disputes arising under these terms
              shall be subject to the exclusive jurisdiction of the competent courts in Nagpur and Wardha,
              Maharashtra, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
              5. Contact Information
            </h2>
            <p>
              For legal inquiries or corporate contracts, reach out to our legal desk at{" "}
              <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="text-[#D97745] hover:underline">
                {COMPANY_INFO.contacts.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
