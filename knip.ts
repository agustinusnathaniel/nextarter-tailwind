import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.tsx'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
  ignoreDependencies: ['next-seo', 'eslint-config-next'],
  ignore: ['.eslintrc.*'],
  ignoreBinaries: ['changelogithub'],
};

export default config;