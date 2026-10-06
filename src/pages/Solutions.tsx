import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, MessageSquare, Zap, CreditCard, 
  Receipt, Brain, Users, Sparkles, TrendingUp, ShieldCheck, BarChart3, Star,
  Calculator, Smartphone, ShoppingBag, ArrowUpRight, Flame, Layers, Clock, Activity, Send
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const SOLUTION_CATEGORIES = [
  { id: "all", label: "All Solutions", count: 6 },
  { id: "campaigns", label: "📱 WhatsApp Campaigns", count: 2 },
  { id: "billing", label: "🧾 Fast Billing & E-Bills", count: 1 },
  { id: "loyalty", label: "🎁 Loyalty & Rewards", count: 1 },
  { id: "ai", label: "🤖 AI Automation", count: 2 }
];

const solutions = [
  {
    id: "whatsapp-campaigns",
    category: "campaigns",
    icon: MessageSquare,
    badge: "High Conversion Channel",
    title: "WhatsApp Campaigns & Automated Marketing",
    tagline: "Turn checkout phone numbers into 4.8x ROI marketing channels",
    problem: "Traditional SMS blasts and paper flyers are ignored or thrown away, resulting in high customer drop-off.",
    solution: "Aira delivers targeted, rich WhatsApp promotional campaigns directly to customers with 98% open rates and instant 1-click CTA responses.",
    benefits: [
      "Targeted WhatsApp broadcast campaigns with dynamic templates",
      "Automated 30-day customer win-back triggers",
      "Birthday & anniversary personalized greeting campaigns",
      "Inactive customer reactivation workflows",
      "Real-time campaign open, click & conversion telemetry"
    ],
    mockup: {
      stat1: "98.4%",
      stat1Label: "Message Open Rate",
      stat2: "4.8x",
      stat2Label: "Avg Campaign ROI",
      badgeText: "Official Meta API",
      liveData: [
        "Campaign: Festive Special Alert",
        "Audience: Past Shoppers (1,250)",
        "Delivered: 1,248 • Read: 1,228 (98.4%)",
        "Store Visits Generated: 84 (₹42,600 Revenue)"
      ]
    },
    href: "/book-demo"
  },
  {
    id: "festival-campaigns",
    category: "campaigns",
    icon: Zap,
    badge: "Revenue Surge Engine",
    title: "Festival & Seasonal Campaign Engine",
    tagline: "Drive massive footfall during Diwali, Eid, Holi, New Year & seasonal sales",
    problem: "Planning seasonal sales manually takes weeks, and generic discounts fail to attract repeat shoppers.",
    solution: "Aira provides ready-to-launch festival campaign templates that automatically segment buyers by category preference and send personalized offers.",
    benefits: [
      "Pre-built Diwali, Eid, Holi & festive offer templates",
      "Segmented VIP customer exclusive pre-sale access",
      "Automated WhatsApp coupon generation & tracking",
      "Category-specific festival bundle recommendations",
      "Instant revenue surge tracking per campaign"
    ],
    mockup: {
      stat1: "₹84,500",
      stat1Label: "Festive Revenue Surge",
      stat2: "3.2x",
      stat2Label: "Footfall Increase",
      badgeText: "Ready Templates",
      liveData: [
        "Event: Dhanteras Pre-Sale VIP Pass",
        "Target Group: High-Spenders (>₹10,000 LTV)",
        "Offer: Exclusive 15% Cashback Coupon",
        "Redeemed at POS: 62 Customers"
      ]
    },
    href: "/book-demo"
  },
  {
    id: "fast-billing",
    category: "billing",
    icon: Receipt,
    badge: "Sub-Second Checkout",
    title: "Fast Billing & Sub-Second POS",
    tagline: "Zero queue delays with lightning-fast barcode scanning and GST compliance",
    problem: "Long billing queues frustrate shoppers and cause store walkouts during peak rush hours.",
    solution: "Aira's Smart POS handles sub-second barcode billing, instant multi-item search, and automatic GST HSN calculations seamlessly.",
    benefits: [
      "Sub-second barcode scan & item lookup",
      "Instant WhatsApp & paperless e-bills",
      "Multi-counter billing synchronization",
      "GST HSN tax compliance & auto-reporting",
      "Offline billing mode with automatic cloud sync"
    ],
    mockup: {
      stat1: "0.8s",
      stat1Label: "Avg Bill Generation Time",
      stat2: "100%",
      stat2Label: "Paperless WhatsApp Delivery",
      badgeText: "Lightning POS",
      liveData: [
        "Counter #1: Bill #10492 Generated (0.6s)",
        "Items: 4 (Garments & Accessories)",
        "E-Bill Sent: WhatsApp +91 97241...",
        "Paper Saved: 100% Eco-Friendly Digital"
      ]
    },
    href: "/book-demo"
  },
  {
    id: "campaign-automation",
    category: "ai",
    icon: Brain,
    badge: "Hands-Free AI",
    title: "Campaign Automation & AI Repeat Growth",
    tagline: "Hands-free store automation that brings buyers back every month",
    problem: "Retailers don't have time to run daily marketing campaigns manually for thousands of customers.",
    solution: "Aira's AI monitors customer visit cycles in the background and automatically triggers the right campaign at the exact right day.",
    benefits: [
      "Automated post-purchase thank-you & discount flow",
      "RFM customer tiering (Silver, Gold, VIP)",
      "Automated replenishment & restock reminders",
      "Deadstock clearance discount campaigns",
      "Autonomous 24/7 AI campaign recommendation"
    ],
    mockup: {
      stat1: "24/7",
      stat1Label: "Background AI Monitor",
      stat2: "+28%",
      stat2Label: "Repeat Sales Lift",
      badgeText: "Autonomous AI",
      liveData: [
        "AI Scan: 42 buyers inactive >45 days",
        "Action Triggered: Win-Back WhatsApp Coupon",
        "Response Rate: 26% returned within 7 days",
        "Revenue Influenced: ₹52,400"
      ]
    },
    href: "/book-demo"
  },
  {
    id: "customer-loyalty",
    category: "loyalty",
    icon: Users,
    badge: "Zero-App Download",
    title: "App-less Customer Loyalty & Retention",
    tagline: "Build a loyal customer base without forcing app downloads",
    problem: "Customers refuse to download store apps or keep physical loyalty cards.",
    solution: "Aira links loyalty points directly to the customer's phone number. Points accrue automatically at billing and can be redeemed at checkout.",
    benefits: [
      "Zero-app download phone number loyalty",
      "Instant POS point redemption on e-bill",
      "WhatsApp referral rewards sharing",
      "Increased customer visit frequency (+35% average)",
      "Executive multi-store customer retention telemetry"
    ],
    mockup: {
      stat1: "76.4%",
      stat1Label: "Active Loyalty Ratio",
      stat2: "2.4x",
      stat2Label: "Higher Customer LTV",
      badgeText: "Phone Number Wallet",
      liveData: [
        "Customer: Rahul M. (+91 97241...)",
        "Current Tier: Gold VIP (1,420 pts)",
        "Redeemed Today: 200 pts (Saved ₹200 at POS)",
        "Referrals: Brought 3 new shoppers this month"
      ]
    },
    href: "/book-demo"
  }
];

export default function Solutions() {
  const { id } = useParams<{ id?: string }>();
  const [activeCategory, setActiveCategory] = useState("all");
  const [monthlyRevenue, setMonthlyRevenue] = useState(10); // in Lakhs

  useSEO({
    title: "Aira Solutions — Retailer Business Growth & WhatsApp Campaigns",
    description: "Explore Aira retail solutions: Fast Billing, WhatsApp Campaigns, Festival Offer Automation, Smart E-Bills, and App-less Customer Loyalty.",
    canonicalPath: "/solutions"
  });

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [id]);

  const filteredSolutions = activeCategory === "all" 
    ? solutions 
    : solutions.filter((s) => s.category === activeCategory);

  // Calculations for interactive ROI calculator
  const estimatedAnnualBoost = Math.round(monthlyRevenue * 0.24 * 12);
  const repeatBuyersCount = Math.round(monthlyRevenue * 140);
  const whatsappReach = Math.round(monthlyRevenue * 480);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-purple-600 selection:text-white transition-colors duration-300">
      <Header />

      {/* 🚀 HIGH-IMPACT HERO SECTION WITH SPLIT 2-COLUMN DISPLAY & SaaS SHOWCASE */}
      <section className="relative pt-28 sm:pt-36 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-purple-100/80 via-white to-slate-50 dark:from-slate-950 dark:via-[#130924] dark:to-slate-950 transition-colors overflow-hidden border-b border-purple-100 dark:border-purple-950/40">
        
        {/* Glowing Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-purple-700/20 dark:from-purple-700/30 dark:via-pink-600/20 dark:to-purple-900/40 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[450px] h-[250px] bg-purple-400/15 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="site-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Typography & Key Highlights */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 dark:from-purple-950/90 dark:via-pink-950/60 dark:to-purple-950/90 border border-purple-300 dark:border-purple-500/40 text-purple-800 dark:text-pink-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-pink-400 animate-pulse" />
                COMPLETE RETAIL GROWTH SYSTEM
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Solutions Built to Grow Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200 block sm:inline">
                  Retail Revenue.
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                From sub-second fast billing and paperless WhatsApp e-bills to automated festival campaigns, customer retention, and AI growth triggers — built specifically for modern retail stores.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#growth-calculator"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-extrabold text-sm hover:opacity-95 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 group"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Store Growth
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-purple-900/60 text-slate-800 dark:text-slate-200 hover:border-purple-500 font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Zap className="w-4 h-4 text-purple-600 dark:text-pink-400" />
                  Book Live Demo
                </Link>
              </div>

              {/* 4 Metric Badges in Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/50 shadow-sm text-center lg:text-left">
                  <div className="text-xl font-extrabold text-purple-700 dark:text-pink-400">0.8s</div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Sub-Second POS</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/50 shadow-sm text-center lg:text-left">
                  <div className="text-xl font-extrabold text-purple-700 dark:text-pink-400">98.4%</div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">WhatsApp Open</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/50 shadow-sm text-center lg:text-left">
                  <div className="text-xl font-extrabold text-purple-700 dark:text-pink-400">+28%</div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Repeat Revenue</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/50 shadow-sm text-center lg:text-left">
                  <div className="text-xl font-extrabold text-purple-700 dark:text-pink-400">0 Apps</div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">App-less Loyalty</div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic SaaS Hero Dashboard Visual Card */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl p-2.5 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-purple-600/30 border border-purple-300 dark:border-purple-500/50 shadow-2xl group transition-transform duration-500 hover:scale-[1.01]">
                
                {/* Floating Telemetry Badge Top Right */}
                <div className="absolute -top-4 -right-2 z-20 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs shadow-lg flex items-center gap-1.5 animate-bounce">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  Official Meta API Partner
                </div>

                {/* Main Hero Graphic */}
                <img
                  src="/aira_solutions_hero_graphic.jpg"
                  alt="Aira Retail Revenue Engine SaaS Showcase"
                  className="w-full h-auto max-h-[440px] rounded-2xl object-cover shadow-xl"
                />

                {/* Floating Overlay Card Bottom Left */}
                <div className="absolute -bottom-5 -left-3 z-20 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-purple-200 dark:border-purple-800 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Active Retail Telemetry</div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1">
                      <span>+₹1,48,500 Monthly Sales Lift</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🎯 CATEGORY FILTER TABS BAR */}
      <section className="sticky top-16 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 transition-colors">
        <div className="site-container flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SOLUTION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-600/30 scale-105"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-purple-400"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 SOLUTIONS RICH INTERACTIVE CARDS GRID */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="site-container space-y-12">
          {filteredSolutions.map((sol) => {
            const IconComp = sol.icon;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900/90 border border-purple-100 dark:border-purple-900/40 p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-xl hover:border-purple-400 dark:hover:border-purple-500/60 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                {/* Accent Top Border Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-80"></div>

                {/* Left Side: Overview, Problem vs Solution & Bullets */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-600/30 shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-purple-700 dark:text-pink-400 uppercase tracking-wider block">
                        {sol.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {sol.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-purple-700 dark:text-pink-300 font-semibold text-sm sm:text-base italic">
                    "{sol.tagline}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-1">
                    <div className="bg-rose-50/70 dark:bg-slate-950 border border-rose-200 dark:border-rose-900/40 p-4 rounded-2xl space-y-1.5 shadow-sm">
                      <span className="text-[10px] text-rose-700 dark:text-rose-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <Flame className="w-3 h-3 text-rose-500" />
                        The Retailer Challenge
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">{sol.problem}</p>
                    </div>
                    <div className="bg-purple-50/70 dark:bg-slate-950 border border-purple-200 dark:border-purple-500/40 p-4 rounded-2xl space-y-1.5 shadow-sm">
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Aira Engine Solution
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-medium">{sol.solution}</p>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Capabilities Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {sol.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-pink-400 shrink-0 mt-0.5" />
                          <span className="font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/book-demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-xs hover:opacity-90 transition-all shadow-md shadow-purple-600/30"
                    >
                      Schedule Solution Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Visual Live Data Telemetry Mockup */}
                <div className="lg:col-span-5 bg-gradient-to-b from-purple-50/80 via-white to-purple-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-purple-200 dark:border-purple-900/60 p-6 rounded-2xl space-y-5 shadow-inner">
                  <div className="flex items-center justify-between border-b border-purple-200 dark:border-slate-800 pb-3">
                    <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {sol.mockup.badgeText}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-pink-300 font-mono font-bold">
                      Telemetry Active
                    </span>
                  </div>

                  {/* Dual Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 shadow-sm">
                      <div className="text-2xl font-black text-slate-900 dark:text-white">{sol.mockup.stat1}</div>
                      <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">{sol.mockup.stat1Label}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 shadow-sm">
                      <div className="text-2xl font-black text-purple-700 dark:text-pink-400">{sol.mockup.stat2}</div>
                      <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">{sol.mockup.stat2Label}</div>
                    </div>
                  </div>

                  {/* Simulated Telemetry Feed */}
                  <div className="space-y-2 font-mono text-[11px]">
                    {sol.mockup.liveData.map((dataLine, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-purple-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between shadow-xs">
                        <span className="truncate pr-2 font-medium">{dataLine}</span>
                        <span className="text-emerald-500 font-sans text-[10px] font-bold shrink-0">✓ Live</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Instant Action Link */}
                  <div className="pt-2 border-t border-purple-200 dark:border-slate-800 text-center">
                    <Link to="/book-demo" className="text-xs font-bold text-purple-700 dark:text-pink-400 hover:underline inline-flex items-center gap-1">
                      See full live walkthrough for this solution
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🧮 INTERACTIVE RETAIL REVENUE & BOOSTER CALCULATOR */}
      <section id="growth-calculator" className="py-16 bg-gradient-to-b from-purple-900 via-[#1A0B2E] to-purple-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="site-container relative z-10 max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-pink-400" />
              Interactive Store Revenue Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              See How Much Extra Revenue Aira Can Add to Your Store
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Select your average monthly store sales below to view estimated WhatsApp campaign reach, repeat customer visits, and annual revenue lift.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl space-y-8">
            
            {/* Range Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm sm:text-base font-bold">
                <span className="text-slate-200">Your Current Monthly Store Sales:</span>
                <span className="text-2xl font-black text-pink-400">₹{monthlyRevenue} Lakhs / month</span>
              </div>
              
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-3 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>₹2 Lakhs</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs+</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-3xl font-black text-emerald-400">+₹{estimatedAnnualBoost} Lakhs</div>
                <div className="text-xs text-slate-300 font-semibold">Estimated Extra Annual Revenue</div>
                <div className="text-[10px] text-slate-400">Based on +24% repeat customer retention</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-3xl font-black text-pink-300">{repeatBuyersCount} Shoppers</div>
                <div className="text-xs text-slate-300 font-semibold">Additional Repeat Customer Visits</div>
                <div className="text-[10px] text-slate-400">Driven via automated WhatsApp triggers</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 text-center space-y-1">
                <div className="text-3xl font-black text-purple-300">{whatsappReach.toLocaleString()}</div>
                <div className="text-xs text-slate-300 font-semibold">Monthly WhatsApp Broadcast Reach</div>
                <div className="text-[10px] text-slate-400">98.4% open rate direct to phone</div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-slate-300 font-medium text-center sm:text-left">
                ⚡ Ready to unlock these numbers for your store? Book a personalized growth strategy session.
              </span>
              <Link
                to="/book-demo"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-lg shrink-0"
              >
                Claim Free Store Audit
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
