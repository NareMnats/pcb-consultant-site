"use client";

import { useEffect, useRef, useState } from "react";
import type { Service } from "@/lib/services";

type ServiceWorkflowProps = {
  services: Service[];
  onSelect: (service: Service) => void;
};

const serviceIcon = (title: string) => {
  const iconProps = {
    "aria-hidden": true,
    className: "absolute right-5 top-5 h-8 w-8 text-[#3dbe42] sm:right-6 sm:top-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 32 32",
  };

  switch (title) {
    case "Requirements Definition":
      return (
        <svg {...iconProps}>
          <rect x="9" y="6" width="16" height="20" rx="1.5" />
          <path d="M13 11h8" />
          <path d="M13 16h8" />
          <path d="M13 21h6" />
        </svg>
      );
    case "System Architecture":
      return (
        <svg {...iconProps}>
          <rect x="5" y="6" width="8" height="7" rx="1.5" />
          <rect x="19" y="6" width="8" height="7" rx="1.5" />
          <rect x="12" y="20" width="8" height="7" rx="1.5" />
          <path d="M13 9.5h6" />
          <path d="M9 13v4h7v3" />
          <path d="M23 13v4h-7" />
        </svg>
      );
    case "Component Selection":
      return (
        <svg {...iconProps}>
          <rect x="10" y="10" width="12" height="12" rx="2" />
          <path d="M6 13h4" />
          <path d="M6 19h4" />
          <path d="M22 13h4" />
          <path d="M22 19h4" />
          <path d="M13 6v4" />
          <path d="M19 6v4" />
          <path d="M13 22v4" />
          <path d="M19 22v4" />
        </svg>
      );
    case "Schematic Design":
      return (
        <svg {...iconProps}>
          <rect x="5" y="7" width="22" height="18" rx="2" />
          <path d="M8 16h5" />
          <path d="M20 16h4" />
          <path d="M13 11v10l7-5z" />
          <path d="M20 11v10" />
        </svg>
      );
    case "PCB Layout":
      return (
        <svg {...iconProps}>
          <rect x="5" y="7" width="22" height="18" rx="2" />
          <circle cx="10" cy="20" r="1.6" />
          <circle cx="22" cy="12" r="1.6" />
          <path d="M11.6 20h4.4l4.4-5.9" />
        </svg>
      );
    case "Firmware Development":
      return (
        <svg {...iconProps}>
          <path d="M12 10l-6 6 6 6" />
          <path d="M20 10l6 6-6 6" />
          <path d="M17 8l-2 16" />
        </svg>
      );
    case "Bring-Up & Debug":
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="10" r="3" />
          <ellipse cx="16" cy="19" rx="6" ry="7" />
          <path d="M14 8l-3-3" />
          <path d="M18 8l3-3" />
          <path d="M10 16H6" />
          <path d="M22 16h4" />
          <path d="M10.5 21l-3 2" />
          <path d="M21.5 21l3 2" />
          <path d="M16 13v12" />
        </svg>
      );
    case "System Test & Validation":
      return (
        <svg {...iconProps}>
          <path d="M7 17l5 5L25 9" />
          <path d="M8 8h10" />
          <path d="M8 13h7" />
          <path d="M8 26h16" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="9" />
          <path d="M16 10v6l4 3" />
        </svg>
      );
  }
};

export default function ServiceWorkflow({
  services,
  onSelect,
}: ServiceWorkflowProps) {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    let observer: IntersectionObserver | null = null;

    const stopObserver = () => {
      observer?.disconnect();
      observer = null;
      setActiveIndex(null);
    };

    const startObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          const mostVisible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (!mostVisible) {
            return;
          }

          const index = Number(
            (mostVisible.target as HTMLElement).dataset.serviceIndex,
          );

          setActiveIndex(Number.isNaN(index) ? null : index);
        },
        {
          rootMargin: "-35% 0px -35% 0px",
          threshold: [0.25, 0.5, 0.75],
        },
      );

      cardRefs.current.forEach((card) => {
        if (card) {
          observer?.observe(card);
        }
      });
    };

    if (mobileQuery.matches) {
      startObserver();
    }

    const handleQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        startObserver();
        return;
      }

      stopObserver();
    };

    mobileQuery.addEventListener("change", handleQueryChange);

    return () => {
      stopObserver();
      mobileQuery.removeEventListener("change", handleQueryChange);
    };
  }, [services.length]);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative"
          >
            <div>
              <article
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-service-index={index}
                role="button"
                tabIndex={0}
                aria-label={`Open ${service.title} details`}
                onClick={() => onSelect(service)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    onSelect(service);
                    event.preventDefault();
                  }
                }}
                className={`group relative grid h-[184px] cursor-pointer grid-cols-1 items-stretch overflow-hidden rounded-lg border text-left shadow-xl shadow-black/30 transition-all duration-200 hover:border-[#3dbe42] hover:bg-neutral-900 active:scale-[0.98] active:border-[#3dbe42] active:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 sm:mx-auto sm:h-auto sm:min-h-[156px] sm:w-fit ${
                  activeIndex === index
                    ? "border-[#3dbe42] bg-neutral-900 ring-2 ring-[#3dbe42]/25"
                    : "border-white/10 bg-neutral-950"
                }`}
              >
                {serviceIcon(service.title)}

                <div className="flex flex-col justify-center px-5 py-5 pr-16 sm:px-10 sm:py-6 sm:pr-20">
                  <h4 className="text-xl font-medium text-white sm:text-2xl">
                    {service.title}
                  </h4>

                  <p className="mt-3 line-clamp-4 max-w-sm text-sm leading-6 text-neutral-400 sm:mt-4 sm:line-clamp-2">
                    {service.summary}
                  </p>
                </div>
              </article>

              {index < services.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex h-8 items-center justify-center text-[#3dbe42]"
                >
                  <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#3dbe42]" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
