import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Users, Heart, Brain, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us — Hilon & Aira Retail AI Platform",
    description: "Learn about Hilon Inc., the creators of Aira — the flagship AI-powered retail intelligence and growth platform.",
    canonicalPath: "/company/about"
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950">
        <div className="site-container max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-pink-400" />
            Company & Vision
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Building the Brain for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Modern Retail Commerce.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Hilon is a retail technology company dedicated to giving brick-and-mortar retailers autonomous intelligence, 360° customer data, and effortless store growth.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-spacing bg-slate-950">
        <div className="site-container max-w-5xl space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-900/80 border border-purple-900/40 p-6 sm:p-10 rounded-3xl backdrop-blur-xl">
            <div className="space-y-4">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block">
                OUR MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Retailers don't need more complex software. They need clarity.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                In a fast-paced commerce landscape, independent retailers are often stuck with slow billing, manual POS systems, and zero visibility into customer retention.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We built <strong>Aira</strong> to sit seamlessly on top of existing retail transactions — converting raw checkout streams into instant WhatsApp receipts, 360° customer profiles, and autonomous AI growth actions.
              </p>
            </div>

            <div className="space-y-4 bg-slate-950 border border-purple-900/50 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Ground-Level Retail Focus</h3>
                  <p className="text-slate-400 text-xs mt-1">Built to handle sub-second billing counters, rush hours, and multi-store chains.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <Brain className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Autonomous Intelligence Core</h3>
                  <p className="text-slate-400 text-xs mt-1">Aira continuously runs pattern analysis in the background without manual data entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Zero POS Overhaul Required</h3>
                  <p className="text-slate-400 text-xs mt-1">Integrates with existing POS streams without retraining cashiers or breaking store operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
