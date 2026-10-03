import React from "react";
import { 
  CreditCard, Database, Brain, Lightbulb, Zap, TrendingUp, ChevronRight, ArrowDown 
} from "lucide-react";

export const RetailWorkflow: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "TRANSACTION",
      icon: CreditCard,
      badge: "Smart POS / WhatsApp",
      description: "Billing happens in seconds with auto-sync of customer phone numbers & purchases.",
      color: "from-purple-600 to-indigo-600",
      glow: "shadow-purple-500/20"
    },
    {
      step: "02",
      name: "DATA",
      icon: Database,
      badge: "360° Repository",
      description: "Transaction raw data instantly transforms into clean, unified buyer profiles.",
      color: "from-indigo-600 to-purple-600",
      glow: "shadow-indigo-500/20"
    },
    {
      step: "03",
      name: "AI",
      icon: Brain,
      badge: "Aira Neural Engine",
      description: "Autonomous models continuously analyze basket affinities & visit cycles.",
      color: "from-purple-600 to-pink-600",
      glow: "shadow-pink-500/30"
    },
    {
      step: "04",
      name: "INSIGHT",
      icon: Lightbulb,
      badge: "Growth Telemetry",
      description: "Data converts into high-value opportunities & clear revenue recommendations.",
      color: "from-pink-600 to-purple-600",
      glow: "shadow-pink-500/20"
    },
    {
      step: "05",
      name: "ACTION",
      icon: Zap,
      badge: "1-Click Trigger",
      description: "Automated WhatsApp campaigns & POS rewards are launched with 1-click.",
      color: "from-purple-600 to-emerald-600",
      glow: "shadow-emerald-500/20"
    },
    {
      step: "06",
      name: "GROWTH",
      icon: TrendingUp,
      badge: "Compounding Profit",
      description: "Repeat visit rates jump +38% and overall lifetime value compounds continuously.",
      color: "from-emerald-600 to-pink-600",
      glow: "shadow-emerald-500/30"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            Autonomous Growth Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How Aira turns daily transactions into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              predictable growth.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A seamless 6-stage intelligent loop operating behind every transaction in your stores.
          </p>
        </div>

        {/* Desktop Pipeline Workflow (Horizontal Grid with Connecting Glowing Paths) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Step Card */}
                <div className={`h-full bg-slate-900/90 border border-purple-900/40 hover:border-purple-500 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.glow}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-purple-400">
                        {item.step}
                      </span>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-extrabold text-white mb-1 tracking-wider">
                      {item.name}
                    </h3>
                    <span className="text-[10px] text-pink-400 font-semibold uppercase block mb-3">
                      {item.badge}
                    </span>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Stage {idx + 1}</span>
                    <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Connector Arrow (Except last item) */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-slate-950 border border-purple-500 flex items-center justify-center text-pink-400">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline View */}
        <div className="lg:hidden space-y-4 relative pl-4 border-l-2 border-purple-800/40 ml-2">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative pl-6">
                {/* Timeline Dot */}
                <div className={`absolute -left-[25px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}>
                  <IconComponent className="w-3 h-3" />
                </div>

                <div className="bg-slate-900/90 border border-purple-900/40 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400 font-bold">
                      {item.step} / {item.name}
                    </span>
                    <span className="text-[10px] bg-purple-950 text-pink-300 px-2 py-0.5 rounded font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RetailWorkflow;
