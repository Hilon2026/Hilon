import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, Brain, Receipt, Users, Gift, 
  BarChart3, ArrowRight, ShieldCheck, PhoneCall 
} from "lucide-react";
import HilonLogo from "@/components/brand/HilonLogo";
import AiraLogo from "@/components/brand/AiraLogo";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-purple-900/40 py-3 shadow-xl"
          : "bg-gradient-to-b from-slate-950/90 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Left: Brand Logos */}
        <div className="flex items-center gap-3 sm:gap-4">
          <HilonLogo variant="light" size="sm" showTagline={false} />
          <span className="h-5 w-px bg-purple-900/60 hidden sm:block"></span>
          <div className="hidden sm:block">
            <AiraLogo variant="light" size="sm" withCompany={false} />
          </div>
        </div>

        {/* Center: Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/ai-intelligence"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            AI Intelligence
          </Link>

          <Link
            to="/solutions"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Solutions
          </Link>

          <Link
            to="/industries"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Industries
          </Link>

          <Link
            to="/pricing"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>

          <Link
            to="/resources"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Resources
          </Link>

          <Link
            to="/company/about"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Company
          </Link>
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Contact Sales
          </Link>
          <Link
            to="/book-demo"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 flex items-center gap-1.5"
          >
            Book a Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/book-demo"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs"
          >
            Demo
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-purple-900/50 px-5 py-6 space-y-4 animate-fade-in text-white">
          <div className="pb-3 border-b border-slate-800">
            <AiraLogo variant="light" size="sm" />
          </div>

          <div className="space-y-3 text-sm font-medium">
            <Link to="/ai-intelligence" className="block py-1 text-slate-200 hover:text-pink-300">
              AI Intelligence
            </Link>
            <Link to="/solutions" className="block py-1 text-slate-200 hover:text-pink-300">
              Solutions
            </Link>
            <Link to="/industries" className="block py-1 text-slate-200 hover:text-pink-300">
              Industries
            </Link>
            <Link to="/pricing" className="block py-1 text-slate-200 hover:text-pink-300">
              Pricing
            </Link>
            <Link to="/resources" className="block py-1 text-slate-200 hover:text-pink-300">
              Resources & Blog
            </Link>
            <Link to="/company/about" className="block py-1 text-slate-200 hover:text-pink-300">
              Company
            </Link>
            <Link to="/contact" className="block py-1 text-slate-200 hover:text-pink-300">
              Contact Sales
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              to="/book-demo"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-center block shadow-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
