"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "@/components/SiteNav";

type Project = {
  title: string;
  category: string;
  description: string;
  credit: string;
  specs: string[];
  details: string[];
  image: string;
  imagePosition?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "TLP300M",
      category: "AV Hardware",
      description:
        "Designed a compact 3.5-inch Power-over-Ethernet (PoE), wall mounted touch panel for room control applications including AV systems, HVAC, lighting, and shades. The product expanded the company's TouchLink portfolio by introducing its first touch panel in this form factor.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      specs: [
        "Power-over Ethernet (PoE)",
        "Embedded Linux",
        "ARM Cortex-A9",
        "Mixed-Signal PCB",
        "Hardware Validation",
        "Manufacturing Support",
      ],
      details: [
        "Designed around a compact 3.5-inch touchscreen form factor.",
        "Supported PoE-enabled wall-mounted room control applications.",
        "Integrated into AV, lighting, shades, HVAC, and security workflows.",
      ],
      image:
        "https://media.extron.com/public/landing/content/tlppro300m/img/tlppro300m_environment.jpg",
    },
    {
      title: "Voice-Enabled Bluetooth Remote Control",
      category: "Wireless Hardware",
      description:
        "Compact handheld classroom control remote designed for voice-enabled presentation management, wireless navigation, and quick access to instructional tools across connected classroom devices.",
      credit:
        "Developed while employed as Senior Electrical Engineer at Merlyn Mind (2020-2026).",
      specs: [
        "Wireless USB receiver",
        "Push-to-talk voice control",
        "Air mouse navigation",
      ],
      details: [
        "Supported wireless control through a USB receiver.",
        "Included push-to-talk voice interaction for classroom workflows.",
        "Provided air mouse navigation for connected presentation devices.",
      ],
      image: "/images/merlynremote_withlaptop.png",
      imagePosition: "object-[100%_center]",
    },
    {
      title: "SSI 100 System Status Indicator",
      category: "Commercial AV Hardware",
      description:
        "Architectural room status indicator concept inspired by the Extron SSI 100, designed for occupancy visibility, scheduling status, safety indication, and integrated AV room workflows.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      specs: [
        "Multi-color backlit display",
        "PoE-powered operation",
        "Wall & ceiling mount options",
        "Calendar integration",
        "Occupancy sensor support",
        "Custom engraved lens",
      ],
      details: [
        "Displayed multi-color room status indication.",
        "Supported PoE-powered wall and ceiling mount use cases.",
        "Designed around scheduling, occupancy, and integrated AV room workflows.",
      ],
      image: "/images/ssi100.png",
      imagePosition: "object-[70%_center]",
    },
  ];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="projects" />

      <section className="px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Selected Work
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Hardware projects designed with precision and production in mind.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 lg:grid-cols-2"
            >
              <div
                className={`h-80 overflow-hidden lg:h-auto ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${
                    project.imagePosition || "object-center"
                  }`}
                />
              </div>

              <div className="relative flex min-h-[28rem] flex-col justify-center p-8 pb-16 md:p-12 md:pb-20">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {project.category}
                </p>

                <h3 className="mt-5 text-4xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {project.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-white/10 px-4 py-2 text-center text-sm text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-10 w-fit cursor-pointer rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
                >
                  View Project
                </button>

                <p className="absolute bottom-6 right-8 max-w-[calc(100%-4rem)] truncate text-right text-xs text-neutral-500 md:bottom-8 md:right-12 md:max-w-[calc(100%-6rem)]">
                  {project.credit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Have a project in mind?
            </p>

            <h3 className="mt-6 max-w-2xl text-4xl font-semibold">
              Let&apos;s discuss the hardware, constraints, and path to production.
            </h3>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[80vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-neutral-950 p-8 text-white">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300 transition duration-200 hover:text-emerald-400"
          onClick={onClose}
        >
          X
        </button>

        <img
          src={project.image}
          alt={project.title}
          className={`mb-4 h-48 w-full rounded-md object-cover ${
            project.imagePosition || "object-center"
          }`}
        />

        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

        <p className="mt-4 text-neutral-400">{project.description}</p>

        <ul className="mt-6 list-disc space-y-3 pl-5 text-neutral-400">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
