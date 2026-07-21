"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "@/components/SiteNav";

type Project = {
  title: string;
  category: string;
  description: string;
  credit: string;
  descriptionHeading?: string;
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
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "An intricate five-board embedded Linux system running on an ARM Cortex-A9 processor platform, integrating DDR3 memory, eMMC flash storage, 10/100 Ethernet PHY, and USB 2.0 alongside a parallel RGB LCD display and a touch screen interface. The system features a multi-rail power architecture delivered by a PMIC and other regulators, with precise sequencing to ensure clean, reliable boot-up and peripheral initialization. Segmenting the architecture across five distinct PCBs required careful board-to-board interconnect design.",
      outcome:
        "Successfully completed electrical design ahead of schedule and delivered a compact hardware system meeting mechanical, power and cost constraints for production deployment, launching the product in Spring 2020.",
      details: [
        "Hardware development from concept through production release, spanning circuit design and schematic capture, layout supervision, system bring-up, electrical and functional validation, and hand-off to manufacturing.",
        "Multi-board architecture of the embedded platform, including processor selection, memory subsystem design (DDR/Flash), display, speaker and other peripheral integration such as Ethernet, USB, SPI and I2C.",
        "High-speed PCB design, including stackup definition, impedance control, signal termination, and layout considerations to meet signal integrity and EMI/EMC requirements.",
        "Board bring-up and hardware debug, resolving electrical and production issues through structured root-cause analysis and corner case tests.",
        "New programming method that cuts down on test and flashing time during assembly, streamlining the manufacturing process.",
      ],
      image:
        "https://media.extron.com/public/landing/content/tlppro300m/img/tlppro300m_environment.jpg",
    },
    {
      title: "Voice Enabled Bluetooth Remote Control",
      category: "Wireless Hardware",
      description:
        "Bluetooth LE remote control designed for classroom interaction with an AI classroom digital assistant, through push-to-talk voice commands and wireless navigation, enabling remote control of desktop applications and access to a variety of instructional tools.",
      credit:
        "Developed while employed as Senior Electrical Engineer at Merlyn Mind (2022-2026).",
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "A split-architecture wireless system comprising a battery-powered Remote Control Unit (RCU) and a paired USB dongle. The RCU is built on an ARM Cortex-M33 Bluetooth LE SoC running Zephyr RTOS, integrating an IMU for motion sensing and a microphone for voice-enabled interaction, while the dedicated USB dongle acts as a plug-and-play receiver for seamless host device connectivity.",
      outcome:
        "Delivered first pass hardware prototypes with improved Bluetooth LE performance, wireless range, and voice quality, while unifying the design with a related product variant to reduce product SKUs and simplifying manufacturing and support. Executed full board bring-up, firmware integration and validation of initial prototypes to advance the product through the Engineering Validation & Testing (EVT) phase.",
      details: [
        "System hardware architecture and selection of BLE SoC through structured trade studies and vendor evaluation, using weighted decision matrices to assess risk and solution maturity.",
        "IMU evaluation using Fitt's test and pan-tilt servo fixture to measure drift and evaluate air mouse algorithm solutions prior to design integration.",
        "Prototype hardware design in Altium utilizing manufacturer capabilities as guidelines for a manufacturable design, while constraining to reuse existing plastic enclosure tooling and accelerate time-to-market.",
        "Test firmware on Zephyr RTOS environment, enabling device tree configuration and peripheral bring-up for electrical validation.",
        "System level functional testing and root-cause analysis of issues spanning BLE, USB, IMU, and audio subsystems utilizing protocol analyzers for hardware/firmware debug.",
      ],
      image: "/images/merlynremote_withlaptop.png",
      imagePosition: "object-[100%_center]",
    },
    {
      title: "SSI 100 System Status Indicator",
      category: "Lighting Hardware",
      description:
        "Light fixtures with customizable laser engraving that dynamically indicate workspace availability, integrating with calendar systems and room occupancy sensors to provide real-time status updates for scheduled and ad hoc meetings.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "An embedded Linux system based on an ARM Cortex-A8 microprocessor platform, integrating DDR3 memory, NAND flash, 10/100 Ethernet PHY, PMIC with an ORing circuit allowing flexible powering via PoE or 12VDC. The design featured a high RGB LED count driven by a constant-current sink LED driver, requiring careful thermal design, heat dissipation strategies, and optimized LED spacing to accommodate both wall and ceiling-mounted variants using a single, unified hardware platform.",
      outcome:
        "Successfully drove the product through the Engineering Validation & Testing (EVT) phase, pre-compliance and initial QA testing to Design Validation & Testing (DVT) stage in Spring 2022.",
      details: [
        "Hardware architecture including defining power topology, peripherals and LED arrangement for a more efficient design with schematic design of wall and ceiling mounted variants completed in Allegro Design Entry HDL.",
        "Component selection, including LED binning (to maintain color and intensity uniformity across products) and LED driver proof-of-concept work using evaluation board and PSoC development kit to characterize dimming behavior and color mixing performance, prior to design integration.",
        "High-speed PCB design, including stackup definition, impedance control, signal termination, and layout considerations to meet signal integrity and EMI/EMC requirements.",
        "DDR3 memory layout optimization to avoid modifications to plastic and metal, simulating design in HyperLynx SI to verify signal integrity.",
        "Thermal mitigation strategies through circuit-level and layout-level changes, supported by power dissipation calculations and thermal measurements.",
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
                  className={`h-full w-full object-cover ${
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
                  className="mt-10 w-fit cursor-pointer rounded-full border border-white/20 px-6 py-3 text-sm transition duration-150 hover:border-[#3dbe42] hover:bg-[#3dbe42] hover:text-black active:scale-[0.97] active:opacity-75"
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
            className="w-fit cursor-pointer rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition duration-150 hover:scale-[1.03] hover:brightness-110 active:scale-95 active:brightness-75"
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

        {project.descriptionHeading && (
          <>
            <p className="mt-6 font-semibold">{project.descriptionHeading}</p>

            <p className="mt-3">{project.description}</p>
          </>
        )}

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
