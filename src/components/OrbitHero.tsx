import premiere from "@/assets/orbit/premiere.png";
import aftereffects from "@/assets/orbit/aftereffects.png";
import photoshop from "@/assets/orbit/photoshop.png";
import capcut from "@/assets/orbit/capcut.png";
import chatgpt from "@/assets/orbit/chatgpt-new.png";
import claude from "@/assets/orbit/claude.png";
import gemini from "@/assets/orbit/gemini.png";

const tools = [
  { name: "Adobe Premiere Pro",  src: premiere,     glow: "#9B8CFF" },
  { name: "Adobe Photoshop",     src: photoshop,    glow: "#31A8FF" },
  { name: "Adobe After Effects", src: aftereffects, glow: "#B49BFF" },
  { name: "CapCut",              src: capcut,       glow: "#FFFFFF" },
  { name: "ChatGPT",             src: chatgpt,      glow: "#10A37F" },
  { name: "Claude",              src: claude,       glow: "#D97757" },
  { name: "Gemini",              src: gemini,       glow: "#7AB6FF" },
];

export default function OrbitHero() {
  return (
    <section
      id="universe"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(258 70% 18% / 0.55), transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(227 91% 25% / 0.45), transparent 55%), linear-gradient(180deg, hsl(232 50% 6%), hsl(226 40% 4%))",
      }}
    >
      <div className="container-tight relative">
        {/* Top chip */}
        <div className="flex justify-center mb-10 reveal">
          <div className="glass-chip rounded-full px-5 py-2 text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/90 flex items-center gap-2">
            <span className="text-primary">✦</span>
            Industry-standard software I use
          </div>
        </div>

        {/* Software list */}
        <div className="text-center reveal">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {tools.map((t) => (
              <li
                key={t.name}
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
    </section>
  );
}
