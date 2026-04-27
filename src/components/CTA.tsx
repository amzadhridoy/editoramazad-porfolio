import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-28">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[28px] glass-strong px-8 py-20 md:py-28 text-center shine">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
          <div className="relative reveal">
            <h2 className="h-section">Ready to Grow With Video?</h2>
            <p className="mt-5 max-w-lg mx-auto">
              Let's build content that performs and drives results — from your next reel
              to your highest-converting sales video.
            </p>
            <div className="mt-9">
              <a href="mailto:hello@amzadhridoy.com" className="btn-primary text-base">
                Book A Free Strategy Call <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
