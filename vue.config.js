module.exports = {
  devServer: {
    open: true, // 自动打开浏览器
    host: 'localhost',
    port: 9001, // 自定义端口
    https: false,
    proxy: { // 配置跨域
      '/api': {
        target: 'http://127.0.0.1:9002',
        changeOrigin: true, // 允许跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    client: {
      overlay: false
    }
  }
}
