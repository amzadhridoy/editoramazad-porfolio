import { useEffect, useRef } from "react";
import portrait from "@/assets/amzad-portrait.jpg";
import premiere from "@/assets/orbit/premiere.png";
import aftereffects from "@/assets/orbit/aftereffects.png";
import photoshop from "@/assets/orbit/photoshop.png";
import chatgpt from "@/assets/orbit/chatgpt.png";
import claude from "@/assets/orbit/claude.png";
import gemini from "@/assets/orbit/gemini.png";

type Tool = { name: string; src: string; glow: string };

const ring1: Tool[] = [
  { name: "Premiere Pro",  src: premiere,     glow: "#9B8CFF" },
  { name: "After Effects", src: aftereffects, glow: "#B49BFF" },
  { name: "Photoshop",     src: photoshop,    glow: "#31A8FF" },
];
const ring2: Tool[] = [
  { name: "ChatGPT", src: chatgpt, glow: "#10A37F" },
  { name: "Gemini",  src: gemini,  glow: "#7AB6FF" },
  { name: "Claude",  src: claude,  glow: "#FF8A4C" },
];

function OrbitRing({
  items,
  diameter,
  speed,
  reverse = false,
  tilt = 18,
}: {
  items: Tool[];
  diameter: number; // % of container
  speed: number;
  reverse?: boolean;
  tilt?: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        width: `${diameter}%`,
        height: `${diameter}%`,
        transform: `translate(-50%, -50%) rotateX(${tilt}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Ring stroke */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid hsl(0 0% 100% / 0.10)",
          boxShadow:
            "inset 0 0 60px hsl(227 91% 64% / 0.10), 0 0 40px hsl(265 90% 65% / 0.08)",
        }}
      />
      {/* Rotating layer */}
      <div
        className="absolute inset-0"
        style={{
          animation: `orbit-spin ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          transformStyle: "preserve-3d",
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
              {/* Counter-tilt + counter-rotate so icons stay upright */}
              <div
                style={{
                  transform: `rotate(${-angle}deg) rotateX(${-tilt}deg)`,
                  animation: `orbit-float 6s ease-in-out infinite`,
                  animationDelay: `${j * 0.6}s`,
                }}
              >
                <div
                  className="size-12 md:size-14 rounded-2xl flex items-center justify-center glass-strong p-2 transition-transform hover:scale-110 pointer-events-auto"
                  style={{
                    boxShadow: `0 8px 30px ${tool.glow}66, 0 0 24px ${tool.glow}44, inset 0 1px 0 hsl(0 0% 100% / 0.20)`,
                  }}
                  title={tool.name}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="size-full object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OrbitHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      const stage = stageRef.current;
      if (!el || !stage) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `perspective(1400px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Stable particle positions
  const particles = Array.from({ length: 36 }).map((_, i) => ({
    top: `${(i * 53) % 100}%`,
    left: `${(i * 79) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 7) * 0.4,
    dur: 4 + (i % 5),
  }));

  return (
    <section
      id="universe"
      ref={wrapRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(258 70% 22% / 0.55), transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(227 91% 30% / 0.45), transparent 55%), linear-gradient(180deg, hsl(232 50% 7%), hsl(226 40% 5%))",
      }}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: 0.5,
              boxShadow: "0 0 6px hsl(227 91% 70% / 0.8)",
              animation: `particle-twinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-tight relative">
        <div className="text-center mb-12 reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">My Creative Universe</p>
          <h2 className="h-section mt-4">
            One craft. <span className="text-muted-foreground font-medium">A galaxy of</span> tools.
          </h2>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto transition-transform duration-300 ease-out"
          style={{
            width: "min(720px, 94vw)",
            aspectRatio: "1 / 1",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Soft aura */}
          <div className="absolute inset-[18%] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute inset-[10%] rounded-full"
               style={{ background: "radial-gradient(circle, hsl(265 90% 65% / 0.20), transparent 65%)" }} />

          {/* Orbit rings */}
          <OrbitRing items={ring1} diameter={68} speed={34} tilt={20} />
          <OrbitRing items={ring2} diameter={94} speed={52} reverse tilt={20} />

          {/* Center portrait */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/40 blur-2xl animate-pulse" />
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(227 91% 64%), hsl(265 90% 65%), hsl(195 95% 60%), hsl(227 91% 64%))",
                  filter: "blur(6px)",
                  animation: "orbit-spin 12s linear infinite",
                  opacity: 0.7,
                }}
              />
              <div className="relative size-40 md:size-52 rounded-full overflow-hidden glass-strong p-1.5 shadow-glow">
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
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit-float {
          0%, 100% { translate: 0 0; }
          50%      { translate: 0 -6px; }
        }
        @keyframes particle-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.9;  transform: scale(1.6); }
        }
      `}</style>
    </section>
  );
}
