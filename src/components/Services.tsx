import { Mic, Film, Youtube, Smartphone, Megaphone } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const items = [
  {
    icon: Mic,
    title: "Podcast Edits",
    desc: "Long-form podcast cuts plus punchy short clips engineered to grow your audience.",
    tag: "Audio · Video",
  },
  {
    icon: Film,
    title: "VSL Edits",
    desc: "High-converting sales videos with surgical pacing, B-roll & proof overlays.",
    tag: "Conversion",
  },
  {
    icon: Youtube,
    title: "YouTube Long-Form",
    desc: "Retention-driven long-form edits built around story arcs and watch-time.",
    tag: "Long-Form",
  },
  {
    icon: Smartphone,
    title: "Reels & Shorts",
    desc: "Scroll-stopping vertical edits — captions, motion, hooks that convert.",
    tag: "Short-Form",
  },
  {
    icon: Megaphone,
    title: "Ad Edits",
    desc: "Performance creative for Meta, TikTok & YouTube — built to lower CPA.",
    tag: "Paid Media",
  },
];

function Card({ item, i }: { item: typeof items[number]; i: number }) {
  const ref = useTilt(6);
  return (
    <div
      ref={ref}
      className="group relative glass p-7 reveal overflow-hidden"
      data-delay={i * 70}
      style={{
        background:
          "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), hsl(227 91% 64% / 0.10), transparent 40%), linear-gradient(135deg, hsl(0 0% 100% / 0.06), hsl(0 0% 100% / 0.02))",
      }}
    >
      <div className="tilt-inner">
        <div className="size-12 rounded-2xl glass-chip flex items-center justify-center text-primary">
          <item.icon className="size-5" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 px-2 py-0.5 rounded-full glass-chip">
            {item.tag}
          </span>
        </div>
        <p className="mt-2 text-sm">{item.desc}</p>
      </div>
      <div className="absolute -bottom-16 -right-16 size-44 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="container-tight relative">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Services</p>
          <h2 className="h-section mt-4">What I Do Best</h2>
          <p className="mt-4">
            Five focused offers — engineered around what drives views, watch-time,
            and revenue for serious creators and brands.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
