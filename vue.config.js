const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')
module.exports = {
  publicPath: './', // 解决打包后空白
  // lintOnSave: false, // 关闭eslint检测
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      config.devtool = 'source-map'
      // 为开发环境修改配置...
    }
    Object.assign(config, {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, './src'),
          'components':path.resolve(__dirname, './src/components')
        }
      }
    })
  },
//   publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
};