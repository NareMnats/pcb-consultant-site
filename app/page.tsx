"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteNav from "@/components/SiteNav";
import ServiceModal from "@/components/ServiceModal";
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
        <div className="relative z-10 flex items-start px-8 pt-10 md:h-full md:items-center md:pt-0">
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {servicesList.map((service) => (
                    <article
                      key={service.title}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelected(service)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelected(service);
                          e.preventDefault();
                        }
                      }}
                      className="group rounded-3xl border border-white/10 bg-neutral-900 p-8 shadow-xl shadow-black/30 cursor-pointer transition-all duration-200 hover:bg-[#3dbe42] hover:border-[#3dbe42] focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 flex flex-col justify-center items-center text-center min-h-[100px]"
                    >
                      <span className="text-2xl font-medium transition-colors duration-200 group-hover:text-black">{service.title}</span>

                      <p className="text-neutral-400 transition-colors duration-200 group-hover:text-black"></p>
                    </article>
                  ))}
                </div>
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
