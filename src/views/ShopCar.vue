<template>
  <div class="shopCarContainer">
    <button class="back" @click="goBack">返回</button>

    <br>
    购物车页面
    <br>
    <br>
    <div class="searchBox">
      <span>搜索:</span>
      <input type="text" v-model="inputVal" style="width:60%;">
    </div>
    <table width="100%" class="table">
      <thead>
        <tr>
          <th>水果名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>总价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, sIndex) in searchData' :key="sIndex">
          <!-- <td v-for='(tItem, tInd) in item' :key="tInd">{{tItem}}</td> -->
          <td>{{item.fname}}</td>
          <td>
            <button class="btn-minus" @click="countMinus(sIndex)">-</button>
            <input type="text" v-model="item.count" style="width:100px;">
            <button class="btn-plus" @click="countPlus(sIndex)">+</button>
          </td>
          <td>{{'￥'+ item.price}}</td>
          <td>{{item.count * item.price + '元'}}</td>
        </tr>
        <tr>
          <td colspan="4">{{totalCount}}件商品，合计{{totalPrice}}元</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'shopcar',
  data(){
    return {
      sDatas: [
        {
          fname:'苹果',
          count: 0,
          price: '10',
          total: 0
        },
        {
          fname: '梨',
          count: 0,
          price: '6',
          total: 0
        },
        {
          fname: '香蕉',
          count: 0,
          price: '15',
          total: 0
        },
        {
          fname: '橙子',
          count: 0,
          price: '3',
          total: 0
        },
        {
          fname: '桃子',
          count: 0,
          price: '5',
          total: 0
        },
        {
          fname: '西瓜',
          count: 0,
          price: '10',
          total: 0
        },
        {
          fname: '西柚',
          count: 0,
          price: '20',
          total: 0
        }
      ],
      inputVal: ''
    }
  },
  methods:{
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    countPlus(index){ // 数量加
      this.searchData[index].count = parseInt(this.searchData[index].count) + 1
    },
    countMinus(index){ // 数量减
      if(this.searchData[index].count>0){
        this.searchData[index].count = parseInt(this.searchData[index].count) - 1
      }
    }
  },
  computed:{
    totalCount:function(){ // 合计数量
      // 累加器 reduce
      return this.searchData.reduce((total,cur)=>parseInt(total)+parseInt(cur.count), 0)
    },
    totalPrice:function(){ // 合计总价
      // 累加器 reduce
      return this.searchData.reduce((total,cur)=>parseInt(total)+parseInt(cur.price * cur.count), 0)
    },
    searchData:function(){ // sDatas 改为 searchData 即搜索结果
      return this.sDatas.filter(
        // item=>item.fname.indexOf(this.inputVal) != -1
        item=>item.fname.includes(this.inputVal)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-spacing: 0;
  th {
    background:#ccc;
  }
  th, td {
    border:1px solid #666;
    padding:5px 0;
  }
}

.btn-minus, .btn-plus {
  text-decoration: none;
  font-size:16px;
  margin:0 3px;
  border:1px solid #999;
  padding:0 5px;
  cursor:pointer;
}

</style>