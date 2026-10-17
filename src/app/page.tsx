import * as React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilityPillars } from "@/components/sections/CapabilityPillars";
import { CinematicMediaSection } from "@/components/sections/CinematicMediaSection";
import { TestimonialMasonrySection } from "@/components/sections/TestimonialMasonrySection";
import { LatestBlogsSection } from "@/components/sections/LatestBlogsSection";
import { ConversionCTA } from "@/components/sections/ConversionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#111110]">
      {/* 1. Hero Section — Cinematic Video Background & Editorial Headline */}
      <HeroSection />

      {/* 2. Core Disciplines — "For businesses building what's next." */}
      <CapabilityPillars />

      {/* 3. Cinematic Featured Media — 16:9 media frame with interactive telemetry walkthrough */}
      <CinematicMediaSection />


      {/* 4. Testimonial Masonry Grid — "Design & engineering teams love Z INTECH" with left-to-right sliding */}
      <TestimonialMasonrySection />

      {/* 5. Latest Blogs — Interactive Carousel matching reference design */}
      <LatestBlogsSection />

      {/* 6. High-Impact Contact Section — "Have something ambitious in mind?" */}
      <ConversionCTA />
    </div>
  );
}
