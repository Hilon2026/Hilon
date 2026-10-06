import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AiraHeroDashboard from "@/components/sections/AiraHeroDashboard";
import PlatformCapabilities from "@/components/sections/PlatformCapabilities";
import AiraBrainSection from "@/components/sections/AiraBrainSection";
import RetailWorkflow from "@/components/sections/RetailWorkflow";
import CustomerJourneySection from "@/components/sections/CustomerJourneySection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

// Master Specification Section Components
import { RetailGrowthGapSection } from "@/components/sections/RetailGrowthGapSection";
import { GrowthEngineWheelSection } from "@/components/sections/GrowthEngineWheelSection";
import { ManagedMarketingSection } from "@/components/sections/ManagedMarketingSection";
import { RetailGrowthAuditSection } from "@/components/sections/RetailGrowthAuditSection";
import { PackagesCommercialSection } from "@/components/sections/PackagesCommercialSection";

import useSEO from "@/hooks/useSEO";

export const Index: React.FC = () => {
  useSEO({
    title: "Hilon & Aira — Retail Customer Growth System",
    description: "Turn your store's customers into lifelong buyers. Aira unifies WhatsApp Business API, CRM, automated engagement, loyalty, managed marketing and retail analytics.",
    canonicalUrl: "https://hilon.in/",
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans overflow-x-hidden selection:bg-purple-600 selection:text-white transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Hero Section (Section 01) */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-purple-50 via-white to-slate-50 dark:from-slate-950 dark:via-[#0F071D] dark:to-slate-950 overflow-hidden transition-colors">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-purple-600/10 dark:from-purple-700/20 dark:via-pink-600/15 dark:to-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="site-container relative z-10">
          {/* Eyebrow & Hero Copy */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/90 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              Aira by Hilon — Retail Customer Growth System
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6">
              TURN YOUR CUSTOMERS INTO{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200">
                LIFELONG CUSTOMERS.
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Your store already has customers. Aira helps you connect with them, understand them, engage them, and bring them back again and again.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#growth-audit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-extrabold text-base hover:opacity-95 transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 group"
              >
                Book a Retail Growth Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-purple-900/60 text-slate-800 dark:text-slate-200 hover:border-purple-500 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Zap className="w-4 h-4 text-purple-600 dark:text-pink-400" />
                Request a Demo
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 italic">
              From the transaction to the next purchase, Aira helps you build the customer relationship.
            </p>
          </div>

          {/* Interactive Hero Visual Dashboard */}
          <div className="max-w-6xl mx-auto">
            <AiraHeroDashboard />
          </div>
        </div>
      </section>

      {/* Section 02 — The Retail Growth Gap */}
      <RetailGrowthGapSection />

      {/* Section 05, 06, 07 — The Growth Engine Wheel & Customer Connect */}
      <GrowthEngineWheelSection />

      {/* Platform Capabilities (Section 03 & 04) */}
      <PlatformCapabilities />

      {/* Aira AI & Retail Analytics (Section 18 & 19) */}
      <AiraBrainSection />

      {/* Autonomous Retail Workflow */}
      <RetailWorkflow />

      {/* Section 10 & 11 — End-to-End Customer Journey & Segmentation */}
      <CustomerJourneySection />

      {/* Section 14 & 15 — Managed Retail Marketing */}
      <ManagedMarketingSection />

      {/* Section 20 — The Retail Growth Audit Scorecard */}
      <RetailGrowthAuditSection />

      {/* Section 22 — Problem / Solution Matrix */}
      <ProblemSolutionSection />

      {/* Section 23 — Packages & Commercial Model */}
      <PackagesCommercialSection />

      {/* Section 24 & 25 — Final Conversion & Proof */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
