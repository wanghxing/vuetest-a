<template>
  <div class="container">
    <div class="selectBox">
      <select v-model="prov" @change="updateCity();updateDistrict()">
        <option v-for="(v,i) in arr" :key="i">{{v.name}}</option>
      </select>

      <select v-model="city" @change="updateDistrict()">
        <option v-for="(v,i) in cityArr" :key="i">{{v.name}}</option>
      </select>

      <select v-model="district" v-if="district">
        <option v-for="(v,i) in districtArr" :key="i">{{v.name}}</option>
      </select>
    </div>
    <br>
    <x-computed></x-computed>
    <!-- <x-watch></x-watch> -->
    <br>
    <!-- 插槽内容 -->
    <x-slot>
      <div class="list">
        <span>111</span>
        <span>222</span>
        <span>333</span>
      </div>

      <div class="list" slot="slotA"  slot-scope="xslot">
        <span v-for="(item, index) in xslot.message" :key="index">{{'A+'+item.aa}}</span>
      </div>

      <div class="list" slot="slotB"  slot-scope="xslot">
        <span v-for="(item, index) in xslot.message" :key="index">{{'B&'+item}}</span>
      </div>
    </x-slot>

  </div>
</template>
<script>
import {arrAll} from "../assets/js/area.js";
// console.log(arrAll)

import Xcomputed from "./Xcomputed.vue";
/*
插槽的使用其实是很简单
首先要明白插槽是使用在子组件中的，
2、插槽是为了将父组件中的子组件模板数据正常显示
 */
import Xslot from '@/components/Xslot.vue';

export default {
 name:'pick-area',
 data(){
   return {
     arr: arrAll,
     prov:"北京",
     city:"请选择",
     district:"请选择",
     cityArr: [],
     districtArr: []
   }
 },
 components:{
   'x-computed':Xcomputed,
    //  'x-watch':Xwatch
    'x-slot':Xslot
 },
 methods:{
    updateCity(){
      if(this.arr){
        this.arr.forEach(item => {
          if(item.name == this.prov) {
            this.cityArr = item.sub;
          }
        });
        this.city = this.cityArr[0].name;
      }
    },
    updateDistrict(){
      if(this.cityArr){
        this.cityArr.forEach(item => {
          if(item.name == this.city) {
            this.districtArr = item.sub;
          }
        });
      // this.district = this.districtArr[0].name;
      this.districtArr && this.districtArr.length>0 ?
                          this.district = this.districtArr[0].name : this.district = "";
      }
    }
 },
 mounted(){
   this.updateCity();
   this.updateDistrict();
 }
}
</script>

<style lang="scss" scoped>
.list {
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  text-align:center;
  background:#ebebeb;
  margin-bottom:20px;
  span {
    padding: 0 5px;
  }
}
</style>