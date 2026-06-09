"use client";

import Link from "next/link";
import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import ServiceModal from "@/components/ServiceModal";
import services, { type Service } from "@/lib/services";

export default function Services() {
  const process = [
    "Define the product goals and technical requirements.",
    "Map the system architecture and major hardware blocks.",
    "Select components and design the schematic.",
    "Layout the PCB and prepare fabrication outputs.",
    "Bring up the prototype with test firmware.",
    "Test, debug, revise, and prepare for the next build.",
  ];

  const [servicesList] = useState<Service[]>(services.slice(0, 6));
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="services" />

      <section className="px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
            Hardware engineering support from concept through prototype validation.
          </h2>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
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
                className="group rounded-3xl border border-white/10 bg-neutral-950 p-8 cursor-pointer transition-all duration-200 hover:bg-[#3dbe42] hover:border-[#3dbe42] focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 flex flex-col justify-center items-center text-center min-h-[100px]"
              >

                <span className="text-2xl font-medium transition-colors duration-200 group-hover:text-black">
                  {service.title}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}

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

          <Link href="/contact" className="w-fit rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#3dbe42]">
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
