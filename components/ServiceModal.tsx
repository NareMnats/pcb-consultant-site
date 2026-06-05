"use client";

import { useEffect } from "react";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: any;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    // prevent page scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 max-w-xl w-full rounded-2xl bg-neutral-950 border border-white/10 p-8 text-white">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold">{service.title ?? service}</h3>

        <p className="mt-4 text-neutral-400">
          {service.description ?? "No additional details provided."}
        </p>
      </div>
    </div>
  );
}
