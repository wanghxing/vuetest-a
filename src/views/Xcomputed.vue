<template>
  <div>
    computed监视多个：
    <br>
    (
      <input type="text" v-model="n1">
    +
      <input type="text" v-model="n2">
    )
    *
      <input type="text" v-model="rate">
    = {{result}}

  </div>
</template>

<script>
export default {
  name:'Xcomputed',
  data(){
    return {
      n1:0,
      n2:0,
      rate:0
    }
  },
  computed:{
    result() {
      console.log('监视到了');
      return ((this.n1-0) + (this.n2-0))*this.rate;  // this.n1 - 0  隐式数据类型转化
    }
  }
}
</script>


<style lang="scss" scoped>
input {
  width:60px;
}
</style>