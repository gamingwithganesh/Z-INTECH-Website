import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.tagline,
  };
}

export const instant = false;

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78756F] hover:text-[#D97745] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blueprints</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1C1C1A] border border-[#2B2A27] text-[#D97745] font-semibold">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#78756F]">
              {project.industry} &bull; {project.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#D97745] font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-sm text-[#A6A39C] leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Challenge & Implementation */}
          <div className="lg:col-span-7 space-y-6">
            {/* The Challenge */}
            <div className="bg-[#161615] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                [01] The Technical Bottleneck
              </span>
              <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
                Business &amp; Architectural Challenge
              </h2>
              <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                {project.businessChallenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-[#161615] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D97745] font-semibold">
                [02] The Engineered Architecture
              </span>
              <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight">
                Engineered Solution Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>

            {/* In-Depth Architecture Details */}
            <div className="bg-[#141413] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D97745] uppercase tracking-wider font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Technical Implementation Blueprint</span>
              </div>

              <div className="space-y-3">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A6A39C]">
                    <span className="text-[#D97745] font-mono mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Benchmarks & Tech */}
          <div className="lg:col-span-5 space-y-6">
            {/* Benchmarks */}
            <div className="bg-[#161615] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#F5F1E9] tracking-tight">
                  Production Telemetry
                </h3>
                <Activity className="w-4 h-4 text-[#D97745]" />
              </div>
              <div className="space-y-3">
                {project.engineeringBenchmarks.map((bm, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#1B1B19] border border-[#262523]">
                    <span className="text-lg font-bold text-[#F5F1E9] font-mono block">
                      {bm.metric}
                    </span>
                    <span className="text-xs text-[#78756F] mt-0.5 block">
                      {bm.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-[#161615] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-3">
              <h3 className="text-base font-bold text-[#F5F1E9] tracking-tight">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#191918] border border-[#262523] text-[#A6A39C] font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-[#161615] rounded-3xl p-6 sm:p-8 border border-[#262523] space-y-3">
              <h3 className="text-base font-bold text-[#F5F1E9] tracking-tight">
                Architectural Highlights
              </h3>
              <ul className="space-y-2.5 text-xs text-[#A6A39C] pt-1">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97745] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#161615]/75 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] space-y-4">
              <h3 className="text-lg font-bold text-[#F5F1E9] tracking-tight">
                Deploy Similar Pipeline
              </h3>
              <p className="text-xs text-[#A6A39C] leading-relaxed">
                Consult directly with our engineering team to design or adopt this architecture for your operational scale.
              </p>
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md shadow-[#D97745]/20 hover:shadow-[#D97745]/35"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
