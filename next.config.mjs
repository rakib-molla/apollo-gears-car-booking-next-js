/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdni.autocarindia.com',
      },
    ],
  },
};

export default nextConfig;
