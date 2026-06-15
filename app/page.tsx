"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteNav from "@/components/SiteNav";
import ServiceModal from "@/components/ServiceModal";
import ServiceWorkflow from "@/components/ServiceWorkflow";
import services, { type Service } from "@/lib/services";

export default function Home() {
  const heroBgRef = useRef<HTMLImageElement>(null);
  const [servicesList] = useState<Service[]>(services);
  const [selected, setSelected] = useState<Service | null>(null);

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

        <SiteNav active="home" variant="sticky" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-start px-8 pt-25 md:h-full md:items-center md:pt-0">
          <div className="max-w-5xl">

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Embedded hardware development for early to mid-stage product builds
            </h2>

            <p className="mt-8 max-w-4xl text-balance text-lg text-neutral-300">
              From system definition through bring-up and validation, helping startups and engineering teams transform concepts into EVT-ready, manufacturable, and testable hardware systems.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#3dbe42]"
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
            <section id="services" className="px-8 py-28">
              <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Services
                </p>

                <h3 className="mb-16 max-w-3xl text-4xl font-semibold">
                  What I Can Do For Your Team
                </h3>

                <ServiceWorkflow
                  services={servicesList}
                  onSelect={setSelected}
                />
              </div>
            </section>

            {selected && (
              <ServiceModal service={selected} onClose={() => setSelected(null)} />
            )}

            {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 MovSys Engineering & Consulting</p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/mikaelmovsisyan/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
