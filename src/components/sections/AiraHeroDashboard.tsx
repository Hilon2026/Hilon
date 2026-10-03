import React, { useState } from "react";
import { 
  TrendingUp, Users, ShoppingBag, ArrowUpRight, 
  ChevronRight, Brain, Zap, Send, Bell, Filter, CheckCircle2 
} from "lucide-react";

export const AiraHeroDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "ai-feed" | "customers">("overview");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm Aira. Based on today's transactions, returning customers are spending 24% more per visit. Would you like to activate a targeted WhatsApp VIP reward?",
      time: "Just now",
      recommendation: {
        title: "Weekend Festival WhatsApp Multiplier",
        impact: "+18% projected revenue lift",
        actionText: "Activate WhatsApp Campaign"
      }
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userText = chatInput;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText, time: "Just now" }
    ]);
    setChatInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Analyzing ${userText}... Aira detected 142 customer profiles eligible for reactivation. Recommended action: Send personalized WhatsApp reminder with 10% loyalty bonus.`,
          time: "Just now",
          recommendation: {
            title: "Re-engagement Automation",
            impact: "Est. 38 returning store visits",
            actionText: "Run WhatsApp Action"
          }
        }
      ]);
    }, 1000);
  };

  return (
    <div className="w-full relative rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-slate-950/80 p-3 sm:p-5 md:p-6 shadow-2xl backdrop-blur-xl overflow-hidden text-slate-100 font-sans">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Dashboard Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-purple-900/30">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Aira Intelligence Platform v4.2 Live
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-purple-900/40 text-xs w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Telemetry
          </button>
          <button
            onClick={() => setActiveTab("ai-feed")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "ai-feed"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-pink-400" />
            AI Assistant
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "customers"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            360° Customers
          </button>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left / Top Analytics Panel */}
        <div className="lg:col-span-7 space-y-4">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-900/60 border border-purple-900/30 p-3 sm:p-4 rounded-xl">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Today's Sales</span>
                <span className="text-emerald-400 font-medium flex items-center">
                  +18.4% <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white">₹14,820</div>
              <div className="text-[10px] text-slate-400 mt-1">312 Smart Bills</div>
            </div>

            <div className="bg-slate-900/60 border border-purple-900/30 p-3 sm:p-4 rounded-xl">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Repeat Ratio</span>
                <span className="text-emerald-400 font-medium flex items-center">
                  +32% <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-pink-400">68.4%</div>
              <div className="text-[10px] text-slate-400 mt-1">AI Loyalty Lift</div>
            </div>

            <div className="bg-slate-900/60 border border-purple-900/30 p-3 sm:p-4 rounded-xl">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Avg Basket</span>
                <span className="text-purple-400 font-medium flex items-center">
                  +₹820
                </span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-purple-300">₹4,750</div>
              <div className="text-[10px] text-slate-400 mt-1">AI Recommendation</div>
            </div>
          </div>

          {/* Visual Sales & Recommendation Chart Graphic */}
          <div className="bg-slate-900/80 border border-purple-900/40 p-4 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  Real-time Transaction Telemetry
                </h4>
                <p className="text-[11px] text-slate-400">Live AI anomaly detection & revenue trends</p>
              </div>
              <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full border border-purple-800/50">
                Peak Time: 4 PM - 7 PM
              </span>
            </div>

            {/* Custom SVG Graph */}
            <div className="h-36 sm:h-44 w-full relative flex items-end pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="60" x2="400" y2="60" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="400" y2="90" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                
                {/* Gradient Fill */}
                <path d="M 0 100 Q 50 80, 100 90 T 200 40 T 300 30 T 400 10 L 400 120 L 0 120 Z" fill="url(#chartGlow)" />
                
                {/* Main Curve Line */}
                <path d="M 0 100 Q 50 80, 100 90 T 200 40 T 300 30 T 400 10" fill="none" stroke="#EC4899" strokeWidth="3" />
                
                {/* Data Points */}
                <circle cx="200" cy="40" r="4" fill="#A855F7" className="animate-ping" />
                <circle cx="200" cy="40" r="4" fill="#ffffff" />
                <circle cx="300" cy="30" r="4" fill="#EC4899" />
                <circle cx="400" cy="10" r="5" fill="#7C3AED" />
              </svg>
            </div>

            {/* Bottom Insight Bar */}
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                AI Insight: Customer baskets containing festival items increased +41% today.
              </span>
              <span className="text-purple-400 font-medium hidden sm:inline">View Heatmap →</span>
            </div>
          </div>
        </div>

        {/* Right / AI Assistant Interactive Panel */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-purple-500/30 rounded-xl p-4 flex flex-col justify-between relative shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Aira Intelligence Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[10px] text-slate-400">Connected to store billing stream</p>
              </div>
            </div>
            <span className="text-[10px] bg-pink-950 text-pink-300 border border-pink-800/50 px-2 py-0.5 rounded-full font-medium">
              Autonomous Mode
            </span>
          </div>

          {/* Chat Messages Area */}
          <div className="my-3 space-y-3 max-h-64 overflow-y-auto pr-1 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[90%] p-3 rounded-xl text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-purple-600 text-white rounded-br-none"
                      : "bg-slate-800/90 border border-purple-900/40 text-slate-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}

                  {msg.recommendation && (
                    <div className="mt-2.5 pt-2.5 border-t border-purple-800/40 bg-purple-950/40 p-2 rounded-lg">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-pink-300">
                        <span>{msg.recommendation.title}</span>
                        <span className="text-emerald-400">{msg.recommendation.impact}</span>
                      </div>
                      <button className="mt-2 w-full py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1 shadow">
                        <Zap className="w-3 h-3" />
                        {msg.recommendation.actionText}
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="relative mt-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask Aira (e.g. 'What is today's best seller?')"
              className="w-full bg-slate-950 border border-purple-900/50 rounded-xl py-2.5 pl-3 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 w-7 h-7 bg-purple-600 hover:bg-purple-500 rounded-lg flex items-center justify-center text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiraHeroDashboard;
