import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static export (GitHub Pages)
  basePath: "/portfolio", // Change to your GitHub repository name
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

export default nextConfig;
