// vue.config.js
const ENV = process.env.NODE_ENV;

module.exports = {
  publicPath: ENV === "production" ? "" : "/vuetest-a/" // 关键代码
};