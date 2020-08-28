<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="text" @click="changeTitle">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    changeTitle() {
      // 注册自定义事件
      this.$emit("titleChange", "子组件HellowWorld通过emit修改了Home的title值");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {font-size:12px;color:green;}
</style>
