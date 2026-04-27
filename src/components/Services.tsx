import { Scissors, Youtube, Film, Mic, Sparkles, Palette } from "lucide-react";

const items = [
  { icon: Scissors, title: "Short-Form Editing", desc: "Scroll-stopping Reels, Shorts & TikToks built to convert." },
  { icon: Youtube, title: "YouTube Editing", desc: "Long-form retention edits that keep viewers watching." },
  { icon: Film, title: "VSL Editing", desc: "High-converting sales videos for coaches & agencies." },
  { icon: Mic, title: "Podcast Clipping", desc: "Punchy clips that turn episodes into growth engines." },
  { icon: Sparkles, title: "Motion & Effects", desc: "Smooth motion graphics that elevate every frame." },
  { icon: Palette, title: "Color Grading", desc: "Cinematic color that gives your brand a premium feel." },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Services</p>
          <h2 className="h-section mt-4">What I Do Best</h2>
          <p className="mt-4">
            A complete editing toolkit — built around what actually drives views,
            engagement, and revenue for modern creators and brands.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="surface p-7 glow-on-hover reveal"
              data-delay={i * 70}
            >
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
