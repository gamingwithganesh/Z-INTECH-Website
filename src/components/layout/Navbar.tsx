"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cloud,
  Server,
  ShieldCheck,
  Zap,
  Cpu,
  Phone,
  Sparkles,
  Terminal,
  Layers,
  Brain,
  Workflow,
  Boxes,
  Gauge,
  CreditCard,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [awsDropdownOpen, setAwsDropdownOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);

  const awsDropdownRef = React.useRef<HTMLDivElement>(null);
  const servicesDropdownRef = React.useRef<HTMLDivElement>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [prevPathname, setPrevPathname] = React.useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setAwsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe dropdown hover handlers with small debounce
  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setAwsDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 250);
  };

  const handleAwsEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesDropdownOpen(false);
    setAwsDropdownOpen(true);
  };

  const handleAwsLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setAwsDropdownOpen(false);
    }, 250);
  };

  // Click outside listener for dropdowns
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        awsDropdownRef.current &&
        !awsDropdownRef.current.contains(event.target as Node)
      ) {
        setAwsDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setAwsDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#111110]/75 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.06)] py-2.5 sm:py-3.5"
          : "bg-[#111110]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.05)] py-3 sm:py-4.5"
      )}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between relative gap-6"
          aria-label="Main Navigation"
        >
          {/* ==========================================================
              1. BRAND LOGO & IDENTITY (PROMINENT, ENLARGED, NO TRUNCATION)
             ========================================================== */}
          <Link
            href="/"
            className="flex items-center gap-3.5 sm:gap-4.5 shrink-0 whitespace-nowrap group focus-visible:outline-2 focus-visible:outline-[#D97745] rounded-xl py-1 transition-transform hover:scale-[1.02]"
            aria-label="Z INTECH Home"
          >
            {/* Logo Emblem - responsive scaled sizing */}
            <div className="relative w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Z INTECH Emblem"
                width={80}
                height={80}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_22px_rgba(217,119,69,0.45)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Brand text complement - responsive mobile scaling */}
            <div className="flex flex-col shrink-0">
              <span className="font-sans font-extrabold text-lg xs:text-xl sm:text-2xl lg:text-[26px] tracking-[0.04em] text-[#F5F1E9] uppercase transition-colors group-hover:text-white leading-tight">
                Z INTECH
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-[11.5px] lg:text-[12.5px] font-bold tracking-[0.06em] text-white transition-colors leading-tight uppercase mt-0.5 sm:mt-1">
                Your Vision, Our Technology
              </span>
            </div>
          </Link>

          {/* ==========================================================
              2. DESKTOP NAVIGATION (CRISP, NON-WRAPPING, ELEGANT GAP)
             ========================================================== */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 shrink-0">
            {/* 2.1 Home */}
            <Link
              href="/"
              className={cn(
                "relative text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2",
                isLinkActive("/")
                  ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              Home
            </Link>

            {/* 2.2 Services (MULTI-COLUMN MEGA DROPDOWN - LOTTIERESPONSE REPLICA) */}
            <div
              className="relative shrink-0"
              ref={servicesDropdownRef}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen((prev) => !prev);
                  setAwsDropdownOpen(false);
                }}
                aria-expanded={servicesDropdownOpen}
                className={cn(
                  "relative flex items-center gap-1.5 text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2 cursor-pointer select-none",
                  isLinkActive("/services") && pathname !== "/services/cloud-services" && pathname !== "/services/ai-solutions"
                    ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                    : "text-[#A6A39C] hover:text-white"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 text-[#78756F]",
                    servicesDropdownOpen && "rotate-180 text-white"
                  )}
                />
              </button>

              {/* MEGA DROPDOWN: 3-COLUMN RICH PRODUCT/SERVICE BOARD */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full -left-20 xl:-left-28 pt-2.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="w-[880px] xl:w-[980px] max-w-[calc(100vw-2.5rem)] rounded-3xl bg-[#141413]/80 backdrop-blur-2xl border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 xl:p-7">
                    <div className="grid grid-cols-12 gap-6 xl:gap-8">
                      {/* COLUMN 1: CORE PRODUCTS / SERVICES (MINIMALIST & MODERN) - 5 of 12 cols */}
                      <div className="col-span-5 space-y-2 pr-5 xl:pr-6 border-r border-[#262523]">
                        <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#78756F] mb-3 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <span>CORE DISCIPLINES</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                          </span>
                          <Link
                            href="/services"
                            className="text-[10px] font-mono text-white/70 hover:text-white hover:underline transition-colors"
                          >
                            BROWSE ALL &rarr;
                          </Link>
                        </div>

                        {/* Card 1: AI Solutions */}
                        <Link
                          href="/services/ai-solutions"
                          className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#1C1C1A] border border-transparent hover:border-[#2A2926] transition-all duration-200 group"
                        >
                          <div className="w-10.5 h-10.5 rounded-xl shrink-0 bg-white/[0.06] border border-white/[0.12] text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/[0.25] group-hover:scale-105 transition-all">
                            <Cpu className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                AI Solutions &amp; Agents
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-white/[0.06] text-white/80 border border-white/15">
                                Flagship
                              </span>
                            </div>
                            <p className="text-[12px] text-[#8E8B85] group-hover:text-[#A6A39C] mt-0.5 leading-snug line-clamp-2 transition-colors">
                              Domain-tuned LLMs, RAG pipelines, and autonomous multi-agent tool execution.
                            </p>
                          </div>
                        </Link>

                        {/* Card 2: AWS Cloud Services */}
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#1C1C1A] border border-transparent hover:border-[#2A2926] transition-all duration-200 group"
                        >
                          <div className="w-10.5 h-10.5 rounded-xl shrink-0 bg-white/[0.06] border border-white/[0.12] text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/[0.25] group-hover:scale-105 transition-all">
                            <Cloud className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                AWS Cloud Infrastructure
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-white/[0.06] text-white/80 border border-white/15">
                                Enterprise
                              </span>
                            </div>
                            <p className="text-[12px] text-[#8E8B85] group-hover:text-[#A6A39C] mt-0.5 leading-snug line-clamp-2 transition-colors">
                              Resilient multi-AZ VPCs, zero-downtime migrations &amp; automated Kubernetes.
                            </p>
                          </div>
                        </Link>

                        {/* Card 3: Business Automation */}
                        <Link
                          href="/services/business-automation"
                          className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#1C1C1A] border border-transparent hover:border-[#2A2926] transition-all duration-200 group"
                        >
                          <div className="w-10.5 h-10.5 rounded-xl shrink-0 bg-white/[0.06] border border-white/[0.12] text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/[0.25] group-hover:scale-105 transition-all">
                            <Workflow className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                Intelligent Automation
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-white/[0.06] text-white/80 border border-white/15">
                                New
                              </span>
                            </div>
                            <p className="text-[12px] text-[#8E8B85] group-hover:text-[#A6A39C] mt-0.5 leading-snug line-clamp-2 transition-colors">
                              Asynchronous queue orchestration, human-in-the-loop validation &amp; ERP integrations.
                            </p>
                          </div>
                        </Link>

                        {/* Card 4: Custom Software */}
                        <Link
                          href="/services/custom-software"
                          className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#1C1C1A] border border-transparent hover:border-[#2A2926] transition-all duration-200 group"
                        >
                          <div className="w-10.5 h-10.5 rounded-xl shrink-0 bg-white/[0.06] border border-white/[0.12] text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/[0.25] group-hover:scale-105 transition-all">
                            <Code2 className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                Custom Software Engineering
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-white/[0.06] text-white/80 border border-white/15">
                                Edge
                              </span>
                            </div>
                            <p className="text-[12px] text-[#8E8B85] group-hover:text-[#A6A39C] mt-0.5 leading-snug line-clamp-2 transition-colors">
                              Strictly typed full-stack TypeScript portals with sub-40ms P99 edge delivery.
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* COLUMNS 2 & 3: HIGHLIGHTS & SOLUTIONS (7 of 12 cols, split 50/50) */}
                      <div className="col-span-7 grid grid-cols-2 gap-7">
                        {/* SUB-COLUMN 1: HIGHLIGHTS */}
                        <div className="space-y-3.5 pr-4 border-r border-[#2B2A27]">
                          <div className="text-[11px] font-mono tracking-widest uppercase text-[#78756F] mb-3">
                            HIGHLIGHTS
                          </div>

                          <div className="space-y-2.5">
                            {/* Highlight 1 */}
                            <Link
                              href="/services/ai-solutions"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Brain className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                    Zero-Retention RAG
                                  </span>
                                  <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-white/[0.08] text-white/90 border border-white/20 shrink-0">
                                    Secure
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Private VPC endpoints; zero public LLM data training.
                                </p>
                              </div>
                            </Link>

                            {/* Highlight 2 */}
                            <Link
                              href="/services/cloud-services"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Server className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                    Multi-AZ VPC Architecture
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  High availability cloud topology with 99.99% uptime.
                                </p>
                              </div>
                            </Link>

                            {/* Highlight 3 */}
                            <Link
                              href="/services/business-automation"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Zap className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                    Event-Driven Queues
                                  </span>
                                  <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-white/[0.08] text-white/90 border border-white/20 shrink-0">
                                    Kafka
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  10,000+ evt/s decoupled transaction pipelines.
                                </p>
                              </div>
                            </Link>

                            {/* Highlight 4 */}
                            <Link
                              href="/services/cloud-services"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  SOC2 &amp; IAM Hardening
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Role-based zero-trust security &amp; AES-256 encryption.
                                </p>
                              </div>
                            </Link>

                            {/* Highlight 5 */}
                            <Link
                              href="/services/consulting-modernization"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Terminal className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  Architecture Auditing
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Code review, bottleneck isolation &amp; latency profiling.
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* SUB-COLUMN 2: SOLUTIONS & BLUEPRINTS */}
                        <div className="space-y-3.5 pl-1">
                          <div className="text-[11px] font-mono tracking-widest uppercase text-[#78756F] mb-3">
                            SOLUTIONS &amp; BLUEPRINTS
                          </div>

                          <div className="space-y-2.5">
                            {/* Solution 1 */}
                            <Link
                              href="/solutions"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Boxes className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  Next.js Enterprise Stack
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  React 19, Turbopack, and CDN edge optimization.
                                </p>
                              </div>
                            </Link>

                            {/* Solution 2 */}
                            <Link
                              href="/projects"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Gauge className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate">
                                    FinOps Cost Auditing
                                  </span>
                                  <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-white/[0.08] text-white/90 border border-white/20 shrink-0">
                                    -40%
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  EC2 right-sizing, Spot orchestration &amp; caching.
                                </p>
                              </div>
                            </Link>

                            {/* Solution 3 */}
                            <Link
                              href="/projects"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <CreditCard className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  Agentic AutoPay &amp; Billing
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Automated invoice reconciliation &amp; payment flows.
                                </p>
                              </div>
                            </Link>

                            {/* Solution 4 */}
                            <Link
                              href="/industries"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Layers className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  Compliance Blueprints
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Fintech, Healthcare &amp; Manufacturing systems.
                                </p>
                              </div>
                            </Link>

                            {/* Solution 5 */}
                            <Link
                              href="/insights"
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                            >
                              <Sparkles className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <span className="text-[13px] font-semibold text-[#F5F1E9] group-hover:text-white transition-colors truncate block">
                                  Engineering Research
                                </span>
                                <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                                  Deep-dive architectural benchmarks &amp; post-mortems.
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM FOOTER RIBBON */}
                    <div className="mt-7 pt-4.5 border-t border-[#2B2A27] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[#A6A39C]">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                        <span>Need a custom architecture assessment? Talk directly with our principal engineers.</span>
                      </div>

                      <div className="flex items-center gap-5">
                        <Link
                          href="/services"
                          className="text-[#A6A39C] hover:text-white transition-colors"
                        >
                          All 6 Disciplines
                        </Link>
                        <Link
                          href="/#contact"
                          className="font-semibold text-white hover:text-white/80 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Schedule 30-Min Discovery</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2.3 AWS Cloud Solutions (MULTI-COLUMN MEGA DROPDOWN) */}
            <div
              className="relative shrink-0"
              ref={awsDropdownRef}
              onMouseEnter={handleAwsEnter}
              onMouseLeave={handleAwsLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setAwsDropdownOpen((prev) => !prev);
                  setServicesDropdownOpen(false);
                }}
                aria-expanded={awsDropdownOpen}
                className={cn(
                  "relative flex items-center gap-1.5 text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2 cursor-pointer select-none",
                  pathname.startsWith("/services/cloud-services")
                    ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                    : "text-[#A6A39C] hover:text-white"
                )}
              >
                <span className="hidden xl:inline">AWS Cloud Solutions</span>
                <span className="xl:hidden">AWS Cloud</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 text-[#78756F]",
                    awsDropdownOpen && "rotate-180 text-white"
                  )}
                />
              </button>

              {/* AWS MEGA DROPDOWN */}
              {awsDropdownOpen && (
                <div
                  className="absolute top-full -left-36 xl:-left-44 pt-2.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                  onMouseEnter={handleAwsEnter}
                  onMouseLeave={handleAwsLeave}
                >
                  <div className="w-[780px] xl:w-[880px] max-w-[calc(100vw-2.5rem)] rounded-3xl bg-[#141413]/80 backdrop-blur-2xl border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 xl:p-7">
                    <div className="grid grid-cols-3 gap-6 xl:gap-7">
                      {/* AWS Col 1 */}
                      <div className="space-y-3 pr-4 border-r border-[#2B2A27]">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#78756F] mb-3">
                          CLOUD ARCHITECTURE
                        </div>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <Cloud className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              Multi-AZ VPCs
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              Sub-second failover, NAT gateways &amp; private subnets.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <Server className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              Zero-Downtime Migration
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              Phased cutover &amp; real-time database replication.
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* AWS Col 2 */}
                      <div className="space-y-3 pr-4 border-r border-[#2B2A27]">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#78756F] mb-3">
                          CONTAINERS &amp; DEVOPS
                        </div>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <Zap className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              EKS &amp; Serverless Scale
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              Auto-scaling Kubernetes clusters and Lambda execution.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <Terminal className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              Terraform GitOps
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              100% reproducible Infrastructure as Code pipelines.
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* AWS Col 3 */}
                      <div className="space-y-3">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#78756F] mb-3">
                          SECURITY &amp; FINOPS
                        </div>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <ShieldCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              AWS WAF &amp; Shield
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              DDoS protection, bot control &amp; SOC2 readiness.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/services/cloud-services"
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1C1C1A] transition-colors group block"
                        >
                          <Gauge className="w-5 h-5 text-white shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[13.5px] font-bold text-[#F5F1E9] group-hover:text-white transition-colors">
                              FinOps Cost Auditing
                            </div>
                            <p className="text-[11.5px] text-[#A6A39C] mt-0.5 leading-snug">
                              Cut cloud spend by eliminating unused instances.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* AWS Bottom Bar */}
                    <div className="mt-6 pt-4 border-t border-[#2B2A27] flex items-center justify-between text-xs">
                      <span className="text-[#A6A39C]">
                        AWS Certified Solutions Architects &bull; Enterprise Cloud Practice
                      </span>
                      <Link
                        href="/services/cloud-services"
                        className="font-semibold text-white hover:text-white/80 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Explore AWS Practice</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2.4 AI Solutions */}
            <Link
              href="/services/ai-solutions"
              className={cn(
                "relative text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2 shrink-0",
                pathname.startsWith("/services/ai-solutions")
                  ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              AI Solutions
            </Link>

            {/* 2.5 About */}
            <Link
              href="/about"
              className={cn(
                "relative text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2 shrink-0",
                isLinkActive("/about")
                  ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              About
            </Link>



            {/* 2.7 Blog */}
            <Link
              href="/blog"
              className={cn(
                "relative text-[13.5px] xl:text-[14.5px] font-medium tracking-normal whitespace-nowrap transition-colors py-2 shrink-0",
                pathname.startsWith("/blog") || pathname.startsWith("/insights")
                  ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-[#D97745]"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              Blog
            </Link>

            {/* Direct Phone Line (2xl screens) */}
            <a
              href={`tel:${COMPANY_INFO.contacts.phonePrimary}`}
              className="hidden 2xl:inline-flex items-center gap-1.5 text-[12.5px] font-mono whitespace-nowrap shrink-0 text-[#A6A39C] hover:text-white transition-colors py-1.5 px-3 rounded-full hover:bg-white/[0.05]"
              title="Call Z INTECH"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97745] shrink-0" />
              <span>{COMPANY_INFO.contacts.phonePrimaryDisplay}</span>
            </a>

            {/* 2.8 Action Button (Tactile, Single-Line, Never Wraps) */}
            <Link
              href="/#contact"
              className="whitespace-nowrap shrink-0 text-xs xl:text-sm font-semibold px-4.5 xl:px-5.5 py-2 xl:py-2.5 rounded-full border border-[#D97745]/40 text-[#F5F1E9] bg-gradient-to-r from-[#191918] to-[#242422] hover:from-[#D97745] hover:to-[#e58555] hover:text-white hover:border-transparent transition-all duration-300 shadow-md shadow-black/40 hover:shadow-[0_4px_20px_rgba(217,119,69,0.35)]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* ==========================================================
              3. MOBILE MENU TOGGLE BUTTON
             ========================================================== */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">
            <Link
              href="/#contact"
              className="text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-white hover:border-[#D97745] bg-[#161615]/75 backdrop-blur-xl transition-all shadow-sm shrink-0"
            >
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 text-[#A6A39C] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#D97745] rounded-xl border border-white/10 bg-[#161615]/75 backdrop-blur-xl shrink-0 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ==========================================================
          4. MOBILE DRAWER WITH RICH ACCORDIONS & LIQUID GLASS
         ========================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-[#111110]/95 backdrop-blur-3xl border-b border-white/10 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base sm:text-lg font-medium py-1.5 transition-colors border-b border-[#262523] pb-2",
                isLinkActive("/") ? "text-white font-semibold" : "text-[#A6A39C] hover:text-white"
              )}
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base sm:text-lg font-medium py-1.5 transition-colors border-b border-[#262523] pb-2",
                isLinkActive("/services") ? "text-white font-semibold" : "text-[#A6A39C] hover:text-white"
              )}
            >
              Services (All 6 Disciplines)
            </Link>

            {/* AWS Cloud Solutions in mobile */}
            <div className="border-b border-[#262523] pb-3">
              <Link
                href="/services/cloud-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base sm:text-lg font-medium text-white flex items-center justify-between py-1.5"
              >
                <span>AWS Cloud Solutions</span>
                <span className="text-[11px] font-mono text-[#D97745] bg-[#1C1C1A] px-2 py-0.5 rounded border border-[#2B2A27]">
                  AWS Hub
                </span>
              </Link>
              <div className="mt-2 pl-3 space-y-2 border-l border-[#353431]">
                <Link
                  href="/services/cloud-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#A6A39C] hover:text-white py-1"
                >
                  &bull; Multi-AZ VPC Architecture
                </Link>
                <Link
                  href="/services/cloud-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#A6A39C] hover:text-white py-1"
                >
                  &bull; Zero-Downtime Migration &amp; Modernization
                </Link>
                <Link
                  href="/services/cloud-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#A6A39C] hover:text-white py-1"
                >
                  &bull; EKS, Serverless &amp; Kubernetes
                </Link>
                <Link
                  href="/services/cloud-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#A6A39C] hover:text-white py-1"
                >
                  &bull; AWS WAF &amp; Security Compliance
                </Link>
              </div>
            </div>

            <Link
              href="/services/ai-solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base sm:text-lg font-medium py-1.5 transition-colors border-b border-[#262523] pb-2",
                pathname.startsWith("/services/ai-solutions")
                  ? "text-white font-semibold"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              AI Solutions
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base sm:text-lg font-medium py-1.5 transition-colors border-b border-[#262523] pb-2",
                isLinkActive("/about") ? "text-white font-semibold" : "text-[#A6A39C] hover:text-white"
              )}
            >
              About
            </Link>



            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base sm:text-lg font-medium py-1.5 transition-colors border-b border-[#262523] pb-2",
                pathname.startsWith("/blog") || pathname.startsWith("/insights")
                  ? "text-white font-semibold"
                  : "text-[#A6A39C] hover:text-white"
              )}
            >
              Blog
            </Link>

            {/* Direct telephone & company hub contact */}
            <div className="pt-3 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.contacts.phonePrimary}`}
                className="flex items-center gap-2 text-sm text-[#F5F1E9] hover:text-white py-1"
              >
                <Phone className="w-4 h-4 text-white" />
                <span className="font-mono">{COMPANY_INFO.contacts.phonePrimaryDisplay}</span>
              </a>
              <p className="text-xs text-[#78756F] font-mono">
                Nagpur &amp; Wardha Hubs &middot; Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
