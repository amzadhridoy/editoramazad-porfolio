import { useTilt } from "@/hooks/useTilt";
import { Award, Clock, Globe2, Sparkles } from "lucide-react";
import portrait from "@/assets/amzad-portrait.png";

const highlights = [
  { icon: Award, label: "1000+ Edits Delivered" },
  { icon: Clock, label: "3+ Years Experience" },
  { icon: Globe2, label: "Clients in 20+ Countries" },
  { icon: Sparkles, label: "Premiere Pro · After Effects · DaVinci" },
];

export default function About() {
  const tiltRef = useTilt(5);

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Portrait card */}
          <div className="lg:col-span-5 reveal">
            <div ref={tiltRef} className="relative tilt">
              <div className="absolute -inset-6 bg-primary/25 blur-3xl rounded-full opacity-70" />
              <div className="relative glass-strong p-5 rounded-3xl shine">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={portrait}
                    alt="Amzad Hridoy — professional video editor"
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Amzad Hridoy</div>
                      <div className="text-xs text-muted-foreground">Video Editor · Bangladesh</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full glass-chip text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                      <span className="inline-block size-1.5 rounded-full bg-emerald-400 mr-1.5 align-middle animate-pulse" />
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.25em] text-primary reveal">About</p>
            <h2 className="h-section mt-4 reveal" data-delay="60">
              I edit videos that <span className="text-muted-foreground font-medium">grow</span> brands.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed reveal" data-delay="120">
              <p>
                I'm <span className="text-foreground font-semibold">Amzad Hridoy</span>, a
                professional video editor with 3+ years of experience and over
                1000 videos delivered to creators, coaches, and brands worldwide.
              </p>
              <p>
                I specialize in podcast edits, VSLs, YouTube long-form, Reels,
                Shorts, and ad creatives — the kind of edits that hold attention,
                build authority, and turn viewers into paying clients.
              </p>
              <p>
                My approach is simple: storytelling first, pixels second. Every
                cut, sound, and motion graphic is intentional — built around
                retention, conversion, and your brand's voice.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 reveal" data-delay="180">
              {highlights.map((h) => (
                <div key={h.label} className="glass-chip rounded-2xl px-4 py-3 flex items-center gap-3">
                  <span className="size-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <h.icon className="size-4" />
                  </span>
                  <span className="text-sm text-foreground/90">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 reveal" data-delay="240">
              <a href="#cta" className="btn-primary text-sm shine">
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
