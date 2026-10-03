import React, { useState } from "react";
import { 
  Receipt, Users, Brain, MessageSquare, BarChart3, 
  Search, Plus, Bell, Filter, Download, ArrowUpRight, Zap, CheckCircle2 
} from "lucide-react";
import AiraLogo from "@/components/brand/AiraLogo";

export const InteractiveProductDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"billing" | "customers" | "insights" | "engagement" | "analytics">("billing");

  return (
    <section id="product-demo" className="section-spacing bg-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            Interactive Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            See Aira in action.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore the flagship SaaS interface designed for speed, precision, and autonomous store intelligence.
          </p>
        </div>

        {/* Demo SaaS Application Frame */}
        <div className="max-w-6xl mx-auto bg-slate-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl">
          {/* SaaS Header Bar */}
          <div className="bg-slate-950 border-b border-purple-900/40 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <AiraLogo variant="light" size="sm" />
              <div className="h-5 w-px bg-slate-800 hidden sm:block"></div>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                Store: Main Flagship Branch #01
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab("billing")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "billing"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Receipt className="w-3.5 h-3.5" />
                Smart Billing
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "customers"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                Customers
              </button>
              <button
                onClick={() => setActiveTab("insights")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "insights"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Brain className="w-3.5 h-3.5 text-pink-400" />
                AI Insights
              </button>
              <button
                onClick={() => setActiveTab("engagement")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "engagement"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Engagement
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "analytics"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                Analytics
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800">
                <Bell className="w-4 h-4" />
              </button>
              <div className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center border border-purple-400">
                HQ
              </div>
            </div>
          </div>

          {/* Dynamic Screen Content Based on Active Tab */}
          <div className="p-6 sm:p-8 bg-slate-950 min-h-[420px] flex flex-col justify-between">
            {activeTab === "billing" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-purple-400" />
                      Smart POS Terminal #04
                    </h3>
                    <p className="text-xs text-slate-400">Scan items or lookup customer phone number</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search item / customer..."
                        className="bg-slate-900 border border-slate-800 text-xs text-white pl-9 pr-4 py-2 rounded-xl focus:border-purple-500 focus:outline-none w-48 sm:w-64"
                      />
                    </div>
                    <button className="px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow">
                      <Plus className="w-3.5 h-3.5" />
                      New Sale
                    </button>
                  </div>
                </div>

                {/* Simulated Bill Line Items Table */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-slate-900/80 rounded-2xl border border-slate-800 p-4 overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-300">
                      <thead className="text-slate-400 uppercase text-[10px] border-b border-slate-800">
                        <tr>
                          <th className="py-2">Item Description</th>
                          <th className="py-2">Qty</th>
                          <th className="py-2">Unit Price</th>
                          <th className="py-2">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        <tr>
                          <td className="py-3 font-semibold text-white">Classic Cotton Polo Shirt (Blue/L)</td>
                          <td className="py-3">1</td>
                          <td className="py-3">$45.00</td>
                          <td className="py-3 font-bold text-pink-400">$45.00</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold text-white">Tailored Chino Shorts (Navy/M)</td>
                          <td className="py-3">1</td>
                          <td className="py-3">$55.00</td>
                          <td className="py-3 font-bold text-pink-400">$55.00</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold text-white flex items-center gap-1.5">
                            Leather Belt <span className="bg-purple-950 text-purple-300 text-[9px] px-1.5 py-0.5 rounded">AI Upsell (+15%)</span>
                          </td>
                          <td className="py-3">1</td>
                          <td className="py-3">$24.00</td>
                          <td className="py-3 font-bold text-pink-400">$24.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="lg:col-span-4 bg-slate-900 border border-purple-900/40 p-5 rounded-2xl flex flex-col justify-between">
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Customer Profile</span>
                        <span className="text-emerald-400 font-medium">VIP Gold Tier</span>
                      </div>
                      <div className="font-bold text-white text-sm">Priya Sharma (+91 98450...)</div>
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-slate-300">
                        <span>Subtotal</span>
                        <span>$124.00</span>
                      </div>
                      <div className="flex items-center justify-between text-emerald-400">
                        <span>Loyalty Points Discount</span>
                        <span>-$12.00</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-white font-extrabold text-base">
                        <span>Final Bill Amount</span>
                        <span className="text-pink-400">$112.00</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Complete Sale & Send WhatsApp Bill
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "customers" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-pink-400" />
                      360° Customer Intelligence Directory
                    </h3>
                    <p className="text-xs text-slate-400">14,280 shopper profiles categorized by RFM score</p>
                  </div>
                  <span className="text-xs bg-purple-950 text-purple-300 border border-purple-800 px-3 py-1 rounded-full">
                    Auto-synced from Smart POS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl">
                    <span className="text-xs text-slate-400 block mb-1">Champions & VIPs</span>
                    <span className="text-2xl font-bold text-white">1,420</span>
                    <span className="text-[10px] text-emerald-400 block mt-1">Visit every 10-14 days</span>
                  </div>
                  <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl">
                    <span className="text-xs text-slate-400 block mb-1">Loyal Regulars</span>
                    <span className="text-2xl font-bold text-pink-400">8,940</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Avg basket: $68.50</span>
                  </div>
                  <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl">
                    <span className="text-xs text-slate-400 block mb-1">At-Risk Churn</span>
                    <span className="text-2xl font-bold text-purple-300">412</span>
                    <span className="text-[10px] text-pink-400 block mt-1">No visit in &gt;30 days</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "insights" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      Aira Autonomous Intelligence Feed
                    </h3>
                    <p className="text-xs text-slate-400">Continuous AI telemetry analyzing store patterns</p>
                  </div>
                  <span className="text-xs bg-pink-950 text-pink-300 border border-pink-800 px-3 py-1 rounded-full">
                    3 New Actions Ready
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-900 border border-purple-900/50 p-4 rounded-xl flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block mb-1">
                        High Potential Cross-Sell
                      </span>
                      <p className="text-xs text-slate-200 font-medium">
                        Shoppers purchasing formal trousers have a 72% likelihood of buying formal shoes if offered a 10% combo discount at billing.
                      </p>
                    </div>
                    <button className="shrink-0 px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-lg">
                      Enable Prompt
                    </button>
                  </div>

                  <div className="bg-slate-900 border border-purple-900/50 p-4 rounded-xl flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Inventory Velocity Surge
                      </span>
                      <p className="text-xs text-slate-200 font-medium">
                        Stock level for SKU-409 (Linen Shirts) is declining 2.4x faster than predicted. Recommended reorder in 48h to prevent stockouts.
                      </p>
                    </div>
                    <button className="shrink-0 px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-bold rounded-lg">
                      View Stock
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "engagement" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-pink-400" />
                      WhatsApp & Omnichannel Campaign Manager
                    </h3>
                    <p className="text-xs text-slate-400">Automated targeted messaging with high open rates</p>
                  </div>
                  <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-xl shadow">
                    Create Campaign
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">30-Day Win-Back WhatsApp Flow</span>
                      <span className="text-emerald-400 font-medium">Active</span>
                    </div>
                    <p className="text-xs text-slate-400">Triggers automated WhatsApp voucher 30 days post-last visit.</p>
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-300">
                      <span>Sent: 1,240 messages</span>
                      <span className="text-pink-400 font-bold">ROI: 5.2x</span>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-purple-900/40 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Birthday Loyalty Blast</span>
                      <span className="text-emerald-400 font-medium">Active</span>
                    </div>
                    <p className="text-xs text-slate-400">Sends 20% birthday discount code to customers on their birthday.</p>
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-300">
                      <span>Sent: 84 messages</span>
                      <span className="text-pink-400 font-bold">ROI: 8.4x</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      Executive Multi-Store Telemetry
                    </h3>
                    <p className="text-xs text-slate-400">Real-time financial visibility across all locations</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Live Sync Active
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-900 border border-purple-900/40 p-3.5 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase">Gross Revenue</span>
                    <div className="text-xl font-bold text-white mt-1">$148,920</div>
                  </div>
                  <div className="bg-slate-900 border border-purple-900/40 p-3.5 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase">Total Bills</span>
                    <div className="text-xl font-bold text-pink-400 mt-1">4,280</div>
                  </div>
                  <div className="bg-slate-900 border border-purple-900/40 p-3.5 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase">Net Margin</span>
                    <div className="text-xl font-bold text-purple-300 mt-1">41.8%</div>
                  </div>
                  <div className="bg-slate-900 border border-purple-900/40 p-3.5 rounded-xl">
                    <span className="text-[10px] text-slate-400 uppercase">Repeat Sales Ratio</span>
                    <div className="text-xl font-bold text-emerald-400 mt-1">68.4%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductDemo;
