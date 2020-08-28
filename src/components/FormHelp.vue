<template>
  <div class="test">
    <h4 class="tit">我是test页</h4>
    <!-- <button @click="addPic()">点我看图片</button> -->
    <div class="box">
      <img ref="img" src="" class="testPic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      imgSrc: ""
    };
  },
  created() {
    /* localStorage.setItem("imgData", this.imgSrc);
    this.imgSrc = localStorage.getItem('imgData'); */
    localStorage.imgData = require("../assets/images/test-pic.jpg");
    this.imgSrc = localStorage["imgData"];

    if (!window.localStorage) {
      alert("浏览器支持localstorage");
    } else {
      var storage = window.localStorage;
      //写入a字段
      storage["a"] = 1;
      //写入b字段
      storage.b = 1;
      //写入c字段
      storage.setItem("c", 3);
      console.log(typeof storage["a"]);
      console.log(typeof storage["b"]);
      console.log(typeof storage["c"]);
      //第一种方法读取
      var a = storage.a;
      console.log(a);
      //第二种方法读取
      var b = storage["b"];
      console.log(b);
      //第三种方法读取
      var c = storage.getItem("c");
      console.log(c);

      var data = {
        name: "xiecanyong",
        sex: "man",
        hobby: "program"
      };
      var d = JSON.stringify(data);
      storage.setItem("data", d);
      //将JSON字符串转换成为JSON对象输出
      var json = storage.getItem("data");
      var jsonObj = JSON.parse(json);
      console.log(typeof jsonObj);
      // 清空
      // storage.clear()
    }
  },
  mounted() {
    this.$refs.img.src = this.imgSrc;
  },
  methods: {
    addPic() {
      this.$refs.img.src = this.imgSrc;
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  margin: 0 20px;
  border-top: 1px dashed #ccc;
  padding-top: 10px;
  margin-top: 10px;
  .tit {
    line-height: 30px;
  }
  .testPic {
    width: 200px;
  }
}
</style>
