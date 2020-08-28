import Vue from "vue";
import Vuex from "vuex";
// 根级别state getters mutations actions
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
// 模块内modules
import footerStatus from "./modules/footerStatus";
import collection from "./modules/collection";
// 本地存储
import saveInLocal from "./plugin/saveInLocal";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //严格模式
  state,
  getters,
  mutations,
  actions,
  modules: {
    footerStatus,
    collection
  },
  plugins: [saveInLocal] // 将信息保存在本地Local Storage
});
