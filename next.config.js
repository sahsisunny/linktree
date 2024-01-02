/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'lh3.googleusercontent.com',
         },
         {
            hostname: 'www.google.com',
         },
         {
            hostname: 'avatars.githubusercontent.com',
         },
      ],
   },
}

module.exports = nextConfig
