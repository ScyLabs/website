const withLess = require('next-with-less/dist')

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
   lessLoaderOptions: {
    /* ... */
  },
  reactStrictMode: true,
})

module.exports = nextConfig
