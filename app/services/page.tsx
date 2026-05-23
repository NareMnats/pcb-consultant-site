"use client";

import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "System Architecture",
      phase: "Planning",
      description:
        "Define the overall hardware system, major subsystems, interfaces, constraints, and technical direction before detailed design begins.",
    },
    {
      title: "Requirements Definition",
      phase: "Planning",
      description:
        "Translate product goals into clear electrical, mechanical, firmware, power, environmental, and manufacturing requirements.",
    },
    {
      title: "Block Diagram",
      phase: "Planning",
      description:
        "Create a high-level technical map of the system showing functional blocks, signal flow, power domains, and key interfaces.",
    },
    {
      title: "Component Selection",
      phase: "Design",
      description:
        "Select appropriate microcontrollers, sensors, power components, connectors, communication devices, and supporting circuitry.",
    },
    {
      title: "Schematic Design",
      phase: "Design",
      description:
        "Develop detailed electrical schematics that define the circuit implementation, component connections, and design intent.",
    },
    {
      title: "PCB Layout",
      phase: "Design",
      description:
        "Translate the schematic into a manufacturable PCB layout with attention to routing, placement, power, grounding, and reliability.",
    },
    {
      title: "Fabrication",
      phase: "Build",
      description:
        "Placeholder service for coordinating fabrication outputs, board files, manufacturing packages, and vendor handoff.",
    },
    {
      title: "Test Firmware",
      phase: "Validation",
      description:
        "Develop basic firmware used to bring up hardware, verify board functions, exercise peripherals, and support testing.",
    },
    {
      title: "Prototype Testing",
      phase: "Validation",
      description:
        "Evaluate early hardware prototypes to confirm functionality, identify issues, and prepare the design for iteration.",
    },
    {
      title: "Debugging & Troubleshooting",
      phase: "Validation",
      description:
        "Investigate electrical, firmware, layout, assembly, and system-level issues using structured debugging methods.",
    },
  ];

  const process = [
    "Define the product goals and technical requirements.",
    "Map the system architecture and major hardware blocks.",
    "Select components and design the schematic.",
    "Layout the PCB and prepare fabrication outputs.",
    "Bring up the prototype with test firmware.",
    "Test, debug, revise, and prepare for the next build.",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 px-4 py-6 backdrop-blur md:px-8">
        <div className="flex items-center justify-between gap-3">
          <h1 className="max-w-[70%] text-xs font-semibold tracking-[0.08em] md:max-w-none md:text-xl md:tracking-[0.2em]">
            <span className="md:hidden">MOVSYS</span>
            <span className="hidden md:inline">
              MOVSYS ENGINEERING & CONSULTING
            </span>
          </h1>

          <div className="hidden gap-8 text-sm md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="/services" className="text-white">
              Services
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
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
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <section className="px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Hardware engineering support from concept through prototype
              validation.
            </h2>

          </div>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-white/30"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {service.phase}
                </p>

                <h3 className="mt-5 text-2xl font-medium">{service.title}</h3>

                <p className="mt-4 text-neutral-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Process
            </p>

            <h3 className="mt-6 text-4xl font-semibold">
              A structured path from idea to tested hardware.
            </h3>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex gap-6 rounded-2xl border border-white/10 bg-neutral-950 p-6"
              >
                <span className="text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg text-neutral-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Start Here
            </p>

            <h3 className="mt-6 max-w-2xl text-4xl font-semibold">
              Bring a product idea, prototype issue, or hardware challenge.
            </h3>
          </div>

          <Link href="/contact" className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
            Start a Project
          </Link>
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