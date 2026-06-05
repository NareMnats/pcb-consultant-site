"use client";

import { useEffect, useState } from "react";

const renderDetails = (details: any) => {
  if (Array.isArray(details)) {
    return (
      <ul className="mt-4 list-disc space-y-3 pl-5 text-neutral-400">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-4 text-neutral-400">
      {details}
    </p>
  );
};

export default function ServiceModal({
  service,
  onClose,
}: {
  service: any;
  onClose: () => void;
}) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(service?.image);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    setImageUrl(service?.image);
  }, [service]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 max-w-3xl w-full max-h-[80vh] overflow-auto rounded-2xl bg-neutral-950 border border-white/10 p-8 text-white">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-neutral-300"
          onClick={onClose}
        >
          ✕
        </button>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={service?.title ?? "service image"}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}

        <h3 className="text-2xl font-semibold">{service?.title}</h3>

        {renderDetails(service?.details ?? service?.description ?? "No additional details provided.")}
      </div>
    </div>
  );
}
