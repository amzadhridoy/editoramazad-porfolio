import galaxyBg from "@/assets/galaxy-bg.jpg";
import portrait from "@/assets/amzad-cutout.png";

type Tool = { name: string; bg: string; label: string; color: string };

const tools: Tool[] = [
  { name: "Premiere Pro", bg: "#2A0E61", label: "Pr", color: "#EA77FF" },
  { name: "After Effects", bg: "#1F0A3D", label: "Ae", color: "#D291FF" },
  { name: "Photoshop",    bg: "#001E36", label: "Ps", color: "#31A8FF" },
  { name: "CapCut",       bg: "#0B0B0F", label: "Cc", color: "#22D3EE" },
  { name: "ChatGPT",      bg: "#0F1715", label: "GPT", color: "#10A37F" },
  { name: "Claude",       bg: "#1A0F08", label: "Cl", color: "#D97757" },
  { name: "Gemini",       bg: "#0B1736", label: "Gm", color: "#7AB6FF" },
];

export default function Orbit() {
  const ringSizes = [320, 460, 600]; // px
  // Distribute icons across rings
  const distribution = [
    [tools[0], tools[3]],
    [tools[1], tools[4], tools[6]],
    [tools[2], tools[5]],
  ];
  const speeds = [28, 42, 58]; // seconds per revolution

  return (
    <section id="orbit" className="relative py-28 overflow-hidden">
      <div className="container-tight relative">
        <div className="text-center mb-14 reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">My Universe</p>
          <h2 className="h-section mt-4">
            Tools that <span className="text-muted-foreground font-medium">orbit</span> my craft
          </h2>
        </div>

        <div className="relative mx-auto" style={{ width: "min(680px, 92vw)", aspectRatio: "1 / 1" }}>
          {/* Galaxy background */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              src={galaxyBg}
              alt=""
              className="absolute inset-0 size-full object-cover scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background" />
          </div>

          {/* Aura glow */}
          <div className="absolute inset-[15%] rounded-full bg-primary/30 blur-3xl" />

          {/* Orbit rings */}
          {ringSizes.map((size, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
              style={{
                width: `${(size / 680) * 100}%`,
                height: `${(size / 680) * 100}%`,
                transform: "translate(-50%, -50%)",
                boxShadow: "inset 0 0 40px hsl(227 91% 64% / 0.08)",
              }}
            />
          ))}

          {/* Rotating orbits with icons */}
          {distribution.map((items, ringIdx) => {
            const size = ringSizes[ringIdx];
            const reverse = ringIdx % 2 === 1;
            return (
              <div
                key={ringIdx}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: `${(size / 680) * 100}%`,
                  height: `${(size / 680) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  animation: `orbit-spin ${speeds[ringIdx]}s linear infinite ${reverse ? "reverse" : ""}`,
                }}
              >
                {items.map((tool, j) => {
                  const angle = (360 / items.length) * j;
                  return (
                    <div
                      key={tool.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-50%)`,
                      }}
                    >
                      <div
                        className="orbit-icon"
                        style={{
                          animation: `orbit-spin ${speeds[ringIdx]}s linear infinite ${reverse ? "" : "reverse"}`,
                        }}
                        title={tool.name}
                      >
                        <div
                          className="size-14 md:size-16 rounded-2xl flex items-center justify-center font-bold text-base md:text-lg shadow-2xl glass-strong"
                          style={{
                            background: `linear-gradient(135deg, ${tool.bg}, ${tool.bg}cc)`,
                            color: tool.color,
                            boxShadow: `0 10px 40px ${tool.color}55, inset 0 1px 0 hsl(0 0% 100% / 0.15)`,
                          }}
                        >
                          {tool.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* Center portrait */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/40 blur-2xl animate-pulse" />
              <div className="relative size-44 md:size-56 rounded-full overflow-hidden glass-strong p-1.5 shadow-glow">
                <img
                  src={portrait}
                  alt="Amzad Hridoy at the center of his creative universe"
                  className="size-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .orbit-icon { will-change: transform; }
      `}</style>
    </section>
  );
}
