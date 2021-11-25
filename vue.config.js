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
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/utils/variable.scss";`, //在 sass-loader v8 中，这个选项名是 "prependData"，其他为 "additionalData"
      },
    },
  },
}
