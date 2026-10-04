import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { sendLeadEmail } from "@/lib/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const TIME_SLOTS = [
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "12:00 PM - 12:30 PM",
  "02:00 PM - 02:30 PM",
  "03:30 PM - 04:00 PM",
  "05:00 PM - 05:30 PM",
  "06:30 PM - 07:00 PM"
];

export default function BookDemo() {
  useSEO({
    title: "Book a Demo — Experience Aira by Hilon",
    description: "Schedule a personalized 1-on-1 demo of Aira. See AI-powered smart billing, customer intelligence, and automated marketing in action.",
    canonicalPath: "/book-demo"
  });

  // Generate stable available dates once
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const isoKey = date.toISOString().split("T")[0]; // "YYYY-MM-DD"
      const label = i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toLocaleDateString("en-US", { weekday: "short" });
      const formatted = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

      dates.push({ isoKey, label, formatted, fullDateStr: `${label} (${formatted})` });
    }
    return dates;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: availableDates[0].fullDateStr,
    time: TIME_SLOTS[1]
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const res = await sendLeadEmail({
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      booking_date: formData.date,
      booking_time: formData.time,
      form_source: "Book A Demo Page"
    });

    if (res.success) {
      setSubmitted(true);
    } else {
      // If EmailJS failed due to template ID or key, still show success to user but log error
      console.warn("Email error:", res.error);
      setSubmitted(true);
      if (res.error) {
        setErrorMessage(res.error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-600 selection:text-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950">
        <div className="site-container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            1-on-1 Retail AI Demo
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            See Aira in Action.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Schedule a personalized session with a Hilon retail specialist. Learn how Aira transforms daily billing into automated customer growth.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20 bg-slate-950">
        <div className="site-container max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Reserve Your Time Slot
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {submitted && (
                  <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/60 p-4 text-emerald-300 text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white">Demo Requested Successfully!</h3>
                      <p className="text-xs text-slate-300 mt-1">
                        Our Hilon retail specialist will reach out to <strong>{formData.phone}</strong> shortly to confirm your demo on <strong>{formData.date} at {formData.time}</strong>.
                      </p>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="rounded-xl border border-amber-500/50 bg-amber-950/40 p-3 text-amber-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">EmailJS Notice:</span> {errorMessage}. (Please double-check your EmailJS Template ID).
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <User className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your name"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Phone className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Phone / WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 97241 51647"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Mail className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Business Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@store.com"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Select Demo Date *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableDates.map((d, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleChange("date", d.fullDateStr)}
                        className={`p-2.5 rounded-xl border text-xs text-center transition-all ${
                          formData.date === d.fullDateStr
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 font-bold shadow-md shadow-purple-600/30 scale-[1.02]"
                            : "bg-slate-950 text-slate-300 border-slate-800 hover:border-purple-700"
                        }`}
                      >
                        <div className="font-bold">{d.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{d.formatted}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Select Time Slot *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleChange("time", slot)}
                        className={`p-2.5 rounded-xl border text-xs text-center transition-all ${
                          formData.time === slot
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 font-bold shadow-md shadow-purple-600/30 scale-[1.02]"
                            : "bg-slate-950 text-slate-300 border-slate-800 hover:border-purple-700"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || !formData.name || !formData.phone || !formData.email}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/30"
                >
                  {loading ? "Sending Request..." : "Confirm & Schedule Demo"}
                </Button>
              </form>
            </div>

            {/* What to expect */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="bg-slate-900/90 border border-purple-900/40 p-6 sm:p-8 rounded-3xl space-y-4">
                <h3 className="text-xl font-bold text-white">What happens in your demo?</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Live walk-through of Aira Smart Billing & instant WhatsApp digital receipts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Deep-dive into 360° Customer Directory & RFM segment automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Demonstration of Aira AI natural language query & automated store actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Customized ROI calculation tailored to your specific retail sector</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl text-xs text-slate-400 space-y-2">
                <h4 className="font-bold text-white text-sm">Need immediate assistance?</h4>
                <p>Contact our retail technology team at <span className="text-pink-400">demo@hilon.ai</span> or call <span className="text-pink-400">+91 97241 51647</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
