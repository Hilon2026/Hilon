import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Handshake, User, Phone, Mail, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { sendLeadEmail } from "@/lib/email";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const hiddenRoutePrefixes = ["/book-demo", "/demo", "/trial", "/contact"];
const SHOWN_THIS_SESSION_KEY = "hilon_aira_quick_inquiry_shown";
const SHOW_DELAY_MS = 8000;

export function QuickInquiryModal() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_THIS_SESSION_KEY)) return;
    const shouldHide = hiddenRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
    if (shouldHide) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SHOWN_THIS_SESSION_KEY, "1");
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendLeadEmail({
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      form_source: "Quick Inquiry Popup Modal"
    });

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-slate-950 border border-purple-500/30 rounded-3xl p-6 text-center sm:p-8 text-white">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-600/30">
          <Handshake className="h-8 w-8" />
        </div>

        <DialogHeader className="items-center text-center">
          <DialogTitle className="text-xl font-extrabold tracking-tight sm:text-2xl text-white">
            Discover Aira for Your Store
          </DialogTitle>
          <DialogDescription className="text-center text-xs text-slate-300 mt-1">
            Get a quick callback from Hilon retail AI specialists.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-emerald-500/50 bg-emerald-950/60 p-4 text-left text-emerald-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Thank you! A Hilon retail advisor will reach out to you via WhatsApp / phone shortly.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-left">
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your Name"
                className="h-11 rounded-xl pl-10 pr-3 bg-slate-900 border-purple-900/40 text-xs text-white"
              />
            </div>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="WhatsApp Number"
                className="h-11 rounded-xl pl-10 pr-3 bg-slate-900 border-purple-900/40 text-xs text-white"
              />
            </div>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email Address (Optional)"
                className="h-11 rounded-xl pl-10 pr-3 bg-slate-900 border-purple-900/40 text-xs text-white"
              />
            </div>

            <Button
              type="submit"
              className="h-11 w-full gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold text-white shadow-lg hover:opacity-90"
              disabled={loading || !formData.name || !formData.phone}
            >
              {loading ? "Requesting..." : "Request Quick Demo Call"}
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <Lock className="h-3 w-3 text-emerald-400" />
              Zero spam. Your information is 100% confidential.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
