import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: __dirname, // explicitly set root directory
    },
    typescript: {
        ignoreBuildErrors: true, // ⚠ Will still compile, even with TS errors
    },
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true, // ⚠ Will skip ESLint errors during build
    },
};

export default nextConfig;
