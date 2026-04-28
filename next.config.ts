import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.disstands.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/moqueta-ecologica-barcelona',
        destination: '/moqueta-ferial-barcelona',
        permanent: true,
      },
      {
        source: '/moqueta-ecologica-girona',
        destination: '/moqueta-ferial-girona',
        permanent: true,
      },
      {
        source: '/moqueta-ecologica-tarragona',
        destination: '/moqueta-ferial-tarragona',
        permanent: true,
      },
      {
        source: '/moqueta-ecologica-lleida',
        destination: '/moqueta-ferial-lleida',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
