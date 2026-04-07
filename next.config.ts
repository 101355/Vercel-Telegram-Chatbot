import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Type checking ကို build ချိန်မှာ skip လုပ်ခြင်း
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint ကို build ချိန်မှာ skip လုပ်ခြင်း
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static page generation timeout
  staticPageGenerationTimeout: 120,
  // React strict mode
  reactStrictMode: true,
};

export default nextConfig;
