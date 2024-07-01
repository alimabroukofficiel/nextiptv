// next.config.mjs
// import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Add 'res.cloudinary.com' to the list of domains
    },
};

// const withPWA = nextPWA({
//     dest: 'public',
// });

export default nextConfig;
