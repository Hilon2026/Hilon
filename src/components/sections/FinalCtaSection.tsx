import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import AiraLogo from "@/components/brand/AiraLogo";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0614] text-white relative overflow-hidden">
      {/* Background AI Aura Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-700/25 via-pink-600/20 to-purple-800/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/60 border border-purple-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-md">
            The AI-First Retail Platform
          </div>

          <div className="flex justify-center mb-6">
            <AiraLogo variant="light" size="lg" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Make your retail business{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              more intelligent.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Bring your transactions, customers and insights together with Aira.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-extrabold text-base hover:opacity-95 transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 group"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#product-demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 border border-purple-900/60 text-slate-200 hover:text-white hover:border-purple-500 font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-pink-400" />
              Explore Aira
            </a>
          </div>

          <div className="pt-6 border-t border-purple-900/30 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              No Hardware Overhaul Required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Works with Existing Billing Stream
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Data Security & Privacy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
