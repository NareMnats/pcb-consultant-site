"use client";

import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const offerings = [
    "Schematic Capture",
    "PCB Layout & Routing",
    "High-speed Design & SI",
    "Embedded Firmware",
    "DFM / DFT Reviews",
    "Prototype & Validation",
    "Component Selection",
    "Manufacturing Support",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 px-4 py-6 backdrop-blur md:px-8">
        <div className="flex items-center justify-between gap-3">
          <h1 className="max-w-[60%] text-xs font-semibold tracking-[0.08em] md:max-w-none md:text-xl md:tracking-[0.2em]">
            MOVSYS ENGINEERING & CONSULTING
          </h1>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <a href="/projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="/services" className="text-white">
              Services
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
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
            <a href="/services">Services</a>
            <a href="#">Contact</a>
          </div>
        )}
      </nav>

      <header className="relative h-[60vh] overflow-hidden">
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
          alt="Electronics background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Practical engineering services for electronic products.
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-neutral-300">
              Schematic capture, layout, firmware, and manufacturing guidance to
              move hardware from prototype to production.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/projects"
                className="rounded-full border border-white/30 px-6 py-3 text-sm transition hover:bg-white/10"
              >
                View Work
              </Link>

              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Offerings
          </p>

          <h3 className="mb-12 max-w-3xl text-4xl font-semibold">
            Services tailored to bring reliable hardware products to market.
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div key={o} className="rounded-3xl border border-white/10 bg-neutral-950 p-8">
                <h4 className="text-2xl font-medium">{o}</h4>

                <p className="mt-4 text-neutral-400">
                  Clear deliverables, review checkpoints, and production-ready
                  outputs to reduce risk and time-to-market.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">Process</h4>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-neutral-900 p-6">
              <h5 className="font-semibold">Plan</h5>
              <p className="mt-3 text-neutral-400">Define scope, constraints, and schedule.</p>
            </div>

            <div className="rounded-2xl bg-neutral-900 p-6">
              <h5 className="font-semibold">Execute</h5>
              <p className="mt-3 text-neutral-400">Design, iterate, and validate with prototypes.</p>
            </div>

            <div className="rounded-2xl bg-neutral-900 p-6">
              <h5 className="font-semibold">Deliver</h5>
              <p className="mt-3 text-neutral-400">Production transfer, documentation, and vendor support.</p>
            </div>
          </div>
        </div>
      </section>

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
