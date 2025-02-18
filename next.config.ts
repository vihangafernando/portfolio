import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: true, // ✅ Ensures Fast Refresh is enabled
  },
};

export default nextConfig;
