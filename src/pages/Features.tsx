import { useParams } from "react";
import { useEffect } from "react";
import { CheckCircle2, Brain, Receipt, Users, MessageSquare, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const features = [
  {
    id: "smart-billing",
    title: "Sub-Second Smart POS Billing",
    subtitle: "Fastest checkout experience integrated with instant WhatsApp digital bills.",
    overview: "Aira transforms POS checkout into a high-speed customer touchpoint. Generate GST-compliant paperless invoices in under 1 second while automatically capturing phone numbers into 360° buyer profiles.",
    benefits: [
      "Sub-second barcode scan & item lookup",
      "Instant WhatsApp & digital receipts",
      "Automatic customer profile creation",
      "POS-agnostic plugin integration",
      "Reduced paper & printing expenses"
    ]
  },
  {
    id: "customer-intelligence",
    title: "360° Customer Directory & RFM Scoring",
    subtitle: "Turn raw transaction logs into structured, high-value buyer profiles.",
    overview: "Every bill automatically updates customer visit frequency, average basket size, and RFM scores (Recency, Frequency, Monetary). Identify VIP shoppers and churn risks before they leave your brand.",
    benefits: [
      "Unified 360° purchase history timeline",
      "RFM customer tiering (Silver, Gold, VIP)",
      "Automated churn risk alerts",
      "Category affinity & preference tagging",
      "1-Click segment export"
    ]
  },
  {
    id: "ai-insights",
    title: "Aira Autonomous AI Engine",
    subtitle: "Continuous background data analysis delivering actionable store moves.",
    overview: "Aira works 24/7 to analyze sales velocity, footfall spikes, and basket combinations. Get plain-English recommendations and 1-click execution triggers on POS screens.",
    benefits: [
      "24/7 autonomous store telemetry",
      "POS cashier upsell prompts",
      "Deadstock velocity warnings",
      "Basket cross-sell pattern detection",
      "Natural language inquiry assistant"
    ]
  },
  {
    id: "omnichannel-engagement",
    title: "Automated WhatsApp Marketing Workflows",
    subtitle: "Reach customers at the exact right moment with personalized offers.",
    overview: "Execute highly segmented marketing without manual effort. Send automated win-back offers, birthday rewards, and restock reminders with 98%+ message open rates.",
    benefits: [
      "Targeted WhatsApp broadcast flows",
      "30-day dormant shopper win-back triggers",
      "Personalized product recommendations in chat",
      "Real-time ROI & click-through tracking",
      "Direct WhatsApp customer communication"
    ]
  },
  {
    id: "app-less-loyalty",
    title: "Phone-Number-Based App-less Loyalty",
    subtitle: "Zero app download friction for shoppers at checkout.",
    overview: "Reward frequent customers effortlessly. Loyalty points are tracked directly via phone numbers at POS, making point earning and instant redemption seamless during billing.",
    benefits: [
      "No app download required for customers",
      "Instant checkout point redemption at POS",
      "Automated tier upgrades & birthday gifts",
      "WhatsApp referral reward loops",
      "Higher repeat visit frequency"
    ]
  },
  {
    id: "executive-analytics",
    title: "Real-Time Executive Growth Telemetry",
    subtitle: "Complete multi-store visibility from anywhere on any device.",
    overview: "Monitor real-time sales revenue, cashier productivity, top-selling SKUs, and net profit margins across all your retail locations with crystal-clear visual charts.",
    benefits: [
      "Live multi-store revenue telemetry",
      "Product category margin heatmaps",
      "Cashier billing speed & commission logs",
      "Daily/weekly financial reports",
      "Executive summary exports"
    ]
  }
];

export default function Features() {
  const { id } = useParams<{ id?: string }>();
  useSEO({
    title: "Aira Features — AI-Powered Retail Intelligence Platform",
    description: "Explore Aira core features: Smart POS Billing, 360° Customer Profiles, Autonomous AI Insights, WhatsApp Campaigns, Loyalty & Telemetry.",
    canonicalPath: "/features"
  });

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
        <div className="site-container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Brain className="w-4 h-4 text-pink-400" />
            Platform Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Engineered for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Autonomous Retail Growth.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Deep dive into the architecture powering Aira — from sub-second billing to autonomous AI intelligence.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="section-spacing bg-slate-950">
        <div className="site-container space-y-12">
          {features.map((feat) => (
            <div
              key={feat.id}
              id={feat.id}
              className="grid lg:grid-cols-12 gap-8 items-start bg-slate-900/80 border border-purple-900/40 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-xl hover:border-purple-500/50 transition-all"
            >
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {feat.title}
                </h2>
                <p className="text-pink-400 font-semibold text-sm sm:text-base">
                  "{feat.subtitle}"
                </p>
                <div className="bg-slate-950 border border-purple-950 p-4 rounded-xl text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {feat.overview}
                </div>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-90 shadow"
                >
                  Book Feature Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5 bg-slate-950 border border-purple-900/50 p-6 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Key Capability Advantages
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {feat.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
