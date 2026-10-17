"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Bot,
  Cloud,
  Workflow,
  Code2,
  Database,
} from "lucide-react";

export function LatestBlogsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Check scroll position to update navigation arrow states
  const checkScroll = React.useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Blog cards metadata using modern glowing icons and Z INTECH branding
  const blogCards = [
    {
      id: "enterprise-ai-autonomous-systems",
      slug: "enterprise-ai-autonomous-systems",
      title: "Enterprise AI: Building Production Autonomous Systems",
      date: "12 Oct 2026",
      tags: ["AI Systems"],
      type: "ai",
      badge: "Autonomous Agents",
      spec: "Multi-Turn Tool Calling",
      accentColor: "blue",
    },
    {
      id: "zero-downtime-aws-cloud-migration",
      slug: "zero-downtime-aws-cloud-migration",
      title: "Zero-Downtime AWS Cloud Migration & Multi-AZ Architecture",
      date: "27 Sept 2026",
      tags: ["Cloud Infrastructure"],
      type: "cloud",
      badge: "AWS Cloud Partner",
      spec: "Multi-AZ VPC Isolation",
      accentColor: "copper",
    },
    {
      id: "event-driven-business-automation",
      slug: "event-driven-business-automation",
      title: "Autonomous Workflows: Eliminating Enterprise Data Silos",
      date: "31 Aug 2026",
      tags: ["Automation"],
      type: "automation",
      badge: "Event-Driven Sync",
      spec: "Sub-50ms Webhook Mesh",
      accentColor: "emerald",
    },
    {
      id: "clean-architecture-nextjs-enterprise",
      slug: "clean-architecture-nextjs-enterprise",
      title: "Clean Architecture in Next.js: Scaling Enterprise Platforms",
      date: "26 Aug 2026",
      tags: ["Engineering"],
      type: "web",
      badge: "App Router Systems",
      spec: "Type-Safe Microservices",
      accentColor: "indigo",
    },
    {
      id: "practical-ai-adoption-guide",
      slug: "practical-ai-adoption-guide",
      title: "Moving Beyond the Hype: Pragmatic Enterprise RAG",
      date: "18 Aug 2026",
      tags: ["Architecture"],
      type: "rag",
      badge: "Enterprise RAG Engine",
      spec: "Hybrid BM25 + pgvector",
      accentColor: "amber",
    },
  ];

  return (
    <section className="bg-[#111110] text-[#F5F1E9] py-20 sm:py-28 border-t border-[#262523] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Title & "View blog" Capsule Button */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F1E9]">
              Latest Blogs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8e8b84]">
              Perspectives, engineering case studies, and architecture blueprints from Z INTECH
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#353431] bg-[#191918]/80 hover:bg-[#222220] hover:border-[#D97745] text-xs sm:text-sm font-medium text-[#F5F1E9] transition-all duration-200 shrink-0"
          >
            View blog
          </Link>
        </div>

        {/* Carousel / Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogCards.map((card) => (
            <article
              key={card.id}
              className="shrink-0 w-[270px] sm:w-[310px] md:w-[320px] snap-start flex flex-col group cursor-pointer"
            >
              <Link href={`/insights/${card.slug}`} className="flex flex-col h-full">
                {/* 1:1 Aspect Ratio Minimalist Cover with Liquid Glass and Modern Glowing Icon */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#151517]/80 backdrop-blur-xl border border-white/10 group-hover:border-[#D97745]/50 transition-all duration-300 flex flex-col items-center justify-center p-6 shadow-[0_12px_32px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  {/* Background Ambient Radial Glow */}
                  <div
                    className={`absolute w-36 h-36 rounded-full blur-2xl opacity-35 transition-opacity duration-300 group-hover:opacity-55 ${
                      card.accentColor === "copper"
                        ? "bg-[#D97745]"
                        : card.accentColor === "emerald"
                        ? "bg-emerald-500"
                        : card.accentColor === "indigo"
                        ? "bg-indigo-500"
                        : card.accentColor === "amber"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  />

                  {/* Frosted Glass Icon Container */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center border shadow-xl group-hover:scale-108 transition-transform duration-300 backdrop-blur-md ${
                      card.accentColor === "copper"
                        ? "bg-[#251d18]/90 border-[#D97745]/40 text-[#D97745] shadow-[#D97745]/10"
                        : card.accentColor === "emerald"
                        ? "bg-[#14231c]/90 border-emerald-500/40 text-emerald-400 shadow-emerald-500/10"
                        : card.accentColor === "indigo"
                        ? "bg-[#191a2b]/90 border-indigo-500/40 text-indigo-400 shadow-indigo-500/10"
                        : card.accentColor === "amber"
                        ? "bg-[#251f15]/90 border-amber-500/40 text-amber-400 shadow-amber-500/10"
                        : "bg-[#141b2a]/90 border-blue-500/40 text-blue-400 shadow-blue-500/10"
                    }`}
                  >
                    {card.type === "ai" && <Bot className="w-10 h-10" />}
                    {card.type === "cloud" && <Cloud className="w-10 h-10" />}
                    {card.type === "automation" && <Workflow className="w-10 h-10" />}
                    {card.type === "web" && <Code2 className="w-10 h-10" />}
                    {card.type === "rag" && <Database className="w-10 h-10" />}
                  </div>

                  {/* Clean Feature Badge */}
                  <div className="relative z-10 mt-5 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-xs text-center shadow-xs">
                    <p className="font-sans font-medium text-xs text-[#F5F1E9] tracking-tight">
                      {card.badge}
                    </p>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-sans font-medium text-base sm:text-lg text-[#F5F1E9] group-hover:text-[#D97745] transition-colors duration-200 mt-4 leading-snug line-clamp-2">
                  {card.title}
                </h3>

                {/* Meta Row: Date & Category Tags */}
                <div className="mt-2.5 flex items-center gap-2 text-xs text-[#78756F] font-mono">
                  <span>{card.date}</span>
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-[#A6A39C]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* "Read blog >" Action Link */}
                <div className="mt-3.5 flex items-center gap-1 text-xs text-[#A6A39C] group-hover:text-[#F5F1E9] transition-colors duration-150">
                  <span>Read blog</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Navigation Arrow Buttons */}
        <div className="mt-6 flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous blog cards"
            className="w-9 h-9 rounded-full border border-[#353431] bg-[#191918] hover:bg-[#232321] text-[#F5F1E9] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next blog cards"
            className="w-9 h-9 rounded-full border border-[#353431] bg-[#191918] hover:bg-[#232321] text-[#F5F1E9] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
