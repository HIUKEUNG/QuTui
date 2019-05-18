<template>
    <div class="all">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">视频</mt-tab-item>
            <mt-tab-item id="2">图片</mt-tab-item>
            <mt-tab-item id="3">GIF</mt-tab-item>
            <router-link to="/search">
                <div class="sou">
                <img class="sou1" src="../drawable-xxhdpi-v4/sou.png">
                <p>五一</p>
            </div>
            </router-link>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-swipe :show-indicators="false">
                    <mt-swipe-item v-for="item of list" :key="item.i">
                        <img class="img1" :src="`http://127.0.0.1:3000/`+item.dimg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="tubiao">
                    <div class="tubiao1">
                        <img class="sou2" src="../assets/img/qb.png">
                        <img class="sou2" src="../assets/img/jr.png">
                        <img class="sou2" src="../assets/img/fc.png">
                        <img class="sou2" src="../assets/img/sj.png">
                        <img class="sou2" src="../assets/img/sr.png">
                        <img class="sou2" src="../assets/img/cy.png">
                        <img class="sou2" src="../assets/img/mf.png">
                        <img class="sou2" src="../assets/img/za.png">
                        <img class="sou2" src="../assets/img/dt.png">
                        <img class="sou2" src="../assets/img/kx.png">
                        <img class="sou2" src="../assets/img/qbhj.png">
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">每日最新</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list1" :key="item.i">
                            <img class="sou3" :src="`http://127.0.0.1:3000/`+item.dimg">
                        </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">热门爆款-大家都在做</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list2" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.fimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png"> 
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">书本励志-人生的加油站</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list3" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">美妆美甲-时尚美丽动人展示</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list4" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">代理招聘-招人更轻松</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list5" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">团队培训-打造精英团队必备</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list6" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">真人代言-超美小姐姐为你服务</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list7" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">抖音神曲-超火音乐快闪</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list8" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">实景广告-高逼格真实场景</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list9" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">技术流-玩转酷炫特效</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list10" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="last">
                    <p class="meiyou">没有更多内容了</p> 
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="tubiao">
                    <div class="tubiao1">
                        <img class="sou2" src="../assets/img/wh.png">
                        <img class="sou2" src="../assets/img/wx.png">
                        <img class="sou2" src="../assets/img/py.png">
                        <img class="sou2" src="../assets/img/eg.png">
                        <img class="sou2" src="../assets/img/td.png">
                        <img class="sou2" src="../assets/img/sjsp.png">
                        <img class="sou2" src="../assets/img/qbhj.png">
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">五月节日海报大集合</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list6" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">房产模板-让卖房更真实简单</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list8" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">让你的壁纸与众不同</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list7" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">每日问候-睡前梦醒我都在呢</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list8" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">微信头像-高端大气展现实力</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list11" :key=item.i>
                                <img class="sou4" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou4" src="../assets/img/ztu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">朋友圈封面-完美印象精准打造</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list12" :key=item.i>
                                <img class="sou4" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou4" src="../assets/img/ztu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">实景广告牌-让广告有趣起来</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <img class="sou5" src="../assets/img/sm/sm (1).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (2).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (3).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (4).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (5).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (6).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (7).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (8).jpg">
                            <img class="sou5" src="../assets/img/sm/sm (9).jpg">
                            <img class="sou5" src="../assets/img/ctu.png">
                        </div>
                    </div>
                    
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">恶搞逗趣-让社交圈有趣起来</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list5" :key=item.i>
                                <img class="sou3" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou3" src="../assets/img/cctu.png">
                        </div>
                    </div>
                </div>
                <div class="last">
                    <p class="meiyou">没有更多内容了</p> 
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="tubiao">
                    <div class="tubiao1">
                        <img class="sou2" src="../assets/img/wh.png">
                        <img class="sou2" src="../assets/img/mh.png">
                        <img class="sou2" src="../assets/img/gx.png">
                        <img class="sou2" src="../assets/img/qbhj.png">
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">今日最热-热门有趣搞起来</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list13" :key=item.i>
                                <img class="sou4" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou4" src="../assets/img/ztu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">小妹妹在线卖萌-早晚都在哦</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list14" :key=item.i>
                                <img class="sou4" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou4" src="../assets/img/ztu.png">
                        </div>
                    </div>
                </div>
                <div class="liebiao">
                    <div class="nice">
                        <p class="nice1">汝之秀-吾不及之</p>
                        <p class="nice2">查看全部 &gt;</p>
                    </div>
                    <div class="tu">
                        <div class="tu1">
                            <div v-for="item of list15" :key=item.i>
                                <img class="sou4" :src="`http://127.0.0.1:3000/`+item.bimg">
                            </div>
                            <img class="sou4" src="../assets/img/ztu.png">
                        </div>
                    </div>
                </div>
                <div class="last1">
                    <p class="meiyou">没有更多内容了</p> 
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
		<index></index>
        <div class="top1" @click="top()">
            <img src="../assets/img/ding.png" alt="">
        </div>
    </div>
</template>
<script>
import index from '@/components/index.vue'
export default {
    data() {
        return {
            selected:'1',
            value:"",
            list:[],
            list1:[],
            list2:[],
            list3:[],
            list4:[],
            list5:[],
            list6:[],
            list7:[],
            list8:[],
            list9:[],
            list10:[],
            list11:[],
            list12:[],
            list13:[],
            list14:[],
            list15:[],
        }
    },
    
    created(){
        this.$store.state.num = 1;
        this.loadMore();
        this.loadMore1();
        this.loadMore2();
        this.loadMore3();
        this.loadMore4();
        this.loadMore5();
        this.loadMore6();
        this.loadMore7();
        this.loadMore8();
        this.loadMore9();
        this.loadMore10();
        this.loadMore11();
        this.loadMore12();
        this.loadMore13();
        this.loadMore14();
        this.loadMore15();
    },
    components:{
        index,
    },
    methods: {
        loadMore(){
        var url="http://127.0.0.1:3000/imglist";
        this.axios.get(url).then(result=>{
            this.list=result.data.data;
        })
        },
        loadMore1(){
        var url="http://127.0.0.1:3000/home/daily";
        this.axios.get(url).then(result=>{
            this.list1=result.data.data;
        })
        },
        loadMore2(){
        var url="http://127.0.0.1:3000/home/fashion";
        this.axios.get(url).then(result=>{
            this.list2=result.data.data;
        })
        },
        loadMore3(){
        var url="http://127.0.0.1:3000/home/bookpaper";
        this.axios.get(url).then(result=>{
            this.list3=result.data.data;
        })
        },
        loadMore4(){
        var url="http://127.0.0.1:3000/home/huoying";
        this.axios.get(url).then(result=>{
            this.list4=result.data.data;
        })
        },
        loadMore5(){
        var url="http://127.0.0.1:3000/home/happyboy";
        this.axios.get(url).then(result=>{
            this.list5=result.data.data;
        })
        },
        loadMore6(){
        var url="http://127.0.0.1:3000/home/donman";
        this.axios.get(url).then(result=>{
            this.list6=result.data.data;
        })
        },
        loadMore7(){
        var url="http://127.0.0.1:3000/home/luffy";
        this.axios.get(url).then(result=>{
            this.list7=result.data.data;
        })
        },
        loadMore8(){
        var url="http://127.0.0.1:3000/home/panhu";
        this.axios.get(url).then(result=>{
            this.list8=result.data.data;
        })
        },
        loadMore9(){
        var url="http://127.0.0.1:3000/home/avenger";
        this.axios.get(url).then(result=>{
            this.list9=result.data.data;
        })
        },
        loadMore10(){
        var url="http://127.0.0.1:3000/home/wang";
        this.axios.get(url).then(result=>{
            this.list10=result.data.data;
        })
        },
        loadMore11(){
        var url="http://127.0.0.1:3000/home/touhui";
        this.axios.get(url).then(result=>{
            this.list11=result.data.data;
        })
        },
        loadMore12(){
        var url="http://127.0.0.1:3000/home/pyqbjt";
        this.axios.get(url).then(result=>{
            this.list12=result.data.data;
        })
        },
        loadMore13(){
        var url="http://127.0.0.1:3000/home/cxk";
        this.axios.get(url).then(result=>{
            this.list13=result.data.data;
        })
        },
        loadMore14(){
        var url="http://127.0.0.1:3000/home/sister";
        this.axios.get(url).then(result=>{
            this.list14=result.data.data;
        })
        },
        loadMore15(){
        var url="http://127.0.0.1:3000/home/bqb";
        this.axios.get(url).then(result=>{
            this.list15=result.data.data;
        })
        },
        top(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }, 
}
</script>
<style scoped>
.mui-control-content {
	background-color: white;
	min-height: 215px;
}
.mui-control-content .mui-loading {
	margin-top: 50px;
}
.mint-swipe{
    height: 120px;
}
.img1{
    width:100%;
}
.mint-navbar .mint-tab-item.is-selected{
    border: 0;
    margin-bottom: 0;
    color: black;
}
.mint-tab-item{
    flex:none;
    width: 50px;
    border-bottom: 0px;
    float: left;
    color: black;
}
</style>
