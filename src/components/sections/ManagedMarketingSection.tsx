import React from "react";
import { Camera, Video, Calendar, Sparkles, Instagram, Facebook, Youtube, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const ManagedMarketingSection: React.FC = () => {
  return (
    <section id="managed-marketing" className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-white dark:text-white light:text-slate-900 border-t border-purple-900/30 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 text-pink-300 dark:text-pink-300 light:text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Section 14 & 15 — Managed Retail Marketing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            You Run The Store. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              We Can Run The Digital Marketing.
            </span>
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            For retailers who want execution, not another software dashboard. One store visit = A month of premium content.
          </p>
        </div>

        {/* 8 Step Content Workflow */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-5 rounded-2xl space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-900/60 flex items-center justify-center text-pink-400 font-bold text-sm">01</div>
            <h4 className="font-bold text-sm">Store Visit & Shoot</h4>
            <p className="text-xs text-slate-400">In-store photos & videos captured by experts</p>
          </div>
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-5 rounded-2xl space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-900/60 flex items-center justify-center text-pink-400 font-bold text-sm">02</div>
            <h4 className="font-bold text-sm">Reels & Creatives</h4>
            <p className="text-xs text-slate-400">High-converting edits, stories & promotions</p>
          </div>
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-5 rounded-2xl space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-900/60 flex items-center justify-center text-pink-400 font-bold text-sm">03</div>
            <h4 className="font-bold text-sm">Monthly Calendar</h4>
            <p className="text-xs text-slate-400">Festival & seasonal campaigns pre-planned</p>
          </div>
          <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-purple-900/40 dark:border-purple-900/40 light:border-slate-200 p-5 rounded-2xl space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-900/60 flex items-center justify-center text-pink-400 font-bold text-sm">04</div>
            <h4 className="font-bold text-sm">Omnichannel Publish</h4>
            <p className="text-xs text-slate-400">Insta, FB, Shorts & WhatsApp Broadcasts</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/40 border border-purple-500/30 rounded-3xl p-8 space-y-8">
          <h3 className="text-xl font-extrabold text-white text-center">What Hilon Managed Retail Marketing Includes:</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <Camera className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-sm">In-Store Shoots</h5>
                <p className="mt-1 text-slate-400">Professional photography of new arrivals, collections & staff.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <Video className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-sm">Reels & Shorts</h5>
                <p className="mt-1 text-slate-400">Short-form videos for Instagram Reels and YouTube Shorts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <Calendar className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-sm">Content Calendar</h5>
                <p className="mt-1 text-slate-400">30-day structured promotional calendar synced with store events.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-extrabold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            Ask About Managed Marketing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
