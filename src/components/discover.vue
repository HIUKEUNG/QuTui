<template>
    <div>
        <div class="discover">
            <table></table>
            <h2>发现</h2>
        </div>
        <table></table>
        <div class="dh">
            <div class="dh1">
                <img src="../assets/img/xtb/video2.png" alt="">
                <p>拍摄视频</p>
            </div>
            <div class="dh1">
                <img src="../assets/img/xtb/video3.png" alt="">
                <p>剪辑视频</p>
            </div>
            <div class="dh1">
                <img src="../assets/img/xtb/video4.png" alt="">
                <p>照片MV</p>
            </div>
            <div class="dh1">
                <img class="dh2" src="../assets/img/xtb/video5.png" alt="">
                <p>微信小视频</p>
            </div>
        </div>
        <div class="xq">
            <div class="xxk">
                <div class="xxk1" @click="tj()" :class="tj1==true?'':'active1'">推荐</div>
                <div class="xxk1" @click="sc()" :class="sc1==true?'':'active1'">素材库</div>
                <div class="xxk1" @click="sp()" :class="sp1==true?'':'active1'">视频课堂</div>
                <div class="xxk1" @click="rm()" :class="rm1==true?'':'active1'">热门视频素材</div>
                <div class="xxk1" @click="kx()" :class="kx1==true?'':'active1'">抠像素材</div>
            </div>
            <!-- 推荐 -->
            <div class="nr1 " :class="tj1==true?'':'active'">
                <div id="content">
                    <mt-loadmore  ref="loadmore" :bottom-method="loadBottom" :buttom-all-loaded="bottomAllLoaded" :autoFill="false" >
                        <div class="nr" v-for="tmp of Slist">
                            <div class="sucai">
                                <img class="sucai1" src="../assets/img/xtb/sucai.png">
                            </div>
                            <div class="sucai2">
                                <p class="p1">素材库</p>
                                <p class="p2">{{tmp.mtext}}</p>
                                <video autoplay muted loop class="video" :src="`http://127.0.0.1:3000/`+tmp.mvideo"></video>
                                <div class="xiafang">
                                    <div class="xiafang1">
                                        <img src="../assets/img/xtb/doupai_timeline_save.png">
                                    <span>保存素材</span>
                                    </div>
                                    <div class="xiafang2">
                                        <img src="../assets/img/xtb/btn_discover_item_like_normal.png">
                                    <span>{{tmp.mlike}}</span>
                                    </div>
                                    <div class="xiafang2">
                                        <img src="../assets/img/xtb/btn_common_share_big_new.png">
                                    </div>
                                    <div class="qfd"></div>
                                </div>
                                </div>
                            <div class="qfd"></div>
                        </div>
                    </mt-loadmore>
                </div>
                <div class="nr2"></div>
            </div>
            <!-- 素材库 -->
            <div class="nr1" :class="sc1==true?'':'active'">
                <div class="nr" v-for="tmp of Slist">
                    <div class="sucai">
                        <img class="sucai1" src="../assets/img/xtb/sucai.png">
                    </div>
                    <div class="sucai2">
                        <p class="p1">素材库</p>
                        <p class="p2">{{tmp.mtext}}</p>
                        <video autoplay muted loop class="video" :src="`http://127.0.0.1:3000/`+tmp.mvideo"></video>
                        <div class="xiafang">
                            <div class="xiafang1">
                                <img src="../assets/img/xtb/doupai_timeline_save.png">
                            <span>保存素材</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_discover_item_like_normal.png">
                            <span>{{tmp.mlike}}</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_common_share_big_new.png">
                            </div>
                            <div class="qfd"></div>
                        </div>
                        </div>
                    <div class="qfd"></div>
                </div>
                <button class="btn" @click="loadMore0">点我加载更多</button>
                <div class="nr2"></div>
            </div>
            <!-- 视频课堂 -->
            <div class="nr1" :class="sp1==true?'':'active'">
                <div class="nr" v-for="tmp of Vlist">
                    <div class="sucai">
                        <img class="sucai1" src="../assets/img/xtb/video1.png">
                    </div>
                    <div class="sucai2">
                        <p class="p1">视频课堂</p>
                        <p class="p2">{{tmp.ctext}}</p>
                        <video autoplay muted loop class="video" :src="`http://127.0.0.1:3000/`+tmp.cvideo"></video>
                        <div class="xiafang">
                            <div class="xiafang1">
                                <img src="../assets/img/xtb/doupai_timeline_save.png">
                            <span>保存素材</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_discover_item_like_normal.png">
                            <span>{{tmp.clike}}</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_common_share_big_new.png">
                            </div>
                            <div class="qfd"></div>
                        </div>
                        </div>
                    <div class="qfd"></div>
                </div>
                <button class="btn" @click="loadMore1">点我加载更多</button>
                <div class="nr2"></div>
            </div>
            <!-- 热门视频素材 -->
            <div class="nr1" :class="rm1==true?'':'active'">
                <div class="nr" v-for="tmp of Rlist">
                    <div class="sucai">
                        <img class="sucai1" src="../assets/img/xtb/sucai.png">
                    </div>
                    <div class="sucai2">
                        <p class="p1">视频素材库</p>
                        <p class="p2">{{tmp.htext}}<br>{{tmp.htext1}}</p>
                        <video autoplay muted loop class="video" :src="`http://127.0.0.1:3000/`+tmp.hvideo"></video>
                        <div class="xiafang">
                            <div class="xiafang1">
                                <img src="../assets/img/xtb/doupai_timeline_save.png">
                            <span>保存素材</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_discover_item_like_normal.png">
                            <span>{{tmp.hlike}}</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_common_share_big_new.png">
                            </div>
                            <div class="qfd"></div>
                        </div>
                        </div>
                    <div class="qfd"></div>
                </div>
                <button class="btn" @click="loadMore2">点我加载更多</button>
                <div class="nr2"></div>
            </div>
            <!-- 抠像素材 -->
            <div class="nr1" :class="kx1==true?'':'active'">
                <div class="nr" v-for="tmp of Klist">
                    <div class="sucai">
                        <img class="sucai1" src="../assets/img/xtb/video.png">
                    </div>
                    <div class="sucai2">
                        <p class="p1">抠像素材</p>
                        <p class="p2">{{tmp.matext}}</p>
                        <video autoplay muted loop class="video" :src="`http://127.0.0.1:3000/`+tmp.mavideo"></video>
                        <div class="xiafang">
                            <div class="xiafang1">
                                <img src="../assets/img/xtb/doupai_timeline_save.png">
                            <span>保存素材</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_discover_item_like_normal.png">
                            <span>{{tmp.malike}}</span>
                            </div>
                            <div class="xiafang2">
                                <img src="../assets/img/xtb/btn_common_share_big_new.png">
                            </div>
                            <div class="qfd"></div>
                        </div>
                        </div>
                    <div class="qfd"></div>
                </div>
                <button class="btn" @click="loadMore3">点我加载更多</button>
                <div class="nr2"></div>
            </div>
        </div>
        <index></index>
    </div>
</template>
<script>
import index from '@/components/index.vue'
export default {
    data() {
        return {
            bottomAllLoaded:false,
            tj1:false,
            sc1:true,
            sp1:true,
            rm1:true,
            kx1:true,
            Slist:[],
            Vlist:[],
            Rlist:[],
            Klist:[],
            pno:1,
            pno1:1,
            pno2:1,
            pno3:1,
            hasMore0:true,
            hasMore1:true,
            hasMore2:true,
            hasMore3:true,
        }
    },    
    created(){
        this.$store.state.num = 2;
        //素材库 推荐
        var url="http://127.0.0.1:3000/discover/material";
        this.axios.get(url).then(result=>{
            this.Slist=result.data.data;
        })
        //视频课堂
        var url="http://127.0.0.1:3000/discover/coaching";
        this.axios.get(url).then(result=>{
            this.Vlist=result.data.data;
        })
        //热门视频
        var url="http://127.0.0.1:3000/discover/hot";
        this.axios.get(url).then(result=>{
            this.Rlist=result.data.data;
        })
        //抠像素材
        var url="http://127.0.0.1:3000/discover/matte";
        this.axios.get(url).then(result=>{
            this.Klist=result.data.data;
        })
    },
    components:{
        index,
    },
    methods: {
        loadBottom(){
            this.$refs.loadmore.onBottomLoaded();
            this.loadMore0()
        },
        //素材库与推荐
        loadMore0(){
            //如果没有下一页数据，提示停止执行
            if(this.hasMore==false){
                this.$toast("没有更多数据了...");
                return;
            }
            //加载下一页数据
            this.pno++;
            //1:创建url请求地址
            var url="http://127.0.0.1:3000/discover/material?pno="+this.pno;
            this.axios.get(url).then(result=>{
                this.Slist=this.Slist.concat(result.data.data);
                console.log(this.Slist);
                if(this.pno>=result.data.pageCount){
                    this.hasMore=false;
                }
            })
        },
        //视频课堂
        loadMore1(){
            if(this.hasMore1==false){
                this.$toast("没有更多数据了...");
                return;
            }
            this.pno1++;
            var url="http://127.0.0.1:3000/discover/coaching?pno="+this.pno1;
            this.axios.get(url).then(result=>{
                this.Vlist=this.Vlist.concat(result.data.data);
                if(this.pno1>=result.data.pageCount){
                    this.hasMore1=false;
                }
            })
        },
        //热门视频
        loadMore2(){
            if(this.hasMore2==false){
                this.$toast("没有更多数据了...");
                return;
            }
            this.pno2++;
            var url="http://127.0.0.1:3000/discover/hot?pno="+this.pno2;
            this.axios.get(url).then(result=>{
                this.Rlist=this.Rlist.concat(result.data.data);
                if(this.pno2>=result.data.pageCount){
                    this.hasMore2=false;
                }
            })
        },
        //抠像素材
        loadMore3(){
            if(this.hasMore3==false){
                this.$toast("没有更多数据了...");
                return;
            }
            this.pno3++;
            var url="http://127.0.0.1:3000/discover/matte?pno="+this.pno3;
            this.axios.get(url).then(result=>{
                this.Klist=this.Klist.concat(result.data.data);
                if(this.pno3>=result.data.pageCount){
                    this.hasMore3=false;
                }
            })
        },
        tj(){
            this.tj1=false
            this.sc1=true
            this.sp1=true
            this.rm1=true
            this.kx1=true
        },
        sc(){
            this.tj1=true
            this.sc1=false
            this.sp1=true
            this.rm1=true
            this.kx1=true
        },
        sp(){
            this.tj1=true
            this.sc1=true
            this.sp1=false
            this.rm1=true
            this.kx1=true
        },
        rm(){
            this.tj1=true
            this.sc1=true
            this.sp1=true
            this.rm1=false
            this.kx1=true
        },
        kx(){
            this.tj1=true
            this.sc1=true
            this.sp1=true
            this.rm1=true
            this.kx1=false
        },
    },
}
</script>
<style scoped>
    #content{
            overflow: scroll;
        }
    .nr1{
        display: none;
    }
    .active{
        display: block;   
    }
    .active1{
        color: red;
    }
    
</style>
