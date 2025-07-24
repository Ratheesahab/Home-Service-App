import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ap-south-1.graphassets.com"], // This matches the image host exactly
  },
};

export default nextConfig;
