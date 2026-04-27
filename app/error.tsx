"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-ocean">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-teal mb-4">
        Something went wrong
      </h1>
      <p className="font-body text-white/70 max-w-md mb-8">
        An unexpected error occurred. You can try again or return home.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-ocean hover:bg-teal/90 transition-colors min-h-[44px]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors min-h-[44px]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
