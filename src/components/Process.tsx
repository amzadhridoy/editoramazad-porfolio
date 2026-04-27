const steps = [
  { n: "01", title: "Understand", desc: "Deep dive into your brand, voice, and audience goals." },
  { n: "02", title: "Plan", desc: "Build a clear creative direction and edit roadmap." },
  { n: "03", title: "Edit", desc: "Craft cinematic, retention-driven edits with precision." },
  { n: "04", title: "Deliver", desc: "Fast turnarounds, unlimited revisions, ready to publish." },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Process</p>
          <h2 className="h-section mt-4">Simple. Strategic. Premium.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" data-delay={i * 100}>
              <div className="text-sm font-mono text-primary tracking-widest">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
