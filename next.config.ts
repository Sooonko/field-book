import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // You may specify supported properties here, e.g. buildActivity: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  /* config options here */
};

export default nextConfig;
