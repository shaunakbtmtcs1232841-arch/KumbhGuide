/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // THIS enables static export

  trailingSlash: false,

  images: {
    unoptimized: true // needed for static export
  }
};

module.exports = nextConfig;
