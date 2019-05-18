<template>
  <div class="dlu">
    <div class="header">
      <router-link to="/my">
        <img src="../assets/img/xtb/ic_login_close.png">
      </router-link>
      <span class="dl">登录</span>
      <table></table>
      <router-link to="/registe">
        <span class="zc">去注册</span>
      </router-link>
    </div>
    <div class="dxin1">
      <div class="dxin" @click="dxin1()" :class="dx==true?'':'huoqu'">短信登录</div>
      <div class="dxin" @click="dxin2()" :class="zc==true?'':'huoqu'">密码登录</div>
      <div class="qfd"></div>
    </div>
    <div class="put" :class="zc==true?'':'out'">
      <mt-field label="手机号" placeholder="输入手机号"></mt-field>
      <mt-field label="验证码" placeholder="输入验证码"></mt-field>
      <div class="yzm">
        <p>获取验证码</p>
      </div>
      <button class="btn-dl">登录</button>
    </div>
    <div class="put" :class="dx==true?'':'out'">
      <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="tel"></mt-field>
      <mt-field class="mm" label="密码" placeholder="输入密码" type="password" v-model="pwd"></mt-field>
      <button :class="'btn-dl '+(value?'lt':'')" @click="btnLogin">登录</button>
      <a href>忘记密码?</a>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      tel: "", //双向绑定手机号
      pwd: "", //双向绑定密码
      dx: true,
      zc: false,
      value:false
    };
  },
  created() {
    this.$store.state.tel = this.tel;
  },
  watch: {
    tel: function(newv, oldv) {
      if(newv!==oldv){
          this.value = this.pwd != ""
      }
    },
    pwd:function(newv,oldv){
        if(newv!==oldv){
          this.value = this.tel != ""
      }
    }
  },
  methods: {
    dxin1() {
      this.dx = false;
      this.zc = true;
    },
    dxin2() {
      this.dx = true;
      this.zc = false;
    },
    btnLogin() {
      //功能：获取用户输入用户名和密码
      //验证如果通过发送ajax请求给服务器
      //程序并且获得返回结果
      console.log(11);
      // 1:获取用户输入用户名和密码
      var t = this.tel;
      var p = this.pwd;
      // console.log("2:" + t + ":" + p);
      // 2:创建正则表达式
      //     电话 1开头 第二位3~9 后面9位 一共13位
      var treg = /^[1]([3-9])[0-9]{9}$/;
      //     密码 数字  3~8
      var preg = /^[0-9]{3,8}$/;
      // 3:验证用户名如果失败  提示错误信息
      if (!treg.test(t)) {
        //2.1:验证手机如果失败 提示错误信息
        this.$toast("手机验证错误");
        return;
      }
      // 4:验证密码如果失败    提示错误信息
      if (!preg.test(p)) {
        //2.2验证密码如果失败 提示错误信息
        this.$toast("密码验证错误");
        return;
      }
      // 5:发送ajax请求 http://127.0.0.1:300/login
      var url = "http://127.0.0.1:3000/login?name=" + t + "&pwd=" + p;
      this.axios.get(url).then(result => {
         console.log(result);
        // console.log("服务器返回结果");
        if (result.data.code == 1) {
          this.$toast("登录成功");
          setTimeout(function() {
            location.href = "http://127.0.0.1:8080/my";
          }, 1000);
          var tid=result.data.res[0].id;
          var ses=window.sessionStorage;
          ses.setItem("data",tid);
          var ntid=window.sessionStorage.data;
        } else {
          this.$toast("密码有误");
        }
      });
      // 6:获取返回结果
      // 7:提示登录成功或者用户名 密码有误
    }
  }
};
</script>
<style scoped>
.huoqu {
  color: #333;
  border-bottom: 2px solid #f83b3f;
}
.out {
  display: none;
}
.lt{
    background-color: red;
}
</style>
