import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const links = [
  { href: "#reviews", label: "Reviews" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Platforms" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 py-3" : "py-5"
      }`}
    >
      <nav className="container-tight flex items-center justify-between">
        <a href="#top" className="text-base font-bold tracking-tight">
          Amzad <span className="text-primary">Hridoy</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn-ghost">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#cta" className="btn-primary !py-2.5 !px-5 text-sm">
          Book A Call <ArrowRight className="size-4" />
        </a>
      </nav>
    </header>
  );
}
