import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.tsx'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
  ignoreDependencies: ['@biomejs/biome'],
  ignore: ['biome.*'],
  ignoreBinaries: ['changelogithub'],
};

export default config;
