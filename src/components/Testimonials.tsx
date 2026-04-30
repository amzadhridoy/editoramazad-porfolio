import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Daniel Thompson",
    role: "YouTube Creator · 1.2M subs",
    avatar: "https://i.pravatar.cc/120?img=68",
    quote:
      "Amzad completely transformed my channel. My retention went from 35% to over 60% — subscribers started pouring in. He understands what keeps people watching.",
    rating: 5,
    metric: "2× view duration",
  },
  {
    name: "Sarah Mitchell",
    role: "YouTube Creator · 540K subs",
    avatar: "https://i.pravatar.cc/120?img=47",
    quote:
      "My VSL conversion jumped from 2.4% to 5.1% after Amzad re-edited it. The man knows how to sell through video. Worth every dollar — and then some.",
    rating: 5,
    metric: "5.1% conversion",
  },
  {
    name: "Ryan Okafor",
    role: "YouTube Creator · 2.3M subs",
    avatar: "https://i.pravatar.cc/120?img=59",
    quote:
      "We outsource all our client video work to Amzad now. Fast turnarounds, cinematic quality, zero hand-holding needed. He's our secret weapon.",
    rating: 5,
    metric: "Zero revisions needed",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((prev) => (prev + dir + items.length) % items.length);
    },
    []
  );

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section id="reviews" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.08), transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(265 90% 65% / 0.06), transparent 50%)",
        }}
      />

      <div className="container-tight relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary flex items-center justify-center gap-2">
            <span className="text-primary">✦</span>
            Client Love
          </p>
          <h2 className="h-section mt-4">
            Trusted by ambitious{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(265_90%_65%)]">
              creators
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Real results from real clients who trusted me with their brand.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto reveal">
          <div
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--surface) / 0.8), hsl(var(--surface) / 0.4))",
              border: "1px solid hsl(var(--border) / 0.6)",
              boxShadow:
                "0 24px 64px hsl(var(--primary) / 0.08), 0 0 0 1px hsl(var(--border) / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
            }}
          >
            {/* Decorative quote */}
            <Quote
              className="absolute top-6 right-8 text-primary/10"
              size={80}
              strokeWidth={1}
            />

            {/* Metric badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-wide uppercase"
              style={{
                background: "hsl(var(--primary) / 0.12)",
                color: "hsl(var(--primary))",
                border: "1px solid hsl(var(--primary) / 0.2)",
              }}
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {items[active].metric}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: items[active].rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              key={active}
              className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium animate-fade-in"
            >
              "{items[active].quote}"
            </blockquote>

            {/* Author */}
            <figcaption className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-[hsl(265_90%_65%)] opacity-60 blur-sm" />
                  <img
                    src={items[active].avatar}
                    alt={items[active].name}
                    loading="lazy"
                    className="relative size-14 rounded-full object-cover ring-2 ring-background"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {items[active].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {items[active].role}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="size-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "hsl(var(--surface))",
                    border: "1px solid hsl(var(--border))",
                  }}
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} className="text-foreground/70" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="size-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "hsl(var(--surface))",
                    border: "1px solid hsl(var(--border))",
                  }}
                  aria-label="Next review"
                >
                  <ChevronRight size={18} className="text-foreground/70" />
                </button>
              </div>
            </figcaption>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className="transition-all duration-300"
                aria-label={`Go to review ${i + 1}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 32 : 8,
                    height: 8,
                    background:
                      i === active
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground) / 0.3)",
                    boxShadow:
                      i === active
                        ? "0 0 12px hsl(var(--primary) / 0.5)"
                        : "none",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mini cards row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto reveal">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className="text-left rounded-2xl p-5 transition-all duration-300"
              style={{
                background:
                  i === active
                    ? "hsl(var(--primary) / 0.08)"
                    : "hsl(var(--surface) / 0.5)",
                border: `1px solid ${
                  i === active
                    ? "hsl(var(--primary) / 0.3)"
                    : "hsl(var(--border) / 0.4)"
                }`,
                boxShadow:
                  i === active
                    ? "0 8px 32px hsl(var(--primary) / 0.1)"
                    : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="size-9 rounded-full object-cover"
                  style={{
                    opacity: i === active ? 1 : 0.6,
                  }}
                />
                <div>
                  <div className="text-sm font-semibold text-foreground/90">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
