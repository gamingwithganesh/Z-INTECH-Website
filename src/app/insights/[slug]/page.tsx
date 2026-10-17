import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { INSIGHTS } from "@/data/insights";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: `${post.title} — Z INTECH Insights`,
    description: post.excerpt,
  };
}

export const instant = false;

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = Array.from(
    new Map(
      INSIGHTS.filter((p) => post.relatedSlugs.includes(p.slug)).map((item) => [item.slug, item])
    ).values()
  );

  return (
    <article className="min-h-screen bg-[#111110] text-[#F5F1E9] py-14 sm:py-20 selection:bg-[#D97745]/30 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78756F] hover:text-[#D97745] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights Hub</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#78756F]">
            <span className="font-mono text-[11px] text-[#D97745] bg-[#1C1C1A] border border-[#2B2A27] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-[#78756F]" />
              {post.readTime}
            </span>
            <span>&bull;</span>
            <span className="font-mono text-[11px]">{post.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#F5F1E9] leading-[1.12]">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-[#A6A39C] leading-relaxed pt-1">
            {post.excerpt}
          </p>

          <div className="pt-3 flex items-center justify-between border-t border-[#262523]">
            <div className="text-xs">
              <span className="font-semibold text-[#F5F1E9] block">{post.author.name}</span>
              <span className="text-[#78756F] font-mono text-[11px]">{post.author.role}</span>
            </div>
          </div>
        </header>

        {/* Executive Takeaways Box */}
        <div className="rounded-3xl bg-[#161615] border border-[#262523] p-6 sm:p-8 space-y-3.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D97745] font-semibold block">
            Executive Summary &bull; Key Findings
          </span>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#A6A39C]">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D97745] shrink-0 mt-0.5" />
                <span className="text-[#F5F1E9]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Article Content */}
        <div className="bg-[#161615] rounded-3xl p-6 sm:p-10 border border-[#262523] space-y-8">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F1E9] tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="pt-6 border-t border-[#262523] space-y-4">
            <h3 className="text-lg font-bold text-[#F5F1E9] tracking-tight">
              Related Perspectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/insights/${rel.slug}`}
                  className="p-5 rounded-2xl bg-[#161615] border border-[#262523] hover:border-[#D97745]/40 transition-all group block space-y-2"
                >
                  <span className="text-[10px] font-mono text-[#D97745] uppercase tracking-wider block">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#F5F1E9] group-hover:text-[#D97745] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <div className="pt-2 text-xs font-semibold text-[#D97745] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Paper</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA to contact */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#161615]/75 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] text-center space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E9]">
            Discuss this architecture with our team
          </h3>
          <p className="text-xs text-[#A6A39C]">
            Our lead engineers are available for high-bandwidth technical reviews and design sessions.
          </p>
          <div className="pt-1">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D97745] hover:bg-[#e58555] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md shadow-[#D97745]/20 hover:shadow-[#D97745]/35"
            >
              <span>Consult Lead Architect</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
