/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                hostname: 'imgur.com',
            },
        ],
    },
};

module.exports = nextConfig;