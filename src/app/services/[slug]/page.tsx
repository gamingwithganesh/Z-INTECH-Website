import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Zap,
  Terminal,
  ArrowLeft,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} — Z INTECH Engineering`,
    description: service.shortDescription,
  };
}

export const instant = false;

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 bg-[#111110] text-[#F5F1E9] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ==========================================================
            1. BREADCRUMB & HERO HEADER
           ========================================================== */}
        <div className="space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6A39C] hover:text-[#D97745] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Engineering Disciplines</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191918] border border-[#2B2A27] text-xs font-mono uppercase text-[#D97745]">
              <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse" />
              <span>{service.heroTag} // ARCHITECTURAL BLUEPRINT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#D97745] font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#A6A39C] leading-relaxed max-w-3xl">
              {service.overview}
            </p>
          </div>

          {/* Quick Telemetry Chips */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-[#161615] border border-[#262523] text-[#F5F1E9] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#38bdf8]" />
              Enterprise Data Isolation
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#161615] border border-[#262523] text-[#F5F1E9] flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#fbbf24]" />
              Production SLA Guaranteed
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#161615] border border-[#262523] text-[#F5F1E9] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#D97745]" />
              Full Repository Ownership
            </span>
          </div>
        </div>

        {/* ==========================================================
            2. TWO-COLUMN HIGH-TECH BLUEPRINT GRID
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Architecture Highlights & Capabilities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Architecture Highlights Card */}
            <div className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D97745]">
                  <Terminal className="w-4 h-4 text-[#D97745]" />
                  <span>SYSTEM ARCHITECTURE HIGHLIGHTS</span>
                </div>
                <span className="text-[11px] font-mono text-[#78756F]">VERIFIED SPEC</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {service.architectureHighlights.map((arch, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#1C1C1A]/60 backdrop-blur-md border border-white/[0.06] hover:border-[#D97745]/40 transition-colors space-y-2 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97745]" />
                      <h3 className="text-base font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                        {arch.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed pl-3.5">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Capabilities Grid */}
            <div className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F5F1E9]">
                  <Cpu className="w-4 h-4 text-[#38bdf8]" />
                  <span>CORE CAPABILITIES MATRIX</span>
                </div>
                <span className="text-[11px] font-mono text-[#78756F]">{service.capabilities.length} CAPABILITIES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1C1C1A]/60 backdrop-blur-md border border-white/[0.06] text-xs text-[#A6A39C] hover:text-[#F5F1E9] hover:border-[#D97745]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D97745] shrink-0 mt-0.5" />
                    <span className="leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Deliverables, Stack, Business ROI & Consultation */}
          <div className="lg:col-span-5 space-y-6">
            {/* Key Deliverables Card */}
            <div className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78756F] block">
                PRODUCTION DELIVERABLES
              </span>
              <ul className="space-y-3">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-[#D97745] font-bold mt-0.5">&bull;</span>
                    <span className="text-[#F5F1E9] leading-snug">{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78756F] block">
                RECOMMENDED TECH STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#1C1C1A]/80 border border-white/[0.08] text-[#A6A39C] font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Business Impact Card */}
            <div className="rounded-3xl bg-[#181816]/75 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D97745]">
                <Zap className="w-4 h-4 text-[#D97745]" />
                <span>MEASURABLE BUSINESS IMPACT</span>
              </div>
              <ul className="space-y-3">
                {service.businessImpact.map((impact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F1E9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] mt-1.5 shrink-0" />
                    <span className="leading-snug">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Consultation CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1A1A18]/80 to-[#141413]/80 backdrop-blur-2xl border border-[#D97745]/40 p-6 sm:p-8 space-y-4 shadow-xl shadow-black/50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1A]/80 text-[10px] font-mono uppercase tracking-wider text-[#D97745] border border-white/[0.08]">
                <Sparkles className="w-3 h-3 text-[#D97745]" />
                DIRECT ARCHITECT SESSION
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Plan your {service.title} roadmap
              </h3>
              <p className="text-xs text-[#A6A39C] leading-relaxed">
                Connect directly with our senior engineers to review technical specifications and evaluate timelines.
              </p>
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#D97745]/20 hover:shadow-[#D97745]/35 cursor-pointer"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
