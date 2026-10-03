import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen, Video, Play, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const resourceCategories = [
  {
    id: "case-studies",
    icon: FileText,
    title: "Case Studies",
    desc: "See how retailers are growing with Aira",
    items: [
      { title: "Sharma General Store: 4x Growth", desc: "How a Delhi kirana store digitized operations", category: "Grocery" },
      { title: "Fashion Hub Mumbai", desc: "Building customer loyalty in fashion retail", category: "Fashion" },
      { title: "Tech World Electronics", desc: "Warranty tracking and service reminders", category: "Electronics" },
    ],
  },
  {
    id: "blog",
    icon: BookOpen,
    title: "Blog",
    desc: "Retail insights and tips",
    items: [
      { title: "5 Ways to Increase Repeat Customers", desc: "Practical strategies for customer retention", category: "Growth" },
      { title: "Digital Billing Best Practices", desc: "Get the most out of smart billing", category: "Billing" },
      { title: "Understanding GST for Retailers", desc: "A simple guide to GST compliance", category: "Compliance" },
    ],
  },
  {
    id: "guides",
    icon: BookOpen,
    title: "Guides",
    desc: "Step-by-step tutorials",
    items: [
      { title: "Getting Started with Aira", desc: "Complete setup guide for new users", category: "Setup" },
      { title: "Creating Your First Campaign", desc: "Send targeted messages to customers", category: "Marketing" },
      { title: "Setting Up Loyalty Points", desc: "Reward your repeat customers", category: "Loyalty" },
    ],
  },
  {
    id: "videos",
    icon: Video,
    title: "Videos",
    desc: "Watch and learn",
    items: [
      { title: "Aira Platform Overview", desc: "5-minute walkthrough of all features", category: "Overview", duration: "5:23" },
      { title: "Quick Billing Tutorial", desc: "Create bills in under 30 seconds", category: "Tutorial", duration: "3:45" },
      { title: "Analytics Dashboard Guide", desc: "Understanding your business data", category: "Tutorial", duration: "8:12" },
    ],
  },
];

export default function Resources() {
  const { id } = useParams();
  const selectedCategory = id ? resourceCategories.find(c => c.id === id) : null;
  useSEO({
    title: selectedCategory ? `${selectedCategory.title} – Hilon Aira Resources` : 'Resources – Guides, Case Studies & Blog | Hilon Aira',
    description: selectedCategory ? selectedCategory.desc : 'Explore Aira resources: case studies, guides, videos, and retail growth strategies.',
    canonicalPath: selectedCategory ? `/resources/${selectedCategory.id}` : '/resources'
  });

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
        <Header />
        
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-purple-600/30">
                <selectedCategory.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                {selectedCategory.title}
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl">{selectedCategory.desc}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-slate-950">
          <div className="site-container max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/80 border border-purple-900/40 p-6 rounded-2xl hover:border-purple-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-purple-950 text-pink-300 border border-purple-800/50">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                  {(item as any).duration && (
                    <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-purple-400">
                      <Play className="w-4 h-4 fill-purple-400" />
                      Duration: {(item as any).duration}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950 text-center">
        <div className="site-container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Aira Knowledge Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              Resources &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
                Retail Growth Center.
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore step-by-step guides, case studies, video walkthroughs, and retail intelligence insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-slate-950">
        <div className="site-container max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/resources/${category.id}`}
                  className="block bg-slate-900/80 border border-purple-900/40 p-6 sm:p-8 rounded-3xl hover:border-purple-500/60 hover:bg-slate-900 transition-all duration-300 h-full text-center group shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-purple-600/30 group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-300 transition-colors">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">{category.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-400 group-hover:text-pink-400">
                    Explore {category.items.length} Resources <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

