import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries Served — Tailored Engineering Solutions",
  description:
    "Domain-specialized AI, automated pipelines, and cloud engineering across education, fintech, healthcare administration, retail, and manufacturing.",
};

const ICONS: Record<string, React.ReactNode> = {
  education: <GraduationCap className="w-5 h-5 text-[#D97745]" />,
  "financial-services": <Landmark className="w-5 h-5 text-[#D97745]" />,
  "healthcare-admin": <HeartPulse className="w-5 h-5 text-[#D97745]" />,
  "retail-commerce": <ShoppingBag className="w-5 h-5 text-[#D97745]" />,
  "manufacturing-operations": <Factory className="w-5 h-5 text-[#D97745]" />,
  "startups-technology": <Rocket className="w-5 h-5 text-[#D97745]" />,
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ==========================================================
            1. HERO VIEWPORT
           ========================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-[#D97745] font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-pulse" />
            <span>Vertical Engineering &bull; Regulatory Discipline</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
            Domain solutions with{" "}
            <span className="italic text-[#D97745]">zero friction.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A6A39C] max-w-2xl leading-relaxed">
            Every sector carries unique operational realities and compliance requirements. We build systems engineered for your industry&apos;s exact constraints.
          </p>
        </div>

        {/* ==========================================================
            2. INDUSTRIES 6-SECTOR MATRIX
           ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-[#161615] border border-[#262523] hover:border-[#D97745]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-[#D97745]/5"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#1C1C1A] border border-[#2B2A27] group-hover:border-[#D97745]/40 transition-colors">
                    {ICONS[ind.id]}
                  </div>
                  <span className="font-mono text-xs text-[#78756F]">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Headline */}
                <div>
                  <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight group-hover:text-[#D97745] transition-colors">
                    {ind.title}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                    {ind.headline}
                  </p>
                </div>

                {/* Core Applications */}
                <div className="space-y-2 pt-3 border-t border-[#262523]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#78756F] block">
                    Core Implementations
                  </span>
                  <div className="space-y-1.5 text-xs text-[#A6A39C]">
                    {ind.applications.slice(0, 3).map((app, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97745] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Badge */}
                <div className="p-3 rounded-xl bg-[#1B1B19] border border-[#262523] text-xs text-[#A6A39C] space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D97745]">
                    <Shield className="w-3 h-3" />
                    <span>Compliance &amp; Data Safeguards</span>
                  </div>
                  <p className="text-[11px] text-[#78756F] leading-snug">
                    {ind.complianceNotes}
                  </p>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="mt-6 pt-4 border-t border-[#262523] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {ind.recommendedStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#191918] border border-[#262523] text-[#A6A39C] font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="text-xs font-semibold text-[#F5F1E9] hover:text-[#D97745] inline-flex items-center gap-1 shrink-0 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            3. BOTTOM CTA BANNER
           ========================================================== */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#161615]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal">
            Have custom industry <span className="italic text-[#D97745]">specifications?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A39C] max-w-xl mx-auto">
            We sign NDAs, respect strict data residency requirements, and deliver tailored architectures.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#D97745]/20"
            >
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
