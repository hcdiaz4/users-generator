/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/index',
                destination: '/',
            },
        ]
    },
}

module.exports = nextConfig
