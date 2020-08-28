<template>
  <header>
    <!-- {{$store.state.userInfo.account}} -->
    <div class="userBox">欢迎{{memberInfo}}：<span class="name">{{userInfo.account}}</span></div>
    <div class="iconBar" @click="isShow = !isShow">三</div>
    <div id="nav" v-if="isShow" ref="nav">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/modules-demo1">modulesdemo1</router-link>
      <router-link to="/modules-demo2">modulesdemo2</router-link>-->
      <a
        href="javascript:;"
        v-for="(pagelist, pIdx) in pageGroups"
        :key="pIdx"
        @click="goToPage(pIdx)"
        :class="{ active: pagelist.url === $route.path }"
        >{{ pagelist.PageName }}</a
      >
    </div>
  </header>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      // index: 0,
      pageGroups: [
        {
          PageName: "Home",
          url: "/"
        },
        {
          PageName: "Vuex",
          url: "/about"
        },
        {
          PageName: "vuex modulesdemo1",
          url: "/modules-demo1"
        },
        {
          PageName: "vuex modulesdemo2",
          url: "/modules-demo2"
        },
        {
          PageName: "filter-demo",
          url: "/filter-demo"
        },
        {
          PageName: "axios-demo",
          url: "/axios-demo"
        },
        {
          PageName: "pick-area",
          url: "/pick-area"
        },
        {
          PageName: "play",
          url: "/play"
        }
      ]
    };
  },
  computed: {
      ...mapState(["userInfo", "userStatus", "vipLevel"]),
      ...mapGetters(["memberInfo"])
  },
  methods: {
    goToPage(pIdx) {
      // this.index = pIdx;
      this.$router.push(this.pageGroups[pIdx].url);
      /* if (this.$route.path == this.pageGroups[pIdx].url) {
        console.log(pIdx);
      } */
      this.isShow = false;
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  // height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightseagreen;
  font-size: 16px;
  margin-bottom: 20px;
  z-index:10;
  .iconBar {
    line-height: 40px;
    font-weight: bold;
    font-size: 20px;
    align-self: flex-end;
    margin:0 3%;
  }
  .userBox {
    position:absolute;
    top:0;
    left:3%;
    line-height:40px;
    font-size:14px;
    color:#fff;
    .name {
      font-size:20px;
      color:#ffffff;
      margin:0 3px;
      font-weight:bold;
    }
  }
}
#nav {
  /* position: absolute;
  top: 40px;
  left: 0; */
  width: 100%;
  padding: 10px 0;
  background-color: lightseagreen;
  border-top: 1px solid #ffffff;
  a {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    color: #333333;
    &.router-link-exact-active {
      color: #ffffff;
    }
    &.active {
      color: #ffffff;
    }
  }
}
.active {
  color: #ffffff;
}
</style>
