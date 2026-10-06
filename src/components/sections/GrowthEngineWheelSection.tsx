import React, { useState } from "react";
import { 
  Users, MessageSquare, Zap, CreditCard, RefreshCw, BarChart3, 
  ArrowRight, ShieldCheck, CheckCircle2, Layers 
} from "lucide-react";
import { Link } from "react-router-dom";

const GROWTH_STAGES = [
  {
    id: "acquire",
    title: "1. ACQUIRE",
    subtitle: "Turn store traffic & social media into reachable customers",
    icon: Users,
    color: "from-purple-500 to-indigo-500",
    description: "Capture customer contact details seamlessly via in-store billing, digital store visits, social media ads, and referral links.",
    highlights: ["POS Digital Receipts", "QR Store Codes", "Social Lead Capture", "Referral Links"]
  },
  {
    id: "connect",
    title: "2. CONNECT",
    subtitle: "WhatsApp Business API + 360° Retail CRM",
    icon: MessageSquare,
    color: "from-pink-500 to-purple-600",
    description: "Unify all customer conversations, purchase history, tags, and team inboxes in a single professional WhatsApp CRM dashboard.",
    highlights: ["Official Green Tick API", "Shared Team Inbox", "Broadcast Templates", "Chat History Sync"]
  },
  {
    id: "engage",
    title: "3. ENGAGE",
    subtitle: "Automated journeys & timely customer touchpoints",
    icon: Zap,
    color: "from-purple-600 to-pink-500",
    description: "Run 13+ automated retail campaign workflows: Welcome messages, Google Reviews, Birthday offers, and Festival collection alerts.",
    highlights: ["Automated Journeys", "Google Review Requests", "Festival Broadcasts", "Birthday Offers"]
  },
  {
    id: "convert",
    title: "4. CONVERT",
    subtitle: "Move customers from message to active purchase",
    icon: CreditCard,
    color: "from-pink-600 to-rose-600",
    description: "Guide customers smoothly from WhatsApp chats directly to interactive product catalogues, digital store checkouts, or store visits.",
    highlights: ["Digital Catalogue", "Instant Order Checkout", "Product Link Shorteners", "Store Visit Incentives"]
  },
  {
    id: "retain",
    title: "5. RETAIN",
    subtitle: "Loyalty, cashback & lapsed buyer win-back",
    icon: RefreshCw,
    color: "from-indigo-600 to-purple-600",
    description: "Automatically identify dormant customers who haven't visited in 60-90 days and send personalized incentives to bring them back.",
    highlights: ["App-less Loyalty Points", "60/90-Day Win-Back", "Category Replenishment", "VIP Tiers"]
  },
  {
    id: "grow",
    title: "6. GROW",
    subtitle: "Track Customer Lifetime Value & Revenue ROI",
    icon: BarChart3,
    color: "from-purple-500 to-emerald-500",
    description: "Measure real business outcomes: repeat purchase rates, average basket size, campaign revenue influence, and customer lifetime value.",
    highlights: ["Repeat Sales Telemetry", "Campaign ROI Metrics", "Customer LTV Analysis", "Multi-Store Dashboards"]
  }
];

export const GrowthEngineWheelSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const stage = GROWTH_STAGES[activeStage];

  return (
    <section id="growth-engine" className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-white text-white dark:text-white light:text-slate-900 border-t border-purple-900/30 transition-colors">
      <div className="site-container max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-300 text-pink-300 dark:text-pink-300 light:text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Section 05 & 06 — The Aira Growth Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ACQUIRE. CONNECT. ENGAGE. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              CONVERT. RETAIN. GROW.
            </span>
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            One connected growth wheel to turn casual shoppers into lifetime buyers.
          </p>
        </div>

        {/* Interactive 6-Stage Growth Selector */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Stage Buttons (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {GROWTH_STAGES.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-gradient-to-r from-purple-900/60 to-pink-900/40 border-purple-400 text-white shadow-xl shadow-purple-900/30 scale-[1.02]"
                      : "bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-purple-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${s.color} text-white`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{s.title}</div>
                      <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 line-clamp-1">{s.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1 text-pink-400" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Display (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl bg-gradient-to-tr ${stage.color} text-white shadow-lg`}>
                <stage.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-purple-400 dark:text-purple-400 light:text-purple-700 uppercase tracking-wider">Active Growth Stage</span>
                <h3 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900">{stage.title} — {stage.subtitle}</h3>
              </div>
            </div>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              {stage.description}
            </p>

            <div className="space-y-3 border-t border-purple-900/40 pt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Capabilities Included:</h4>
              <div className="grid grid-cols-2 gap-3">
                {stage.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-purple-200 dark:text-purple-200 light:text-purple-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Banner (Section 07: Powered by Baba) */}
            <div className="p-4 rounded-2xl bg-purple-950/50 dark:bg-purple-950/50 light:bg-purple-50 border border-purple-500/30 flex items-center justify-between text-xs text-purple-200 dark:text-purple-200 light:text-purple-900">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-pink-400 shrink-0" />
                <span><strong>Powered by Baba Infrastructure:</strong> Official WhatsApp Business API underlying layer.</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider bg-purple-950 border border-purple-500/40 px-2 py-1 rounded-md text-pink-300 font-bold hidden sm:inline-block">API Layer</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
