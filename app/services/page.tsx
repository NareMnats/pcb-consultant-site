"use client";

import Link from "next/link";
import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import ServiceModal from "@/components/ServiceModal";

export default function Services() {
  const initialServices = [
   
    {
      title: "Requirements Definition",
      //description:
        //"Define clear product requirements early to accelerate development. Focus on use cases and end-user needs.",
      details: [
        "This stage defines the foundation of the entire project. Clear, well-structured requirements significantly reduce iteration cycles and downstream redesign effort.",
        "I work with you to define:",
        [
         "Product use cases and operating environment",
         "End-user and system-level expectations",
         "Electrical performance specifications",
         "Design constraints, including mechanical, power, cost, and manufacturing considerations",
         "Set performance targets including measurable acceptance criteria"
        ],
        "Strong requirements at this stage help ensure a smooth transition into architecture and implementation."
      ],
    },
    {
      title: "System Architecture",
      //description:
        //"Translate product requirements into a clear hardware architecture, including system block diagrams, interface planning, and MCU/SoC selection.",
      //details:
        //"A well-defined system architecture provides a clear blueprint for the hardware design, ensuring that all components work together to meet the product requirements. This service includes analyzing the product goals, identifying key hardware blocks, defining interfaces and communication protocols, and establishing design constraints such as power, size, cost, and performance targets. By starting with a solid architecture, we can reduce risks, improve design efficiency, and create a more robust and scalable hardware solution."
    },
      {
      title: "Component Selection",
      //description:
        //"Select appropriate microcontrollers, sensors, power components, connectors, communication devices, and supporting circuits.",
    },
    {
      title: "Schematic Design",
      //description:
        //"Develop detailed electrical schematics that define the circuit implementation, component connections, and design intent.",
    },
    {
      title: "PCB Layout",
      //description:
       // "Translate the schematic into a manufacturable PCB layout with attention to routing, placement, power, grounding, and reliability.",
    },
    {
      title: "Fabrication",
      //description:
       // "Placeholder service for coordinating fabrication outputs, board files, manufacturing packages, and vendor handoff.",
    },
    {
      title: "Test Firmware",
      //description:
        //"Develop basic firmware used to bring up hardware, verify board functions, exercise peripherals, and support testing.",
    },
    {
      title: "Prototype Testing",
      //description:
        //"Evaluate early hardware prototypes to confirm functionality, identify issues, and prepare the design for iteration.",
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

  const [servicesList] = useState<any[]>(initialServices);
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="services" />

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
                className="h-[11rem] rounded-3xl border border-white/10 bg-neutral-950 p-8 cursor-pointer transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-950/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 flex flex-col justify-center items-center text-center overflow-hidden"
              >

                <div className="space-y-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>

                  <p className="text-neutral-400">
                    {service.description}
                  </p>
                </div>
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
