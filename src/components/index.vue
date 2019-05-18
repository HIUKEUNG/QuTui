<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home" >
                    <span class="mui-icon mui-icon-qutui" :class="change==1?'qutui1':''"></span>
				    <span class="mui-tab-label" :class="change==1?'tonyi':''">趣推</span>
			</router-link>
			<router-link class="mui-tab-item"  to="/discover">
                    <span class="mui-icon mui-icon-faxian" :class="change==2?'faxian1':''"></span>
				    <span class="mui-tab-label" :class="change==2?'tonyi':''">发现</span>
			</router-link>
			<router-link class="mui-tab-item"  to="/my">
                    <span class="mui-icon mui-icon-wode" :class="change==3?'woded1':''"></span>
				<span class="mui-tab-label" :class="change==3?'tonyi':''">我的</span>
			</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            change:"",
        }
    },
    created(){
        this.change = this.$store.state.num;
    },
}
</script>
<style scoped>
    * { 
        touch-action: none; 
    }
    .mui-icon-qutui{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_mall_normal.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .qutui1{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_mall_pressed.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .mui-icon-faxian{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_discover_normal.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .faxian1{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_discover_pressed.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .mui-icon-wode{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_mine_normal.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .woded1{
        background: url(../drawable-xxhdpi-v4/ic_main_tab_mine_pressed.png) no-repeat;
        background-size: cover;
        margin-top: 1px;
    }
    .tonyi{
        color:#fa4345;
    }
    .mui-tab-label{
        margin-top: 3px;
        margin-bottom: 2px;
    }
    .app-container .mui-bar{
        box-shadow:0 0 0 #fff;
        background: #f5f9f8;
    }
    .mui-bar-tab .mui-tab-item.mui-active{
        color:hsl(hue, saturation, lightness);
    }
</style>
