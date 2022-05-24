/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['apod.nasa.gov'],
    loader:"akamai",
    path:""
  },

}

module.exports = nextConfig
