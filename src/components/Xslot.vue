<template>
  <div class="container">
    下面是插进来的插槽内容：
    <div class="conb">
      单个插槽（匿名插槽,只有1个）：
      <slot></slot>
    </div>

    <div class="conb">
      具名插槽（有名字的插槽，可多个）：
      <slot name="slotA" :message = "meg0"></slot>
      <slot name="slotB"></slot>
    </div>

    <div class="conb zyy">
      作用域插槽（可在槽上面绑定数据）：
      <slot name="slotA" :message = "meg0"></slot>
      <slot name="slotB" :message = "meg"></slot>
      <slot :message = "meg"></slot>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return {
      meg0:[
        {
          aa:'aaa',
          bb:'bbb'
        },
        {
          aa:'aaaa',
          bb:'bbbb'
        }
      ],
      meg:[1,2,3,'a','b','c']
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:flex-start;
  text-align:left;
}
.conb {
  padding:0 10px;
  border:1px solid #ddd;
  /* .list {
    background:#ccc;
    margin-bottom:20px;
  } */
}
.zyy {
  .list {
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
    text-align:left;
    background:#ebebeb;
    margin-bottom:20px;
  }
}
</style>