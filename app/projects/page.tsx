"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "@/components/SiteNav";

type Project = {
  title: string;
  category: string;
  description: string;
  modalDescription?: string;
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
      modalDescription:
        "Compact PoE-powered touch panel for room control applications, including AV systems, lighting, environmental controls, and scheduling.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "A multi-board embedded Linux platform integrating an application processor, memory, networking, display, touch interface, and peripheral connectivity. The system incorporated a multi-rail power architecture with controlled power sequencing and required careful hardware partitioning and board-to-board interface design.",
      outcome:
        "Delivered the design ahead of schedule, meeting product requirements for production launch in Spring 2020.",
      details: [
        "Led hardware development from concept through production, including architecture, schematic design, validation, bring-up, and manufacturing support.",
        "Designed the embedded hardware platform and oversaw high-speed PCB implementation with a focus on signal integrity, power, EMI/EMC, and manufacturability.",
        "Resolved hardware and production issues through board bring-up, debugging, and root-cause analysis.",
        "Improved the manufacturing programming process, reducing assembly and test time.",
      ],
      image: "/images/TLP300M.png",
    },
    {
      title: "Voice-Enabled Bluetooth Remote Control",
      category: "Wireless Hardware",
      description:
        "Bluetooth LE remote control designed for classroom interaction with an AI classroom digital assistant, through push-to-talk voice commands and wireless navigation, enabling remote control of desktop applications and access to a variety of instructional tools.",
      modalDescription:
        "Bluetooth LE remote control with voice input and wireless navigation, designed for classroom interaction with an AI-powered educational assistant.",
      credit:
        "Developed while employed as Senior Electrical Engineer at Merlyn for Education (2022-Present).",
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "Wireless system consisting of a battery-powered remote and USB receiver, integrating Bluetooth LE, motion sensing, voice input, and USB connectivity for seamless host interaction.",
      outcome:
        "Delivered successful first-pass prototypes with improved wireless performance and voice quality, advancing the product through engineering validation while simplifying manufacturing through a unified hardware platform.",
      details: [
        "Led hardware architecture, component selection, and prototype design from concept through validation.",
        "Evaluated wireless and motion-sensing technologies to optimize usability and system performance.",
        "Developed prototype hardware and supporting firmware for bring-up, electrical validation, and functional testing.",
        "Performed system-level debugging across hardware, firmware, wireless, USB, and audio subsystems to resolve integration issues.",
      ],
      image: "/images/merlynremote_withlaptop.png",
      imagePosition: "object-[100%_center]",
    },
    {
      title: "SSI 100 System Status Indicator",
      category: "Lighting Hardware",
      description:
        "Light fixtures with customizable laser engraving that dynamically indicate workspace availability, integrating with calendar systems and room occupancy sensors to provide real-time status updates for scheduled and ad hoc meetings.",
      modalDescription:
        "Network-connected status indicator that displays workspace availability using dynamic lighting, integrating with scheduling systems and occupancy sensors for real-time room status.",
      credit:
        "Developed while employed as Hardware Design Engineer at Extron Electronics (2018-2022).",
      descriptionHeading: "Product Overview",
      introHeading: "System Overview",
      intro:
        "Embedded hardware platform supporting network connectivity, flexible power options, and high-density RGB lighting in a unified design for multiple product configurations.",
      outcome:
        "Advanced the product through engineering validation, pre-compliance, and initial design validation testing, establishing a production-ready hardware platform.",
      details: [
        "Led hardware architecture, schematic design, and component selection for multiple product variants.",
        "Designed the embedded platform with emphasis on power, lighting performance, thermal management, and manufacturability.",
        "Guided PCB implementation, signal integrity, and validation to meet performance and compliance requirements.",
        "Optimized the design through electrical, thermal, and system-level testing to improve reliability and reduce mechanical changes.",
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
              Selected Work
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
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
                  {project.category}
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-6 text-base text-neutral-400 sm:text-lg">
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

            <p className="mt-3">
              {project.modalDescription ?? project.description}
            </p>
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
