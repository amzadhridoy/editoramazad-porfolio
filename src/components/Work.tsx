import { Play } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const works = [
  { src: w3, label: "Reel · Creator", tag: "Short-Form", span: "row-span-2" },
  { src: w2, label: "YouTube Edit", tag: "Long-Form", span: "" },
  { src: w4, label: "VSL · Coach", tag: "Sales Video", span: "" },
  { src: w5, label: "Podcast Clip", tag: "Clipping", span: "row-span-2" },
  { src: w1, label: "Motion Reel", tag: "Motion", span: "" },
  { src: w6, label: "Color Grade", tag: "Cinematic", span: "" },
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Selected Work</p>
            <h2 className="h-section mt-4">Edits That Actually Perform</h2>
          </div>
          <p className="max-w-md">
            A glimpse of recent edits — from viral shorts to high-converting sales videos
            for clients across the globe.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-5">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-2xl group reveal ${w.span}`}
              data-delay={i * 60}
            >
              <img
                src={w.src}
                alt={w.label}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="size-14 rounded-full bg-primary/95 flex items-center justify-center shadow-glow">
                  <Play className="size-5 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{w.label}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{w.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
