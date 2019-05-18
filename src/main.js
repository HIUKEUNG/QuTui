import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import store from '@/store.js'
import './assets/CSS/my-mint.scss'


//按需加载mint-ui组件库中一个组件Header
//1:按需引入Header
import MintUI from "mint-ui"
Vue.use(MintUI);
//2:全局注册Header
//希望Header组件可以像标签直接调用
//标签:Header.name="mt-header"
//在项目中任意组件模板都可以直接使用
// Vue.component(Header.name,Header);
// Vue.component("mt-button",Button);
//3:引入axios库 main.js
//3.1:引入axios库
import axios from "axios"
//3.2:配置跨域访问保存session中数据
axios.defaults.withCredentials=true
//3.3:将axios配置为Vue实例属性
Vue.prototype.axios = axios

//4:创建日期格式过滤器
//  4.1:创建过滤器
Vue.filter("datatimeFilter",function(val){
  // (1)创建新日期对象保存原有日期
  var now= new Date(val);
  // (2)创建三个变量保存年月日
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();
  // (3)创建三个变量保存时分秒
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  // (4)调整月份日期格式
  m<10&&(m="0"+m)
  d<10&&(d="0"+d)
  // (5)返回拼接字符串
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')