const path = require('path')
const { resolve } = path
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/utils/variable.scss";`, //在 sass-loader v8 中，这个选项名是 "prependData"，其他为 "additionalData"
      },
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.module
      .rule('import-glob')
      .test(/\.scss/)
      .use('import-glob-loader2')
      .loader('import-glob-loader2')
      .end()
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
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
