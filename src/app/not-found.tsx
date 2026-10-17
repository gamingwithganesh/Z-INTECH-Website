import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 bg-[#111110] text-[#F5F1E9] flex items-center justify-center min-h-[60vh]">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1C1C1A] text-[#D97745] font-mono text-xl font-bold border border-[#2B2A27] shadow-sm">
          404
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F1E9]">
          Page Not Located
        </h1>

        <p className="text-sm sm:text-base text-[#A6A39C] leading-relaxed">
          The requested route or resource does not exist or may have been repositioned.
          Explore our core sections or reach out directly to the Z INTECH engineering team.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>

          <Button href="/services" variant="secondary" size="md">
            Explore Services
          </Button>

          <Button href="/#contact" variant="outline" size="md">
            Contact Support
          </Button>
        </div>

        <div className="pt-8 border-t border-[#2B2A27] text-xs text-[#78756F] font-mono">
          Direct Inquiries: {COMPANY_INFO.contacts.phonePrimaryDisplay}
        </div>
      </div>
    </div>
  );
}
