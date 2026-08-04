/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.devtool = 'source-map'; // Server side
    return config;
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
};
