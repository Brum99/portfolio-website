import path from 'path';
import { fileURLToPath } from 'url';

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});


// Support for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default nextConfig;
