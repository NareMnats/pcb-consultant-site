"use client";

import { useEffect, useState } from "react";

export default function ServiceModal({
  service,
  onClose,
  onSave,
}: {
  service: any;
  onClose: () => void;
  onSave?: (updated: any) => void;
}) {
  const [editMode, setEditMode] = useState(false);
  const [detailsText, setDetailsText] = useState<string>(
    service?.details ?? service?.description ?? ""
  );
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
    setDetailsText(service?.details ?? service?.description ?? "");
    setImageUrl(service?.image);
    setEditMode(false);
  }, [service]);

  const handleSave = () => {
    const updated = { ...service, details: detailsText, image: imageUrl };
    if (onSave) onSave(updated);
    setEditMode(false);
  };

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

        <button
          aria-label="Edit"
          className="absolute right-14 top-3 text-neutral-300"
          onClick={() => setEditMode((v) => !v)}
        >
          {editMode ? "Cancel" : "Edit"}
        </button>

        {imageUrl && !editMode && (
          <img
            src={imageUrl}
            alt={service?.title ?? "service image"}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}

        {editMode && (
          <div className="mb-4">
            <label className="block text-sm text-neutral-400 mb-1">Image URL</label>
            <input
              value={imageUrl ?? ""}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white"
            />
          </div>
        )}

        <h3 className="text-2xl font-semibold">{service?.title}</h3>

        {!editMode && (
          <p className="mt-4 text-neutral-400">
            {service?.details ?? service?.description ?? "No additional details provided."}
          </p>
        )}

        {editMode && (
          <div className="mt-4">
            <label className="block text-sm text-neutral-400 mb-1">Details</label>
            <textarea
              value={detailsText}
              onChange={(e) => setDetailsText(e.target.value)}
              rows={8}
              className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white"
            />

            <div className="mt-4 flex gap-3">
              <button
                className="rounded-full bg-white px-4 py-2 text-black"
                onClick={handleSave}
              >
                Save
              </button>

              <button
                className="rounded-full border border-white/10 px-4 py-2"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
