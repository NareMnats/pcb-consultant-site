"use client";

import { useState } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const services = [
    "PCB Design",
    "Embedded Systems",
    "Prototype Development",
    "Firmware Engineering",
    "Manufacturing Support",
    "Signal Integrity",
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

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 z-50 w-full px-4 py-6 md:px-8">
  <div className="flex items-center justify-between gap-3">
    <h1 className="max-w-[70%] text-xs font-semibold tracking-[0.08em] md:max-w-none md:text-xl md:tracking-[0.2em]">
      MOVSYS ENGINEERING & CONSULTING
    </h1>

    <div className="hidden gap-8 text-sm md:flex">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center md:hidden"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col gap-1.5">
        <span className="h-0.5 w-5 bg-white"></span>
        <span className="h-0.5 w-5 bg-white"></span>
        <span className="h-0.5 w-5 bg-white"></span>
      </div>
    </button>
  </div>

  {menuOpen && (
    <div className="relative z-50 mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 p-6 text-sm backdrop-blur md:hidden">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  )}
</nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex h-full items-center px-8 pt-24 md:pt-0">
          <div className="max-w-5xl">

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              PCB design and embedded hardware engineered for real-world
              production.
            </h2>

            <p className="mt-8 max-w-2xl text-lg text-neutral-300">
              Schematic capture, PCB layout, embedded firmware, and manufacturing
              support for startups and engineering teams.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Start a Project
              </button>

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
            End-to-end hardware development for modern electronic products.
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-white/30"
              >
                <h4 className="text-2xl font-medium">{service}</h4>

                <p className="mt-4 text-neutral-400">
                  Modern engineering workflows focused on manufacturability,
                  reliability, and scalability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1563770660941-10a63607692e?q=80&w=1974&auto=format&fit=crop"
              alt="Electronics"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Featured Project
            </p>

            <h3 className="mt-6 text-5xl font-semibold leading-tight">
              High-speed embedded control platform for industrial monitoring.
            </h3>

            <p className="mt-8 text-lg text-neutral-400">
              Multi-layer PCB architecture, embedded firmware development, and
              production-ready validation workflows for harsh environments.
            </p>

            <button className="mt-10 w-fit rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black">
              View Case Study
            </button>
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