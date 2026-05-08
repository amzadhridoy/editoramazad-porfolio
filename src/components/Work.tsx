import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

type WorkItem = {
  src: string;
  label: string;
  description: string;
  youtubeId?: string;
  vertical?: boolean;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  items: WorkItem[];
};

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

const categories: Category[] = [
  {
    id: "longform",
    title: "YouTube Long-Form",
    subtitle: "Cinematic edits that boost retention and watch time for YouTube creators.",
    items: [
      {
        src: ytThumb("eUNp-MKB6Zw"),
        label: "Featured Long-Form Edit",
        description: "Storytelling · Pacing · Retention hooks",
        youtubeId: "eUNp-MKB6Zw",
      },
      {
        src: ytThumb("FXOP1vZ-NXM"),
        label: "Cinematic YouTube Edit",
        description: "B-roll integration · Color grade · Sound design",
        youtubeId: "FXOP1vZ-NXM",
      },
      {
        src: ytThumb("QPQbUZmdnNw"),
        label: "Long-Form YouTube Edit",
        description: "Narrative flow · Dynamic cuts · Engagement",
        youtubeId: "QPQbUZmdnNw",
      },
      {
        src: ytThumb("6uTJiI764uQ"),
        label: "Premium YouTube Edit",
        description: "Cinematic visuals · Pacing · Retention",
        youtubeId: "6uTJiI764uQ",
      },
    ],
  },
  {
    id: "shortform",
    title: "Short-Form Content",
    subtitle: "Scroll-stopping reels, shorts, and TikToks designed to go viral.",
    items: [
      {
        src: ytThumb("qBuiEhmraWE"),
        label: "YouTube Short",
        description: "Vertical edit · Hook-driven · Captioned",
        youtubeId: "qBuiEhmraWE",
        vertical: true,
      },
      {
        src: ytThumb("aesgQhPJQDs"),
        label: "YouTube Short",
        description: "Punchy pacing · Trend-aware · Retention",
        youtubeId: "aesgQhPJQDs",
        vertical: true,
      },
      {
        src: ytThumb("RdUH_S89CJE"),
        label: "YouTube Short",
        description: "Scroll-stopping · Beat-synced · Sharp cuts",
        youtubeId: "RdUH_S89CJE",
        vertical: true,
      },
    ],
  },
  {
    id: "ads",
    title: "Ads & Commercials",
    subtitle: "High-converting video ads crafted for Facebook, YouTube & Instagram.",
    items: [
      {
        src: ytThumb("COMmyHYDNhw"),
        label: "Vertical Ad",
        description: "Hook-driven · Conversion-focused · Captioned",
        youtubeId: "COMmyHYDNhw",
        vertical: true,
      },
      {
        src: ytThumb("_Gtl-SQSd30"),
        label: "Short-Form Ad",
        description: "Scroll-stopping · Brand-aligned · Punchy pacing",
        youtubeId: "_Gtl-SQSd30",
        vertical: true,
      },
      {
        src: ytThumb("COMmyHYDNhw"),
        label: "Promo Short",
        description: "Engaging visuals · Clear CTA · Mobile-first",
        youtubeId: "COMmyHYDNhw",
        vertical: true,
      },
    ],
  },
  {
    id: "vsl",
    title: "VSL (Video Sales Letters)",
    subtitle: "Sales videos that convert cold traffic into paying customers.",
    items: [
      { src: w4, label: "Coaching VSL", description: "Persuasive scripting · Testimonial integration" },
      { src: w6, label: "Product Launch VSL", description: "Urgency-driven · Proof stacking · CTA loops" },
      { src: w3, label: "Webinar Replay Edit", description: "Tightened pacing · Slide enhancement" },
    ],
  },
  {
    id: "podcast",
    title: "Podcast Edits",
    subtitle: "Professional podcast editing with clips, highlights, and repurposed content.",
    items: [
      {
        src: ytThumb("QzO19_h95R8"),
        label: "Podcast Edit",
        description: "Audio cleanup · Intro/outro · Chapters",
        youtubeId: "QzO19_h95R8",
      },
      {
        src: ytThumb("QzO19_h95R8"),
        label: "Highlight Clip",
        description: "Best moments · Captioned · Social-ready",
        youtubeId: "QzO19_h95R8",
      },
      {
        src: ytThumb("oaYmf5Wdjp8"),
        label: "Podcast Feature",
        description: "Dynamic cuts · Branded visuals · Engagement",
        youtubeId: "oaYmf5Wdjp8",
      },
    ],
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState<{ id: string; vertical?: boolean } | null>(null);
  const active = categories[activeTab];

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playing]);

  return (
    <section id="work" className="py-28">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary flex items-center justify-center gap-2">
            <span>✦</span> Selected Work
          </p>
          <h2 className="h-section mt-4">Edits That Actually Perform</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            From long-form YouTube videos to high-converting ads — here's a glimpse of what I deliver.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 reveal">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
              style={{
                background:
                  i === activeTab
                    ? "hsl(var(--primary))"
                    : "hsl(var(--surface) / 0.6)",
                color:
                  i === activeTab
                    ? "hsl(var(--primary-foreground))"
                    : "hsl(var(--muted-foreground))",
                border: `1px solid ${
                  i === activeTab
                    ? "hsl(var(--primary) / 0.8)"
                    : "hsl(var(--border) / 0.5)"
                }`,
                boxShadow:
                  i === activeTab
                    ? "0 8px 24px hsl(var(--primary) / 0.25)"
                    : "none",
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div key={active.id} className="animate-fade-in">
          {/* Category subtitle */}
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            {active.subtitle}
          </p>

          {/* Work grid */}
          <div className={`grid grid-cols-1 gap-5 ${active.id === "longform" ? "md:grid-cols-2 md:gap-6" : "md:grid-cols-3"}`}>
            {active.items.map((item, i) => (
              <figure
                key={`${active.id}-${i}`}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ aspectRatio: item.vertical ? "9 / 16" : "16 / 10" }}
                onClick={() => item.youtubeId && setPlaying({ id: item.youtubeId, vertical: item.vertical })}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="size-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: "hsl(var(--primary) / 0.95)",
                      boxShadow: "0 8px 32px hsl(var(--primary) / 0.4)",
                    }}
                  >
                    <Play className="size-6 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-base font-semibold text-foreground block">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {item.description}
                  </span>
                </figcaption>

                {/* Top-right category tag */}
                <div
                  className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold"
                  style={{
                    background: "hsl(var(--primary) / 0.15)",
                    color: "hsl(var(--primary))",
                    border: "1px solid hsl(var(--primary) / 0.25)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {active.title}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {playing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          style={{ background: "hsl(var(--background) / 0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setPlaying(null)}
        >
          <button
            onClick={() => setPlaying(null)}
            className="absolute top-6 right-6 size-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              background: "hsl(var(--surface) / 0.8)",
              border: "1px solid hsl(var(--border))",
            }}
            aria-label="Close"
          >
            <X className="size-5 text-foreground" />
          </button>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: playing.vertical ? "9 / 16" : "16 / 9",
              height: playing.vertical ? "min(85vh, 90svh)" : "auto",
              width: playing.vertical ? "auto" : "100%",
              maxWidth: playing.vertical ? "95vw" : "64rem",
              boxShadow: "0 24px 64px hsl(var(--primary) / 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${playing.id}?autoplay=1&mute=1&rel=0&playsinline=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
