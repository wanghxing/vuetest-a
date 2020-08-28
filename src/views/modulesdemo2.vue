<template>
  <div>
    <section class="joinState">
      <div class="joinStateHead">
        <span class="h3">全国改性料通讯录&nbsp;&nbsp;</span>
        <span
          class="joinStatus"
          @click="invokePushItems(item)"
          style="cursor:pointer;color:green;    text-decoration: underline;"
          >加入收藏列</span
        >
        <conditionFilter></conditionFilter>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import conditionFilter from "@/components/conditionFilter.vue";
export default {
  components: {
    conditionFilter
  },
  name: "bookDetail",
  data() {
    return {
      msg: "",
      item: {
        id: "01",
        productName: "苹果",
        price: "1.6元/斤"
      }
    };
  },
  mounted() {
    this.$store.dispatch("footerStatus/hideFooter"); // modules-demo1的isShow变为false
  },
  methods: {
    ...mapActions("collection", [
      //collection是指modules文件夹下的collection.js
      "invokePushItems" //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
    ])
  }
};
</script>
