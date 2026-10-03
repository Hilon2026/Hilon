import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts, getBlogImageSrc, getListingBlurb, type BlogPostPreview } from "@/data/blogPosts";
import { getBlogPostBody } from "@/components/blog/postBodies/registry";
import { Button } from "@/components/ui/button";

const FILTER_KEYS = ["All", "GST", "Loyalty", "POS", "Marketing", "Billing", "Growth Tips"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

function inferCategory(post: BlogPostPreview): FilterKey {
  const source = [post.category, post.title, post.description, post.excerpt, post.slug]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (source.includes("gst")) return "GST";
  if (source.includes("loyalty") || source.includes("reward") || source.includes("coupon")) return "Loyalty";
  if (source.includes("whatsapp") || source.includes("marketing") || source.includes("campaign")) return "Marketing";
  if (source.includes("pos")) return "POS";
  if (source.includes("bill") || source.includes("invoice") || source.includes("tax")) return "Billing";
  return "Growth Tips";
}

function normalizeCategory(post: BlogPostPreview): FilterKey {
  const raw = (post.category ?? "").toLowerCase().trim();
  if (raw === "gst") return "GST";
  if (raw === "loyalty") return "Loyalty";
  if (raw === "pos") return "POS";
  if (raw === "marketing") return "Marketing";
  if (raw === "billing") return "Billing";
  if (raw === "growth" || raw === "growth tips") return "Growth Tips";
  return inferCategory(post);
}

function estimatePublishedDate(index: number, language: "EN" | "HI"): string {
  if (language === "HI") {
    const labels = ["जनवरी 2026", "फरवरी 2026", "मार्च 2026", "अप्रैल 2026"];
    return labels[index % labels.length];
  }
  const labels = ["Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026"];
  return labels[index % labels.length];
}

export default function Blog() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  useSEO(
    "Retail Insights & POS Guides | Aira Blog",
    "Grow your retail business with billing, POS, and customer engagement ideas from Aira.",
  );

  const featuredPost = blogPosts[0];
  const featuredCategory = normalizeCategory(featuredPost);
  const featuredSummary = getListingBlurb(featuredPost, language);
  const featuredImageSrc = getBlogImageSrc(featuredPost);

  const gridPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return blogPosts
      .slice(1)
      .map((post, idx) => {
        const normalizedCategory = normalizeCategory(post);
        const title = language === "HI" ? post.titleHI : post.title;
        const summary = getListingBlurb(post, language);
        const searchable = [
          post.title,
          post.titleHI,
          post.description,
          post.descriptionHI,
          post.excerpt,
          post.excerptHI,
          post.category,
          normalizedCategory,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return {
          post,
          idx,
          title,
          summary,
          normalizedCategory,
          searchable,
          hasFullArticle: Boolean(getBlogPostBody(post.slug)),
        };
      })
      .filter((item) => (activeFilter === "All" ? true : item.normalizedCategory === activeFilter))
      .filter((item) => (q ? item.searchable.includes(q) : true))
      .sort((a, b) => Number(b.hasFullArticle) - Number(a.hasFullArticle));
  }, [activeFilter, language, searchQuery]);

  const labels = {
    title: language === "HI" ? "रिटेल इनसाइट्स, POS गाइड्स और ग्रोथ टिप्स" : "Retail Insights, POS Guides & Growth Tips",
    subtitle:
      language === "HI"
        ? "GST बिलिंग, लॉयल्टी प्रोग्राम, ग्राहक रिटेंशन, बिलिंग सॉफ़्टवेयर और भारत में रिटेल स्टोर्स बढ़ाने के लिए उपयोगी गाइड्स।"
        : "Actionable guides on GST billing, loyalty programs, customer retention, billing software, and growing retail stores in India.",
    searchPlaceholder:
      language === "HI"
        ? "GST, loyalty, billing, customer retention खोजें..."
        : "Search GST, loyalty, billing, customer retention...",
    exploreArticles: language === "HI" ? "लेख देखें" : "Explore Articles",
    latestTitle: language === "HI" ? "नवीनतम लेख" : "Latest Articles",
    latestSubtitle: language === "HI" ? "आधुनिक रिटेलर्स के लिए नए इनसाइट्स।" : "Fresh insights for modern retailers.",
    featured: language === "HI" ? "विशेष लेख" : "Featured",
    published: language === "HI" ? "प्रकाशित" : "Published",
    readFull: language === "HI" ? "पूरा लेख पढ़ें" : "Read Full Article",
    readMore: language === "HI" ? "और पढ़ें" : "Read More",
    noResultsTitle: language === "HI" ? "कोई लेख नहीं मिला" : "No articles found",
    noResultsText:
      language === "HI"
        ? "कोशिश करें: अलग कीवर्ड या फ़िल्टर चुनें।"
        : "Try a different keyword or filter to discover more articles.",
    popularTopics: language === "HI" ? "लोकप्रिय विषय" : "Popular Topics",
    ctaTitle: language === "HI" ? "और रिटेल ग्रोथ इनसाइट्स चाहिए?" : "Want More Retail Growth Insights?",
    ctaText:
      language === "HI"
        ? "जानें Hilon कैसे स्मार्ट बिलिंग, लॉयल्टी और ग्राहक जुड़ाव के साथ स्टोर्स को बढ़ने में मदद करता है।"
        : "Explore how Hilon helps stores with smart billing, loyalty, and customer engagement.",
    exploreProducts: language === "HI" ? "प्रोडक्ट्स देखें" : "Explore Products",
    readResources: language === "HI" ? "और संसाधन पढ़ें" : "Read More Resources",
  };

  const filterLabels: Record<FilterKey, string> = {
    All: language === "HI" ? "सभी" : "All",
    GST: "GST",
    Loyalty: language === "HI" ? "लॉयल्टी" : "Loyalty",
    POS: "POS",
    Marketing: language === "HI" ? "मार्केटिंग" : "Marketing",
    Billing: language === "HI" ? "बिलिंग" : "Billing",
    "Growth Tips": language === "HI" ? "ग्रोथ टिप्स" : "Growth Tips",
  };

  const popularTopics = [
    "GST Billing",
    "Customer Loyalty",
    "POS Software",
    "WhatsApp Marketing",
    "Repeat Customers",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-purple-600 selection:text-white">
      <Header />

      <main className="flex-1">
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#1A0B2E] to-slate-950">
          <div className="site-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Retail Intelligence Blog
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 text-white">
                {labels.title}
              </h1>
              <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-slate-300">
                {labels.subtitle}
              </p>
              <div className="mx-auto max-w-2xl">
                <label htmlFor="blog-search" className="sr-only">
                  {labels.searchPlaceholder}
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    aria-hidden
                  />
                  <input
                    id="blog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={labels.searchPlaceholder}
                    className="w-full rounded-2xl border border-purple-900/50 bg-slate-900 py-3.5 pl-11 pr-4 text-sm sm:text-base text-white placeholder-slate-500 shadow-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-purple-900/30 bg-slate-950">
          <div className="site-container">
            <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
              {FILTER_KEYS.map((key) => {
                const active = activeFilter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFilter(key)}
                    className={[
                      "whitespace-nowrap rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200",
                      active
                        ? "border-purple-500 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                        : "border-purple-900/40 bg-slate-900 text-slate-300 hover:border-purple-500/60 hover:text-white",
                    ].join(" ")}
                  >
                    {filterLabels[key]}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 bg-slate-950">
          <div className="site-container">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-purple-500/30 bg-slate-900/80 shadow-2xl overflow-hidden md:grid md:grid-cols-2 backdrop-blur-xl"
            >
              <div className="relative min-h-[260px] sm:min-h-[320px] bg-slate-950">
                {featuredImageSrc ? (
                  <img
                    src={featuredImageSrc}
                    alt={language === "HI" ? featuredPost.titleHI : featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-pink-300">
                    {labels.featured}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300">
                    {featuredCategory}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4 text-white">
                  {language === "HI" ? featuredPost.titleHI : featuredPost.title}
                </h2>
                <p className="text-base leading-relaxed mb-5 text-slate-300">
                  {featuredSummary}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 mb-6">
                  {featuredPost.readTime && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-4 h-4 text-purple-400" aria-hidden />
                      {featuredPost.readTime}
                    </span>
                  )}
                  <span>
                    {labels.published}: {estimatePublishedDate(0, language)}
                  </span>
                </div>
                <div>
                  <Link
                    to={`/resources/blog/${featuredPost.slug}`}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30"
                  >
                    {labels.readFull} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="latest-articles" className="section-spacing bg-slate-950 pt-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="site-container">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white">
                {labels.latestTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                {labels.latestSubtitle}
              </p>
            </div>

            {gridPosts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-purple-900/40 bg-slate-900 p-8 sm:p-10 text-center">
                <p className="text-lg font-semibold mb-2 text-white">
                  {labels.noResultsTitle}
                </p>
                <p className="text-slate-400">{labels.noResultsText}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {gridPosts.map((item, i) => {
                  const cardImageSrc = getBlogImageSrc(item.post);

                  return (
                  <motion.article
                    key={item.post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="group h-full rounded-2xl border border-purple-900/40 bg-slate-900/80 shadow-xl hover:border-purple-500/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[3/2] w-full bg-slate-950">
                        {cardImageSrc ? (
                          <img
                            src={cardImageSrc}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="mb-3">
                          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pink-300">
                            {item.normalizedCategory}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold leading-snug mb-2 text-white line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 mt-auto">
                      <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between gap-3">
                        <span className="text-xs text-slate-400 inline-flex items-center gap-1.5">
                          <Clock3 className="w-3.5 h-3.5 text-purple-400" aria-hidden />
                          {item.post.readTime ?? "5-6 min read"}
                        </span>
                        <Link
                          to={`/resources/blog/${item.post.slug}`}
                          className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs inline-flex items-center gap-1 hover:opacity-90 transition-opacity"
                        >
                          {labels.readMore}
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative pb-14 sm:pb-16 lg:pb-20 overflow-hidden bg-slate-950">
          <div className="site-container">
            <div className="relative rounded-3xl border border-purple-500/30 bg-slate-900/90 p-7 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl text-center">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 text-white">
                  {labels.ctaTitle}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-8 text-slate-300">
                  {labels.ctaText}
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30"
                >
                  {labels.exploreProducts}
                </Link>
                <Link
                  to="/resources"
                  className="px-8 py-3.5 rounded-xl bg-slate-950 border border-purple-900/60 text-white font-bold text-sm hover:border-purple-500 transition-colors"
                >
                  {labels.readResources}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
