import { useState } from "react";
import { CheckCircle2, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const plans = [
  {
    name: "Aira Growth",
    tagLine: "Designed for single & growing retail stores",
    price: "₹15,000",
    periodLabel: "per store / year",
    highlightLine: "Core Features Included:",
    features: [
      "Sub-second Smart POS & barcode billing",
      "Instant WhatsApp & paperless e-bills",
      "Automated WhatsApp customer campaigns",
      "360° Customer directory & engagement",
      "Festival & seasonal campaign automation",
      "Real-time sales & growth telemetry dashboard"
    ],
    cta: "Book Demo & Get Started",
    href: "/book-demo",
    popular: false,
    badge: null,
  },
  {
    name: "Aira Enterprise",
    tagLine: "Designed for multi-store retail chains & franchises",
    price: "₹20,000",
    periodLabel: "per store / year",
    highlightLine: "Everything in Growth, plus:",
    features: [
      "24/7 Autonomous AI Intelligence Core & insights",
      "Advanced WhatsApp campaign automation suite",
      "Festival & targeted promotional campaigns",
      "Multi-store unified executive telemetry",
      "Custom POS plugin & API developer access",
      "Dedicated 1-on-1 account manager & priority support"
    ],
    cta: "Book Enterprise Demo",
    href: "/book-demo",
    popular: true,
    badge: "Most Popular",
  },
];

export default function Pricing() {
  useSEO({
    title: "Pricing Plans — Hilon Aira Platform",
    description: "Transparent annual pricing plans for Aira AI Retail Platform. Smart billing, e-bills, WhatsApp campaigns, AI insights, and multi-store telemetry.",
    canonicalPath: "/pricing"
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-purple-600 selection:text-white transition-colors duration-300">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 via-white to-slate-50 dark:from-slate-950 dark:via-[#1A0B2E] dark:to-slate-950 text-center transition-colors">
        <div className="site-container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Investment
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Predictable Pricing for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200">
              Modern Retailers.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the Aira plan built for your store count. No hidden fees or hardware replacement required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-spacing bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="site-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
                  plan.popular
                    ? "bg-white dark:bg-gradient-to-b dark:from-purple-950/80 dark:via-slate-900 dark:to-slate-950 border-purple-500 shadow-2xl shadow-purple-600/20 scale-[1.02]"
                    : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-purple-900/40 hover:border-purple-500/60 shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6 rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6">
                    {plan.tagLine}
                  </p>

                  <div className="mb-6 p-5 rounded-2xl bg-purple-50 dark:bg-slate-950 border border-purple-200 dark:border-purple-900/40">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{plan.periodLabel}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-pink-400">
                      {plan.highlightLine}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    to={plan.href}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center block transition-all shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white hover:opacity-90 shadow-purple-600/30"
                        : "bg-purple-100 dark:bg-slate-950 border border-purple-300 dark:border-purple-900/60 text-purple-900 dark:text-white hover:border-purple-500"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Need custom Aira enterprise pricing for &gt;10 stores? Contact demo@hilon.ai</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
