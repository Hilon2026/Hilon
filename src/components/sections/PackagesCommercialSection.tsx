import React from "react";
import { CheckCircle2, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const PackagesCommercialSection: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-white text-white dark:text-white light:text-slate-900 border-t border-purple-900/30 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 text-pink-300 dark:text-pink-300 light:text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Section 23 — Commercial Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Built For Every Stage Of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Retail Customer Growth.
            </span>
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            We don't compete on commodity WhatsApp API price. We compete on customer-growth value generated for your store.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: Retail Growth Starter */}
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase">
                Starter
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">Retail Growth Starter</h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">For retailers starting their customer-growth & WhatsApp CRM journey.</p>
              
              <div className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 border-t border-b border-slate-800 py-3">
                ₹15,000 <span className="text-xs font-normal text-slate-400">/ store / year</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> WhatsApp Business API Setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 360° Retail CRM & Profiles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Broadcasts & Template Management</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Shared Team Inbox</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Basic Operational Reports</li>
              </ul>
            </div>

            <Link
              to="/book-demo"
              className="w-full py-3 bg-slate-800 hover:bg-purple-900/60 text-white font-bold text-xs rounded-xl text-center transition-all border border-purple-500/30"
            >
              Start With Starter
            </Link>
          </div>

          {/* Package 2: Retail Growth Pro (Featured) */}
          <div className="bg-gradient-to-b from-purple-950/60 via-slate-900 to-slate-900 dark:from-purple-950/60 dark:via-slate-900 dark:to-slate-900 light:from-purple-50 light:via-white light:to-white border-2 border-purple-500 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl relative scale-[1.03]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              Most Popular
            </div>

            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-300 text-xs font-semibold uppercase">
                Pro
              </div>
              <h3 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900">Retail Growth Pro</h3>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">For stores ready to actively automate repeat customer purchases.</p>
              
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 border-t border-b border-purple-900/40 py-3">
                ₹20,000 <span className="text-xs font-normal text-slate-400">/ store / year</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Everything in Starter +</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 13+ Automated Campaign Workflows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Google Review & Referral Automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 60/90-Day Win-Back Journeys</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Category Cross-Sell Recommendation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Advanced Customer Segmentation</li>
              </ul>
            </div>

            <Link
              to="/book-demo"
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white font-extrabold text-xs rounded-xl text-center shadow-lg shadow-purple-600/30 transition-all"
            >
              Choose Retail Pro
            </Link>
          </div>

          {/* Package 3: Retail Growth Managed 360 */}
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase">
                Managed 360
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">Retail Growth 360</h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">For retailers who want an outsourced, fully managed growth team.</p>
              
              <div className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 border-t border-b border-slate-800 py-3">
                Custom <span className="text-xs font-normal text-slate-400">/ tailored scope</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Everything in Pro +</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> In-Store Photo & Video Shoots</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Monthly Content Calendar & Reels</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Digital Storefront & E-Commerce</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> App-less Loyalty & Rewards Wallet</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Dedicated Growth Manager</li>
              </ul>
            </div>

            <Link
              to="/book-demo"
              className="w-full py-3 bg-slate-800 hover:bg-purple-900/60 text-white font-bold text-xs rounded-xl text-center transition-all border border-purple-500/30"
            >
              Inquire 360 Managed
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
