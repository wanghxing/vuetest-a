// vue.config.js
const ENV = process.env.NODE_ENV;

module.exports = {
  // publicPath: ENV === "production" ? "" : "/vuetest-a/", // 关键代码
  publicPath:'./', // 基本路径
  outputDir:"docs",  // 输出文件目录
  assetsDir: './assets',
  indexPath: 'index.html'
};