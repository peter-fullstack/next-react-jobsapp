/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = 'source-map'; // Server side
    }
    return config;
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
};
