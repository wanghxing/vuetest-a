<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Play shabao" :title="title" @titleChange="changedTitle" />
    <!-- 图片 -->
    <div id="bag" v-bind:class="{ burst: ended }"></div>

    <!-- 状态信息 -->
    <div id="bag-health">
      <div v-bind:style="{ width: health + '%' }"></div>
    </div>

    <!-- 游戏控制按钮 -->
    <div id="controls">
      <button class="btn" v-on:click="punch" v-show="!ended">Punch</button>
      <button class="btn" v-on:click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "play",
  data() {
    return {
      health: 100,
      ended: false,
      title: "点击此处测试：$emit通过子组件修改父组件名字"
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    },
    changedTitle(changedTitle) {
      this.title = changedTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width:94%;
  margin:0 auto;
  text-align:left;
  margin-bottom:20px;
  .name {
    font-weight:bold;
    margin:0 2px;
    color:lightseagreen;
  }
}
#bag {
  width: 200px;
  height:350px;
  margin: 0 auto;
  background: url(../assets/images/bag.png) center no-repeat;
  background-size: 66%;
}

#bag.burst {
  background-image: url(../assets/images/bag-burst.png);
}

#bag-health {
  width: 200px;
  height: 20px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

#bag-health div {
  height: 100%;
  background: crimson;
}

#controls {
  margin: 0 auto;
  button {
    margin: 0 5px;
  }
}
</style>
