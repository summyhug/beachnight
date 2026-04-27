"use client";

import { useEffect } from "react";
import "./globals.css";

/**
 * Root-level error UI (replaces root layout when the error bubbles here).
 * Must include <html> and <body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="font-body antialiased bg-ocean text-white min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="font-display text-3xl font-bold text-teal mb-4">
          Something went wrong
        </h1>
        <p className="text-white/70 text-center max-w-md mb-8">
          Please refresh the page or try again in a moment.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-ocean hover:bg-teal/90"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
