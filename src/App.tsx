import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { QuickInquiryModal } from "@/components/layout/QuickInquiryModal";
import Index from "./pages/Index";

// Lazy-loaded pages
const ForRetailers = lazy(() => import("./pages/ForRetailers"));
const Products = lazy(() => import("./pages/Products"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Features = lazy(() => import("./pages/Features"));
const ReviewFeature = lazy(() => import("./pages/features/ReviewFeature"));
const ReferralFeature = lazy(() => import("./pages/features/ReferralFeature"));
const DigitalBillsFeature = lazy(() => import("./pages/features/DigitalBillsFeature"));
const LoyaltyFeature = lazy(() => import("./pages/features/LoyaltyFeature"));
const PromotionFeature = lazy(() => import("./pages/features/PromotionFeature"));
const AnalyticsFeature = lazy(() => import("./pages/features/AnalyticsFeature"));
const SurveysFeature = lazy(() => import("./pages/features/SurveysFeature"));
const Resources = lazy(() => import("./pages/Resources"));
const Guides = lazy(() => import("./pages/resources/Guides"));
const GuideDetail = lazy(() => import("./pages/resources/GuideDetail"));
const CaseStudies = lazy(() => import("./pages/resources/CaseStudies"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const BlogPost = lazy(() => import("./pages/resources/BlogPost"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Financials = lazy(() => import("./pages/Financials"));
const Help = lazy(() => import("./pages/Help"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const BillingGuide = lazy(() => import("./pages/BillingGuide"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/company/About"));
const Startup = lazy(() => import("./pages/Startup"));
const Careers = lazy(() => import("./pages/company/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const IndustryPageRoute = lazy(() => import("./pages/industries/IndustryPageRoute"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
              <Route path="/" element={<Index />} />
              <Route path="/platform" element={<Features />} />
              <Route path="/ai-intelligence" element={<Features />} />
              <Route path="/for-retailers" element={<ForRetailers />} />
              <Route path="/industries" element={<Navigate to="/industries/fashion" replace />} />
              <Route path="/industries/:slug" element={<IndustryPageRoute />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/mpos" element={<Navigate to="/products" replace />} />
              <Route path="/products/:id" element={<Products />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<Solutions />} />
              <Route path="/features" element={<Features />} />
              <Route path="/features/reviews" element={<ReviewFeature />} />
              <Route path="/features/referrals" element={<ReferralFeature />} />
              <Route path="/features/digital-bills" element={<DigitalBillsFeature />} />
              <Route path="/features/loyalty" element={<LoyaltyFeature />} />
              <Route path="/features/promotion" element={<PromotionFeature />} />
              <Route path="/features/analytics" element={<AnalyticsFeature />} />
              <Route path="/features/surveys" element={<SurveysFeature />} />
              <Route path="/features/:id" element={<Features />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/blog/:slug" element={<BlogPost />} />
              <Route path="/resources/:id" element={<Resources />} />
              <Route path="/guides/:slug" element={<GuideDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/help" element={<Help />} />
              <Route path="/help/getting-started" element={<GettingStarted />} />
              <Route path="/help/billing-guide" element={<BillingGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/company/about" element={<About />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-conditions" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/startup" element={<Startup />} />
              <Route path="/trial" element={<BookDemo />} />
              <Route path="/demo" element={<BookDemo />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
