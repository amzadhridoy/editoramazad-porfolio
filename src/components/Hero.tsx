import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import portrait from "@/assets/amzad-portrait.png";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=68",
  "https://i.pravatar.cc/80?img=15",
];

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      const p = portraitRef.current;
      if (!el || !p) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      p.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container-tight relative">
        <div className="flex flex-col items-center text-center">
          <div ref={portraitRef} className="mb-10 reveal animate-float">
            <div className="relative group">
              {/* Outer aura */}
              <div className="absolute -inset-8 rounded-full bg-primary/30 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />
              {/* Glass ring frame */}
              <div className="relative rounded-full p-[6px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-glow">
                <div className="rounded-full p-[2px] bg-gradient-to-br from-white/30 via-primary/40 to-transparent">
                  <img
                    src={portrait}
                    alt="Amzad Hridoy, professional video editor"
                    width={160}
                    height={160}
                    className="block size-36 md:size-40 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating glass chip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] uppercase tracking-[0.2em] text-foreground/90 whitespace-nowrap shadow-soft">
                <span className="inline-block size-1.5 rounded-full bg-emerald-400 mr-2 align-middle animate-pulse" />
                Available for Projects
              </div>
            </div>
          </div>

          <h1 className="h-display reveal text-balance" data-delay="80">
            Get More Views
            <br />
            <span className="text-muted-foreground font-medium">Using </span>
            Quality Video Editing
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-lg reveal" data-delay="160">
            I help content creators, coaches, and brands with done-for-you video
            editing that grows their audience on autopilot.
          </p>

          <div className="mt-9 reveal" data-delay="220">
            <a href="#cta" className="btn-primary text-base">
              Book A Free Call <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 reveal" data-delay="300">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="size-9 rounded-full ring-2 ring-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm">
              Trusted by <span className="text-foreground font-semibold">100+ clients worldwide</span>
              <span className="mx-2 text-border">·</span>
              Results Speak for Themselves
            </p>
          </div>
        </div>

        {/* Video showcase */}
        <div className="mt-20 reveal" data-delay="120">
          <div className="relative mx-auto max-w-4xl group">
            <div className="absolute -inset-1 rounded-[28px] bg-primary/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative surface aspect-video overflow-hidden flex items-center justify-center shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <button
                aria-label="Play showreel"
                className="relative size-20 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center transition hover:scale-110 shadow-glow"
              >
                <Play className="size-8 ml-1" fill="currentColor" />
              </button>
              <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Showreel · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
