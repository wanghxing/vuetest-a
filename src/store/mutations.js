export default {
  login(state, v) {
    state.userInfo = v;
  },
  setMemberInfo(state, v) {
    state.userStatus = v.userStatus;
    state.vipLevel = v.vipLevel;
  },
  show(state) {
    //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },
  hide(state) {
    //同上
    state.showFooter = false;
  },
  newNum(state, sum) {
    //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changableNum += sum;
  }
};
