import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy — Hilon Aira",
    description: "Hilon and Aira privacy policy. Learn how we protect customer data and retail telemetry.",
    canonicalPath: "/privacy"
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-16">
        <section className="site-container max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">Last updated: October 2026</p>
          </div>

          <div className="bg-slate-900/80 border border-purple-900/40 p-6 sm:p-10 rounded-3xl space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <div className="bg-slate-950 p-6 rounded-2xl border border-purple-950">
              <h2 className="text-lg font-bold text-white mb-2">Company Entity Information</h2>
              <p><strong>Hilon Inc. / Hilon AI Solutions</strong></p>
              <p>Product: <strong>Aira Platform</strong></p>
              <p>Email: <a href="mailto:privacy@hilon.ai" className="text-pink-400 underline">privacy@hilon.ai</a></p>
              <p>Website: <a href="https://hilon.ai" className="text-pink-400 underline">www.hilon.ai</a></p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction & Overview</h2>
              <p>
                At Hilon, we respect your privacy and are committed to maintaining data security. This Privacy Policy outlines how Hilon collects, utilizes, and safeguards retail billing telemetry, customer directory profiles, and store analytics when using the Aira platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Data Collection Parameters</h2>
              <p>Aira processes data strictly to power retail intelligence and billing automation:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2 text-slate-300">
                <li><strong>Transaction Telemetry:</strong> Items purchased, total bill amounts, timestamps, and payment modes.</li>
                <li><strong>Customer Contacts:</strong> Phone numbers & opt-in preferences for WhatsApp receipt delivery.</li>
                <li><strong>Analytics Signals:</strong> Store visit frequencies, basket cross-sell patterns, and RFM scores.</li>
                <li><strong>System Logs:</strong> IP address, device types, and terminal performance logs.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. How Information Is Used</h2>
              <p>Collected data is strictly used to:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2 text-slate-300">
                <li>Deliver instant paperless WhatsApp receipts to buyers.</li>
                <li>Generate 360° customer profiles and automated RFM tiers.</li>
                <li>Feed Aira autonomous AI models for store opportunity alerts.</li>
                <li>Process store telemetry and multi-location executive reports.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Security & Compliance</h2>
              <p>
                All data in transit and at rest is protected using industry-standard AES-256 encryption and TLS protocols. Hilon does not sell or rent personal information to third-party data brokers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
              <p>For questions regarding our privacy standards or data handling practices, please contact <a href="mailto:privacy@hilon.ai" className="text-pink-400 underline">privacy@hilon.ai</a>.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
