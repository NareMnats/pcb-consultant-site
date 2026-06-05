"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  const heroBgRef = useRef<HTMLImageElement>(null);
  const services = [
    "System Architecture",
    "Component Selection",
    "Schematic & PCB Design",
    "Firmware Development",
    "Bring-up & Debug",
    "Prototype Validation"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          ref={heroBgRef}
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="PCB"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: "translateY(0px)" }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <SiteNav active="home" variant="overlay" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex h-full items-center px-8 pt-24 md:pt-0">
          <div className="max-w-5xl">

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Embedded hardware development for early to mid-stage product builds
            </h2>

            <p className="mt-8 max-w-2xl text-lg text-neutral-300">
              I help startups and engineering teams take hardware systems from architecture to working EVT prototypes, 
              including component selection, schematic design, PCB layout, and board bring-up.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Start a Project
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/30 px-6 py-3 text-sm transition hover:bg-white/10"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Capabilities
          </p>

          <h3 className="mb-16 max-w-3xl text-4xl font-semibold">
              What I Can Do For Your Team
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-white/30"
              >
                <h4 className="text-2xl font-medium">{service}</h4>

                <p className="mt-4 text-neutral-400">            
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 MovSys Engineering & Consulting</p>

          <div className="flex gap-6">
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
