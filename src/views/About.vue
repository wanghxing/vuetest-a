<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <div v-if="isShow">{{ count }}</div>
    <div>获取state:</div>
    <div>{{ $store.state.showFooter }}---{{ $store.state.changableNum }}</div>
    <br />
    <div>获取方式getters:</div>
    <div>{{ $store.getters.isShow }}---{{ $store.getters.getChangedNum }}</div>
    <br />
    <div>mutations:</div>
    <div>
      <button class="btn" @click="show">show</button>
      <button class="btn" @click="hide">hide</button>
      <button class="btn" @click="newNum(6)">newNum</button>
    </div>
    <br />
    <div>actions:</div>
    <div>
      <button class="btn" @click="show2">show2</button>
      <button class="btn" @click="hide2">hide2</button>
      <button class="btn" @click="newNum2(6)">newNum2</button>
    </div>
    <br />
    <!-- <button class="btn" @click="$router.push('x-store')" class="link">Xstore</button> -->
    <router-link to="/xstore" class="link">Xstore</router-link>
    <router-view />
  </div>
</template>
<script>
import store from "@/store/index.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "about"
    };
  },
  store,
  computed: {
    count() {
      return this.$store.state.changableNum;
    },
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      "isShow",
      "getChangedNum"
      // ...
    ])
  },
  methods: {
    show() {
      this.$store.commit("show");
    },
    hide() {
      this.$store.commit("hide");
    },
    newNum(v) {
      this.$store.commit("newNum", v);
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
  }
};
</script>
<style scoped></style>
