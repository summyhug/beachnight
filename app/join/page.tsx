"use client";

import { useState } from "react";
import { useDictionary } from "@/components/LanguageProvider";

export default function JoinPage() {
  const t = useDictionary();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    beach: "",
    location: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          beach: formData.beach,
          location: formData.location,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        beach: "",
        location: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  };

  return (
    <section className="py-24 px-4 bg-ocean">
      <div className="max-w-xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-teal mb-4 text-center">
          {t.join.title}
        </h1>
        <p className="font-body text-white/70 text-center mb-4">
          {t.join.subtitle}
        </p>
        <p className="font-body text-white/60 text-center mb-12 text-sm leading-relaxed">
          {t.join.dateNote}
        </p>

        {status === "success" && (
          <div
            className="mb-8 p-4 rounded-xl border border-teal/40 bg-teal/10 text-teal text-center font-body"
            role="status"
          >
            {t.join.success}
          </div>
        )}

        {status === "error" && errorMessage && (
          <div
            className="mb-8 p-4 rounded-xl border border-danger/50 bg-danger/10 text-danger text-center font-body text-sm"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-4 sm:p-8 rounded-xl border border-teal/30 bg-ocean/80"
        >
          <div>
            <label
              htmlFor="join-full-name"
              className="block font-body text-sm text-white/80 mb-2"
            >
              {t.join.fullName}
            </label>
            <input
              id="join-full-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              disabled={status === "submitting"}
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-teal/30 rounded text-white font-body focus:outline-none focus:border-teal disabled:opacity-50"
              placeholder={t.join.fullName}
            />
          </div>
          <div>
            <label
              htmlFor="join-email"
              className="block font-body text-sm text-white/80 mb-2"
            >
              {t.join.email}
            </label>
            <input
              id="join-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              disabled={status === "submitting"}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-teal/30 rounded text-white font-body focus:outline-none focus:border-teal disabled:opacity-50"
              placeholder="you@example.com"
            />
          </div>
          <fieldset className="space-y-2 border-0 p-0 m-0">
            <legend className="block font-body text-sm text-white/80 mb-2 w-full">
              {t.join.beach}
            </legend>
            <input
              id="join-beach"
              type="text"
              name="beach"
              required
              autoComplete="off"
              title="Coastline you'd film on event night: beach name, area, or landmark is fine."
              disabled={status === "submitting"}
              value={formData.beach}
              onChange={(e) =>
                setFormData({ ...formData, beach: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-teal/30 rounded text-white font-body focus:outline-none focus:border-teal disabled:opacity-50"
              placeholder={t.join.beachPlaceholder}
              aria-label="Beach or coastline"
            />
          </fieldset>
          <fieldset className="space-y-2 border-0 p-0 m-0">
            <legend className="block font-body text-sm text-white/80 mb-2 w-full">
              {t.join.location}
            </legend>
            <input
              id="join-location"
              type="text"
              name="location"
              required
              autoComplete="off"
              title="City or town and country. No street address."
              disabled={status === "submitting"}
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-teal/30 rounded text-white font-body focus:outline-none focus:border-teal disabled:opacity-50"
              placeholder={t.join.locationPlaceholder}
              aria-label="City and country"
            />
          </fieldset>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-gold text-ocean font-display font-bold text-lg tracking-wide rounded hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? t.join.submitting : t.join.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
