"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, ArrowUpRight, Search, BookOpen, ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = [
    "All",
    "Artificial Intelligence",
    "Cloud Architecture",
    "Automation",
    "Engineering Leadership",
  ];

  const filtered = INSIGHTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ==========================================================
            1. HERO VIEWPORT
           ========================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191918] border border-[#2B2A27] text-[#D97745] font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-pulse" />
            <span>Engineering Insights &bull; Technical Research</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E9] leading-[1.1]">
            Architectural perspectives from the <span className="italic text-[#D97745]">field.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A6A39C] max-w-2xl leading-relaxed">
            Distilled design decisions, production post-mortems, and technical blueprints written directly by our systems team.
          </p>
        </div>

        {/* ==========================================================
            2. FILTER & SEARCH CONTROLS
           ========================================================== */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-[#262523]">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D97745] text-[#111110] font-semibold shadow-sm"
                    : "bg-[#161615] text-[#A6A39C] hover:text-[#F5F1E9] border border-[#262523]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-[#78756F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#262523] text-xs bg-[#161615] text-[#F5F1E9] placeholder-[#78756F] focus:outline-none focus:border-[#D97745] transition-colors font-sans"
            />
          </div>
        </div>

        {/* ==========================================================
            3. ARTICLES GRID (Bento Minimalist)
           ========================================================== */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-[#78756F] text-xs font-mono">
            No engineering perspectives found matching your filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, index) => (
              <article
                key={post.id}
                className="rounded-3xl bg-[#161615] border border-[#262523] hover:border-[#D97745]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-[#D97745]/5"
              >
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between text-xs text-[#78756F]">
                    <span className="font-mono text-[11px] text-[#D97745] bg-[#1C1C1A] border border-[#2B2A27] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-[#78756F]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div>
                    <h2 className="text-xl font-bold text-[#F5F1E9] tracking-tight group-hover:text-[#D97745] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-[#A6A39C] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="mt-6 pt-4 border-t border-[#262523] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#78756F]">
                    {post.date}
                  </div>

                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors"
                  >
                    <span>Read Paper</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ==========================================================
            4. BOTTOM CTA BANNER
           ========================================================== */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#161615]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal">
            Have a technical question about <span className="italic text-[#D97745]">our research?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A6A39C] max-w-xl mx-auto">
            Discuss implementation patterns with the architects who authored these papers.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#D97745]/20"
            >
              <span>Connect with Authors</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
