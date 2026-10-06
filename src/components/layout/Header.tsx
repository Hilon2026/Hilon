import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import HilonLogo from "@/components/brand/HilonLogo";
import AiraLogo from "@/components/brand/AiraLogo";
import { useTheme } from "@/contexts/ThemeContext";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-purple-900/30 py-3 shadow-md dark:shadow-xl"
          : "bg-gradient-to-b from-white/90 dark:from-slate-950/90 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Left: Brand Logos */}
        <div className="flex items-center gap-3 sm:gap-4">
          <HilonLogo size="sm" showTagline={false} />
          <span className="h-5 w-px bg-slate-300 dark:bg-purple-900/40 hidden sm:block"></span>
          <div className="hidden sm:block">
            <AiraLogo size="sm" withCompany={false} />
          </div>
        </div>

        {/* Center: Simplified Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/#growth-engine"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-colors"
          >
            Growth Engine
          </Link>

          <Link
            to="/solutions"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-colors"
          >
            Solutions
          </Link>

          <Link
            to="/#managed-marketing"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-colors"
          >
            Managed Marketing
          </Link>

          <Link
            to="/pricing"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-colors"
          >
            Pricing
          </Link>

          <Link
            to="/company/about"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-colors"
          >
            Company
          </Link>
        </nav>

        {/* Right: Theme Toggle & CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Light / Dark Mode Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2.5 rounded-xl border border-slate-300 dark:border-purple-500/30 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-700" />
            )}
          </button>

          <Link
            to="/#growth-audit"
            className="text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 px-3.5 py-2 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/80 transition-all"
          >
            Growth Audit
          </Link>

          <Link
            to="/book-demo"
            className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white px-4 py-2 rounded-xl shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-slate-300 dark:border-purple-500/30 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-700" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-purple-900/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-purple-900/40 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <Link
            to="/#growth-engine"
            className="block text-base font-semibold text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Growth Engine
          </Link>
          <Link
            to="/solutions"
            className="block text-base font-semibold text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            to="/#managed-marketing"
            className="block text-base font-semibold text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Managed Marketing
          </Link>
          <Link
            to="/pricing"
            className="block text-base font-semibold text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/company/about"
            className="block text-base font-semibold text-slate-800 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          <div className="pt-4 border-t border-slate-200 dark:border-purple-900/40 flex flex-col gap-3">
            <Link
              to="/#growth-audit"
              className="text-center py-2.5 rounded-xl border border-purple-300 dark:border-purple-500/40 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-semibold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Growth Audit
            </Link>
            <Link
              to="/book-demo"
              className="text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
