import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { sendLeadEmail } from "@/lib/email";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Us — Hilon & Aira",
    description: "Get in touch with Hilon. Inquire about Aira retail intelligence platform, demos, or partnerships.",
    canonicalPath: "/contact"
  });

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendLeadEmail({
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      message: formData.message,
      form_source: "Contact Page Form"
    });

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
        <div className="site-container max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Send className="w-4 h-4 text-pink-400" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Contact the Hilon Team.
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about Aira or enterprise multi-store deployments? We are here to help.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-slate-950">
        <div className="site-container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-slate-900/90 border border-purple-900/40 p-6 sm:p-8 rounded-3xl space-y-6">
              <h2 className="text-2xl font-bold text-white">Send us a Message</h2>

              {submitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/50 p-4 rounded-xl text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">Message Sent!</h3>
                    <p className="text-xs text-slate-300 mt-1">Thank you. A Hilon representative will get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="bg-slate-950 border-purple-900/50 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (800) 555-HILON"
                      className="bg-slate-950 border-purple-900/50 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@store.com"
                      className="bg-slate-950 border-purple-900/50 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help your retail business?"
                      className="w-full bg-slate-950 border border-purple-900/50 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs rounded-xl shadow-lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="bg-slate-900/90 border border-purple-900/40 p-6 rounded-3xl space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-pink-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Email Inquiries</h3>
                    <p className="text-slate-400 text-xs mt-1">General: <span className="text-pink-400">info@hilon.ai</span></p>
                    <p className="text-slate-400 text-xs">Sales: <span className="text-pink-400">sales@hilon.ai</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-pink-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Customer Support</h3>
                    <p className="text-slate-400 text-xs mt-1">Toll Free: +1 (800) 555-HILON</p>
                    <p className="text-slate-400 text-xs">WhatsApp Support: Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Corporate Headquarters</h3>
                    <p className="text-slate-400 text-xs mt-1">Hilon Inc. Technology Campus</p>
                    <p className="text-slate-400 text-xs">San Francisco, CA / Global Offices</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl text-xs text-slate-400">
                <h4 className="font-bold text-white text-sm mb-1">Looking for a product walkthrough?</h4>
                <p className="mb-3">Experience Aira's AI capabilities live on a 1-on-1 call.</p>
                <a href="/book-demo" className="text-purple-400 font-bold hover:underline">Book a 1-on-1 Demo →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
