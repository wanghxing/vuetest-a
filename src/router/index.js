import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Play from "../views/Play.vue";
import Xstore from "../views/Xstore.vue";

// vue过滤器
import Filterdemo from "../views/Filterdemo";
// axios
import Axiosdemo from "../views/Axiosdemo";
// mock+vue用法
import newsIndex from "@/views/news/Index";
import newsDetail from "@/views/news/Newsdetail";

import ShopCar from "../views/ShopCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/play",
    name: "play",
    component: Play
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/xstore",
    name: "xstore",
    component: Xstore
  },
  {
    path: "/modules-demo1",
    name: "modules-demo1",
    component: () =>
      import(/* webpackChunkName: "modules" */ "../views/modulesdemo1.vue"),
    children: [
      {
        path: "/son1",
        name: "son1",
        component: () =>
          import(
            /* webpackChunkName: "moduleson" */ "../views/modulesson/son1.vue"
          )
      },
      {
        path: "/son2",
        name: "son2",
        component: () =>
          import(
            /* webpackChunkName: "moduleson" */ "../views/modulesson/son2.vue"
          )
      }
    ]
  },
  {
    path: "/modules-demo2",
    name: "modules-demo2",
    component: () =>
      import(/* webpackChunkName: "modules" */ "../views/modulesdemo2.vue")
  },
  {
    path: "/filter-demo",
    name: "filter-demo",
    component: Filterdemo
  },
  {
    path: "/axios-demo",
    name: "axios-demo",
    component: Axiosdemo
  },
  // mock+vue
  {
    path: "/news-index",
    name: "news-index",
    component: newsIndex
  },
  // mock+vue newsDetail
  {
    path: "/news-detail",
    name: "news-detail",
    component: newsDetail
  },
  {
    path: "/pick-area",
    name: "pick-area",
    component: () =>
      import(/* webpackChunkName: "eg" */ "../views/Pickarea.vue")
  },
  {
    path: "/shop-car",
    name: "shopcar",
    component: ShopCar
  }
];

const router = new VueRouter({
  routes
});

export default router;