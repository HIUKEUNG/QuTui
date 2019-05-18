<template>
    <div>
        <router-link to="/home">
            <div class="fhui">&lt;</div>
        </router-link>
        <mt-search v-model.trim="value" autofocus="autofocus" cancel-text="取消" placeholder="搜索">
        </mt-search>
        <div class="a">
            <div class="search" v-for="tmp of list" :key=tmp.i>
                <img :src="`http://127.0.0.1:3000/`+tmp.dimg">
            </div>
        </div>
        <button v-if="this.list.length>7" class="search1" @click="search()">点我加载更多哦</button>
        <div v-if="this.list.length>7" class="top1" @click="top()">
            <img src="../assets/img/ding.png" alt="">
        </div>
    </div>
</template>
<script>
const delay = (function() {
		let timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();
export default {
    data() {
        return {
            value:"",
            list:[],
            pno:1,
            hasMore:true
        }
    },
    created() {
        // var d1=document.getElementById("d1");
        // this.loadMore();
        // this.title()
    },
     watch: {
    //watch title change
        value(){
            delay(() => {
            this.loadMore();
            }, 300);
        },
    },
    methods: {
        loadMore(){
            var v=this.value;
            var url="http://127.0.0.1:3000/search?key="+v;
            this.axios.get(url).then(result=>{
            if(v.length==0){
                return;
            }else{
                this.list=result.data.data;
                console.log(result);
            }
        })
        },
        search(){
            //加载下一页数据
            var v=this.value;
            this.pno++;
            //1:创建url请求地址
            var url="http://127.0.0.1:3000/search?key="+v+"&pno="+this.pno;
            this.axios.get(url).then(result=>{
                this.list=this.list.concat(result.data.data);
            })
        },
        top(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    },
}
</script>
<style scoped>

</style>
