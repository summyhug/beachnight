import type { NextPageContext } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

/**
 * Pages Router fallback used by the dev server when rendering the global error
 * shell. App Router uses `app/error.tsx`; this file prevents the “missing
 * required error components” loop when `pages/` was absent.
 */
function ErrorPage({ statusCode }: ErrorPageProps) {
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
        {statusCode ? `Error ${statusCode}` : "Something went wrong"}
      </h1>
      <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 420, lineHeight: 1.6 }}>
        Try refreshing. If you are developing, stop the server, run{" "}
        <code style={{ color: "#FFD166" }}>rm -rf .next</code>, then{" "}
        <code style={{ color: "#FFD166" }}>npm run dev</code>.
      </p>
    </div>
  );
}

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? (err as { statusCode?: number } | undefined)?.statusCode;
  return { statusCode: statusCode ?? 500 };
};

export default ErrorPage;
