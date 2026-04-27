import galaxyBg from "@/assets/galaxy-bg.jpg";
import portrait from "@/assets/amzad-cutout.png";
import premiere from "@/assets/orbit/premiere.png";
import aftereffects from "@/assets/orbit/aftereffects.png";
import photoshop from "@/assets/orbit/photoshop.png";
import capcut from "@/assets/orbit/capcut.png";
import chatgpt from "@/assets/orbit/chatgpt.png";
import claude from "@/assets/orbit/claude.png";
import gemini from "@/assets/orbit/gemini.png";

type Tool = { name: string; src: string; glow: string };

const tools: Tool[] = [
  { name: "Premiere Pro",  src: premiere,     glow: "#9999FF" },
  { name: "After Effects", src: aftereffects, glow: "#D291FF" },
  { name: "Photoshop",     src: photoshop,    glow: "#31A8FF" },
  { name: "CapCut",        src: capcut,       glow: "#FFFFFF" },
  { name: "ChatGPT",       src: chatgpt,      glow: "#10A37F" },
  { name: "Claude",        src: claude,       glow: "#FF8A4C" },
  { name: "Gemini",        src: gemini,       glow: "#7AB6FF" },
];

export default function Orbit() {
  const ringSizes = [320, 460, 600];
  const distribution = [
    [tools[0], tools[3]],
    [tools[1], tools[4], tools[6]],
    [tools[2], tools[5]],
  ];
  const speeds = [28, 42, 58];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="container-tight relative">
        <div className="text-center mb-14 reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">About / My Universe</p>
          <h2 className="h-section mt-4">
            Tools that <span className="text-muted-foreground font-medium">orbit</span> my craft
          </h2>
          <p className="mt-5 max-w-xl mx-auto">
            3+ years, 1000+ videos delivered. I blend cinematic editing with AI-powered workflows
            to ship premium content faster — for creators, coaches & brands worldwide.
          </p>
        </div>

        <div className="relative mx-auto" style={{ width: "min(680px, 92vw)", aspectRatio: "1 / 1" }}>
          {/* Galaxy background */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img src={galaxyBg} alt="" className="absolute inset-0 size-full object-cover scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background" />
          </div>

          {/* Aura */}
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

          {/* Rotating rings */}
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
                      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-50%)` }}
                    >
                      <div
                        className="orbit-icon"
                        style={{ animation: `orbit-spin ${speeds[ringIdx]}s linear infinite ${reverse ? "" : "reverse"}` }}
                        title={tool.name}
                      >
                        <div
                          className="size-14 md:size-16 rounded-2xl flex items-center justify-center glass-strong p-2.5 transition-transform hover:scale-110"
                          style={{
                            boxShadow: `0 10px 40px ${tool.glow}55, inset 0 1px 0 hsl(0 0% 100% / 0.18)`,
                          }}
                        >
                          <img
                            src={tool.src}
                            alt={tool.name}
                            width={48}
                            height={48}
                            loading="lazy"
                            className="size-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                          />
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
