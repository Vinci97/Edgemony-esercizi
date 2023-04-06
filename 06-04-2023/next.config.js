/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images:{
    domains: ["i.dummyjson.com"]
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/all.scss";
    `,
  },
}

module.exports = nextConfig
