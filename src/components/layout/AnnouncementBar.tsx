"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!COMPANY_INFO.announcement.enabled || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Important Announcement"
      className="relative z-50 bg-slate-900 text-white text-xs py-2 px-4 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 mx-auto flex-wrap justify-center text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-600/30 text-blue-300 border border-blue-500/30 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {COMPANY_INFO.announcement.badge}
          </span>
          <span className="text-slate-300 font-normal">
            {COMPANY_INFO.announcement.text}
          </span>
          <Link
            href={COMPANY_INFO.announcement.ctaLink}
            className="inline-flex items-center gap-1 text-white font-medium hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            {COMPANY_INFO.announcement.ctaText}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
