/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["oaidalleapiprodscus.blob.core.windows.net"],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
