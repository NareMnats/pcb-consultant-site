"use client";
import { useState } from "react";
export default function Projects() {
    const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      title: "Wall-Mounted Touchpanel Control System",
      category: "Commercial AV Hardware",
      description:
        "Compact wall-mounted touchpanel hardware: Extron TLP Pro 300M, designed for room control, AV systems, lighting, shades, HVAC, and security interfaces. Contributed to project while working at Extron Electronics.",
      specs: [
        "3.5-inch touchscreen",
        "320 × 480 display",
        "PoE-enabled design",
        "Wall-mount enclosure",
      ],
      image:
        "https://media.extron.com/public/landing/content/tlppro300m/img/tlppro300m_environment.jpg",
    },
    {
      title: "Voice-Enabled Bluetooth Remote Control",
      category: "Wireless Hardware",
      description:
        "Compact handheld classroom control remote designed for voice-enabled presentation management, wireless navigation, and quick access to instructional tools across connected classroom devices. Contributed to project while working at Merlyn Mind.",
      specs: [
    "Wireless USB receiver",
    "Push-to-talk voice control",
    "Air mouse navigation",
  ],
      image: "/images/merlynremote_withlaptop.png",
      imagePosition: "object-[100%_center]",
    },
    {
  title: "SSI 100 System Status Indicator",
  category: "Commercial AV Hardware",
  description:
    "Architectural room status indicator concept inspired by the Extron SSI 100, designed for occupancy visibility, scheduling status, safety indication, and integrated AV room workflows. Contributed to project while working at Extron Electronics.",
  specs: [
    "Multi-color backlit display",
    "PoE-powered operation",
    "Wall & ceiling mount options",
    "Calendar integration",
    "Occupancy sensor support",
    "Custom engraved lens",
  ],
  image: "/images/ssi100.png",
  imagePosition: "object-[70%_center]",
},
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

      <a href="/projects" className="text-white">
        Projects
      </a>

      <a href="/services" className="transition hover:text-white">
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

      <section className="px-8 py-24 md:py-32">

  {menuOpen && (
    <div
      className="fixed inset-0 z-40 md:hidden"
      onClick={() => setMenuOpen(false)}
    />
  )}
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Selected Work
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Hardware projects designed with precision, clarity, and production
              in mind.
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
                  className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${project.imagePosition || "object-center"}`}
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {project.category}
                </p>

                <h3 className="mt-5 text-4xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <button className="mt-10 w-fit rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black">
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Have a project in mind?
            </p>

            <h3 className="mt-6 max-w-2xl text-4xl font-semibold">
              Let’s discuss the hardware, constraints, and path to production.
            </h3>
          </div>

          <button className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
            Start a Project
          </button>
        </div>
      </section>
    </main>
  );
}