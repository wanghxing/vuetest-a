<template>
  <footer class="footerBar">
    <span>{{ copyright }}{{ msg }}</span>
  </footer>
</template>
<script>
export default {
  name: "footer-bar",
  props: {
    msg: String
  },
  data() {
    return {
      copyright: "copyright By whx in 2019-2030"
    };
  }
};
</script>
<style lang="scss" scoped>
.footerBar {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  text-align: center;
  color: #ffffff;
  span {
    display: inline-block;
    justify-self: center;
  }
}
</style>
