import React, { useState, useEffect } from "react";
import { Brain, Zap, ArrowRight, Lightbulb, TrendingUp, CheckCircle, RefreshCw } from "lucide-react";

export const AiraBrainSection: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const scenarios = [
    {
      userQuery: "What changed in my store this week?",
      airaResponse: "Customer activity has shifted this week. Returning customers are contributing +34% more to recent purchases, while weekday afternoon footfall dipped slightly.",
      insight: "Repeat shoppers are driving higher basket values, but casual afternoon walk-ins have slowed.",
      opportunity: "High potential to boost weekday 2 PM - 5 PM sales via targeted flash loyalty points.",
      recommendedAction: "Launch 1-click 'Happy Hour Loyalty Booster' via WhatsApp to 412 local VIP members."
    },
    {
      userQuery: "Which products are trending together?",
      airaResponse: "Basket analysis shows 62% of footwear buyers are also purchasing matching leather care kits when offered at checkout.",
      insight: "Accessories cross-sell rate increases by 3.2x when suggested during digital billing.",
      opportunity: "Additional ₹24,000 monthly profit by automating cross-sell prompts on POS screens.",
      recommendedAction: "Enable 'Automated POS Cross-Sell Suggestions' for footwear transactions."
    },
    {
      userQuery: "How can I win back dormant shoppers?",
      airaResponse: "Aira identified 184 high-value customers who haven't visited in over 35 days but previously spent >₹15,000.",
      insight: "Customer churn risk is highest at day 40 post-purchase.",
      opportunity: "Re-activating just 25% of this group will yield ~₹48,000 in immediate store revenue.",
      recommendedAction: "Trigger automated 'We Miss You' WhatsApp voucher with 15% bonus discount."
    }
  ];

  const currentScenario = scenarios[activeQueryIndex];

  const handleNextScenario = (index: number) => {
    setIsAnalyzing(true);
    setActiveQueryIndex(index);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <section className="section-spacing bg-slate-950 text-white relative overflow-hidden">
      {/* Background Neural Canvas Animation Graphic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#A855F7" />
              <line x1="20" y1="20" x2="60" y2="20" stroke="#7C3AED" strokeWidth="0.5" opacity="0.3" />
              <line x1="20" y1="20" x2="20" y2="60" stroke="#EC4899" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-purple-950/50">
            <Brain className="w-4 h-4 text-pink-400" />
            Aira Intelligence Core
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Your retail data{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              finally has a brain.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Aira converts millions of billing signals into clear natural language insights, instant store opportunities, and 1-click growth actions.
          </p>
        </div>

        {/* Interactive Query Simulator Panel */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-purple-500/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl relative">
          {/* Query Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-6 border-b border-purple-900/40">
            {scenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => handleNextScenario(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeQueryIndex === idx
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                    : "bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                Prompt {idx + 1}: "{sc.userQuery.substring(0, 24)}..."
              </button>
            ))}
          </div>

          {/* Interactive Simulated Conversation */}
          <div className="space-y-6">
            {/* User Question */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs shrink-0 shadow">
                YOU
              </div>
              <div className="bg-slate-950 border border-purple-900/50 p-4 sm:p-5 rounded-2xl rounded-tl-none text-slate-100 text-sm sm:text-base font-medium shadow-md w-full">
                <span className="text-purple-400 font-mono text-xs block mb-1">// STORE OWNER INQUIRY</span>
                "{currentScenario.userQuery}"
              </div>
            </div>

            {/* AI Assistant Output */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/40">
                <Brain className="w-5 h-5" />
              </div>
              <div className="bg-slate-950/90 border border-purple-500/40 p-5 sm:p-6 rounded-2xl rounded-tl-none w-full space-y-5 shadow-xl">
                {/* AI Natural Language Text */}
                <div className="flex items-center justify-between pb-3 border-b border-purple-900/30">
                  <span className="text-xs text-pink-400 font-semibold flex items-center gap-1.5">
                    AIRA RETAIL AI RESPONSE
                  </span>
                  {isAnalyzing ? (
                    <span className="text-xs text-purple-300 flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Analyzing live sales telemetry...
                    </span>
                  ) : (
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-800/50">
                      Live Telemetry Analyzed
                    </span>
                  )}
                </div>

                <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                  {currentScenario.airaResponse}
                </p>

                {/* 3-Step Breakdown: Insight, Opportunity, Recommended Action */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  {/* AI INSIGHT */}
                  <div className="bg-slate-900/90 border border-purple-900/40 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                      <Brain className="w-4 h-4 text-purple-400" />
                      AI INSIGHT
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {currentScenario.insight}
                    </p>
                  </div>

                  {/* OPPORTUNITY */}
                  <div className="bg-slate-900/90 border border-pink-900/40 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-pink-400" />
                      OPPORTUNITY
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {currentScenario.opportunity}
                    </p>
                  </div>

                  {/* RECOMMENDED ACTION */}
                  <div className="bg-gradient-to-b from-purple-950/80 to-slate-900 border border-purple-500/50 p-4 rounded-xl space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        RECOMMENDED ACTION
                      </div>
                      <p className="text-slate-200 text-xs leading-relaxed mt-1">
                        {currentScenario.recommendedAction}
                      </p>
                    </div>

                    <button className="mt-3 w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-md">
                      Execute 1-Click Action
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiraBrainSection;
