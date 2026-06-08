import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";

const principles = [
  "Clear requirements before committing to a layout.",
  "Hands-on bring-up that turns unknowns into measured facts.",
  "Design choices made with assembly, test, and production in mind.",
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="about" />

      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
            <Image
              src="/images/mikael-portrait.svg"
              alt="Portrait of Mikael"
              width={1200}
              height={1400}
              className="aspect-[6/7] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              About Me
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
              Practical hardware engineering shaped by real product constraints.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-neutral-400">
              I&apos;m Mikael, an electrical and embedded systems engineer helping
              teams move from rough product ideas to boards that can be built,
              tested, debugged, and improved with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Approach
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight">
              Engineering support that stays close to the bench and the product
              goal.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-400">
            <p>
              My work sits at the intersection of schematic design, PCB layout,
              embedded bring-up, and manufacturing handoff. I focus on the
              details that matter after a design leaves the screen: power
              integrity, debug access, component availability, test coverage,
              and documentation that keeps the next build moving.
            </p>

            <p>
              Whether the project is a first prototype, a revision that needs
              sharper reliability, or a production package that needs a second
              set of eyes, I bring a steady process and a bias toward practical,
              verifiable decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Working Style
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight">
              Methodical when the details matter, flexible when the product is
              still taking shape.
            </h2>

            <div className="mt-8 grid gap-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex gap-6 rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <span className="text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-neutral-300">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-80 overflow-hidden lg:min-h-full">
            <Image
              src="/images/mikael-working.svg"
              alt="Mikael working at an electronics bench"
              width={1600}
              height={1050}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
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
              Bring the product goal, constraints, and open questions.
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#3dbe42] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#3dbe42]"
          >
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
