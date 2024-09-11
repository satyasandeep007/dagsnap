import path from 'path';
import { fileURLToPath } from 'url';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (process.env.IGNORE_SNAP_PROXY === 'true') {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/snap/**', '**/proxy-server/**'],
      };
      config.ignoreWarnings = [{ module: /snap\// }, { module: /proxy-server\// }];

      // Use custom tsconfig for build
      config.resolve.plugins = config.resolve.plugins || [];
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.build.json'),
        }),
      );
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
