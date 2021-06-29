<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    我是首页
    <!--   想放个轮播加九宫格 -->

    <br>
    <br>
    <br>
    <br>
    <br>
    <router-link to="/shop-car" class="link shopcarLink">进入购物车</router-link>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

.shopcarLink {
  font-size:14px;
}
ped>
