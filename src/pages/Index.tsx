import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Amzad Hridoy — Premium Video Editor for Creators & Brands";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Premium video editing for creators, coaches & brands. 1000+ videos delivered. Book a free strategy call with Amzad Hridoy."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
