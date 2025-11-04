import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output export - Netlify will handle SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
