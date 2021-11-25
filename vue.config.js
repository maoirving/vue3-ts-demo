const path = require('path')
const { resolve } = path
module.exports = {
  devServer: {
    // hot: true, 
    // liveReload: true,
    // open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
}
