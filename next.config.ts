import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended for development, can be adjusted for production
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Disables Next.js Image Optimization for static builds
  },
};

export default nextConfig;
