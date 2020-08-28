<template>
  <!-- v-cloak 见：https://www.jianshu.com/p/f56cde007210?utm_source=oschina-app -->
  <!-- 当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码。我们可以使用 v-cloak 指令来解决这一问题。 -->
  <!-- 在简单项目中，使用 v-cloak 指令是解决屏幕闪动的好方法。但在大型、工程化的项目中（webpack、vue-router）只有一个空的 div 元素，元素中的内容是通过路由挂载来实现的，这时我们就不需要用到 v-cloak 指令咯。 -->
  <div class="container" v-cloak>
    <!-- https://www.cnblogs.com/divtab/p/10940770.html -->
    <div>过滤前：{{ date }}</div>
    <br />
    <div>过滤后：{{ date | formatDate("YYYY-MM-DD HH:mm:ss") }}</div>
    <br />
    <div style="padding-left:18%;">当天时间信息格式化展示：</div>
    <div
      class="timeShow"
      style="margin:2% 18% 0;padding:2%; border:1px solid green;"
    >
      <div class="time">{{ now | formatDate("HH:mm") }}</div>
      <div class="dateWeek">
        <span class="date">{{ date | formatDate("MM月DD日") }}</span>
        <span class="week">{{ Week }}</span>
      </div>
      <div class="nlyear">{{ NlYear }}</div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import {
  // lunar,
  getLunarDate,
  getLunarDateString
} from "../assets/js/getLunarCalendar.js";

let nowDay = moment(); // new Date();
let week = "星期" + "日一二三四五六".charAt(nowDay.day());
//  农历日期
let year = nowDay.year();
let month = nowDay.month() + 1;
let day = nowDay.date();
let lunarDate = getLunarDate(year + "-" + month + "-" + day); // '2019-11-8'
let lunarDateString = getLunarDateString(lunarDate);
let nlyear =
  lunarDateString.tg +
  lunarDateString.dz +
  "年" +
  lunarDateString.month +
  "月" +
  lunarDateString.day;
export default {
  name: "filter-demo",
  data() {
    return {
      now: nowDay,
      date: nowDay,
      Week: week,
      NlYear: nlyear
    };
  },
  filters: {
    formatDate(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
      return moment(dataStr).format(pattern);
    }
  }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none !important;
}
.container {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: middle;
  text-align: left;
}
</style>
