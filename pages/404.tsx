import Link from "next/link";

/**
 * Pages Router 404 — satisfies dev fallback when App Router 404 isn’t wired
 * for certain legacy code paths. Primary 404 remains `app/not-found.tsx`.
 */
export default function Pages404() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        background: "#0A1628",
        color: "#fff",
        padding: 24,
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#00F5D4", fontSize: "1.5rem", marginBottom: 16 }}>
        Page not found
      </h1>
      <Link
        href="/"
        style={{
          color: "#00F5D4",
          textDecoration: "underline",
          marginTop: 8,
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
