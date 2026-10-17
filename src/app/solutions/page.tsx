import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Enterprise Solutions — Tailored AI & Infrastructure Outcomes",
  description:
    "Explore how Z INTECH solves strategic business hurdles with AI workflow modernization, high-availability cloud re-platforming, and custom web portals.",
};

export default function SolutionsPage() {
  return (
    <div className="py-16 md:py-24 bg-[#111110] text-[#F5F1E9] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ==========================================================
            1. HERO HEADER (CLEAN & EDITORIAL)
           ========================================================== */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-xs font-mono tracking-wider uppercase text-[#D97745]">
            <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse" />
            <span>[02] // STRATEGIC BLUEPRINTS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F1E9] leading-[1.08]">
            Turn friction into <br />
            <span className="italic text-[#D97745]">autonomous velocity.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A6A39C] max-w-2xl leading-relaxed">
            Turnkey engineering architectures combining foundation AI models, resilient AWS clouds, and bespoke platforms to resolve complex bottlenecks.
          </p>

          {/* Metric Telemetry Summary */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#78756F]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <TrendingUp className="w-3.5 h-3.5 text-[#34d399]" />
              <span className="text-[#F5F1E9]">Up to 85% Automation</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <Zap className="w-3.5 h-3.5 text-[#D97745]" />
              <span className="text-[#F5F1E9]">30% Cloud Cost Savings</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151514] border border-[#262523]">
              <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="text-[#F5F1E9]">4 Flagship Blueprints</span>
            </div>
          </div>
        </div>

        {/* ==========================================================
            2. SOLUTIONS 2-COLUMN BENTO GRID
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl hover:bg-[#181816]/85 border border-white/10 hover:border-[#D97745]/50 p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-300 flex flex-col justify-between space-y-8 group"
            >
              {/* Header Bar */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#D97745]">
                      [0{index + 1}]
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-mono uppercase bg-[#1C1C1A]/80 text-[#D97745] border border-white/10">
                      {sol.badge}
                    </span>
                  </div>

                  {/* High-Impact Metrics */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    {sol.metrics.map((m, i) => (
                      <div key={i} className="text-right">
                        <span className="text-[10px] font-mono text-[#78756F] uppercase tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#F5F1E9] font-mono">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title & Concise Subtitle */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F1E9] group-hover:text-white transition-colors tracking-tight">
                    {sol.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#D97745] font-medium">
                    {sol.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Split Challenge & Architecture Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Challenges Resolved */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#1C1C1A]/60 backdrop-blur-md border border-white/[0.08] space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Challenges Solved
                    </span>
                    <ul className="space-y-2 text-xs text-[#A6A39C]">
                      {sol.challengesSolved.slice(0, 3).map((ch, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-rose-400 font-bold">&times;</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Components */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#1C1C1A]/60 backdrop-blur-md border border-white/[0.08] space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#38bdf8] flex items-center gap-1.5 font-semibold">
                      <Layers className="w-3.5 h-3.5" />
                      Components
                    </span>
                    <ul className="space-y-2 text-xs text-[#F5F1E9]">
                      {sol.keyComponents.slice(0, 3).map((kc, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D97745] shrink-0 mt-0.5" />
                          <span className="text-[#C5C2BA]">{kc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#78756F]">
                  <span className="text-[#F5F1E9] font-medium">Built for:</span>{" "}
                  {sol.targetAudience}
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1C1A]/80 hover:bg-[#D97745] text-[#F5F1E9] hover:text-white border border-white/10 hover:border-transparent text-xs font-semibold transition-all duration-200 group/btn shadow-md"
                >
                  <span>Deploy Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            3. TECHNICAL ADVISORY BANNER
           ========================================================== */}
        <div className="rounded-3xl bg-[#151514]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D97745] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM SYSTEM ARCHITECTURE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a bespoke blueprint for your engineering team?
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A39C]">
              We evaluate legacy constraints, conduct security audits, and draft production-tested migration roadmaps.
            </p>
          </div>

          <Link
            href="/#contact"
            className="px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs sm:text-sm shrink-0 transition-all shadow-md shadow-[#D97745]/20 hover:shadow-[#D97745]/35"
          >
            Schedule Blueprint Review
          </Link>
        </div>
      </div>
    </div>
  );
}
