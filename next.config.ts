import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // ... existing image config ...
  },
  // 추가된 반응형 설정
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
