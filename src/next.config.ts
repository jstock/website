import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['import', 'legacy-js-api'],
  },
};

export default nextConfig;
