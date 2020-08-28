<template>
  <div>
    <button class="back" @click="goBack">返回</button>
    <br>
    <h2 v-if="isShow" :msg="ftit">{{ ftit }}</h2>
    <div>{{ isShow }}---{{ $store.getters.getChangedNum }}</div>
    <br />
    <div>actions:</div>
    <div>
      <button class="btn" @click="show2">show2</button>
      <button class="btn" @click="hide2">hide2</button>
      <button class="btn" @click="newNum2(6)">newNum2</button>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "xstore",
  components: {},
  data() {
    return {
      ftit: "我是标题信息"
    };
  },
  store,
  computed: {
    isShow() {
      return this.$store.getters.isShow;
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    show2() {
      this.$store.dispatch("showFooter");
    },
    hide2() {
      this.$store.dispatch("hideFooter");
    },
    newNum2(v) {
      this.$store.dispatch("getNewNum", v);
    }
  },
  watch: {
    $route(to, from) {
      //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
      console.log(to, from);
      if (to.name == "about" || to.name == "home") {
        // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
        this.$store.dispatch("showFooter"); // 利用派发全局state.showFooter的值来控制
      } else {
        this.$store.dispatch("hideFooter");
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>