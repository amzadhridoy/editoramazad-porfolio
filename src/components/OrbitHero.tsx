import { useRef } from "react";
import portrait from "@/assets/amzad-final.png";
import premiere from "@/assets/orbit/premiere.png";
import aftereffects from "@/assets/orbit/aftereffects.png";
import photoshop from "@/assets/orbit/photoshop.png";
import capcut from "@/assets/orbit/capcut.png";
import chatgpt from "@/assets/orbit/chatgpt-new.png";
import claude from "@/assets/orbit/claude.png";
import gemini from "@/assets/orbit/gemini.png";

type Tool = {
  name: string;
  src: string;
  glow: string;
  ring: number;        // which circular ring (index)
  startAngle: number;  // starting angle in degrees
  duration: number;    // seconds per full revolution
  reverse?: boolean;
};

// 3 perfectly circular rings (radii in % of stage size)
const rings = [
  { radius: 22, color: "#7AB6FF", opacity: 0.45 }, // inner
  { radius: 34, color: "#9B8CFF", opacity: 0.45 }, // middle
  { radius: 46, color: "#B49BFF", opacity: 0.4 },  // outer
];

const tools: Tool[] = [
  // Inner ring — 3 creative apps
  { name: "Adobe Premiere Pro",  src: premiere,     glow: "#9B8CFF", ring: 0, startAngle: 0,   duration: 24 },
  { name: "Adobe After Effects", src: aftereffects, glow: "#B49BFF", ring: 0, startAngle: 120, duration: 24 },
  { name: "Adobe Photoshop",     src: photoshop,    glow: "#31A8FF", ring: 0, startAngle: 240, duration: 24 },

  // Middle ring — CapCut alone, slow & opposite direction
  { name: "CapCut",              src: capcut,       glow: "#00E0FF", ring: 1, startAngle: 60,  duration: 32, reverse: true },

  // Outer ring — 3 AI tools
  { name: "ChatGPT",             src: chatgpt,      glow: "#10A37F", ring: 2, startAngle: 30,  duration: 44 },
  { name: "Gemini",              src: gemini,       glow: "#7AB6FF", ring: 2, startAngle: 150, duration: 44 },
  { name: "Claude",              src: claude,       glow: "#D97757", ring: 2, startAngle: 270, duration: 44 },
];

export default function OrbitHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const particles = Array.from({ length: 40 }).map((_, i) => ({
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
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(258 70% 18% / 0.55), transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(227 91% 25% / 0.45), transparent 55%), linear-gradient(180deg, hsl(232 50% 6%), hsl(226 40% 4%))",
      }}
    >
      {/* Background particles */}
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
              opacity: 0.45,
              boxShadow: "0 0 6px hsl(227 91% 70% / 0.8)",
              animation: `particle-twinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-tight relative">
        {/* Top chip */}
        <div className="flex justify-center mb-10 reveal">
          <div className="glass-chip rounded-full px-5 py-2 text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/90 flex items-center gap-2">
            <span className="text-primary">✦</span>
            Premium Video Editor
          </div>
        </div>

        {/* Square stage so circles stay perfectly round */}
        <div
          className="relative mx-auto"
          style={{
            width: "min(720px, 92vw)",
            aspectRatio: "1 / 1",
          }}
        >
          {/* Soft aura behind everything */}
          <div className="absolute inset-[30%] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

          {/* Circular ring strokes + traveling glow dots */}
          {rings.map((r, i) => {
            const size = `${r.radius * 2}%`;
            return (
              <div
                key={`ring-${i}`}
                className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
                style={{
                  width: size,
                  height: size,
                  transform: "translate(-50%, -50%)",
                  border: `1px solid ${r.color}`,
                  opacity: r.opacity,
                  boxShadow: `0 0 30px ${r.color}33, inset 0 0 30px ${r.color}22`,
                }}
              >
                {/* Glow dots that travel along the ring */}
                {[0, 120, 240].map((deg, k) => (
                  <div
                    key={k}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      animation: `orbit-spin ${18 + i * 8}s linear ${k * -((18 + i * 8) / 3)}s infinite`,
                      transformOrigin: "0 0",
                    }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 6,
                        height: 6,
                        left: `calc(50% - 3px)`,
                        top: `calc(-50% - 3px)`,
                        background: r.color,
                        boxShadow: `0 0 12px ${r.color}, 0 0 24px ${r.color}`,
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          })}

          {/* Orbiting tool icons (each on its assigned circular ring) */}
          {tools.map((t) => {
            const r = rings[t.ring];
            return (
              <div
                key={t.name}
                className="orbit-tool absolute left-1/2 top-1/2 pointer-events-none"
                style={{
                  width: 0,
                  height: 0,
                  // start angle + spin
                  transform: `rotate(${t.startAngle}deg)`,
                  animation: `orbit-spin ${t.duration}s linear infinite ${t.reverse ? "reverse" : ""}`,
                }}
              >
                {/* Position icon centered exactly ON the ring path */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: `-${r.radius}%`,
                  }}
                >
                  {/* Counter-rotate to keep upright, then spin the icon itself */}
                  <div
                    className="orbit-spin-layer"
                    style={{
                      animation: `orbit-spin ${t.duration}s linear infinite ${t.reverse ? "" : "reverse"}`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="orbit-spin-layer"
                      style={{
                        animation: `orbit-spin ${8 + (t.ring * 2)}s linear infinite`,
                      }}
                    >
                      <div
                        className="orbit-icon-card size-12 md:size-14 rounded-2xl flex items-center justify-center glass-strong p-2 pointer-events-auto"
                        style={{
                          boxShadow: `0 10px 32px ${t.glow}55, 0 0 22px ${t.glow}66, inset 0 1px 0 hsl(0 0% 100% / 0.20)`,
                          border: `1px solid ${t.glow}55`,
                          ["--glow" as any]: t.glow,
                        }}
                        title={t.name}
                      >
                        <img
                          src={t.src}
                          alt={t.name}
                          width={48}
                          height={48}
                          loading="lazy"
                          className="size-full object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center portrait */}
          <div
            className="absolute z-10"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/40 blur-2xl" />
              <div
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(227 91% 64%), hsl(265 90% 65%), hsl(195 95% 60%), hsl(227 91% 64%))",
                  filter: "blur(4px)",
                  animation: "orbit-spin 14s linear infinite",
                  opacity: 0.85,
                }}
              />
              <div className="relative size-36 md:size-44 rounded-full overflow-hidden p-[3px] bg-gradient-to-br from-primary to-fuchsia-500 shadow-glow">
                <img
                  src={portrait}
                  alt="Amzad Hridoy at the center of his creative universe"
                  className="size-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mt-10 md:mt-14 reveal">
          <h2
            className="font-bold tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            Get More Views
            <br />
            <span className="text-muted-foreground/80">Using</span>{" "}
            <span className="text-foreground">Quality Video Editing</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Done-for-you podcast, VSL, YouTube, Reels, Shorts &amp; ad edits that
            grow your audience and convert viewers into clients.
          </p>

          {/* Industry-standard software list */}
          <div className="mt-10 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Industry-standard software I work with
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
              {tools.map((t) => (
                <li
                  key={`chip-${t.name}`}
                  className="glass-chip rounded-full px-4 py-2 flex items-center gap-2.5 text-sm text-foreground/90"
                  style={{
                    border: `1px solid ${t.glow}55`,
                    boxShadow: `0 4px 18px ${t.glow}33`,
                  }}
                >
                  <img src={t.src} alt={t.name} width={20} height={20} className="size-5 object-contain" loading="lazy" />
                  <span>{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes particle-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.9;  transform: scale(1.6); }
        }
        .orbit-tool,
        .orbit-tool .orbit-spin-layer {
          animation-play-state: running;
          transition: animation-duration 600ms ease;
        }
        .orbit-icon-card {
          transition: transform 350ms cubic-bezier(.2,.8,.2,1), box-shadow 350ms ease;
        }
        /* Slow the orbit + self-spin while hovering the icon */
        .orbit-tool:hover,
        .orbit-tool:hover .orbit-spin-layer {
          animation-duration: 120s;
        }
        .orbit-tool:hover .orbit-icon-card {
          transform: scale(1.18);
          box-shadow: 0 14px 44px var(--glow), 0 0 32px var(--glow), inset 0 1px 0 hsl(0 0% 100% / 0.25);
        }
      `}</style>
    </section>
  );
}
