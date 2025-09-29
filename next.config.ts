import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: __dirname, // explicitly set root directory
    },
    typescript: {
        ignoreBuildErrors: true, // ⚠ Will still compile, even with TS errors
    },
};

export default nextConfig;
