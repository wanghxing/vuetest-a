import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

Vue.config.productionTip = false;

// 配置Vue原型 （在任何组件中都可以正常使用axios）
Vue.prototype.$http = axios; //全局定义axios $http

// 引入mockjs
require("./mock.js");

Vue.prototype.$store = store;
// 启动后先进入登录页
router.beforeEach((to, from, next) => {
  console.log(store.state, "store.state");
  if (store.state.userInfo || to.path === "/login") {
    next();
  } else {
    next({
      path: "/login"
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
