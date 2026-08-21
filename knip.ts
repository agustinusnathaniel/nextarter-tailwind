import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.tsx'],
  ignore: ['biome.*'],
  ignoreBinaries: ['changelogithub'],
  ignoreDependencies: ['@biomejs/biome'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
};

export default config;
