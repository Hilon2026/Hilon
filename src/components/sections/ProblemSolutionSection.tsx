import React from "react";
import { 
  XCircle, CheckCircle2, UserX, UserCheck, HelpCircle, Lightbulb, 
  Send, Zap, AlertTriangle, TrendingUp 
} from "lucide-react";

export const ProblemSolutionSection: React.FC = () => {
  const pairs = [
    {
      problem: "Customers disappear immediately after checkout",
      problemDesc: "Traditional paper receipts end the relationship the moment the customer leaves the counter. Zero contact info is retained.",
      problemIcon: UserX,
      solution: "Instant WhatsApp & Digital Engagement",
      solutionDesc: "Every bill automatically connects phone numbers into 360° buyer profiles with opt-in WhatsApp receipt delivery.",
      solutionIcon: UserCheck,
      metric: "94% WhatsApp receipt opt-in rate"
    },
    {
      problem: "Data exists in POS systems, but clear answers remain hidden",
      problemDesc: "Store owners spend hours exporting CSVs without knowing which items cross-sell best or when shoppers churn.",
      problemIcon: HelpCircle,
      solution: "Autonomous Aira AI Intelligence Engine",
      solutionDesc: "Aira translates complex transaction records into plain English insights and 1-click execution cards.",
      solutionIcon: Lightbulb,
      metric: "24/7 continuous autonomous analysis"
    },
    {
      problem: "Marketing broadcasts are generic, spammy, and ineffective",
      problemDesc: "Sending the exact same discount text to all shoppers leads to high unsubscribe rates and wasted budgets.",
      problemIcon: Send,
      solution: "Hyper-Targeted RFM Segmented Outreach",
      solutionDesc: "Send automated WhatsApp offers tailored to exact purchase histories, visit intervals, and preferred categories.",
      solutionIcon: Zap,
      metric: "4.8x higher campaign return on investment"
    },
    {
      problem: "High-value retail opportunities are missed during busy hours",
      problemDesc: "Cashiers lack time to suggest upsells, and store managers miss sudden footfall & basket trends during rush hours.",
      problemIcon: AlertTriangle,
      solution: "Real-time Telemetry & Smart POS Suggestions",
      solutionDesc: "Aira prompts cashiers with high-converting upsell combos directly on the POS screen during checkout.",
      solutionIcon: TrendingUp,
      metric: "+18.4% higher average basket value"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            Retail Transformation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Old retail friction vs.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              The Aira Advantage.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how Aira resolves traditional store bottlenecks with automated intelligence.
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairs.map((pair, idx) => {
            const ProbIcon = pair.problemIcon;
            const SolIcon = pair.solutionIcon;
            return (
              <div key={idx} className="bg-slate-900/90 border border-purple-900/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 shadow-xl space-y-6">
                {/* Traditional Problem Card */}
                <div className="bg-slate-950/80 border border-red-900/30 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    TRADITIONAL RETAIL PAIN
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pair.problem}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {pair.problemDesc}
                  </p>
                </div>

                {/* Aira AI Solution Card */}
                <div className="bg-gradient-to-br from-purple-950/70 to-slate-950 border border-purple-500/50 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      AIRA AI SOLUTION
                    </div>
                    <span className="text-[10px] bg-pink-950 text-pink-300 font-semibold px-2 py-0.5 rounded border border-pink-800/50">
                      {pair.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <SolIcon className="w-4 h-4 text-pink-400" />
                    {pair.solution}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {pair.solutionDesc}
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

export default ProblemSolutionSection;
