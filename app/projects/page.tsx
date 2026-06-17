"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "@/components/SiteNav";

type Project = {
  title: string;
  category: string;
  description: string;
  credit: string;
  introHeading?: string;
  intro: string;
  outcome?: string;
  details: string[];
  image: string;
  imagePosition?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "TLP300M TouchLink Panel",
      category: "AV Hardware",
      description:
        "Compact PoE-powered touchpanel for room control applications including AV systems, HVAC, lighting, and scheduling. This 3.5-inch design introduced the first touch panel of its size to the company's TouchLink portfolio.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      introHeading: "System Overview",
      intro:
        "Embedded Linux platform based on an ARM Cortex-A9 application processor, integrating DDR memory, flash storage, Ethernet, USB, and sensor interfaces, supported by a multi-rail power architecture with sequencing requirements for reliable boot and peripheral initialization.",
      outcome:
        "Successfully completed electrical hardware design ahead of schedule and launched the product in Spring 2020.",
      details: [
        "Owned hardware development from concept through production release, including PCB design, system bring-up, electrical and functional validation, and manufacturing transition.",
        "Architected the embedded platform, including processor selection, memory subsystem design (DDR and flash), and peripheral interfaces integration such as Ethernet, USB, SPI and I2C.",
        "Defined high-speed PCB design constraints, including stackup, impedance control, termination strategies, and layout considerations to meet signal integrity and EMI requirements.",
        "Led board bring-up and hardware debug, resolving electrical and production issues through structured root-cause analysis.",
        "Introduced a streamlined board programming approach that reduced programming and test time during manufacturing, improving production efficiency.",
      ],
      image:
        "https://media.extron.com/public/landing/content/tlppro300m/img/tlppro300m_environment.jpg",
    },
    {
      title: "Voice Enabled Bluetooth Remote Control",
      category: "Wireless Hardware",
      description:
        "Wireless hardware designed to allow teachers to interact with the Merlyn AI classroom digital assistant with push-to-talk commands and wireless navigation over BLE, enabling remote control of desktop applications and access to a variety of instructional tools.",
      credit:
        "Developed while employed as Senior Electrical Engineer at Merlyn Mind (2022-2026).",
      intro:
        "Developed second-generation hardware prototypes with improved Bluetooth performance, wireless range, and voice quality, while unifying the design with a related product variant to reduce product SKUs and simplify manufacturing and support.",
      details: [
        "Defined system hardware architecture and led selection of the Bluetooth LE SoC and critical sensing components through structured technical and vendor-support trade-off studies, using weighted decision matrices to evaluate solution maturity and assess design risk.",
        "Designed embedded prototypes in Altium constrained by existing mechanical enclosure, reusing existing plastic tooling to reduce time-to-market while incorporating DFM considerations such as trace widths, via-in-pad usage, and testability for production and bring-up.",
        "Developed board bring-up and validation strategy, including test plans for hardware verification and system-level functionality across power, sensing, BLE, and audio subsystems.",
        "Implemented test firmware and configured peripherals on a Zephyr RTOS based platform, enabling hardware bring-up and root-cause analysis of IMU, BLE, USB and audio issues.",
      ],
      image: "/images/merlynremote_withlaptop.png",
      imagePosition: "object-[100%_center]",
    },
    {
      title: "SSI 100 System Status Indicator",
      category: "Lighting Hardware",
      description:
        "Architectural room status indicator concept inspired by the Extron SSI 100, designed for occupancy visibility, scheduling status, safety indication, and integrated AV room workflows.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      intro:
        "Developed room-status indicator hardware concepts for integrated AV spaces requiring visible scheduling, occupancy, and safety state feedback.",
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
            Projects
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Selected Embedded Hardware Work
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

              <div className="relative flex min-h-[28rem] flex-col justify-center p-8 pb-24 md:p-12 md:pb-20">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {project.category}
                </p>

                <h3 className="mt-5 text-4xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg text-neutral-400">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-10 w-fit cursor-pointer rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
                >
                  View Work
                </button>

                <p className="absolute bottom-6 right-8 max-w-[calc(100%-4rem)] text-right text-xs leading-snug text-neutral-500 md:bottom-8 md:right-12 md:max-w-[calc(100%-6rem)] md:truncate">
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
              Let&apos;s discuss your product
              <br />
              concept and needs
            </h3>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#3dbe42]"
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
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[80vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-neutral-950 p-8 text-neutral-400">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300 transition duration-200 hover:text-[#3dbe42]"
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

        <p className="text-sm uppercase tracking-[0.3em]">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>

        {project.introHeading && (
          <p className="mt-6 font-semibold">{project.introHeading}</p>
        )}

        <p className={project.introHeading ? "mt-3" : "mt-4"}>
          {project.intro}
        </p>

        <p className="mt-6 font-semibold">Key Contributions</p>

        <ul className="mt-3 list-disc space-y-3 pl-5">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        {project.outcome && (
          <>
            <p className="mt-6 font-semibold">Outcome</p>

            <p className="mt-3">{project.outcome}</p>
          </>
        )}
      </div>
    </div>
  );
}
