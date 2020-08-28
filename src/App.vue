<template>
  <div id="app">
    <div class="top" v-if="$route.path != '/login'">
      <Header />
    </div>
    <div class="centerCon">
      <router-view />
    </div>
    <div class="bottom" v-if="$route.path != '/login'">
      <FooterBar />
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header.vue";
import FooterBar from "@/components/common/FooterBar.vue";
export default {
  components: {
    Header,
    FooterBar
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}
button {
  border:none;
  background: none;
  text-decoration: underline;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  .top {
    width: 100%;
  }
  .bottom {
    width: 100%;
    align-self: flex-end;
  }
  .centerCon {
    flex-grow: 1;
    div {
      margin-bottom: 10px;
    }
  }
}

.btn {
  text-decoration: none;
  font-size: 14px;
  border: 1px solid green;
  background: #ffffff;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.link {
  font-weight: bold;
  font-size: 16px;
  color: green;
}
.back {
  width:94%;
  text-align:left;
}

</style>
