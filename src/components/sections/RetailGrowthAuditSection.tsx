import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, BarChart3, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AUDIT_DIMENSIONS = [
  { id: 1, title: "Customer Data Capture", desc: "Are phone numbers collected digitally at checkout?" },
  { id: 2, title: "WhatsApp Business API Setup", desc: "Is official green tick API & team inbox active?" },
  { id: 3, title: "Automated Follow-Up Journeys", desc: "Are thank-you, review & reorder messages automated?" },
  { id: 4, title: "Repeat Purchase Campaigns", desc: "Are category-specific offers sent to past buyers?" },
  { id: 5, title: "Google Review Automation", desc: "Do satisfied buyers get automated review requests?" },
  { id: 6, title: "Customer Referral Engine", desc: "Do existing customers get rewarded for referring friends?" },
  { id: 7, title: "Customer Segmentation", desc: "Are offers targeted by purchase history rather than mass spam?" },
  { id: 8, title: "Loyalty & Cashback Rewards", desc: "Is there an app-less points/wallet system active?" },
  { id: 9, title: "Social Media to Store Funnel", desc: "Are Instagram/Facebook posts linked to WhatsApp enquiry?" },
  { id: 10, title: "Digital Storefront", desc: "Can customers browse your store catalogue on mobile?" }
];

export const RetailGrowthAuditSection: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<number[]>([1, 2, 5]);

  const toggleDimension = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const score = checkedIds.length * 10;
  const gapCount = 10 - checkedIds.length;

  return (
    <section id="growth-audit" className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-white dark:text-white light:text-slate-900 border-t border-purple-900/30 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 text-pink-300 dark:text-pink-300 light:text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Section 20 — The Retail Growth Audit
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Before We Sell Software, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              We Audit Your Customer Revenue Gaps.
            </span>
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            “We don't want to sell you something you don't need. First, let's identify where your store's customer revenue is leaking.”
          </p>
        </div>

        {/* Audit Scorecard Calculator & Heatmap */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* 10 Audit Dimensions Checklist (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center justify-between">
              <span>Interactive Retail Audit Checklist</span>
              <span className="text-xs text-purple-400 font-normal">Select what your store already has:</span>
            </h3>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-2">
              {AUDIT_DIMENSIONS.map((dim) => {
                const isSelected = checkedIds.includes(dim.id);
                return (
                  <button
                    key={dim.id}
                    type="button"
                    onClick={() => toggleDimension(dim.id)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-purple-950/60 dark:bg-purple-950/60 light:bg-purple-50 border-purple-500/50 text-white dark:text-white light:text-purple-950 font-medium"
                        : "bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-purple-800"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "bg-purple-600 border-purple-400 text-white" : "border-slate-700"
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">{dim.id}. {dim.title}</div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">{dim.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Audit Result Card & Opportunity Heatmap (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Your Store Audit Readiness Score</span>
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
                {score} / 100
              </div>
              <p className="text-xs text-slate-300">
                {gapCount > 0 ? `${gapCount} major customer growth opportunities detected` : "Excellent! Your store has high customer retention infrastructure."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-900/50 space-y-3">
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Audit Opportunity Summary
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                By implementing the missing {gapCount} capabilities, your store can increase repeat sales frequency by up to 25-40% without increasing ad spend.
              </p>
            </div>

            <Link
              to="/book-demo"
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-95 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
            >
              Book My Full Growth Audit Report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
