"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  const currentYear = 2026;
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0e0e12] text-[#A6A39C] border-t border-[#23232a] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Content with responsive grid for Mobile, Tablet/iPad & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-[#23232a]">
          {/* COLUMN 1: CONTACT */}
          <div className="space-y-5 md:col-span-1 lg:col-span-4">
            <div>
              <h3 className="font-sans font-bold text-xl text-[#F5F1E9] tracking-tight">
                Contact
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#8e8b84]">
                Reach out to zintech for cloud and AI help
              </p>
            </div>

            {/* Social Media Modern Icons */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#191920] hover:bg-[#252530] border border-[#353440] hover:border-[#D97745] text-[#A6A39C] hover:text-[#F5F1E9] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#191920] hover:bg-[#252530] border border-[#353440] hover:border-[#D97745] text-[#A6A39C] hover:text-[#F5F1E9] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Direct Phone Contact */}
            <div className="pt-1 space-y-2">
              <div>
                <span className="block text-[11px] font-mono font-medium tracking-wider text-[#78756F] uppercase">
                  PRIMARY PHONE
                </span>
                <a
                  href={`tel:${COMPANY_INFO.contacts.phonePrimary}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#F5F1E9] hover:text-[#D97745] transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span className="font-mono">{COMPANY_INFO.contacts.phonePrimaryDisplay}</span>
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-mono font-medium tracking-wider text-[#78756F] uppercase">
                  SECONDARY PHONE
                </span>
                <a
                  href={`tel:${COMPANY_INFO.contacts.phoneSecondary}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#F5F1E9] hover:text-[#D97745] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D97745]" />
                  <span className="font-mono">{COMPANY_INFO.contacts.phoneSecondaryDisplay}</span>
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="pt-1">
              <span className="block text-[11px] font-mono font-medium tracking-wider text-[#78756F] uppercase">
                EMAIL
              </span>
              <a
                href="mailto:business@zintech.in"
                className="mt-1 inline-block text-sm sm:text-base font-medium text-[#F5F1E9] hover:text-[#D97745] transition-colors"
              >
                business@zintech.in
              </a>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubmit} className="pt-1 space-y-2 max-w-xs">
              <label
                htmlFor="footer-email"
                className="block text-xs text-[#8e8b84] font-medium"
              >
                Your Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161b]/80 backdrop-blur-xl border border-white/10 text-white placeholder-[#78756F] text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-[#D97745] shadow-inner"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#D97745] hover:bg-[#e58555] text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer shadow-sm shadow-[#D97745]/30"
              >
                {subscribed ? "Sent! ✓" : "Send"}
              </button>
            </form>
          </div>

          {/* COLUMN 2: OUR SERVICES (EXPANDED WITH AI, AUTOMATION & AGENTIC) */}
          <div className="space-y-4 md:col-span-1 lg:col-span-5">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-xl text-[#F5F1E9] tracking-tight">
                Our Services
              </h3>
              <Link
                href="/services"
                className="text-xs font-mono text-[#D97745] hover:underline"
              >
                All 6 Disciplines &rarr;
              </Link>
            </div>

            <ul className="space-y-4 text-xs sm:text-[13px] leading-relaxed">
              {/* 1. AWS Migration */}
              <li className="space-y-0.5">
                <Link href="/services/cloud-services" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; AWS Migration &ndash; Zero Downtime:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    Achieve 99.9% reliability and 30% TCO recovery with SRE-led transitions.
                  </p>
                </Link>
              </li>

              {/* 2. Managed Cloud Ecosystem */}
              <li className="space-y-0.5">
                <Link href="/services/cloud-services" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Managed Cloud Ecosystem:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    24/7 full-lifecycle governance and security for global enterprise workloads.
                  </p>
                </Link>
              </li>

              {/* 3. Cloud Strategy & Consulting */}
              <li className="space-y-0.5">
                <Link href="/services/cloud-services" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Cloud Strategy &amp; Consulting:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    Strategic infrastructure modernization and AI-ready cloud transformation.
                  </p>
                </Link>
              </li>

              {/* 4. Autonomous Agentic AI Workflows */}
              <li className="space-y-0.5">
                <Link href="/services/ai-solutions" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Autonomous Agentic AI Workflows:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    Goal-directed multi-agent tool execution, planning, and self-governing cognitive workflows.
                  </p>
                </Link>
              </li>

              {/* 5. Enterprise AI & Zero-Retention RAG */}
              <li className="space-y-0.5">
                <Link href="/services/ai-solutions" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Enterprise AI &amp; Zero-Retention RAG:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    Domain-tuned LLMs, private vector knowledge retrieval, and zero-retention tenant isolation.
                  </p>
                </Link>
              </li>

              {/* 6. Intelligent Business Process Automation */}
              <li className="space-y-0.5">
                <Link href="/services/business-automation" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Intelligent Process &amp; Workflow Automation:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    Event-driven queue orchestration, automated invoicing (AutoPay), and human-in-the-loop approvals.
                  </p>
                </Link>
              </li>

              {/* 7. Cognitive SRE & Autonomous Cloud Operations */}
              <li className="space-y-0.5">
                <Link href="/services/cloud-services" className="group block">
                  <span className="font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors underline decoration-[#D97745]/60 underline-offset-2">
                    &bull; Cognitive SRE &amp; Self-Healing Cloud:
                  </span>
                  <p className="text-[#8e8b84] pl-3 text-xs leading-normal">
                    AI-driven telemetry triage, automated anomaly remediation, and predictive infrastructure scaling.
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: GLOBAL OPERATIONS & AWS PARTNER BADGE */}
          <div className="space-y-4 md:col-span-2 lg:col-span-3 pt-6 md:pt-4 lg:pt-0 border-t border-[#23232a] md:border-t-0">
            <h3 className="font-sans font-bold text-xl text-[#F5F1E9] tracking-tight">
              Global Operations
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#8e8b84]">
              <li>
                <strong className="text-[#F5F1E9] font-semibold">&bull; Our Offices:</strong>{" "}
                Manish Nagar, Nagpur, Maharashtra &amp; Wardha.
              </li>
              <li>
                <strong className="text-[#F5F1E9] font-semibold">&bull; Markets Served:</strong>{" "}
                United States | United Kingdom | United Arab Emirates.
              </li>
              <li>
                <strong className="text-[#F5F1E9] font-semibold">&bull; Technical Excellence:</strong>{" "}
                Specialized in AWS Cloud Architecture, Production-Level AI Solutions, and Search Intelligence.
              </li>
            </ul>

            {/* Official AWS Partner Badge matching user screenshot */}
            <div className="pt-3">
              <div className="w-32 sm:w-36 bg-white rounded-lg p-3 shadow-md border border-white/20 select-none hover:scale-102 transition-transform duration-200">
                <svg viewBox="0 0 120 110" className="w-full h-auto" fill="none">
                  {/* Badge border with top-right 45-deg chamfer cut */}
                  <path
                    d="M 12 12 H 86 L 108 34 V 98 H 12 Z"
                    stroke="#FF9900"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* "aws" Wordmark */}
                  <text
                    x="60"
                    y="48"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="21"
                    fontWeight="800"
                    fill="#232F3E"
                  >
                    aws
                  </text>
                  {/* AWS iconic smile curved line */}
                  <path
                    d="M 38 58 Q 60 67 82 58"
                    stroke="#FF9900"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* AWS smile arrow head */}
                  <path
                    d="M 77 58 L 83 58 L 81 64 Z"
                    fill="#FF9900"
                  />
                  {/* "PARTNER" Text */}
                  <text
                    x="60"
                    y="78"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="1.8"
                    fill="#232F3E"
                  >
                    PARTNER
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78756F]">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Z INTECH Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(217,119,69,0.25)] group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-sans font-semibold text-xs tracking-tight text-[#F5F1E9]">
                Z INTECH
              </span>
            </Link>
            <span className="font-mono">
              &copy; {currentYear}. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-xs">
            <Link href="/privacy" className="hover:text-[#F5F1E9] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#F5F1E9] transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <span className="font-mono text-[#8e8b84]">
              Maharashtra, India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
