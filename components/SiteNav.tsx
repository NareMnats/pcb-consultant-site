"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  key: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/about", label: "About Me", key: "about" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function SiteNav({
  active,
  variant = "sticky",
}: {
  active: string;
  variant?: "sticky" | "overlay";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass =
    variant === "overlay"
      ? "absolute top-0 left-0 z-50 w-full px-4 py-6 md:px-8"
      : "sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 px-4 py-6 backdrop-blur md:px-8";

  return (
    <>
      <nav className={navClass}>
        <div className="flex items-center justify-between gap-3">
          <h1 className="max-w-[70%] text-xs font-semibold tracking-[0.08em] lg:max-w-none lg:text-xl lg:tracking-[0.2em]">
            MOVSYS ENGINEERING & CONSULTING
          </h1>

          <div className="hidden gap-8 text-sm text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  item.key === active ? "text-white" : "transition hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
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
          <div className="relative z-50 mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 p-6 text-sm text-neutral-200 backdrop-blur lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={item.key === active ? "text-white" : ""}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
