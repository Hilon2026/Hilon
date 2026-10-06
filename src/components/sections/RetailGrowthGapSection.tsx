import React from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const RetailGrowthGapSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-purple-900/30 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            Section 02 — The Retail Growth Gap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Your Bill May Be Complete. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200">
              Your Customer Relationship Is Not.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            You don't have a WhatsApp problem. You have a customer-growth problem.
          </p>
        </div>

        {/* Visual Model Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Old Model */}
          <div className="bg-white dark:bg-slate-900/80 border border-red-200 dark:border-red-500/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-red-100 dark:border-red-500/20 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">The Old Retail Model</span>
              <XCircle className="w-5 h-5 text-red-500" />
            </div>
            
            <div className="space-y-3 font-semibold text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>1. Customer Purchase & Bill</span>
                <span className="text-xs text-slate-400">POS Counter</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>2. Cash / Card Payment</span>
                <span className="text-xs text-slate-400">Payment Completed</span>
              </div>
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-300 flex items-center justify-between">
                <span>3. Customer Walks Out Alone</span>
                <span className="text-xs text-red-500">Relationship Ends</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>❌ Customer data sits unused in POS database</p>
              <p>❌ Mass broadcast spam sent to everyone</p>
              <p>❌ No systematic review or referral follow-up</p>
              <p>❌ Lapsed customers forgotten completely</p>
            </div>
          </div>

          {/* Aira Customer Growth Model */}
          <div className="bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900 border border-purple-300 dark:border-purple-500/40 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-500/30 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-pink-400">The Aira Growth System</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-200 text-center">
                1. Purchase
              </div>
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-200 text-center">
                2. 360° Customer Profile
              </div>
              <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/40 border border-pink-200 dark:border-pink-500/30 text-pink-800 dark:text-pink-200 text-center">
                3. WhatsApp Conversation
              </div>
              <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/40 border border-pink-200 dark:border-pink-500/30 text-pink-800 dark:text-pink-200 text-center">
                4. Google Review & Referral
              </div>
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-center col-span-2">
                5. Relevant Personalised Offer ➔ Repeat Purchase
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-purple-100 dark:border-purple-900/40 pt-4">
              <p>✨ Instant WhatsApp receipt & phone number opt-in</p>
              <p>✨ Automated category cross-sell (Formal Shirt ➔ Trousers)</p>
              <p>✨ AI-driven 60/90-day win-back campaigns</p>
              <p>✨ High Customer Lifetime Value (LTV) & brand loyalty</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/#growth-audit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-extrabold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            Find My Customer-Growth Gaps
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
