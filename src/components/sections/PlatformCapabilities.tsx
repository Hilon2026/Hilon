import React, { useState } from "react";
import { 
  Receipt, Users, Brain, MessageSquare, Gift, BarChart3, 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers 
} from "lucide-react";

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
      "Unified 360° purchase history timeline",
      "RFM segmentation (Recency, Frequency, Monetary)",
      "Automated churn risk alerts before customers leave",
      "Category affinity & personalized preferences"
    ],
    mockup: {
      title: "Customer Profile Matrix",
      metric1: "14,280",
      metric1Label: "Unified Buyer Profiles",
      metric2: "+38%",
      metric2Label: "Repeat Purchase Rate",
      details: [
        "RFM Segment: High-Value Loyalists (842 Profiles)",
        "Avg Days Between Visits: 14.2 Days",
        "Top Category Preference: Premium Apparel",
        "Predicted Next Visit: This Saturday"
      ]
    }
  },
  {
    id: "ai-insights",
    title: "AI Insights",
    badge: "Autonomous AI",
    icon: Brain,
    tagline: "Your store data constantly analyzed for growth opportunities.",
    description: "Aira's AI background model works 24/7 to flag sales anomalies, identify high-margin upsell opportunities, and recommend actionable store moves.",
    bullets: [
      "24/7 autonomous sales & footfall trend analysis",
      "Deadstock & inventory velocity recommendations",
      "Automated basket analysis for cross-selling",
      "Dynamic pricing & peak hour store optimization"
    ],
    mockup: {
      title: "Aira AI Intelligence Engine",
      metric1: "84%",
      metric1Label: "Insight Accuracy",
      metric2: "+₹41,200",
      metric2Label: "Monthly Revenue Unlocked",
      details: [
        "Alert: Weekend afternoon footfall spike detected",
        "Cross-sell opportunity: Pair belts with footwear",
        "Action: Trigger 10% instant combo discount",
        "Expected Lift: +14% higher average order value"
      ]
    }
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    badge: "Automated Campaigns",
    icon: MessageSquare,
    tagline: "Reach buyers at the exact right moment on WhatsApp & SMS.",
    description: "Execute highly segmented automated marketing without manual effort. Send timely re-engagement triggers, birthday offers, and restock notifications.",
    bullets: [
      "Targeted WhatsApp & SMS broadcast workflows",
      "Automated win-back triggers for dormant shoppers",
      "Personalized product recommendations in messages",
      "Real-time ROI & click-through performance tracking"
    ],
    mockup: {
      title: "Omnichannel Engagement Hub",
      metric1: "98.4%",
      metric1Label: "Message Open Rate",
      metric2: "4.8x",
      metric2Label: "Campaign Return on Investment",
      details: [
        "Active Campaign: 30-Day Win-Back Automated Flow",
        "Audience: 412 Dormant Shoppers (No visit > 30d)",
        "Message: We miss you! Enjoy 15% off your next visit",
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
        "Top Store Today: Downtown Branch (₹84,200)",
        "Best Performing Category: Organic Produce (+24%)",
        "Peak Hour: 5:00 PM - 6:30 PM (64 bills/hr)",
        "Gross Profit Margin: 42.8% (+3.2% vs last month)"
      ]
    }
  }
];

export const PlatformCapabilities: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("smart-billing");
  const activeCap = capabilities.find((c) => c.id === selectedId) || capabilities[0];

  return (
    <section className="section-spacing bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle purple background aura */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Unified Retail Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything your retail business needs,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300">
              connected by AI.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
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
                    ? "bg-gradient-to-b from-purple-900/60 to-slate-900 border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                    : "bg-slate-900/40 border-slate-800 hover:border-purple-800/60 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-gradient-to-tr from-purple-600 to-pink-500 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <span className="text-[10px] text-purple-400 font-medium">
                    {cap.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* Left Column: Details & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-purple-950 text-pink-300 text-xs font-semibold border border-purple-800/60">
                  {activeCap.badge}
                </span>
                <span className="text-xs text-slate-400">Powered by Aira AI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeCap.title}
              </h3>
              <p className="text-lg font-medium text-pink-400 mb-4">
                "{activeCap.tagline}"
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeCap.description}
              </p>

              {/* Feature Bullets */}
              <div className="space-y-3">
                {activeCap.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 border border-purple-700/50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <a
                href="#book-demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30"
              >
                Explore {activeCap.title}
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero setup friction
              </span>
            </div>
          </div>

          {/* Right Column: Custom Product UI Visual */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-purple-900/50 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Bar of UI */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <h4 className="text-xs font-bold text-white">{activeCap.mockup.title}</h4>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                Live Preview
              </span>
            </div>

            {/* Metrics Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="bg-slate-900/90 border border-purple-900/40 p-3.5 rounded-xl">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  {activeCap.mockup.metric1Label}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeCap.mockup.metric1}
                </span>
              </div>
              <div className="bg-slate-900/90 border border-purple-900/40 p-3.5 rounded-xl">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  {activeCap.mockup.metric2Label}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-pink-400">
                  {activeCap.mockup.metric2}
                </span>
              </div>
            </div>

            {/* Simulated Live Stream / Details */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center justify-between font-semibold text-slate-400 text-[10px] uppercase border-b border-slate-800 pb-1.5">
                <span>System Event Log</span>
                <span className="text-emerald-400">Active</span>
              </div>
              {activeCap.mockup.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 py-1 border-b border-slate-800/40 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Subtle glow effect */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                Auto-syncs with all store terminals
              </span>
              <span className="text-purple-400 font-medium">Interactive Demo →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
