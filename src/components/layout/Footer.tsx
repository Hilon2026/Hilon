import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import HilonLogo from "@/components/brand/HilonLogo";
import AiraLogo from "@/components/brand/AiraLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-purple-900/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle glowing aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <HilonLogo variant="light" size="md" />
            </div>

            <div className="mt-2">
              <AiraLogo variant="light" size="sm" withCompany={false} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-Powered Retail Intelligence & Growth Platform. Turn every sale into your next opportunity with fast billing, WhatsApp campaigns, e-bills, and store automation.
            </p>

            {/* Social Links (Non-redirecting icons) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors cursor-default"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors cursor-default"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors cursor-default"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Column 1: AI Intelligence & Solutions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">AI Intelligence</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/ai-intelligence" className="hover:text-white transition-colors">
                  AI Intelligence Core
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  WhatsApp Campaigns
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  Fast Billing & E-Bills
                </Link>
              </li>
              <li>
                <Link to="/features/analytics" className="hover:text-white transition-colors">
                  Campaign Automation
                </Link>
              </li>
              <li>
                <Link to="/features/loyalty" className="hover:text-white transition-colors">
                  Festival Campaigns
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Solutions & Industries */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/industries/fashion" className="hover:text-white transition-colors">
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link to="/industries/grocery" className="hover:text-white transition-colors">
                  Grocery & Supermarket
                </Link>
              </li>
              <li>
                <Link to="/industries/electronics" className="hover:text-white transition-colors">
                  Electronics & Tech
                </Link>
              </li>
              <li>
                <Link to="/industries/pharmacy" className="hover:text-white transition-colors">
                  Pharmacy & Wellness
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors font-semibold text-purple-400">
                  All 9 Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Resources & Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/company/about" className="hover:text-white transition-colors">
                  About Hilon
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 4: Legal & Security */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  Security Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Hilon Inc. All rights reserved. Aira is a registered trademark of Hilon.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link to="/help" className="hover:text-white transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
