<template>
  <div class="container">
    <span>我是modulesdemo1的子路由：</span>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  name: "son2",
  data() {
    return {
      title: "son2组件"
    };
  }
};
</script>
