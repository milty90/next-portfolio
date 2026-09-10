import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imuizdkqtklnuihiogdp.supabase.co",
      },
    ],
  },
};

export default nextConfig;
