import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Terms() {
  useSEO({
    title: "Terms of Service — Hilon Aira",
    description: "Terms and conditions for using Hilon AI and Aira retail intelligence platform.",
    canonicalPath: "/terms"
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-16">
        <section className="site-container max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
            <p className="text-slate-400 text-sm">Effective Date: October 2026</p>
          </div>

          <div className="bg-slate-900/80 border border-purple-900/40 p-6 sm:p-10 rounded-3xl space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <div className="bg-slate-950 p-6 rounded-2xl border border-purple-950">
              <h2 className="text-lg font-bold text-white mb-2">Legal Agreement Notice</h2>
              <p>These terms govern your access to and use of <strong>Hilon Inc.</strong> services and the <strong>Aira</strong> retail platform (Software-as-a-Service).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By creating an account, connecting your POS billing stream, or accessing the Aira platform, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you may not access or use Aira.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Service Scope</h2>
              <p>
                Aira provides retail smart billing, digital receipt delivery, 360° customer data management, autonomous AI insights, and marketing automation. Hilon reserves the right to continuously update features and enhance system algorithms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2 text-slate-300">
                <li>Maintain the confidentiality of login credentials and account permissions.</li>
                <li>Ensure all billing & customer data submitted complies with applicable consumer privacy laws.</li>
                <li>Refrain from reverse-engineering or manipulating Aira AI algorithms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
              <p>
                All rights, titles, and interests in and to Aira, including patents, copyrights, algorithms, user interfaces, trademarks ("Hilon", "Aira"), and brand assets, belong exclusively to Hilon Inc.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact Information</h2>
              <p>For any legal inquiries or questions regarding these terms, please email <a href="mailto:legal@hilon.ai" className="text-pink-400 underline">legal@hilon.ai</a>.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
