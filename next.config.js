const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const path = require('path');
const isServer = typeof window === 'undefined';
const resolve = dir => path.resolve(__dirname, dir);

module.exports = withLess(withCSS({
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      _c: resolve('components'),
      _p: resolve('public'),
      _api: resolve('api'),
      _lib: resolve('lib'),
    }
    return config;
  },
  pageExtensions: ['jsx']
}))