<template>
  <div class="container">
    <!-- <br>
    <button class="back" @click="goBack">返回</button>
    <br> -->
    <h2>{{ msg }}</h2>
    <div class="tl infoBox">
      <h4 style="margin-bottom:2%">获取到的json数据内容：</h4>
      <p>{{ info }}</p>
    </div>

    <hr>

    <div class="tl infoBox axiosBox">
      <h1>Bitcoin Price Index</h1>

      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div
          v-else
          v-for="(currency, cIdx) in info"
            :key="cIdx"
          class="currency"
        >
          <label for="" class="lab">{{ currency.description }}:</label>
          <span class="lighten">
            <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
          </span>
        </div>

      </section>
    </div>

    <hr>
    <button class="link" @click="goToList">进入新闻列表页</button>
  </div>
</template>

<script>

import axios from "axios"
/* import {} from '@/api/common'; */
export default {
  name: 'AxiosDemo',
  data () {
    return {
      msg: 'this is a demo page',
      info: null,
      timestamp: 1558365345000,
      errored:false,
      loading:true,
      res1: '',
      res2: ''
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  methods:{
    /* goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }, */
    goToList(){
      this.$router.push('/news-index');
    },
    getData() {
      var _this = this;
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (_this.info = response.data.bpi))
      .catch(error => {
        console.log(error)
        _this.errored = true
      })
      .finally(() => _this.loading = false);
    }
  },
  mounted () {
    this.getData()

  }
}

// Vue.prototype.$axios = axios;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  border:none;
  background: none;
  text-decoration: underline;
}
.tl {
  text-align:left;
}
.infoBox {
  padding:5%;
}
.axiosBox {
  .lab {
    display:inline-block;
    text-align:right;
    width:50%;
    margin-right:2%;
  }
  .lighten {
    font-weight:bold;
  }
}

.link {
  width:80%;
  padding:2% 0;
}
</style>

