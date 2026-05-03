/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Use `npm run dev` (Turbopack) to avoid webpack dev chunk issues.
   * If you use `npm run dev:webpack`, run `npm run dev:clean` after odd HMR errors.
   */
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about-beachnight",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
