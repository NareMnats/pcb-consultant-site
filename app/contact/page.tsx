"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("Sending...");

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    setStatus("Message sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  } else {
    setStatus("Something went wrong. Please try again.");
  }
};

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="contact" />

      <header className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">Contact</p>

          <h1 className="text-4xl font-semibold">Start a Project or Ask a Question</h1>

          <p className="mt-6 max-w-2xl text-neutral-400">Send a brief message describing your project, constraints, and timeline, and I'll get back to you as soon as possible.</p>
        </div>
      </header>

      <section className="px-8 pb-28">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="flex flex-col">
              <span className="mb-2 text-sm text-neutral-400">Name</span>
              <input
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-white/40"
/>
            </label>

            <label className="flex flex-col">
              <span className="mb-2 text-sm text-neutral-400">Email</span>
              <input
  required
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-white/40"
/>
            </label>

            <label className="flex flex-col">
              <span className="mb-2 text-sm text-neutral-400">Message</span>
             <textarea
  required
  rows={8}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-white/40"
/>
            </label>

            <div className="flex gap-4">
              <button type="submit" className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-400">Send</button>
              {status && <p className="text-sm text-neutral-400">{status}</p>}
            </div>
          </form>
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
