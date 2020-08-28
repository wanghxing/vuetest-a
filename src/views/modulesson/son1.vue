<template>
  <div class="container">
    <span>我是modulesdemo1的子路由：</span>
    <h2>{{ title }}</h2>

    <form-help></form-help>
  </div>
</template>
<script>
import formHelp from "@/components/FormHelp.vue";
export default {
  name: "son1",
  data() {
    return {
      title: "son1组件"
    };
  },
  components: {
    "form-help": formHelp
  }
};
</script>
