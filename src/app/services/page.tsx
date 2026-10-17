import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Workflow,
  Cloud,
  Code2,
  Smartphone,
  Compass,
  Sparkles,
  Shield,
  Layers,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Engineering Services — AI, Automation, Cloud & Custom Software",
  description:
    "Explore the comprehensive engineering services of Z INTECH Private Limited: AI solutions, intelligent process automation, secure cloud architecture, custom software development, and digital product design.",
};

export default function ServicesPage() {
  const serviceMeta: Record<
    string,
    { icon: React.ReactNode; badge: string; p99: string; highlight: string }
  > = {
    "ai-solutions": {
      icon: <Cpu className="w-6 h-6 text-[#D97745]" />,
      badge: "Flagship",
      p99: "Zero-Retention RAG",
      highlight: "Autonomous multi-agent orchestration and private vector pipelines.",
    },
    "business-automation": {
      icon: <Workflow className="w-6 h-6 text-[#38bdf8]" />,
      badge: "Automation",
      p99: "10K+ evt/s Queues",
      highlight: "Decoupled transaction flows, AutoPay, and human-in-the-loop loops.",
    },
    "cloud-services": {
      icon: <Cloud className="w-6 h-6 text-[#818cf8]" />,
      badge: "Enterprise",
      p99: "99.99% Cloud SLA",
      highlight: "Multi-AZ VPCs, zero-downtime migration, and GitOps Terraform.",
    },
    "custom-software": {
      icon: <Code2 className="w-6 h-6 text-[#34d399]" />,
      badge: "Edge Scale",
      p99: "Sub-40ms Delivery",
      highlight: "Type-safe full-stack platforms on React 19, Turbopack, and FastAPI.",
    },
    "mobile-digital-products": {
      icon: <Smartphone className="w-6 h-6 text-[#fbbf24]" />,
      badge: "Cross-Platform",
      p99: "Offline-First Sync",
      highlight: "Production iOS & Android applications with shared design tokens.",
    },
    "consulting-modernization": {
      icon: <Compass className="w-6 h-6 text-[#a78bfa]" />,
      badge: "Advisory",
      p99: "Strangler Fig Pattern",
      highlight: "Architecture profiling, code reviews, and phased system decoupling.",
    },
  };

  return (
    <div className="py-16 md:py-24 bg-[#111110] text-[#F5F1E9] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ==========================================================
            1. HERO HEADER (CLEAN, MINIMALIST, HIGH-TECH)
           ========================================================== */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-xs font-mono tracking-wider uppercase text-[#D97745]">
            <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse" />
            <span>[01] // CORE DISCIPLINES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F1E9] leading-[1.08]">
            Architected for scale. <br />
            <span className="italic text-[#D97745]">Engineered with certainty.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A6A39C] max-w-2xl leading-relaxed">
            Six focused technical disciplines engineered to eliminate operational friction and transition enterprise infrastructure into autonomous, verifiable systems.
          </p>

          {/* Telemetry Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#78756F]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <Layers className="w-3.5 h-3.5 text-[#D97745]" />
              <span className="text-[#F5F1E9]">6 Domains</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <Shield className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="text-[#F5F1E9]">Zero-Retention Security</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <Zap className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span className="text-[#F5F1E9]">99.9% Production SLA</span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            2. SERVICES BENTO GRID (MINIMALIST CARDS & INTERACTIONS)
           ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const meta = serviceMeta[service.id] || {
              icon: <Cpu className="w-6 h-6 text-[#D97745]" />,
              badge: "Core",
              p99: "High Performance",
              highlight: service.shortDescription,
            };

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 hover:border-[#D97745]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_24px_60px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(217,119,69,0.15)]"
              >
                {/* Top Row: Index + Badge + P99 */}
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#262523]">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold text-[#D97745]">
                        [0{index + 1}]
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#1F1F1D] text-[#A6A39C] border border-[#2B2A27]">
                        {meta.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#78756F]">
                      {meta.p99}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1C1C1A] border border-[#2B2A27] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#D97745]/40 transition-all duration-300">
                      {meta.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#F5F1E9] group-hover:text-white transition-colors leading-snug">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Punchy Highlight Text */}
                  <p className="mt-4 text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                    {meta.highlight}
                  </p>

                  {/* Capabilities Bullet Chips */}
                  <div className="mt-6 space-y-2">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#A6A39C] group-hover:text-[#F5F1E9] transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97745] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 pt-5 border-t border-[#262523] flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#1C1C1A] text-[10.5px] font-mono text-[#78756F] group-hover:text-[#A6A39C] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 4 && (
                      <span className="px-1.5 py-1 text-[10.5px] font-mono text-[#78756F]">
                        +{service.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-[#D97745] group-hover:text-[#e58555] transition-colors">
                  <span>Explore Architecture Blueprint</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ==========================================================
            3. TECHNICAL ARCHITECTURE SHOWCASE CARD (CINEMATIC LIQUID GLASS)
           ========================================================== */}
        <div className="relative rounded-[28px] bg-[#151514]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1.5px_rgba(255,255,255,0.1)] overflow-hidden p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <Image
              src="/images/hero-team-arch.jpg"
              alt="Systems Architecture"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1A] border border-[#2B2A27] text-[11px] font-mono text-[#D97745] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D97745]" />
              PRODUCTION READY BLUEPRINTS
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] font-normal tracking-tight">
              Need a custom system architecture evaluation?
            </h3>
            <p className="text-sm sm:text-base text-[#A6A39C] leading-relaxed">
              Connect directly with our lead systems architects to review your existing AWS topology, AI feasibility, or workflow automation roadmap.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-sm transition-all duration-200 text-center shadow-lg shadow-[#D97745]/30 hover:shadow-[#D97745]/50 cursor-pointer"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1C1C1A] hover:bg-[#252523] border border-[#2B2A27] text-[#F5F1E9] font-semibold text-sm transition-all duration-200 text-center"
            >
              Browse Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
