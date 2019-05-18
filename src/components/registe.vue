<template>
    <div class="dlu">
        <div class="header" >
            <router-link to="/my">
                <img src="../assets/img/xtb/ic_login_close.png">
            </router-link>
            <span class="dl">注册</span>
            <table></table>
            <router-link to="/login">
                <span class="zc">去登录</span>
            </router-link>
        </div>
        <div class="put" >
            <mt-field v-model="tel" label="手机号" placeholder="输入手机号"></mt-field>
            <mt-field label="验证码" placeholder="输入验证码"></mt-field>
            <mt-field v-model="pwd" type="password" class="mm" label="密码" placeholder="输入密码"></mt-field>
            <div class="yzm1">
                <p>获取验证码</p>
            </div>
            <button class="btn-dl" @click="reg()">注册</button>
            <p class="xieyi">注册表示你已同意<a>《用户协议》</a>和<a>《隐私政策》</a></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tel:"",
            pwd:""
        }
    },  
    methods: {
        reg(){
           var t=this.tel;
           var p=this.pwd; 
           //     电话 1开头 第二位3~9 后面9位 一共13位
            var treg = /^[1]([3-9])[0-9]{9}$/;
            //     密码 数字  3~8
            var preg = /^[0-9]{3,8}$/;
            // 3:验证用户名如果失败  提示错误信息
            if (!treg.test(t)) {
                //2.1:验证手机如果失败 提示错误信息
                this.$toast("请填写正确的手机格式");
                return;
            }
            // 4:验证密码如果失败    提示错误信息
            if (!preg.test(p)) {
                //2.2验证密码如果失败 提示错误信息
                this.$toast("请填写正确的密码格式");
                return;
            }
            var url="http://127.0.0.1:3000/reg?name="+t+"&pwd="+p;
            this.axios.post(url).then(result=>{
                console.log(result)
                var code=result.data.code;
                if(code==-2){
                    this.$toast("手机号已注册,可登录页登录")
                }else if(code==1){
                    this.$toast("注册成功，为您跳到登录页")
                    this.$router.push("/login")
                }
            })
        }
        
    },
}
</script>
<style scoped>

</style>
