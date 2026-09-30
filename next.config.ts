import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The root layout lives in app/[lang], so unmatched URLs need a global 404.
  experimental: {
    globalNotFound: true,
  },
  images: {
    // 90 for the portraits: they are small JPEGs already, and a second pass
    // at the default 75 visibly softens them.
    qualities: [75, 90],
  },
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
