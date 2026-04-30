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

// 3 perfectly circular rings (radii in % of stage size) — matches reference image
const rings = [
  { radius: 22, color: "#8B7BFF", opacity: 0.55 }, // inner
  { radius: 34, color: "#9B8CFF", opacity: 0.5 },  // middle
  { radius: 46, color: "#B49BFF", opacity: 0.45 }, // outer
];

// Angles measured from 12 o'clock, clockwise — matching the reference image exactly
const tools: Tool[] = [
  // Outer ring (largest)
  { name: "Adobe Premiere Pro",  src: premiere,     glow: "#9B8CFF", ring: 2, startAngle: 20,   duration: 60 },
  { name: "Adobe Photoshop",     src: photoshop,    glow: "#31A8FF", ring: 2, startAngle: 110,  duration: 60 },
  { name: "ChatGPT",             src: chatgpt,      glow: "#10A37F", ring: 2, startAngle: 200,  duration: 60 },
  { name: "Claude",              src: claude,       glow: "#D97757", ring: 2, startAngle: 250,  duration: 60 },

  // Middle ring
  { name: "Adobe After Effects", src: aftereffects, glow: "#B49BFF", ring: 1, startAngle: -50,  duration: 48 },
  { name: "Gemini",              src: gemini,       glow: "#7AB6FF", ring: 1, startAngle: 200,  duration: 48 },

  // Inner ring
  { name: "CapCut",              src: capcut,       glow: "#FFFFFF", ring: 0, startAngle: -90,  duration: 36, reverse: true },
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
            Industry-standard software I use
          </div>
        </div>


        <div className="text-center mt-10 md:mt-14 reveal">

          {/* Industry-standard software list */}
          <div className="mt-10 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Industry-standard software I use
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
