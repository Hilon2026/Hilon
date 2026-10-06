import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { QuickInquiryModal } from "@/components/layout/QuickInquiryModal";
import Index from "./pages/Index";

// Lazy-loaded core pages
const Solutions = lazy(() => import("./pages/Solutions"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/company/About"));
const Careers = lazy(() => import("./pages/company/Careers"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <WhatsAppFab />
            <QuickInquiryModal />
            <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-purple-400 font-bold text-sm">Loading Aira...</div>}>
              <Routes>
                {/* Core Specification Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/growth-engine" element={<Features />} />
                <Route path="/ai-intelligence" element={<Features />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/:id" element={<Features />} />

                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/:id" element={<Solutions />} />

                <Route path="/pricing" element={<Pricing />} />

                <Route path="/company/about" element={<About />} />
                <Route path="/company/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/demo" element={<BookDemo />} />
                <Route path="/trial" element={<BookDemo />} />

                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-conditions" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />

                {/* Simplified redirects for bloated legacy help/vlog pages */}
                <Route path="/help/*" element={<Navigate to="/" replace />} />
                <Route path="/resources/blog/*" element={<Navigate to="/" replace />} />
                <Route path="/resources/*" element={<Navigate to="/solutions" replace />} />
                <Route path="/products/*" element={<Navigate to="/solutions" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
