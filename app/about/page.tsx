import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="about" />

      <section className="px-8 py-20 md:py-28">
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
