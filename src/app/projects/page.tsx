import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Activity, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Flagship Projects & Case Studies — Z INTECH",
  description:
    "Production flagships and system case studies across intelligent AI pipelines, workflow automation, and distributed cloud architecture.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ==========================================================
            1. HERO VIEWPORT
           ========================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-[#D97745] font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-pulse" />
            <span>Production Flagships &bull; Verified Benchmarks</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
            Systems built to <span className="italic text-[#D97745]">outperform.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A6A39C] max-w-2xl leading-relaxed">
            Real-world architectures engineered with type safety, sub-second latency, and horizontal scalability across production clusters.
          </p>
        </div>

        {/* ==========================================================
            2. PROJECTS BENTO GRID
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => {
            const primaryBenchmark = project.engineeringBenchmarks[0];
            const secondaryBenchmark = project.engineeringBenchmarks[1];

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#161615] border border-[#262523] hover:border-[#D97745]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-[#D97745]/5"
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#78756F]">
                        0{index + 1}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1F1E1C] border border-[#2B2A27] text-[#D97745] font-semibold">
                        {project.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#78756F]">
                      {project.industry}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#F5F1E9] tracking-tight group-hover:text-[#D97745] transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[#D97745]">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-[#A6A39C] leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Benchmark Highlight Strip */}
                  <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-[#1B1B19] border border-[#262523]">
                    {primaryBenchmark && (
                      <div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#F5F1E9]">
                          {primaryBenchmark.metric}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[#78756F] truncate">
                          {primaryBenchmark.description}
                        </div>
                      </div>
                    )}
                    {secondaryBenchmark && (
                      <div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#F5F1E9]">
                          {secondaryBenchmark.metric}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[#78756F] truncate">
                          {secondaryBenchmark.description}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#191918] border border-[#262523] text-[#A6A39C] font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-[#191918] text-[#78756F] font-mono text-[10px]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-[#262523] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#78756F] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#D97745]" />
                    <span>{project.category}</span>
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors py-1"
                  >
                    <span>Inspect Blueprint</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================================
            3. BOTTOM CTA BANNER
           ========================================================== */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#161615]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal">
            Need a similar architecture <span className="italic text-[#D97745]">delivered?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A39C] max-w-xl mx-auto">
            Book a direct technical architecture review with our lead engineers.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#D97745]/20"
            >
              <span>Consult Lead Architect</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
