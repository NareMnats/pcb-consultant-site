import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="about" />

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Image
              src="/images/MikHeadshot.png"
              alt="Portrait of Mikael"
              width={1200}
              height={1400}
              className="h-auto w-full"
            />
          </div>

          <div className="max-w-3xl">
            <p className="mb-6 pl-1 text-sm uppercase tracking-[0.3em] text-neutral-500">
              About Me
            </p>

            <h1 className="text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              From concept to working hardware.
            </h1>

            <div className="mt-8 space-y-6 text-base leading-7 text-neutral-400 sm:text-lg sm:leading-normal">
              <p>
                I&apos;m Mikael, a Senior Hardware Design Engineer with over 8
                years of experience in embedded hardware design and system-level
                integration. I hold degrees in Electrical Engineering and
                Biomedical Engineering, with a minor in Chemistry, from
                California State University, Long Beach.
              </p>

              <p>
                My expertise spans multilayer mixed-signal PCBA design for
                ARM-based embedded systems utilizing silicon from NXP, ST,
                Nordic, and Infineon. I&apos;ve worked across embedded Linux,
                RTOS, and bare-metal environments, handling everything from
                high-speed memory and video interfaces to power management,
                wired/wireless protocols, audio subsystems, sensor integration,
                and low-level C firmware for board bring-up.
              </p>

              <p>
                I enjoy turning hardware concepts into working products and have
                experience across the full product development lifecycle, from
                system architecture and component selection through engineering
                validation, design validation, and production release. My goal is
                to help startups and engineering teams accelerate product
                development by delivering reliable, prototype-ready hardware that
                validates ideas and serves as a strong proof of concept before
                committing to production.
              </p>

              <p>
                My work philosophy is <em>measure twice, cut once</em>. I take a
                thoughtful, detail-oriented approach to every project, emphasizing
                sound engineering decisions early in the design process to reduce
                risk and avoid costly redesigns. My focus is on delivering
                robust, well-engineered hardware that works as intended and
                provides a solid foundation for future product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Let&apos;s Build
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold">
              Ready to turn your concept into a real product?
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit shrink-0 cursor-pointer whitespace-nowrap rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition duration-150 hover:scale-[1.03] hover:brightness-110 active:scale-95 active:brightness-75"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 MovSys Engineering & Consulting</p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/mikaelmovsisyan/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
