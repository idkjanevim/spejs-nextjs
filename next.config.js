/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['apod.nasa.gov'],
    loader:"akamai",
    path:""
  },
  basePath:"/spejs-nextjs",
  assetPrefix:"/spejs-nextjs"

}

module.exports = nextConfig
