/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            resolveAlias: {
                canvas: './empty-modules.ts'
            }
        }
    }
};

export default nextConfig;
