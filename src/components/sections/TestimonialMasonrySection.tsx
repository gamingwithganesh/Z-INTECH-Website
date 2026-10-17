"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sparkles,
  Repeat,
  Zap,
  Check,
  Play,
  Pause,
  Star,
  Activity,
} from "lucide-react";

// ============================================================================
// Types
// ============================================================================

export type CardType = "testimonial" | "showcase" | "interactive" | "natural-photo" | "badge";

export interface TestimonialData {
  type: "testimonial";
  id: string;
  avatar: string;
  name: string;
  role: string;
  quote: string;
  companyName: string;
  companyIcon?: React.ReactNode;
  width?: string;
  height?: string;
}

export interface ShowcaseData {
  type: "showcase";
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  gradientClass: string;
  previewType: "rag-cosmos" | "cloud-mesh";
  width?: string;
  height?: string;
}

export interface InteractiveData {
  type: "interactive";
  id: string;
  heading: string;
  subtitle: string;
  stats: { label: string; value: string; color: string }[];
  bgClass: string;
  width?: string;
  height?: string;
}

export interface NaturalPhotoData {
  type: "natural-photo";
  id: string;
  imageSrc: string;
  alt: string;
  topValue: string;
  topLabel: string;
  bottomValue: string;
  bottomLabel: string;
  width?: string;
  height?: string;
}

export interface BadgeData {
  type: "badge";
  id: string;
  lettermark: string;
  title: string;
  subtitle: string;
  bgClass: string;
  width?: string;
  height?: string;
}

export type MasonryCardItem =
  | TestimonialData
  | ShowcaseData
  | InteractiveData
  | NaturalPhotoData
  | BadgeData;

// ============================================================================
// Card Data (Row 1 & Row 2 for Staggered Left-to-Right Marquee)
// ============================================================================

const ROW_ONE_ITEMS: MasonryCardItem[] = [
  {
    type: "showcase",
    id: "showcase-cosmos",
    title: "Autonomous Agent Orchestrator",
    badge: "PROPRIETARY PIPELINE",
    subtitle: "Multi-model reasoning engine with private vector embeddings",
    gradientClass: "from-[#1d1b4b] via-[#2e1065] to-[#0f172a]",
    previewType: "rag-cosmos",
    width: "w-[380px] sm:w-[420px]",
    height: "min-h-[340px]",
  },
  {
    type: "testimonial",
    id: "test-saptarshi",
    avatar: "/images/bento/avatar-aditya.jpg",
    name: "Saptarshi Prakash",
    role: "Product Design & Tech Director",
    quote:
      "“Z INTECH is a one-stop destination for our complex enterprise cloud & AI deployments. Their systems execute with absolute zero downtime.”",
    companyName: "SWIGGY",
    width: "w-[340px] sm:w-[370px]",
    height: "min-h-[320px]",
  },
  {
    type: "interactive",
    id: "interactive-star",
    heading: "Active Pipeline!",
    subtitle: "Processed 14,800 events across 3 availability zones",
    stats: [
      { label: "LATENCY", value: "14ms", color: "text-amber-500" },
      { label: "SLA", value: "99.99%", color: "text-emerald-500" },
      { label: "THROUGHPUT", value: "3.2k/s", color: "text-blue-500" },
    ],
    bgClass: "bg-[#22C55E]",
    width: "w-[330px] sm:w-[360px]",
    height: "min-h-[360px]",
  },
  {
    type: "testimonial",
    id: "test-canva",
    avatar: "/images/bento/avatar-dev.jpg",
    name: "Canva Platform Team",
    role: "Global Infra Engineering",
    quote:
      "“The adoption of Z INTECH’s automated IaC modules has been transformative. Our engineers deploy multi-region clusters in minutes.”",
    companyName: "Canva",
    width: "w-[340px] sm:w-[380px]",
    height: "min-h-[310px]",
  },
  {
    type: "badge",
    id: "badge-copper",
    lettermark: "ZT",
    title: "100% Owned IP",
    subtitle: "Zero licensing lock-in · Enterprise Grade",
    bgClass: "bg-gradient-to-br from-[#1C1C1A] via-[#262523] to-[#151514] border border-[#D97745]/40",
    width: "w-[300px] sm:w-[340px]",
    height: "min-h-[320px]",
  },
];

const ROW_TWO_ITEMS: MasonryCardItem[] = [
  {
    type: "testimonial",
    id: "test-salih",
    avatar: "/images/bento/avatar-lead.jpg",
    name: "Salih Abdul-Karim",
    role: "Lead Systems & UI Architect",
    quote:
      "“Instead of spending dozens of hours patching legacy frameworks, we rely on Z INTECH’s clean architectures. Now our teams ship with full confidence.”",
    companyName: "airbnb",
    width: "w-[340px] sm:w-[380px]",
    height: "min-h-[320px]",
  },
  {
    type: "natural-photo",
    id: "photo-exchange",
    imageSrc: "/images/bento/real-person-device.jpg",
    alt: "Engineer collaborating in daylight at desk with mobile device",
    topValue: "$100 USD",
    topLabel: "🇺🇸 Live Gateway",
    bottomValue: "₹8,342 INR",
    bottomLabel: "🇮🇳 Instant Settlement",
    width: "w-[360px] sm:w-[400px]",
    height: "min-h-[370px]",
  },
  {
    type: "testimonial",
    id: "test-stephanie",
    avatar: "/images/bento/avatar-neha.jpg",
    name: "Stephanie Martin",
    role: "Sr. Engineering Director",
    quote:
      "“The ability to deploy private RAG pipelines with zero retention transformed our enterprise data workflows across three continents.”",
    companyName: "WISE",
    width: "w-[340px] sm:w-[370px]",
    height: "min-h-[320px]",
  },
  {
    type: "badge",
    id: "badge-emerald",
    lettermark: "Z",
    title: "Distributed Mesh",
    subtitle: "AWS Multi-AZ VPC Architecture",
    bgClass: "bg-gradient-to-br from-[#15803D] via-[#16A34A] to-[#14532D]",
    width: "w-[320px] sm:w-[350px]",
    height: "min-h-[360px]",
  },
  {
    type: "testimonial",
    id: "test-enterprise",
    avatar: "/images/bento/avatar-dev.jpg",
    name: "Vikramaditya Roy",
    role: "Head of Infrastructure",
    quote:
      "“Pragmatic roadmaps and ruthless attention to SLA reliability. Z INTECH is the rarest kind of engineering partner.”",
    companyName: "STRIPE PARTNER",
    width: "w-[340px] sm:w-[370px]",
    height: "min-h-[310px]",
  },
];

// ============================================================================
// Subcomponents (Card Renderers)
// ============================================================================

function TestimonialCard({ data }: { data: TestimonialData }) {
  return (
    <div
      className={`${data.width || "w-[360px]"} ${data.height || "min-h-[320px]"} rounded-[26px] bg-[#FFFFFF] text-[#111110] p-7 flex flex-col justify-between shadow-xl border border-black/5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden`}
    >
      {/* Top: Avatar & Name */}
      <div>
        <div className="flex items-center gap-3.5 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-black/10 shrink-0">
            <Image
              src={data.avatar}
              alt={data.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#111110] leading-snug">
              {data.name}
            </h4>
            <p className="text-[12px] text-[#6E6B65] mt-0.5 font-medium">
              {data.role}
            </p>
          </div>
        </div>

        {/* Testimonial Quote in clean Raleway */}
        <p className="text-[14px] sm:text-[15px] text-[#2C2B29] leading-relaxed font-normal">
          {data.quote}
        </p>
      </div>

      {/* Bottom Brand Mark / Logo */}
      <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between">
        <span className="font-extrabold text-[15px] tracking-tight uppercase text-[#111110]">
          {data.companyName}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
          Verified
        </span>
      </div>
    </div>
  );
}

function ProductShowcaseCard({ data }: { data: ShowcaseData }) {
  return (
    <div
      className={`${data.width || "w-[400px]"} ${data.height || "min-h-[340px]"} rounded-[26px] bg-gradient-to-br ${data.gradientClass} text-white p-7 flex flex-col justify-between shadow-xl border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Badge */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest uppercase text-white font-semibold">
          <Sparkles className="w-3 h-3 text-[#D97745]" />
          {data.badge}
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      </div>

      {/* Inner Interface Preview Box (Cosmic / Space RAG theme matching reference UFO card) */}
      <div className="my-3 rounded-2xl bg-black/60 border border-white/15 p-4 backdrop-blur-md relative overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A6A39C] mb-2">
          <span>RAG Query Pipeline</span>
          <span className="text-emerald-400 font-semibold">Ready · 0ms queue</span>
        </div>
        {/* Abstract Cosmic Ring Graphic */}
        <div className="h-20 w-full relative flex items-center justify-center">
          <div className="absolute w-28 h-10 border-2 border-[#D97745]/70 rounded-full transform -rotate-12 shadow-[0_0_20px_rgba(217,119,69,0.5)]" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 shadow-lg relative z-10 flex items-center justify-center text-[10px] font-mono text-black font-bold">
            ZT
          </div>
          <div className="absolute inset-x-4 bottom-1 flex justify-between text-[9px] font-mono text-white/60">
            <span>Theories &amp; Compute</span>
            <span>Vector #842</span>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div>
        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
          {data.title}
        </h4>
        <p className="text-xs text-white/70 mt-1 leading-snug">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
}

function AnimationShowcaseCard({ data }: { data: InteractiveData }) {
  return (
    <div
      className={`${data.width || "w-[360px]"} ${data.height || "min-h-[360px]"} rounded-[26px] ${data.bgClass} text-white p-6 flex flex-col justify-center items-center shadow-xl border border-white/15 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden`}
    >
      {/* Inner Phone Screen Container (LottieFiles "Speaking star!" style) */}
      <div className="w-full max-w-[280px] bg-white text-[#111110] rounded-3xl p-5 shadow-2xl flex flex-col items-center text-center space-y-3.5 border border-black/5">
        {/* Animated Mascot / Star Badge */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Star className="w-8 h-8 fill-amber-400 text-amber-500 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
          </span>
        </div>

        <div>
          <h5 className="text-[17px] font-extrabold text-[#111110] tracking-tight">
            {data.heading}
          </h5>
          <p className="text-[11px] text-[#6E6B65] mt-0.5 leading-snug">
            {data.subtitle}
          </p>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-1.5 w-full pt-1">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F4F3EE] rounded-xl p-2 flex flex-col items-center justify-center"
            >
              <span className="text-[9px] font-mono text-[#8C887E] font-bold">
                {stat.label}
              </span>
              <span className={`text-[12px] font-bold ${stat.color} mt-0.5`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NaturalPhotoCard({ data }: { data: NaturalPhotoData }) {
  return (
    <div
      className={`${data.width || "w-[390px]"} ${data.height || "min-h-[370px]"} rounded-[26px] overflow-hidden relative shadow-xl border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-center items-center p-6`}
    >
      {/* Real Photography in Daylight with Natural Setting */}
      <Image
        src={data.imageSrc}
        alt={data.alt}
        fill
        sizes="(max-width: 640px) 100vw, 390px"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

      {/* Floating Center Currency / Exchange Pill (Exact replica of 100 USD ⇄ 8,342 INR pill in reference) */}
      <div className="relative z-10 w-full max-w-[290px] bg-white text-[#111110] rounded-2xl p-4 shadow-2xl space-y-2 border border-black/10">
        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold font-mono tracking-tight text-[#111110]">
            {data.topValue}
          </span>
          <span className="text-xs font-mono font-bold text-[#4B4944] bg-[#F4F3EE] px-2.5 py-1 rounded-lg">
            {data.topLabel}
          </span>
        </div>

        {/* Floating Sync / Exchange Icon */}
        <div className="flex items-center justify-center -my-1">
          <div className="w-7 h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md">
            <Repeat className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold font-mono tracking-tight text-[#111110]">
            {data.bottomValue}
          </span>
          <span className="text-xs font-mono font-bold text-[#4B4944] bg-[#F4F3EE] px-2.5 py-1 rounded-lg">
            {data.bottomLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function BadgeCard({ data }: { data: BadgeData }) {
  return (
    <div
      className={`${data.width || "w-[340px]"} ${data.height || "min-h-[320px]"} rounded-[26px] ${data.bgClass} text-white p-7 flex flex-col justify-between shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden`}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl font-extrabold text-[#D97745] shadow-lg">
        {data.lettermark}
      </div>

      <div>
        <h4 className="text-xl font-bold tracking-tight text-[#F5F1E9]">
          {data.title}
        </h4>
        <p className="text-xs text-[#A6A39C] mt-1 font-medium">
          {data.subtitle}
        </p>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#D97745] uppercase tracking-wider font-semibold">
          Enterprise Standard
        </span>
        <Activity className="w-4 h-4 text-emerald-400" />
      </div>
    </div>
  );
}

function MasonryCard({ item }: { item: MasonryCardItem }) {
  switch (item.type) {
    case "testimonial":
      return <TestimonialCard data={item} />;
    case "showcase":
      return <ProductShowcaseCard data={item} />;
    case "interactive":
      return <AnimationShowcaseCard data={item} />;
    case "natural-photo":
      return <NaturalPhotoCard data={item} />;
    case "badge":
      return <BadgeCard data={item} />;
    default:
      return null;
  }
}

function AutoScrollTrack({
  items,
  speed = 1.0,
  isPlaying,
  className = "",
}: {
  items: MasonryCardItem[];
  speed?: number;
  isPlaying: boolean;
  className?: string;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const isHoveredRef = React.useRef(false);
  const offsetRef = React.useRef(0);

  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    // Initialize starting offset
    if (trackRef.current) {
      const half = trackRef.current.scrollWidth / 2;
      if (half > 0 && offsetRef.current === 0) {
        offsetRef.current = -half;
      }
    }

    const loop = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (trackRef.current && isPlaying && !isHoveredRef.current) {
        const track = trackRef.current;
        const halfWidth = track.scrollWidth / 2;

        if (halfWidth > 0) {
          // Slide from left to right (increasing translateX)
          offsetRef.current += speed * 60 * delta;

          if (offsetRef.current >= 0) {
            offsetRef.current = -halfWidth;
          }

          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, speed]);

  return (
    <div
      className="overflow-hidden w-full select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className={`flex items-center gap-5 sm:gap-6 will-change-transform ${className}`}
        style={{ width: "max-content" }}
      >
        {items.map((item) => (
          <div key={`orig-${item.id}`} className="shrink-0">
            <MasonryCard item={item} />
          </div>
        ))}
        {items.map((item) => (
          <div key={`dup-${item.id}`} className="shrink-0">
            <MasonryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Section: TestimonialMasonrySection
// ============================================================================

export function TestimonialMasonrySection() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <section
      id="testimonials-masonry"
      className="bg-[#111110] text-[#F5F1E9] py-24 sm:py-32 border-t border-[#262523] overflow-hidden relative"
      aria-label="Design and engineering teams love Z INTECH"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#D97745]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1A] border border-[#2B2A27] text-[11px] font-mono tracking-[0.2em] uppercase text-[#D97745] mb-4">
              <Zap className="w-3 h-3 text-[#D97745]" />
              ENTERPRISE ADOPTION &amp; ENDORSEMENTS
            </div>
            {/* Required Heading: "Design teams love Z INTECH" */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5F1E9] tracking-tight leading-[1.1]">
              Design &amp; engineering teams love Z INTECH
            </h2>
            <p className="text-sm sm:text-base text-[#A6A39C] mt-4 max-w-2xl leading-relaxed">
              From high-growth tech platforms to multinational enterprises, cross-functional
              teams build their core intelligence, cloud resilience, and full-stack software on Z INTECH.
            </p>
          </div>

          {/* Pause / Play Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto sliding" : "Resume auto sliding"}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191918] border border-[#2B2A27] hover:border-[#D97745]/60 text-xs font-mono text-[#F5F1E9] transition-all cursor-pointer shadow-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#D97745]" />
                  <span>Pause Slide</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume Slide</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Masonry Continuous Sliding Container (Left to Right Marquee) */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradients for smooth infinite clipped cards */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#111110] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#111110] to-transparent z-20" />

        {/* TRACK 1: Left to Right Continuous Slide */}
        <div className="mb-6">
          <AutoScrollTrack items={ROW_ONE_ITEMS} speed={1.1} isPlaying={isPlaying} />
        </div>

        {/* TRACK 2: Staggered Left to Right Continuous Slide */}
        <div>
          <AutoScrollTrack items={ROW_TWO_ITEMS} speed={0.85} isPlaying={isPlaying} />
        </div>
      </div>

      {/* Bottom Sub-Caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78756F]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Auto-sliding from left to right · Hover over any card to pause</span>
        </div>
        <span>Over 40+ production enterprise systems deployed</span>
      </div>
    </section>
  );
}
