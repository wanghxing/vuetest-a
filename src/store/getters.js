export default {
  //实时监听state值的变化(最新状态)
  isShow(state) {
    //承载变化的showFooter的值
    return state.showFooter;
  },
  getChangedNum(state) {
    //承载变化的changebleNum的值
    return state.changableNum;
  },
  memberInfo(state) {
    switch (state.userStatus) {
      case 0:
        return "普通会员";
      case 1:
        return "vip会员";
      default:
        return "普通会员";
    }
}
};
