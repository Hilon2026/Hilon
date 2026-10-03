import React, { useState } from "react";
import { 
  Shirt, ShoppingCart, Tv, Pill, Footprints, Home, Coffee, Tag, Heart,
  CheckCircle2, ArrowRight, TrendingUp, Zap 
} from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  features: string[];
  metrics: {
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
  };
  mockup: {
    title: string;
    highlight: string;
    details: string;
  };
}

const industries: IndustryItem[] = [
  {
    id: "fashion",
    name: "Fashion & Apparel",
    icon: Shirt,
    tagline: "Size & Variant Matrix + Style Affinity AI",
    description: "Manage complex matrix inventory (size, color, brand) while AI predicts seasonal trends and automated outfit cross-selling.",
    features: [
      "Matrix SKU inventory (Size/Color/Fit)",
      "Style affinity & accessory cross-sell recommendations",
      "VIP customer wardrobing preference profiles",
      "End-of-season automated markdown telemetry"
    ],
    metrics: {
      stat1: "+34%",
      stat1Label: "Accessory Cross-Sell",
      stat2: "18.2 Days",
      stat2Label: "Faster Stock Turnover"
    },
    mockup: {
      title: "Apparel Style Matrix",
      highlight: "High repeat purchases on premium linen range",
      details: "AI auto-suggested belt + footwear pairings at checkout for 142 transactions today."
    }
  },
  {
    id: "grocery",
    name: "Grocery & Supermarket",
    icon: ShoppingCart,
    tagline: "High-Speed Billing & Expiry Tracking",
    description: "Sub-second barcode scan billing with weight scale integration, perishables management, and fast digital receipts.",
    features: [
      "Sub-second checkout & barcode scale sync",
      "Expiry date alerts & batch tracking",
      "Automated weekly grocery replenishment WhatsApp messages",
      "Multi-counter billing synchronization"
    ],
    metrics: {
      stat1: "0.6s",
      stat1Label: "Average Checkout Speed",
      stat2: "-42%",
      stat2Label: "Perishable Wastage"
    },
    mockup: {
      title: "Grocery Speed Telemetry",
      highlight: "84 bills processed per cashier hour during peak 6 PM rush",
      details: "Automated weekly WhatsApp replenishment alerts triggered for 412 regular shoppers."
    }
  },
  {
    id: "electronics",
    name: "Electronics & Tech",
    icon: Tv,
    tagline: "Serial Number Tracking & Warranty Vault",
    description: "Seamless IMEI/Serial number tracking, extended warranty attachments, and digital receipts stored securely.",
    features: [
      "Serial / IMEI barcode scanning at checkout",
      "Digital warranty receipts delivered directly to WhatsApp",
      "Accessory bundle & protection plan prompts",
      "High-value store inventory audit trails"
    ],
    metrics: {
      stat1: "98.4%",
      stat1Label: "Digital Warranty Adoption",
      stat2: "+28%",
      stat2Label: "Protection Plan Attach Rate"
    },
    mockup: {
      title: "Electronics Serial Telemetry",
      highlight: "100% IMEI trackability across 3 store locations",
      details: "Warranty paperless receipt automatically saved to buyer's phone number."
    }
  },
  {
    id: "pharmacy",
    name: "Pharmacy & Wellness",
    icon: Pill,
    tagline: "Batch Expiry & Prescription Refill AI",
    description: "Automated batch tracking, expiry date alerts, and intelligent WhatsApp refill reminders for chronic medications.",
    features: [
      "FEFO (First-Expiry-First-Out) batch management",
      "Automated monthly prescription refill reminders",
      "GST HSN code automated tax compliance",
      "Healthcare loyalty & wellness rewards"
    ],
    metrics: {
      stat1: "+48%",
      stat1Label: "Refill Retention Rate",
      stat2: "0 Expiry",
      stat2Label: "Zero Untracked Expired Stock"
    },
    mockup: {
      title: "Wellness Refill Hub",
      highlight: "Prescription refill workflow active for 840 patients",
      details: "Automated 30-day refill reminder sent 3 days before supply depletion."
    }
  },
  {
    id: "beauty",
    name: "Beauty & Cosmetics",
    icon: Heart,
    tagline: "Shade Profiles & Routine Replenishment",
    description: "Save customer shade matches, skin types, and routines. AI predicts exact restock cycles for skincare and cosmetics.",
    features: [
      "Skin type & shade profile memory",
      "Restock interval calculation & WhatsApp alerts",
      "Sample campaign tracking & trial conversion",
      "Tiered VIP beauty club loyalty"
    ],
    metrics: {
      stat1: "+52%",
      stat1Label: "Skincare Restock Lift",
      stat2: "4.9 / 5",
      stat2Label: "Customer Satisfaction"
    },
    mockup: {
      title: "Cosmetic Routine Intelligence",
      highlight: "Shade match #24 stored for Priya M.",
      details: "Aira calculated 60-day serum depletion date: WhatsApp reminder queued."
    }
  },
  {
    id: "footwear",
    name: "Footwear & Leather",
    icon: Footprints,
    tagline: "Size Matrix & Care Kit Upselling",
    description: "Track inventory across sizes and widths effortlessly while AI boosts leather care kit cross-sells at POS.",
    features: [
      "Variant size matrix & backroom stock lookup",
      "Care product & sock upsell prompts at POS",
      "Seasonal footwear transition analytics",
      "Instant digital exchange & return processing"
    ],
    metrics: {
      stat1: "3.2x",
      stat1Label: "Shoe Care Upsell Ratio",
      stat2: "< 1 min",
      stat2Label: "Return & Exchange Processing"
    },
    mockup: {
      title: "Footwear Variant Hub",
      highlight: "Size 9/10 stock auto-alerted for replenishment",
      details: "62% of buyers accepted ₹120 shoe cleaner add-on during checkout."
    }
  },
  {
    id: "home",
    name: "Home & Lifestyle",
    icon: Home,
    tagline: "Decor Bundling & Delivery Scheduling",
    description: "Manage furnishings, decor sets, and bulk orders with multi-piece invoice generation and delivery status updates.",
    features: [
      "Multi-item decor set bundling & pricing",
      "Delivery & installation status WhatsApp notifications",
      "High-value basket financing & layaway management",
      "Custom order & deposit tracking"
    ],
    metrics: {
      stat1: "+22%",
      stat1Label: "Avg Decor Basket Size",
      stat2: "99.1%",
      stat2Label: "On-time Delivery Sync"
    },
    mockup: {
      title: "Lifestyle Order Manager",
      highlight: "Custom sofa order deposit #401 tracked",
      details: "Automated WhatsApp delivery tracking link dispatched to buyer."
    }
  },
  {
    id: "bakery",
    name: "Bakery & Cafes",
    icon: Coffee,
    tagline: "Quick Counter POS & Fresh Batch Telemetry",
    description: "Rapid touchscreen billing for high peak hour surges, fresh bake timing alerts, and birthday cake preorder logs.",
    features: [
      "Touchscreen rapid-billing counter interface",
      "Pre-order cake booking & advance deposit management",
      "Fresh batch expiry & item markdown automation",
      "Instant loyalty punch-card rewards"
    ],
    metrics: {
      stat1: "0.5s",
      stat1Label: "Counter Tap Billing",
      stat2: "+38%",
      stat2Label: "Pre-order VoAira"
    },
    mockup: {
      title: "Bakery Rush Counter",
      highlight: "Morning coffee & pastry rush: 112 bills in 45 mins",
      details: "WhatsApp digital receipt sent with 1-click Google Review link."
    }
  },
  {
    id: "specialty",
    name: "Specialty Retail",
    icon: Tag,
    tagline: "Custom Niche Catalog & High-Touch AI",
    description: "Tailored for boutique, gifting, sports, or hobby stores needing personalized customer relationships and specialty stock logic.",
    features: [
      "Flexible custom product attributes & tags",
      "VIP clienteling & personal shopping notes",
      "Curated gift list & registry management",
      "Omnichannel stock reservation"
    ],
    metrics: {
      stat1: "4.8x",
      stat1Label: "Higher Repeat Shopper LTV",
      stat2: "100%",
      stat2Label: "Custom Attribute Flexibility"
    },
    mockup: {
      title: "Specialty Clienteling Hub",
      highlight: "Collector preference tags active for 320 buyers",
      details: "Aira alerted store manager to new arrival matching VIP preference list."
    }
  }
];

export const IndustrySolutionsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState("fashion");
  const activeInd = industries.find((i) => i.id === selectedId) || industries[0];

  return (
    <section className="section-spacing bg-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            Tailored Retail Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for your specific retail sector.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aira adapts its billing workflows, AI models, and customer profiles to match your industry's exact operational needs.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-start sm:justify-center">
          {industries.map((ind) => {
            const IconComp = ind.icon;
            const isSel = ind.id === selectedId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                  isSel
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-105"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-purple-800"
                }`}
              >
                <IconComp className="w-4 h-4" />
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block mb-2">
                SECTOR SPECIFIC INTELLIGENCE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                Aira for {activeInd.name}
              </h3>
              <p className="text-purple-300 font-medium text-sm sm:text-base mb-4">
                "{activeInd.tagline}"
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeInd.description}
              </p>

              <div className="space-y-3">
                {activeInd.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                    <span className="text-slate-200 text-xs sm:text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <a
                href="#book-demo"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30"
              >
                Schedule {activeInd.name} Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column Visual Mockup */}
          <div className="lg:col-span-6 bg-slate-950 border border-purple-900/50 p-6 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-xs font-bold text-white">{activeInd.mockup.title}</span>
              </div>
              <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono">
                Aira Sector AI v4.2
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl">
                <span className="text-[10px] text-slate-400 uppercase block mb-1">{activeInd.metrics.stat1Label}</span>
                <span className="text-2xl font-bold text-white">{activeInd.metrics.stat1}</span>
              </div>
              <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl">
                <span className="text-[10px] text-slate-400 uppercase block mb-1">{activeInd.metrics.stat2Label}</span>
                <span className="text-2xl font-bold text-pink-400">{activeInd.metrics.stat2}</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <TrendingUp className="w-3.5 h-3.5" />
                {activeInd.mockup.highlight}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {activeInd.mockup.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;

