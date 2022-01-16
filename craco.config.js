const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = {
  babel: {
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  },
  style: {
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
      },
    },
  },
  plugins: [
    { plugin: fastRefreshCracoPlugin },
  ],
};
