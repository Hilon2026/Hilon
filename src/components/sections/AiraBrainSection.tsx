import React, { useState } from "react";
import { Brain, Zap, ArrowRight, Lightbulb, TrendingUp, CheckCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

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
    }, 400);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-purple-900/30 relative overflow-hidden transition-colors">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Autonomous Retail Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Meet Aira AI — <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-200">
              The Intelligence Layer For Your Store.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Ask questions in plain Hindi or English. Aira analyzes billing signals, customer visits, and stock velocity to give you instant growth recommendations.
          </p>
        </div>

        {/* Interactive Query Simulator Box */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          {/* Query Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
            {scenarios.map((sc, i) => (
              <button
                key={i}
                onClick={() => handleNextScenario(i)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeQueryIndex === i
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                    : "bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-white"
                }`}
              >
                Query {i + 1}: "{sc.userQuery}"
              </button>
            ))}
          </div>

          {/* AI Response Display */}
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-slate-950 border border-purple-200 dark:border-purple-900/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-pink-400 uppercase tracking-wider">
                <Brain className="w-4 h-4" />
                Aira AI Analysis:
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
                {isAnalyzing ? "Analyzing store telemetry signals..." : currentScenario.airaResponse}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  Key Insight Detected:
                </div>
                <div className="text-slate-600 dark:text-slate-300">{currentScenario.insight}</div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 space-y-1">
                <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  Revenue Opportunity:
                </div>
                <div className="text-emerald-700 dark:text-emerald-200">{currentScenario.opportunity}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/40 flex items-center justify-between gap-4">
              <div className="text-xs text-purple-900 dark:text-purple-200 font-semibold">
                <strong>Recommended Action:</strong> {currentScenario.recommendedAction}
              </div>
              <Link
                to="/book-demo"
                className="shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs shadow-md"
              >
                Execute 1-Click
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiraBrainSection;
