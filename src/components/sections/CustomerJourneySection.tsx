import React from "react";
import { 
  Eye, ShoppingCart, Smartphone, MessageCircle, RotateCcw, Crown, ArrowRight 
} from "lucide-react";

export const CustomerJourneySection: React.FC = () => {
  const journeyStages = [
    {
      stage: "DISCOVER",
      icon: Eye,
      title: "First In-Store Visit",
      desc: "Shopper enters store and selects items. Smart POS billing initiates profile creation in <1 sec.",
      color: "from-purple-600 to-indigo-600"
    },
    {
      stage: "PURCHASE",
      icon: ShoppingCart,
      title: "Smart Billing Checkout",
      desc: "Digital WhatsApp bill generated cleanly. Customer phone number linked seamlessly.",
      color: "from-indigo-600 to-purple-600"
    },
    {
      stage: "CONNECT",
      icon: Smartphone,
      title: "App-less Loyalty Link",
      desc: "Points automatically credit to phone number. Zero app download friction for the buyer.",
      color: "from-purple-600 to-pink-600"
    },
    {
      stage: "ENGAGE",
      icon: MessageCircle,
      title: "AI-Timed Outreach",
      desc: "Aira calculates optimal return window & sends personalized WhatsApp recommendation.",
      color: "from-pink-600 to-purple-600"
    },
    {
      stage: "RETURN",
      icon: RotateCcw,
      title: "High-Value Repeat Visit",
      desc: "Customer returns to redeem points & purchase higher-margin cross-sell items.",
      color: "from-purple-600 to-emerald-600"
    },
    {
      stage: "LOYAL CUSTOMER",
      icon: Crown,
      title: "Brand Advocate",
      desc: "Achieves VIP status and actively refers friends via WhatsApp for bonus rewards.",
      color: "from-emerald-600 to-pink-600"
    }
  ];

  return (
    <section className="section-spacing bg-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5 text-pink-400" />
            End-to-End Lifetime Value
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Aira Customer Journey.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Transform casual walk-ins into high-frequency brand advocates with automated touchpoints.
          </p>
        </div>

        {/* Visual Funnel Journey Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {journeyStages.map((stg, idx) => {
            const IconComp = stg.icon;
            return (
              <div key={idx} className="bg-slate-900/80 border border-purple-900/40 p-5 rounded-2xl flex flex-col justify-between hover:border-purple-500 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-pink-400 bg-purple-950 px-2 py-0.5 rounded uppercase">
                      {stg.stage}
                    </span>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${stg.color} flex items-center justify-center text-white shadow`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {stg.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {stg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Step 0{idx + 1}</span>
                  <ArrowRight className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;
