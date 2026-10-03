import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Brain, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AiraHeroDashboard from "@/components/sections/AiraHeroDashboard";
import PlatformCapabilities from "@/components/sections/PlatformCapabilities";
import AiraBrainSection from "@/components/sections/AiraBrainSection";
import RetailWorkflow from "@/components/sections/RetailWorkflow";
import IndustrySolutionsSection from "@/components/sections/IndustrySolutionsSection";
import InteractiveProductDemo from "@/components/sections/InteractiveProductDemo";
import CustomerJourneySection from "@/components/sections/CustomerJourneySection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import useSEO from "@/hooks/useSEO";

export const Index: React.FC = () => {
  useSEO({
    title: "Hilon — AI-Powered Retail Intelligence | Aira",
    description: "Aira by Hilon brings retail billing, customer intelligence, AI insights, engagement and analytics together in one intelligent platform.",
    canonicalUrl: "https://hilon.ai/",
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-slate-950 via-[#0F071D] to-slate-950 overflow-hidden">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-700/20 via-pink-600/15 to-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="site-container relative z-10">
          {/* Eyebrow & Hero Copy */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-md shadow-purple-950/50">
              AI-POWERED RETAIL INTELLIGENCE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Turn Every Sale Into Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
                Next Opportunity.
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Aira brings billing, customer intelligence, engagement and analytics together in one intelligent retail platform.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-extrabold text-base hover:opacity-95 transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 group"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#product-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-purple-900/60 text-slate-200 hover:text-white hover:border-purple-500 font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-pink-400" />
                Explore Aira
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero POS Replacement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Instant WhatsApp Receipts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Autonomous AI Insights
              </span>
            </div>
          </div>

          {/* Interactive Hero Visual Dashboard */}
          <div className="max-w-6xl mx-auto">
            <AiraHeroDashboard />
          </div>
        </div>
      </section>

      {/* 6 Platform Capabilities */}
      <PlatformCapabilities />

      {/* Aira AI Intelligence Core */}
      <AiraBrainSection />

      {/* Autonomous Retail Workflow */}
      <RetailWorkflow />

      {/* Problem / Solution Comparative */}
      <ProblemSolutionSection />

      {/* Industry Solutions Matrix */}
      <IndustrySolutionsSection />

      {/* Interactive SaaS Product Demo */}
      <InteractiveProductDemo />

      {/* End-to-End Customer Journey */}
      <CustomerJourneySection />

      {/* Final Call to Action */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
