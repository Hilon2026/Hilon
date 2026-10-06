import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

      {/* Hero Section — Balanced Desktop Split Layout */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 bg-gradient-to-b from-purple-50 via-white to-slate-50 dark:from-slate-950 dark:via-[#0F071D] dark:to-slate-950 overflow-hidden transition-colors">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-purple-600/10 dark:from-purple-700/20 dark:via-pink-600/15 dark:to-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="site-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Balanced Typography & Action CTAs */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/90 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                Aira by Hilon — Retail Customer Growth System
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                TURN YOUR CUSTOMERS INTO{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200">
                  LIFELONG CUSTOMERS.
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Your store already has customers. Aira helps you connect with them, understand them, engage them, and bring them back again and again.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <a
                  href="#growth-audit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 group"
                >
                  Book Growth Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-purple-900/60 text-slate-800 dark:text-slate-200 hover:border-purple-500 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Zap className="w-4 h-4 text-purple-600 dark:text-pink-400" />
                  Request Demo
                </Link>
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  Zero POS Replacement
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  WhatsApp Receipts
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Autonomous AI Insights
                </span>
              </div>
            </div>

            {/* Right Column: Matched Height Hero Image */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl p-2 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-purple-600/20 border border-purple-300 dark:border-purple-500/40 shadow-xl group">
                <img
                  src="/aira_hero_retail_dashboard.png"
                  alt="Aira Retail Growth Platform Dashboard Showcase"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] rounded-xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>

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
