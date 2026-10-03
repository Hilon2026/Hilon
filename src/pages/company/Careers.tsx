import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Heart, Users, Zap, MapPin, Briefcase } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const perks = [
  { icon: Rocket, title: "Autonomous Impact", description: "Build AI systems used by modern retail operators" },
  { icon: Heart, title: "Health & Wellbeing", description: "Comprehensive health coverage for you & family" },
  { icon: Users, title: "Elite Engineering", description: "Collaborate with senior system architects" },
  { icon: Zap, title: "Rapid Growth", description: "Fast-tracked learning & equity incentives" },
];

const openings = [
  {
    title: "Senior AI / ML Engineer",
    department: "AI Research",
    location: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    title: "Full-Stack React Engineer",
    department: "Frontend Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer (SaaS)",
    department: "Product Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Enterprise Retail Sales Lead",
    department: "Sales & Growth",
    location: "Hybrid / Remote",
    type: "Full-time",
  },
];

export default function Careers() {
  useSEO({
    title: "Careers — Join Hilon & Aira",
    description: "Build the future of retail AI technology. Explore open engineering, design, and product roles at Hilon.",
    canonicalPath: "/company/careers"
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
        <div className="site-container max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Rocket className="w-4 h-4 text-pink-400" />
            Careers at Hilon
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Build the Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Retail Intelligence.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join a mission-driven team engineering the AI brain for modern retail operators worldwide.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-spacing bg-slate-950">
        <div className="site-container max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => {
              const IconComp = perk.icon;
              return (
                <div key={i} className="bg-slate-900/80 border border-purple-900/40 p-6 rounded-2xl space-y-3 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white mx-auto shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base">{perk.title}</h3>
                  <p className="text-slate-400 text-xs">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-spacing bg-slate-950">
        <div className="site-container max-w-4xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
            Open Positions
          </h2>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-purple-900/40 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-purple-500 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {job.location}
                    </span>
                    <span className="bg-purple-950 text-pink-300 px-2 py-0.5 rounded text-[10px]">
                      {job.type}
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs rounded-xl shadow shrink-0"
                >
                  Apply Position
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
