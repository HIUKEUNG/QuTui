import Vue from 'vue'
import Router from 'vue-router'
import index from "./components/index.vue"
import my from "./components/my.vue"
import discover from "./components/discover.vue"
import home from "./components/home.vue"
import login from "./components/login.vue"
import registe from "./components/registe.vue"
import search from "./components/search.vue"
import lianxi from "./components/lianxi.vue"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path:'',component:home},
    {path:'/lianxi',component:lianxi},
    {path:'/search',component:search},
    {path:'/registe',component:registe},
    {path:'/login',component:login},
    {path:'/index',component:index},
    {path:'/my',component:my},
    {path:'/discover', component:discover},
    {path:'/home',component:home},
  ]
})
