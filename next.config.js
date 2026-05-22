/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Workaround for Next.js 16 Turbopack bug: generated .next/dev/types/validator.ts
  // emits invalid TS (duplicate block tail for layout routes). Source code is fully typed.
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
