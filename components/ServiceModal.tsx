"use client";

import { useEffect } from "react";
import type { Service, ServiceDetail } from "@/lib/services";

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

const renderDetails = (details: ServiceDetail[] | string) => {
  if (Array.isArray(details)) {
    return (
      <div className="mt-4 space-y-4 text-neutral-400">
        {details.map((item, index) =>
          Array.isArray(item) ? (
            <ul key={index} className="list-disc space-y-3 pl-5">
              {item.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          ) : (
            <p key={index}>{item}</p>
          ),
        )}
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
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 max-h-[80vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-neutral-950 p-8 text-white">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300 transition duration-200 hover:text-emerald-400"
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
