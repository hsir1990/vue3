const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]
console.log('process.env[k]--' + process.env.NODE_ENV)//可判断是否为开发环境
for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
        process.env[k] = envConfig[k]
    }
}

module.exports = {
    // //引入第三方的配置
    // optimizeDeps: {
    //     include: ["moment", "echarts", "axios", "mockjs"]
    // },
    //   alias: {
    //     // 键必须以斜线开始和结束
    //     '/@/': path.resolve(__dirname, './src')
    //     // '/@components/': path.resolve(__dirname, './src/components')
    //   },
    optimizeDeps: {
        include: ["echarts", "axios", "mockjs","@ant-design/colors"]
    },
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        // '/@pages/': path.resolve(__dirname, './src/pages')
    },
    // extensions: ['.js', '.vue', '.json'],//貌似暂时不能用
    // resolve: {
    //     alias: {
    //         '/@/': path.resolve(__dirname, './src'),
    //         // '/@pages/': path.resolve(__dirname, './src/pages')
    //     },
    //     extensions: ['.js', '.vue', '.json'],//用了
    // },
    hostname: process.env.VITE_HOST,
    port: process.env.VITE_PORT,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    /**
     * Base public path when served in production.
     * @default '/'
     */
    base: process.env.VITE_BASE_URL,
    /**
     * Directory relative from `root` where build output will be placed. If the
     * directory exists, it will be removed before the build.
     * @default 'dist'
     */
    outDir: process.env.VITE_OUTPUT_DIR,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    // 反向代理
    proxy: {
        '/ajax': {
            target: 'http://www.tapread.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/ajax/, '')
        }
    }
}