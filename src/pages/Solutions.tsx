import { Link, useParams } from "react";
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Users, MessageSquare, Zap, CreditCard, BarChart3, Receipt, Brain } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const solutions = [
  {
    id: "whatsapp-campaigns",
    icon: MessageSquare,
    title: "WhatsApp Campaigns & Automated Marketing",
    tagline: "Turn checkout phone numbers into 4.8x ROI marketing channels",
    problem: "Traditional SMS blasts and paper flyers are ignored or thrown away, resulting in high customer drop-off.",
    solution: "Aira delivers targeted, rich WhatsApp promotional campaigns directly to customers with 98% open rates and instant 1-click CTA responses.",
    benefits: [
      "Targeted WhatsApp broadcast campaigns",
      "Automated 30-day customer win-back triggers",
      "Birthday & anniversary personalized greeting campaigns",
      "Inactive customer reactivation workflows",
      "Real-time campaign open, click & conversion telemetry"
    ],
    href: "/features/promotion"
  },
  {
    id: "festival-campaigns",
    icon: Zap,
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
    href: "/features/promotion"
  },
  {
    id: "fast-billing",
    icon: Receipt,
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
    href: "/features/digital-bills"
  },
  {
    id: "smart-ebill",
    icon: CreditCard,
    title: "Smart E-Bill / WhatsApp Receipts",
    tagline: "Save billing paper costs while building a permanent 360° customer directory",
    problem: "Paper bills cost thousands per month and end up in the trash without capturing customer contact info.",
    solution: "Aira sends beautiful, branded e-bills to customer WhatsApp numbers instantly, capturing verified contact details automatically.",
    benefits: [
      "100% Paperless WhatsApp digital receipts",
      "Instant customer mobile number capture",
      "Interactive 1-click Google review request on bill",
      "Zero thermal paper printer maintenance costs",
      "Embedded loyalty points summary in every e-bill"
    ],
    href: "/features/digital-bills"
  },
  {
    id: "campaign-automation",
    icon: Brain,
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
    href: "/ai-intelligence"
  },
  {
    id: "customer-loyalty",
    icon: Users,
    title: "App-less Customer Loyalty & Business Growth",
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
    href: "/features/loyalty"
  }
];

export default function Solutions() {
  const { id } = useParams<{ id?: string }>();
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

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
        <div className="site-container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Retail Business Growth Engine
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Solutions Built to Grow Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Retail Revenue.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From sub-second fast billing and paperless WhatsApp e-bills to automated festival campaigns and repeat customer retention.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section-spacing bg-slate-950">
        <div className="site-container space-y-16">
          {solutions.map((sol, i) => {
            const IconComp = sol.icon;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-purple-900/40 p-6 sm:p-10 rounded-3xl backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300 shadow-2xl"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {sol.title}
                    </h2>
                  </div>

                  <p className="text-pink-400 font-semibold text-sm sm:text-base">
                    "{sol.tagline}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                    <div className="bg-slate-950 border border-red-900/40 p-4 rounded-xl space-y-1">
                      <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">The Challenge</span>
                      <p className="text-slate-300 text-xs leading-relaxed">{sol.problem}</p>
                    </div>
                    <div className="bg-slate-950 border border-purple-500/40 p-4 rounded-xl space-y-1">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Aira Solution</span>
                      <p className="text-slate-200 text-xs leading-relaxed">{sol.solution}</p>
                    </div>
                  </div>

                  <Link
                    to="/book-demo"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow"
                  >
                    Schedule Solution Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-5 bg-slate-950 border border-purple-900/50 p-6 rounded-2xl space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Core Capability Highlights
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    {sol.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
