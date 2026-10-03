import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const generateTimeSlots = () => {
  const slots = [];
  for (let minutes = 9 * 60 + 30; minutes < 18 * 60; minutes += 30) {
    const startHour = Math.floor(minutes / 60);
    const startMinute = minutes % 60;
    const endMinutes = minutes + 30;
    const endHour = Math.floor(endMinutes / 60);
    const endMinute = endMinutes % 60;

    slots.push(
      `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')} - ${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`
    );
  }
  return slots;
};

const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      date: date,
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : 'Day After',
      formatted: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    });
  }
  return dates;
};

export default function BookDemo() {
  useSEO({
    title: "Book a Demo — Experience Aira by Hilon",
    description: "Schedule a personalized 1-on-1 demo of Aira. See AI-powered smart billing, customer intelligence, and automated marketing in action.",
    canonicalPath: "/book-demo"
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeSlots = generateTimeSlots();
  const availableDates = getAvailableDates();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean form handling
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-600 selection:text-white">
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
      <section className="section-spacing bg-slate-950">
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
                        Our Hilon retail specialist will reach out shortly to confirm your requested demo time.
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <User className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Phone className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Phone / WhatsApp Number
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Mail className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Business Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@store.com"
                    className="bg-slate-950 border-purple-900/50 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                    Preferred Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableDates.map((d, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleChange('date', d.date.toISOString())}
                        className={`p-3 rounded-xl border text-xs text-center transition-all ${
                          formData.date === d.date.toISOString()
                            ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-md'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-purple-800'
                        }`}
                      >
                        <div className="font-bold">{d.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{d.formatted}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {formData.date && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      <Clock className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
                      {timeSlots.map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleChange('time', slot)}
                          className={`p-2 rounded-lg border text-xs transition-all ${
                            formData.time === slot
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 font-bold'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-purple-800'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading || !formData.name || !formData.phone || !formData.date || !formData.time}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/30"
                >
                  {loading ? 'Submitting...' : 'Confirm Book Demo'}
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
                <p>Contact our retail technology team at <span className="text-pink-400">demo@hilon.ai</span> or call <span className="text-pink-400">+1 (800) 555-HILON</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
