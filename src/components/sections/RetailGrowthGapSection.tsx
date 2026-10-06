import React from "react";
import { ArrowRight, CheckCircle2, XCircle, Users, MessageSquare, RefreshCw, Star, Share2, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const RetailGrowthGapSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-white dark:text-white light:text-slate-900 border-t border-purple-900/30 dark:border-purple-900/30 light:border-slate-200 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 text-pink-300 dark:text-pink-300 light:text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Section 02 — The Retail Growth Gap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Bill May Be Complete. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Your Customer Relationship Is Not.
            </span>
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            You don't have a WhatsApp problem. You have a customer-growth problem.
          </p>
        </div>

        {/* Visual Model Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Old Model */}
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-red-500/30 dark:border-red-500/30 light:border-red-200 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 light:text-red-600">The Old Retail Model</span>
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            
            <div className="space-y-3 font-semibold text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
              <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 border border-slate-800 flex items-center justify-between">
                <span>1. Customer Purchase & Bill</span>
                <span className="text-xs text-slate-400">POS Counter</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 border border-slate-800 flex items-center justify-between">
                <span>2. Cash / Card Payment</span>
                <span className="text-xs text-slate-400">Payment Completed</span>
              </div>
              <div className="p-3 rounded-xl bg-red-950/40 dark:bg-red-950/40 light:bg-red-50 border border-red-500/30 text-red-300 dark:text-red-300 light:text-red-700 flex items-center justify-between">
                <span>3. Customer Walks Out Alone</span>
                <span className="text-xs text-red-400">Relationship Ends</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 border-t border-slate-800 pt-4">
              <p>❌ Customer data sits unused in POS database</p>
              <p>❌ Mass broadcast spam sent to everyone</p>
              <p>❌ No systematic review or referral follow-up</p>
              <p>❌ Lapsed customers forgotten completely</p>
            </div>
          </div>

          {/* Aira Customer Growth Model */}
          <div className="bg-gradient-to-b from-purple-950/40 via-slate-900 to-slate-900 dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900 light:from-purple-50 light:via-white light:to-white border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 light:text-purple-700">The Aira Growth System</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <div className="p-3 rounded-xl bg-purple-900/40 dark:bg-purple-900/40 light:bg-purple-100 border border-purple-500/30 text-purple-200 dark:text-purple-200 light:text-purple-800 text-center">
                1. Purchase
              </div>
              <div className="p-3 rounded-xl bg-purple-900/40 dark:bg-purple-900/40 light:bg-purple-100 border border-purple-500/30 text-purple-200 dark:text-purple-200 light:text-purple-800 text-center">
                2. 360° Customer Profile
              </div>
              <div className="p-3 rounded-xl bg-pink-900/40 dark:bg-pink-900/40 light:bg-pink-100 border border-pink-500/30 text-pink-200 dark:text-pink-200 light:text-pink-800 text-center">
                3. WhatsApp Conversation
              </div>
              <div className="p-3 rounded-xl bg-pink-900/40 dark:bg-pink-900/40 light:bg-pink-100 border border-pink-500/30 text-pink-200 dark:text-pink-200 light:text-pink-800 text-center">
                4. Google Review & Referral
              </div>
              <div className="p-3 rounded-xl bg-emerald-900/40 dark:bg-emerald-900/40 light:bg-emerald-100 border border-emerald-500/30 text-emerald-200 dark:text-emerald-200 light:text-emerald-800 text-center col-span-2">
                5. Relevant Personalised Offer ➔ Repeat Purchase
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 border-t border-purple-900/40 pt-4">
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
