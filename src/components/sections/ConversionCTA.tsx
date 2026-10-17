"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  X,
  Send,
  MessageSquare,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function ConversionCTA() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "AI Solutions",
    projectDescription: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          company: "Enterprise Inquirer",
          budgetRange: "Flexible / To Discuss",
          contactMethod: "Email or Phone",
          consent: true,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFormState({
        fullName: "",
        email: "",
        phone: "",
        serviceInterest: "AI Solutions",
        projectDescription: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please connect via telephone."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#111110] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#262523] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Sleek Cinematic Card with hero-team-arch.jpg Background & Liquid Glass */}
        <div className="relative bg-[#161615]/80 backdrop-blur-2xl rounded-[24px] sm:rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1.5px_rgba(255,255,255,0.1)] border border-white/10 overflow-hidden min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col justify-center p-6 sm:p-10 lg:p-16">
          
          {/* Background Image: hero-team-arch.jpg */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Image
              src="/images/hero-team-arch.jpg"
              alt="Z INTECH Systems Architecture Engineering Team"
              fill
              priority
              className="object-cover object-center md:object-right opacity-70 lg:opacity-85 filter brightness-[0.88] contrast-[1.05]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Cinematic Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#111110] via-[#111110]/95 md:via-[#111110]/85 lg:via-[#111110]/75 to-transparent" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111110]/40 via-transparent to-[#111110]/60" />
          </div>

          {/* Subtle Ambient Copper Glow */}
          <div className="absolute -left-20 -bottom-20 w-[450px] h-[340px] bg-[#D97745]/15 rounded-full blur-3xl pointer-events-none z-1" />

          {/* Top/Left Content Area */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1D]/90 backdrop-blur-md border border-[#D97745]/40 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#D97745] mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse" />
              ENGINEERED FOR SCALE
            </div>

            {/* Headline in crisp light text */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E9] tracking-tight leading-[1.1]">
              Have something ambitious in mind?
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#C5C2BA] leading-relaxed max-w-lg">
              Effortlessly bring modern AI, custom cloud architecture, and intelligent automation into production.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#D97745] hover:bg-[#e58555] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#D97745]/30 hover:shadow-[#D97745]/50 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-white" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.contacts.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1F1F1D]/75 backdrop-blur-xl hover:bg-[#2A2A28]/90 text-white font-mono text-xs sm:text-sm font-medium border border-white/10 transition-all duration-200 w-full sm:w-auto shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97745] shrink-0" />
                <span>{COMPANY_INFO.contacts.phonePrimaryDisplay}</span>
              </a>

              <Link
                href="/#contact"
                className="text-xs sm:text-sm font-medium text-[#A6A39C] hover:text-[#F5F1E9] underline-offset-4 hover:underline transition-colors text-center sm:text-left py-1"
              >
                View registered offices &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Contact / Consultation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#151514]/90 backdrop-blur-2xl text-[#F5F1E9] rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2B2A27]">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Start an Engineering Discussion
                </h3>
                <p className="text-xs text-[#A6A39C] mt-0.5">
                  Direct connection with senior technical leads at Z INTECH
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#1F1F1D] hover:bg-[#2B2A27] flex items-center justify-center text-[#A6A39C] hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            {status === "success" ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0D9488]/20 text-[#0D9488] flex items-center justify-center mx-auto border border-[#0D9488]/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-[#A6A39C] max-w-sm mx-auto">
                  Thank you! Our engineering team will review your requirements and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setModalOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0D9488] text-white text-xs font-medium hover:bg-[#0B7A6E] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A39C] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState({ ...formState, fullName: e.target.value })
                    }
                    placeholder="e.g. Anand Sharma"
                    className="w-full bg-[#111110] border border-[#2B2A27] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E9] placeholder-[#78756F] focus:border-[#0D9488] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A39C] mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full bg-[#111110] border border-[#2B2A27] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E9] placeholder-[#78756F] focus:border-[#0D9488] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A39C] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+91 9423032182"
                      className="w-full bg-[#111110] border border-[#2B2A27] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E9] placeholder-[#78756F] focus:border-[#0D9488] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A39C] mb-1.5">
                    Primary Area of Focus
                  </label>
                  <select
                    value={formState.serviceInterest}
                    onChange={(e) =>
                      setFormState({ ...formState, serviceInterest: e.target.value })
                    }
                    className="w-full bg-[#111110] border border-[#2B2A27] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E9] focus:border-[#0D9488] focus:outline-none transition-colors"
                  >
                    <option value="AI Solutions">AI Solutions &amp; Enterprise RAG</option>
                    <option value="Cloud Services">Cloud Infrastructure &amp; AWS</option>
                    <option value="Business Automation">Business Automation &amp; Workflows</option>
                    <option value="Software Engineering">Software Engineering &amp; Modern Web</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A39C] mb-1.5">
                    Project Objectives *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formState.projectDescription}
                    onChange={(e) =>
                      setFormState({ ...formState, projectDescription: e.target.value })
                    }
                    placeholder="Briefly describe what you're planning to build or modernize..."
                    className="w-full bg-[#111110] border border-[#2B2A27] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E9] placeholder-[#78756F] focus:border-[#0D9488] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#0D9488] hover:bg-[#0B7A6E] text-white font-medium text-sm transition-all shadow-md shadow-[#0D9488]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-[#78756F] text-center pt-1">
                  Confidential &amp; protected by NDA. No spam ever.
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
