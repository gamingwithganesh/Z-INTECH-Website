"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CapabilityPillars() {
  const editorialRows = [
    {
      id: "01",
      title: "Autonomous Agentic AI",
      slug: "ai-solutions",
      description:
        "Self-orchestrating multi-agent systems and cognitive workflows designed for production certainty.",
      details: "Goal-directed agents, autonomous tool execution, sub-task planning, and private domain RAG models built with strict zero enterprise data leakage.",
    },
    {
      id: "02",
      title: "Automation that scales",
      slug: "business-automation",
      description:
        "Connect repetitive processes, data silos, and transactional workflows into self-governing pipelines.",
      details: "Event-driven queue orchestration, automated invoice reconciliation (AutoPay), and human-in-the-loop validation channels.",
    },
    {
      id: "03",
      title: "Cloud built for growth",
      slug: "cloud-services",
      description:
        "Zero-downtime AWS cloud migrations and managed ecosystems supporting your next stage of growth.",
      details: "Resilient AWS multi-AZ deployments, 99.9% reliability, 30% TCO recovery with SRE-led transitions, and strictly typed TypeScript architectures.",
    },
  ];

  return (
    <section className="bg-[#111110] text-[#F5F1E9] py-24 sm:py-32 border-t border-[#353431]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A6A39C] mb-4">
            CORE DISCIPLINE
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] font-normal tracking-tight">
            For businesses building what&apos;s next.
          </h2>
        </div>

        {/* Editorial Rows */}
        <div className="divide-y divide-[#353431]">
          {editorialRows.map((row) => (
            <div
              key={row.id}
              className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline group"
            >
              {/* Left Column: Marker + Capability Heading */}
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#D97745] font-medium tracking-wider">
                  [{row.id}]
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] group-hover:text-[#D97745] transition-colors">
                  {row.title}
                </h3>
              </div>

              {/* Right Column: Concise explanation & link */}
              <div className="md:col-span-7 space-y-3">
                <p className="text-base sm:text-lg text-[#F5F1E9] leading-relaxed font-normal">
                  {row.description}
                </p>
                <p className="text-sm text-[#A6A39C] leading-relaxed">
                  {row.details}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/services/${row.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#D97745] hover:text-[#e58555] font-medium transition-colors group/link"
                  >
                    <span>Read capability profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
