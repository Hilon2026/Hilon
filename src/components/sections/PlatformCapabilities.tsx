import React, { useState } from "react";
import { 
  Receipt, Users, Brain, MessageSquare, Gift, BarChart3, 
  CheckCircle2, ArrowRight, ShieldCheck, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

interface Capability {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  bullets: string[];
  mockup: {
    title: string;
    metric1: string;
    metric1Label: string;
    metric2: string;
    metric2Label: string;
    details: string[];
  };
}

const capabilities: Capability[] = [
  {
    id: "smart-billing",
    title: "Smart Billing",
    badge: "Next-Gen POS",
    icon: Receipt,
    tagline: "Lightning-fast billing integrated with instant digital receipts.",
    description: "Transform checkout into a high-speed customer touchpoint. Generate WhatsApp and SMS bills in seconds while automatically syncing customer profiles.",
    bullets: [
      "Sub-second checkout & barcode scanner sync",
      "Instant WhatsApp & digital paperless bills",
      "Multi-store & inventory auto-deduction",
      "GST Compliant with 1-click tax filing report"
    ],
    mockup: {
      title: "Aira Smart Billing Engine",
      metric1: "0.8s",
      metric1Label: "Avg Bill Generation Time",
      metric2: "94.2%",
      metric2Label: "WhatsApp Bill Opt-in Rate",
      details: [
        "Customer: Ananya S. (+91 98765...) • VIP Tier",
        "Items: Linen Shirt x1, Chino Trousers x1",
        "Total Bill: ₹1,240.00 (Savings Applied: ₹150.00)",
        "WhatsApp Receipt Sent & Loyalty +124 pts"
      ]
    }
  },
  {
    id: "customer-intelligence",
    title: "Customer Intelligence",
    badge: "360° Profiles",
    icon: Users,
    tagline: "Understand every buyer's habits, preferences, and visit cycle.",
    description: "Every billing transaction automatically builds a rich customer profile. Track spending tiers, product affinities, and visit frequencies automatically.",
    bullets: [
      "Automated RFM (Recency, Frequency, Monetary) tagging",
      "Product category affinity & preferred purchase time",
      "Churn risk warnings before customers switch brands",
      "Omnichannel chat & purchase timeline history"
    ],
    mockup: {
      title: "360° Customer Profile (Ananya S.)",
      metric1: "₹18,450",
      metric1Label: "Total Lifetime Spend",
      metric2: "8 Visits",
      metric2Label: "Total Store Visits",
      details: [
        "Primary Category: Women's Apparel & Accessories",
        "Last Purchased: 14 Days Ago (Silk Dupatta)",
        "Preferred Store Location: Indiranagar Store",
        "Predicted Next Purchase: Festive Saree (84% Probability)"
      ]
    }
  },
  {
    id: "ai-brain",
    title: "AI Store Assistant",
    badge: "24/7 Intelligence",
    icon: Brain,
    tagline: "Natural language retail queries & autonomous store insights.",
    description: "Ask Aira anything about your store in plain English: 'Which customers bought sarees 60 days ago?' or 'Draft a weekend discount campaign'.",
    bullets: [
      "Natural language business data queries",
      "Automated campaign draft copy & image generation",
      "Stock replenishment & slow-moving inventory alerts",
      "Autonomous weekly store growth summary"
    ],
    mockup: {
      title: "Aira AI Retail Assistant",
      metric1: "2.4s",
      metric1Label: "Insight Generation Speed",
      metric2: "98.8%",
      metric2Label: "Query Accuracy",
      details: [
        "User: 'Which 40 customers are at risk of churning this month?'",
        "Aira AI: 'Identified 42 VIP buyers inactive >45 days.'",
        "Action Suggested: Send 15% Win-back WhatsApp Coupon",
        "Expected Recovery Revenue: ₹48,000+"
      ]
    }
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Campaigns",
    badge: "Green Tick API",
    icon: MessageSquare,
    tagline: "High-converting targeted WhatsApp campaigns with trackable ROI.",
    description: "Launch targeted hyper-personalized WhatsApp campaigns directly synced with store purchase history with 98% open rates.",
    bullets: [
      "Official Meta WhatsApp Business API integration",
      "Dynamic trackable coupon codes & QR links",
      "Segmented broadcasts by category & spend",
      "Real-time ROI & revenue influence dashboard"
    ],
    mockup: {
      title: "WhatsApp Festival Campaign Studio",
      metric1: "98.2%",
      metric1Label: "Message Open Rate",
      metric2: "18.4%",
      metric2Label: "Click-Through Rate",
      details: [
        "Campaign: Diwali Festive Special Collection Alert",
        "Audience Segment: Past Festival Apparel Buyers (1,250)",
        "Delivery Status: 1,248 Delivered • 1,225 Read",
        "Conversions: 84 store visits generated (₹38,400 revenue)"
      ]
    }
  },
  {
    id: "loyalty",
    title: "Loyalty & Rewards",
    badge: "Growth Engine",
    icon: Gift,
    tagline: "Turn one-time shoppers into lifelong brand advocates.",
    description: "Delight customers with dynamic point redemption right at POS. No app downloads required—loyalty points are linked directly to phone numbers.",
    bullets: [
      "App-less phone-number-based loyalty program",
      "Automated tier upgrades (Silver, Gold, Platinum)",
      "Instant checkout point redemption",
      "Viral referral loops via WhatsApp sharing"
    ],
    mockup: {
      title: "Dynamic Loyalty Engine",
      metric1: "76.4%",
      metric1Label: "Loyalty Member Ratio",
      metric2: "2.4x",
      metric2Label: "Higher Lifetime Value",
      details: [
        "Points Earned Today: 18,450 pts across 280 bills",
        "Redemptions at POS: 42 customers saved ₹3,100",
        "Referral Program: 34 new customers acquired via WhatsApp",
        "Net Promoter Score: 4.8 / 5.0"
      ]
    }
  },
  {
    id: "analytics",
    title: "Analytics & Telemetry",
    badge: "Real-time Reports",
    icon: BarChart3,
    tagline: "Complete multi-store visibility from anywhere on any device.",
    description: "Get real-time dashboards on sales, staff performance, top-selling SKUs, and store profits with crystal clear visual charts.",
    bullets: [
      "Real-time live multi-location revenue monitoring",
      "Product SKU & inventory velocity analytics",
      "Staff billing productivity & commission tracking",
      "Exportable financial summaries & tax metrics"
    ],
    mockup: {
      title: "Store Performance Telemetry",
      metric1: "100%",
      metric1Label: "Real-time Sync",
      metric2: "3 Stores",
      metric2Label: "Unified Telemetry",
      details: [
        "Store 1 (Indiranagar): ₹1,42,800 today (184 bills)",
        "Store 2 (Koramangala): ₹98,400 today (112 bills)",
        "Top Category Today: Women's Ethnic Wear (+34% WoW)",
        "Avg Basket Size: ₹1,240 (Up ₹180 after upsell prompt)"
      ]
    }
  }
];

export const PlatformCapabilities: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("smart-billing");
  const activeCap = capabilities.find((c) => c.id === selectedId) || capabilities[0];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-purple-900/30 transition-colors">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Unified Retail Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Everything your retail business needs,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-300">
              connected by AI.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Six intelligent core capabilities working seamlessly together to convert checkout data into automated store growth.
          </p>
        </div>

        {/* Capabilities Grid Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {capabilities.map((cap) => {
            const IconComponent = cap.icon;
            const isSelected = cap.id === selectedId;
            return (
              <button
                key={cap.id}
                onClick={() => setSelectedId(cap.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-purple-100 dark:bg-gradient-to-b dark:from-purple-900/60 dark:to-slate-900 border-purple-500 text-purple-950 dark:text-white shadow-lg shadow-purple-500/20 scale-[1.02]"
                    : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-400"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-gradient-to-tr from-purple-600 to-pink-500 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isSelected ? "text-purple-950 dark:text-white" : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <span className="text-[10px] text-purple-600 dark:text-purple-400 font-medium">
                    {cap.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-xl">
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-pink-300 text-xs font-semibold border border-purple-300 dark:border-purple-800">
                  {activeCap.badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Powered by Aira AI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                {activeCap.title}
              </h3>
              <p className="text-lg font-medium text-purple-700 dark:text-pink-400 mb-4">
                "{activeCap.tagline}"
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeCap.description}
              </p>

              {/* Feature Bullets */}
              <div className="space-y-3">
                {activeCap.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5 border border-purple-300 dark:border-purple-700/50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-pink-400" />
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30"
              >
                Schedule Interactive Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Feature Mockup */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/60 rounded-2xl p-6 flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  {activeCap.mockup.title}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-pink-300 font-mono">Live Sync</span>
              </div>

              {/* Metrics Header */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-purple-900/40 shadow-sm">
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{activeCap.mockup.metric1}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{activeCap.mockup.metric1Label}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-purple-900/40 shadow-sm">
                  <div className="text-2xl font-black text-purple-600 dark:text-pink-400">{activeCap.mockup.metric2}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{activeCap.mockup.metric2Label}</div>
                </div>
              </div>

              {/* Real-time Telemetry Lines */}
              <div className="space-y-2.5 font-mono text-xs">
                {activeCap.mockup.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 flex items-center justify-between shadow-sm"
                  >
                    <span>{detail}</span>
                    <span className="text-emerald-500 font-sans text-[10px] font-bold">✓ Active</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Zero POS change required</span>
              <span className="text-purple-600 dark:text-pink-400 font-bold">POS-Agnostic Plugin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
