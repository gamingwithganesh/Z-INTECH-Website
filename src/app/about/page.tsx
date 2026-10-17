import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Layers,
  MapPin,
  ArrowUpRight,
  Phone,
  ArrowRight,
  Sparkles,
  GitBranch,
  Terminal,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Z INTECH — Engineering Philosophy & Presence",
  description:
    "Production engineering practice based in Maharashtra, delivering AI systems, autonomous workflows, and cloud infrastructure with 100% client code ownership.",
};

const STATS = [
  { value: "2+ Years", label: "Production Practice", note: "Continuous Delivery" },
  { value: "100%", label: "Code Ownership", note: "Zero Vendor Lock-in" },
  { value: "99.9%", label: "Architecture SLA", note: "High-Availability Multi-AZ" },
  { value: "2 Hubs", label: "Nagpur & Wardha", note: "Central India Tech Corridor" },
];

const PILLARS = [
  {
    num: "01",
    title: "Pragmatic Innovation",
    subtitle: "ROI over Speculation",
    desc: "We deploy AI and distributed systems that deliver measurable business impact, never technology for hype's sake.",
    icon: Cpu,
  },
  {
    num: "02",
    title: "Architectural Precision",
    subtitle: "Clean Code & Zero Tech Debt",
    desc: "Strict type safety, resilient distributed workers, idempotent pipelines, and modular multi-tenant architecture.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Radical Transparency",
    subtitle: "Direct Senior Engineering Access",
    desc: "No non-technical intermediaries. You collaborate directly with lead system architects throughout execution.",
    icon: Terminal,
  },
  {
    num: "04",
    title: "Uncompromising Security",
    subtitle: "Enterprise Posture by Default",
    desc: "End-to-end data encryption, strict RBAC, automated vulnerability scans, and regional privacy compliance.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {/* ==========================================================
            1. HERO VIEWPORT: Minimalist, Serif Headline
           ========================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-[#D97745] font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-pulse" />
            <span>Philosophy &bull; Practice &bull; Presence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
            Engineering systems with{" "}
            <span className="italic text-[#D97745]">production discipline.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A6A39C] max-w-2xl leading-relaxed">
            Founded to bridge emerging artificial intelligence and resilient cloud architecture.
            We build software that grows businesses without fragile compromises.
          </p>
        </div>

        {/* ==========================================================
            2. TELEMETRY STRIP (Minimalist Scannable Metrics)
           ========================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#161615] border border-[#262523] hover:border-[#D97745]/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F5F1E9] mt-1">
                {s.label}
              </div>
              <div className="text-[11px] font-mono text-[#78756F] mt-0.5">
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            3. CORE BENTO MATRIX: DNA & CAPABILITIES
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Main: Company DNA */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#161615] border border-[#262523] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#D97745] uppercase tracking-wider font-semibold">
                  [01] Architectural Standard
                </span>
                <span className="text-[11px] font-mono text-[#78756F] bg-[#1F1E1C] px-2.5 py-1 rounded-full border border-[#2B2A27]">
                  Production Verified
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F1E9] tracking-tight">
                Software built to perform, not just to demo.
              </h2>

              <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                Many modern systems falter because they over-index on superficial AI promises while ignoring baseline stability, data consistency, and edge performance. At Z INTECH, every line of code is held to strict engineering benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#262523]">
              <div className="p-3.5 rounded-xl bg-[#1B1B19] border border-[#2B2A27]">
                <GitBranch className="w-4 h-4 text-[#D97745] mb-2" />
                <div className="text-xs font-bold text-[#F5F1E9]">Full Ownership</div>
                <div className="text-[11px] text-[#A6A39C] mt-0.5">100% client-held repositories & schemas</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1B19] border border-[#2B2A27]">
                <Cpu className="w-4 h-4 text-[#D97745] mb-2" />
                <div className="text-xs font-bold text-[#F5F1E9]">Native Scale</div>
                <div className="text-[11px] text-[#A6A39C] mt-0.5">Auto-scaling AWS & serverless backbones</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1B19] border border-[#2B2A27]">
                <Sparkles className="w-4 h-4 text-[#D97745] mb-2" />
                <div className="text-xs font-bold text-[#F5F1E9]">Audited AI</div>
                <div className="text-[11px] text-[#A6A39C] mt-0.5">Deterministic outputs with latency &lt;200ms</div>
              </div>
            </div>
          </div>

          {/* Bento Side: Operational Principles */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#161615] to-[#1D1B19] border border-[#262523] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#D97745] uppercase tracking-wider font-semibold">
                [02] Engagement Model
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1E9] tracking-tight">
                High Velocity &bull; Zero Bureaucracy
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#A6A39C]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] shrink-0 mt-2" />
                  <span><strong>Sprint-Based Cadence:</strong> Working code delivered and inspected every 14 days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] shrink-0 mt-2" />
                  <span><strong>Direct Architect Slack:</strong> Live channel access directly to system creators.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] shrink-0 mt-2" />
                  <span><strong>Rigorous Automated CI/CD:</strong> Zero untested changes land in production.</span>
                </li>
              </ul>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#111110] hover:bg-[#D97745] text-[#F5F1E9] hover:text-[#111110] border border-[#2B2A27] font-medium text-xs transition-all group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ==========================================================
            4. FOUR CORE PRINCIPLES (Interactive Minimalist Cards)
           ========================================================== */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-[#D97745] uppercase tracking-wider font-semibold">
              Foundational Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F1E9] tracking-tight mt-1">
              Engineered without compromises.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-5 sm:p-6 bg-[#161615] border border-[#262523] hover:border-[#D97745]/40 transition-all flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#78756F]">
                        {pillar.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#D97745]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors">
                        {pillar.title}
                      </h3>
                      <div className="text-[11px] font-mono text-[#78756F] mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>
                    <p className="text-xs text-[#A6A39C] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================
            5. REGIONAL HUBS: NAGPUR & WARDHA
           ========================================================== */}
        <div className="rounded-3xl bg-[#141413] border border-[#262523] p-6 sm:p-8 md:p-10 space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-[11px] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97745]" />
              <span>Maharashtra Operations Hubs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Central India Technology Corridor
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39C] mt-1">
              Direct accountability, on-site technical workshops, and rapid turnaround across central India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPANY_INFO.locations.map((loc, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#1C1C1A] border border-[#262523] hover:border-[#D97745]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider font-semibold">
                      <MapPin className="w-4 h-4 text-[#D97745] shrink-0" />
                      <span>{loc.city} Facility</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-white/70 border border-white/10">
                      {loc.isPrimary ? "Primary HQ" : "Operations Hub"}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {loc.city}, {loc.state}
                    </h3>
                    <p className="text-xs text-[#A6A39C] leading-relaxed mt-1">
                      {loc.address}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#262523]">
                    {loc.mapUrl && (
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D97745] transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#D97745]" />
                        <span>View on Google Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#262523] text-xs font-mono text-[#A6A39C]">
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phonePrimary}`}
                    className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#D97745]" />
                    <span>{COMPANY_INFO.contacts.phonePrimaryDisplay}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phoneSecondary}`}
                    className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#D97745]" />
                    <span>{COMPANY_INFO.contacts.phoneSecondaryDisplay}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            6. BOTTOM CTA BANNER
           ========================================================== */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#161615]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal">
            Ready to build <span className="italic text-[#D97745]">intelligently?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A39C] max-w-xl mx-auto">
            Schedule a high-bandwidth technical discovery session with our lead architects.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#D97745]/20"
            >
              Start Technical Discovery
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-[#191918]/80 hover:bg-[#20201E] border border-white/10 text-[#F5F1E9] font-semibold text-xs tracking-wider uppercase transition-colors backdrop-blur-md"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
