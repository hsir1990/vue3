const path = require('path')
// vite.config.js # or vite.config.ts

console.log(path.resolve(__dirname, './src'))
console.log('111111111221111----------------')
module.exports = {
  // 引入第三方的配置
  optimizeDeps: {
    include: ["moment", "echarts", "axios", "mockjs"]
  },
  alias: {
    // 键必须以斜线开始和结束
    // '/@/': path.resolve(__dirname, './src')
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  proxy: {
    // 如果是 /lsbdb 打头，则访问地址如下
    '/lsbdb': 'http://10.192.195.96:8087',
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': {
    //   target: 'http://10.192.195.96:8087/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/lsbdb/, '')
    // }
  }
}
