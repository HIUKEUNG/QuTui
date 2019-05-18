<template>
  <div>
    <div class="wode">
      <table></table>
      <h4>我的</h4>
      <div class="touxian">
        <img src="../assets/img/xtb/avatar.png">
        <div v-if="!islogin" class="yaohuan1">
          <router-link to="/login">
            <h5>点击注册/登录</h5>
          </router-link>
          <p>赶紧登录账户玩起来吧~</p>
        </div>
        <div v-if="islogin" class="yaohuan1">
          <h5>用户{{tel}}<div class="zhuxiao" @click="zhuxiao()">注销</div></h5>
        </div>
      </div>
      <div class="qfd"></div>
      <div class="zhizuo">
        <div class="zhizuo1">
          <h3>0</h3>
          <p>制作记录</p>
        </div>
        <div class="zhizuo1">
          <h3>0</h3>
          <p>收藏夹</p>
        </div>
      </div>
    </div>
    <div class="wode1">
      <div class="wode2">
        <img src="../assets/img/xtb/ic_mainframe_mine_vip.png">
        <span>开通VIP会员</span>
        <span class="you">&gt;</span>
      </div>
      <div class="wode2">
        <img src="../assets/img/xtb/ic_mainframe_mine_service.png">
        <span>帮助中心</span>
        <span class="you">&gt;</span>
      </div>
      <div class="wode2">
        <img src="../assets/img/xtb/ic_mainframe_mine_wechat.png">
        <span>联系客服</span>
        <span class="lianxi">联系客服关注公众号:趣推管家</span>
        <span class="you">&gt;</span>
      </div>
      <div class="wode2">
        <img src="../assets/img/xtb/icon_main_mine_feedback.png">
        <span>问题反馈</span>
        <span class="you">&gt;</span>
      </div>
      <div class="wode2">
        <img src="../assets/img/xtb/ic_mainframe_mine_invite.png">
        <span>邀请好友</span>
        <span class="you">&gt;</span>
      </div>
      <div class="wode2">
        <img src="../assets/img/xtb/ic_mainframe_mine_setting.png">
        <span>设置</span>
        <span class="you">&gt;</span>
      </div>
      <div class="di"></div>
    </div>
    <index></index>
  </div>
</template>
<script>
import index from "@/components/index.vue";
export default {
  data() {
    return {
      tel: "",
      code: 0,
      islogin: false
    };
  },
  created() {
    this.$store.state.num = 3;
  //   this.setCookie('openId',123,2)
  //  if (this.getCookie('openId')) {
  //  console.log('has cookie')

  // this.zhuxiao ('openId')
  //  }else{
  //  console.log('has not cookie')
  //  }
  },
  mounted() {
    var url = "http://127.0.0.1:3000/login1";
    this.axios.get(url).then(result => {
      if (result.data.data) {
        this.tel = result.data.data[0].name;
      }
      this.code = result.data.code;
      this.hand();
    });
  },
  components: {
    index
  },
  methods: {
    zhuxiao(){
      sessionStorage.removeItem('data');
      this.$router.go(0)
    },
    hand() {
      if (!window.sessionStorage.getItem("data")) {
        this.islogin = false;
        
      } else if (this.code == 1) {
        this.islogin = true;
      }
    }
  }
};
</script>
<style scoped>
  .zhuxiao{
    /* color: white; */
    float: right;
    margin-left: 80px;
  }
</style>
