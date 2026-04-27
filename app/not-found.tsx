import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-ocean">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-teal mb-2">
        Page not found
      </h1>
      <p className="font-body text-white/70 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-ocean hover:bg-teal/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
