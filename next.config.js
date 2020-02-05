const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const path = require('path');
const isServer = typeof window === 'undefined';
const resolve = dir => path.resolve(__dirname, dir);

module.exports = withLess({
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      _c: resolve('components')
    }
    return config;
  },
  pageExtensions: ['jsx']
})