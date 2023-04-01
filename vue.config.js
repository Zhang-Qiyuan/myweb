const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: '乐观者的线上小屋'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {}
    },
    devServer: { // 环境配置
      host: '0.0.0.0',
      port: '8080',
      https: false,
      historyApiFallback: true,
      allowedHosts: "all",
      open: false // 配置自动启动浏览器
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
}