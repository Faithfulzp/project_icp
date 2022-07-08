const { defineConfig } = require('@vue/cli-service')
//1.引入express
module.exports = defineConfig({
  devServer: {
    //跳过域名检查，防止出现Invalid Host header错误
    // 以下是新版webpack的跳过域名检查的方法，旧版是disableHostCheck: true
    historyApiFallback: true,
    allowedHosts: 'all',
    // 设置为本地ip后，就可以通过本地ip和对window本身的host文件中的域名映射进行域名的访问
    host: '0.0.0.0',
    // 跨域需要配置代理服务器
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8000',
    //   }
    // }
  },
  transpileDependencies: true,
  lintOnSave: false
})
