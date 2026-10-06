import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import HilonLogo from "@/components/brand/HilonLogo";
import AiraLogo from "@/components/brand/AiraLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 light:bg-slate-900 text-slate-400 border-t border-purple-900/30 pt-16 pb-12 relative overflow-hidden transition-colors">
      {/* Subtle glowing aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <HilonLogo size="md" />
            </div>

            <div className="mt-2">
              <AiraLogo size="sm" withCompany={false} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Retail Customer Growth System. Turn every transaction into a lifelong customer relationship with WhatsApp CRM, automated journeys, loyalty, and managed marketing.
            </p>

            {/* Social Links */}
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

          {/* Nav Column 1: Core Growth Engine */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Growth Engine</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/#growth-engine" className="hover:text-white transition-colors">
                  WhatsApp API + CRM
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Automated Customer Journeys
                </Link>
              </li>
              <li>
                <Link to="/#managed-marketing" className="hover:text-white transition-colors">
                  Managed Retail Marketing
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  App-less Loyalty & Rewards
                </Link>
              </li>
              <li>
                <Link to="/#growth-audit" className="hover:text-white transition-colors">
                  Retail Growth Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Solutions & Pricing */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Solutions & Packages</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Retail Growth Starter (₹15,000/yr)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Retail Growth Pro (₹20,000/yr)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Retail Growth 360 Managed
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="hover:text-white transition-colors font-semibold text-purple-400">
                  Book 1-on-1 Demo →
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Company & Legal */}
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
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
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
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Hilon Inc. All rights reserved. Aira — Retail Customer Growth System.
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
            <Link to="/book-demo" className="hover:text-white transition-colors">
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
