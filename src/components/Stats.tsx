const stats = [
  { value: "1000+", label: "Videos Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" data-delay={i * 100}>
              <div className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
