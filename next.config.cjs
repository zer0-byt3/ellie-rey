const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  optimizeFonts: false,
  webpack(config, options) {
    return config;
  }
});
