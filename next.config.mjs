/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
                port: '',
                pathname: '',
            },
        ],
    },
    redirects() {
        return [
            {
                source: '/',
                destination: '/breeds',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
