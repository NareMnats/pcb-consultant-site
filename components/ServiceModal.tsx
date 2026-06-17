"use client";

import { useEffect } from "react";
import type { Service, ServiceDetails } from "@/lib/services";

const parseDetailBlocks = (details: string) => {
  const blocks = details
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block) => {
    const lines = block
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    const isList = lines.every((line) => /^([*-]|\d+\.)\s+/.test(line));

    return {
      type: isList ? "list" : "paragraph",
      items: isList
        ? lines.map((line) => line.replace(/^([*-]|\d+\.)\s+/, ""))
        : [block],
    };
  });
};

const renderDetails = (details: ServiceDetails | string) => {
  if (typeof details === "object") {
    return (
      <div className="mt-4 space-y-5 text-neutral-400">
        <p>{details.intro}</p>

        <ul className="list-disc space-y-3 pl-5">
          {details.bullets.map((bullet) => (
            <li key={bullet.heading}>
              <span className="font-semibold">
                {bullet.heading}
              </span>
              {bullet.text && <span>: {bullet.text}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const blocks = parseDetailBlocks(String(details));

  return (
    <div className="mt-4 text-neutral-400">
      {blocks.map((block, index) =>
        block.type === "list" ? (
          <ul key={index} className="list-disc space-y-3 pl-5">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={index} className={index ? "mt-4" : ""}>
            {block.items[0]}
          </p>
        ),
      )}
    </div>
  );
};

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const imageUrl = service.image;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      <div className="relative z-10 max-h-[80vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-neutral-950 p-8 text-white">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300 transition duration-200 hover:text-[#3dbe42]"
          onClick={onClose}
        >
          X
        </button>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={service.title}
            className="mb-4 h-48 w-full rounded-md object-cover"
          />
        )}

        <h3 className="text-2xl font-semibold">{service.title}</h3>

        {renderDetails(
          service.details ??
            service.description ??
            "No additional details provided.",
        )}
      </div>
    </div>
  );
}
