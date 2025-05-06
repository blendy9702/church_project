import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  extend: {
    color: {
      mainColor: "#FBFBFC",
    },
  },
};

export default nextConfig;
