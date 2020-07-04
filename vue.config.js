module.exports = {
  chainWebpack: config => {
    // 生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js')
      // 通过 externals 加载外部 CDN 资源
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor'
      })
      // 通过.tap 链式操作修改插件里面相关参数
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 开发环境
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')
      // 通过.tap 链式操作修改插件里面相关参数
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  css: {
    extract: false
  }
}