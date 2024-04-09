/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['https://www.myntra.com/', 'localhost'], // <== Domain name
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.myntra.com',
                port: '',
                pathname: '/shirts/**',
            },
        ],
    },
};

export default nextConfig;
