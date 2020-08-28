<template>
  <div class="container">
    <div v-if="isShow">我是标题信息</div>
    <a
      class="link"
      :class="{ active: '/son1' == $route.path }"
      @click="$router.push('/son1')"
      >son1</a
    >
    <a
      class="link"
      :class="{ active: '/son2' == $route.path }"
      @click="$router.push('/son2')"
      >son2</a
    >
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex"; //先要引入 mapState, mapGetters, mapActions
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      isShow: state => state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
      //里面定义的showFooter是指footerStatus.js里state的showFooter
    })
    //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    /*...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
         isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                         //第二个isShow是对应的footerStatus.js里的getters里的isShow
      })*/
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (to.name == "son1" || to.name == "son2") {
        console.log("ayyy");
        this.$store.dispatch("footerStatus/showFooter"); //这里改为'footerStatus/showFooter',
        //意思是指footerStatus.js里actions里的showFooter方法
      } else {
        this.$store.dispatch("footerStatus/hideFooter"); //同上注释
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a.link {
  display: inline-block;
  width: 45%;
  padding: 5px 0;
  border: 1px solid green;
}
.link.active {
  background-color: green;
  color: #ffffff;
}
</style>
