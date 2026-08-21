import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    useTypeScriptCli: true,
  },
  partialPrefetching: true,
  reactStrictMode: true,
};

export default nextConfig;
