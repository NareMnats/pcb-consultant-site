"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import movsysIcon from "@/app/movsys_icon.png";

type NavItem = {
  href: string;
  label: string;
  key: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "HOME", key: "home" },
  { href: "/#services", label: "SERVICES", key: "services" },
  { href: "/projects", label: "PROJECTS", key: "projects" },
  { href: "/about", label: "ABOUT ME", key: "about" },
  { href: "/contact", label: "CONTACT", key: "contact" },
];

export default function SiteNav({
  active,
  variant = "sticky",
}: {
  active: string;
  variant?: "sticky" | "overlay";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navClass =
    variant === "overlay"
      ? "absolute top-0 left-0 z-50 w-full px-4 py-6 md:px-8"
      : "relative z-50 w-full bg-transparent px-4 py-6 md:px-8";

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      const target = document.getElementById(href.slice(2));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }

    setMenuOpen(false);
  };

  return (
    <>
      <nav className={navClass}>
        <div className="flex items-center justify-between gap-3">
          <h1 className="max-w-[74%] text-[15px] font-semibold lg:max-w-none lg:text-[22px]">
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <Image
                src={movsysIcon}
                alt=""
                width={31}
                height={35}
                className="h-[35px] w-auto shrink-0"
                priority
              />
              <span className="truncate tracking-[0.1425em] lg:hidden">
                MOVSYS ENGINEERING
              </span>
              <span className="hidden truncate tracking-[0.1425em] lg:inline">
                MOVSYS ENGINEERING & CONSULTING
              </span>
            </Link>
          </h1>

          <div className="hidden gap-8 text-sm font-medium tracking-[0.08em] text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={
                  item.key === active
                    ? "text-white border-b-4 border-transparent transition-colors duration-200 hover:border-[#3dbe42]"
                    : "text-neutral-300 border-b-4 border-transparent transition-colors duration-200 hover:text-white hover:border-[#3dbe42]"
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
          <div className="relative z-50 mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 p-6 text-sm font-medium tracking-[0.08em] text-neutral-200 backdrop-blur lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={
                  item.key === active
                    ? "text-white border-b-4 border-transparent transition-colors duration-200 hover:border-[#3dbe42]"
                    : "text-neutral-200 border-b-4 border-transparent transition-colors duration-200 hover:text-white hover:border-[#3dbe42]"
                }
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
