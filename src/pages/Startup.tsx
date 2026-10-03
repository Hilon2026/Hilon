import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Brain, ShieldCheck, Zap } from "lucide-react";
import AiraHeroDashboard from "@/components/sections/AiraHeroDashboard";

export default function Startup() {
  useSEO({
    title: "Startup Overview — Hilon & Aira Platform",
    description: "Public technical overview of Hilon and the Aira AI-powered retail intelligence SaaS platform.",
    canonicalPath: "/startup"
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="site-container max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
              <Brain className="w-4 h-4 text-pink-400" />
              Startup Architecture Overview
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Hilon Inc. & Aira Retail AI Platform
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Cloud-native retail SaaS platform connecting billing telemetry, 360° customer data, and autonomous store intelligence.
            </p>
          </div>

          {/* Interactive Mockup */}
          <AiraHeroDashboard />

          {/* Architecture Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="bg-slate-900/80 border border-purple-900/40 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <Brain className="w-4 h-4 text-purple-400" />
                Autonomous Engine
              </div>
              <h3 className="text-lg font-bold text-white">Event-Driven Telemetry Ingestion</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Aira ingests live billing streams via REST and POS plugin listeners, processing item velocities, customer phone linkages, and tax compliance in under 100 milliseconds.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-purple-900/40 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                <Zap className="w-4 h-4 text-pink-400" />
                WhatsApp & Messaging Infrastructure
              </div>
              <h3 className="text-lg font-bold text-white">Native Messaging Delivery</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Direct integration with Meta Business API for instant paperless WhatsApp receipts, review prompts, and automated RFM customer win-back flows.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
