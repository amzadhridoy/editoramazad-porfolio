import { useEffect, useRef } from "react";
import portrait from "@/assets/amzad-new.png";
import premiere from "@/assets/orbit/premiere.png";
import aftereffects from "@/assets/orbit/aftereffects.png";
import photoshop from "@/assets/orbit/photoshop.png";
import chatgpt from "@/assets/orbit/chatgpt-new.png";
import claude from "@/assets/orbit/claude.png";
import gemini from "@/assets/orbit/gemini.png";

type Tool = {
  name: string;
  src: string;
  glow: string;
  // position on the stage (percent)
  x: number;
  y: number;
};

// Hand-placed to match the reference: two icons high (Pr/Ae), two mid (Ps/ChatGPT), two low (Gemini/Claude)
const tools: Tool[] = [
  { name: "Adobe Premiere Pro",  src: premiere,     glow: "#9B8CFF", x: 26, y: 30 },
  { name: "Adobe After Effects", src: aftereffects, glow: "#B49BFF", x: 74, y: 30 },
  { name: "Adobe Photoshop",     src: photoshop,    glow: "#31A8FF", x: 14, y: 56 },
  { name: "ChatGPT",             src: chatgpt,      glow: "#10A37F", x: 86, y: 56 },
  { name: "Gemini",              src: gemini,       glow: "#7AB6FF", x: 32, y: 78 },
  { name: "Claude",              src: claude,       glow: "#D97757", x: 68, y: 78 },
];

// SVG ellipse rings (rx, ry) in viewBox units (1000 x 1000)
const rings = [
  { rx: 470, ry: 150, color: "#7AB6FF", opacity: 0.55 },
  { rx: 430, ry: 200, color: "#9B8CFF", opacity: 0.55 },
  { rx: 380, ry: 250, color: "#B49BFF", opacity: 0.5 },
  { rx: 320, ry: 300, color: "#31A8FF", opacity: 0.45 },
];

export default function OrbitHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // subtle particles
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
            Premium Video Editor · 1000+ Edits Delivered
          </div>
        </div>

        {/* Stage */}
        <div
          className="relative mx-auto"
          style={{
            width: "min(1000px, 96vw)",
            aspectRatio: "1000 / 700",
          }}
        >
          {/* SVG orbit rings */}
          <svg
            className="absolute inset-0 w-full h-full text-primary"
            viewBox="0 0 1000 700"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {rings.map((r, i) => (
                <radialGradient key={i} id={`ring-grad-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={r.color} stopOpacity="0" />
                  <stop offset="50%" stopColor={r.color} stopOpacity={r.opacity} />
                  <stop offset="100%" stopColor={r.color} stopOpacity="0.2" />
                </radialGradient>
              ))}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rings */}
            <g style={{ transformOrigin: "500px 350px" }}>
              {rings.map((r, i) => (
                <ellipse
                  key={i}
                  cx="500"
                  cy="350"
                  rx={r.rx}
                  ry={r.ry}
                  stroke={`url(#ring-grad-${i})`}
                  strokeWidth="1.2"
                  fill="none"
                />
              ))}
            </g>

            {/* Glowing dots traveling along rings */}
            {rings.map((r, i) => {
              const dur = 14 + i * 6;
              const reverse = i % 2 === 1;
              return (
                <g key={`dots-${i}`} filter="url(#glow)">
                  {[0, 1, 2].map((k) => (
                    <circle key={k} cx={500 + r.rx} cy="350" r="3" fill={r.color}>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`${(360 / 3) * k} 500 350`}
                        to={`${(360 / 3) * k + (reverse ? -360 : 360)} 500 350`}
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                      />
                      <animateTransform
                        attributeName="transform"
                        type="scale"
                        additive="sum"
                        values="1 0.4;1 0.4"
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </g>
              );
            })}
          </svg>

          {/* Center portrait */}
          <div
            className="absolute"
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

          {/* Tool icons positioned on rings */}
          {tools.map((t, i) => (
            <div
              key={t.name}
              className="absolute flex flex-col items-center gap-2"
              style={{
                left: `${t.x}%`,
                top: `${t.y}%`,
                transform: "translate(-50%, -50%)",
                animation: `orbit-float ${5 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <div
                className="size-14 md:size-16 rounded-2xl flex items-center justify-center glass-strong p-2.5 transition-transform hover:scale-110"
                style={{
                  boxShadow: `0 10px 32px ${t.glow}55, 0 0 22px ${t.glow}66, inset 0 1px 0 hsl(0 0% 100% / 0.20)`,
                  border: `1px solid ${t.glow}55`,
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
              <div className="text-center text-xs md:text-sm font-medium text-foreground/90 leading-tight whitespace-pre">
                {t.name.replace(" ", "\n")}
              </div>
            </div>
          ))}
        </div>

        {/* Headline below */}
        <div className="text-center mt-10 md:mt-14 reveal">
          <h2 className="font-bold tracking-tight text-foreground" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Get More Views
            <br />
            <span className="text-muted-foreground/80">Using</span>{" "}
            <span className="text-foreground">Quality Video Editing</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Done-for-you podcast, VSL, YouTube, Reels, Shorts &amp; ad edits that
            grow your audience and convert viewers into clients.
          </p>
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
