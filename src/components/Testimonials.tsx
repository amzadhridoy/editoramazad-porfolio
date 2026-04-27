const items = [
  {
    name: "Jordan Miles",
    role: "YouTube Creator · 850K subs",
    avatar: "https://i.pravatar.cc/120?img=11",
    quote:
      "Amzad's edits doubled my average view duration in under a month. He just gets pacing and storytelling — best editor I've worked with.",
  },
  {
    name: "Priya Shah",
    role: "Business Coach",
    avatar: "https://i.pravatar.cc/120?img=49",
    quote:
      "My VSL conversion jumped from 2.4% to 5.1% after Amzad re-edited it. Worth every dollar — and then some.",
  },
  {
    name: "Marcus Lee",
    role: "Agency Owner",
    avatar: "https://i.pravatar.cc/120?img=14",
    quote:
      "Reliable, fast, and incredibly creative. He's basically an in-house creative director without the overhead.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Client Love</p>
          <h2 className="h-section mt-4">Trusted by ambitious creators.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="surface p-7 glow-on-hover reveal flex flex-col"
              data-delay={i * 100}
            >
              <blockquote className="text-foreground/90 text-[15px] leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt="" loading="lazy" className="size-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
