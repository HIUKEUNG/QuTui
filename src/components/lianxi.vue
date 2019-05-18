<template>
    <div>
        <div id="content">
            <mt-loadmore  ref="loadmore" :bottom-method="loadBottom" :top-all-loaded="allLoaded" :autoFill="true" >
                <ul>
                    <li v-for="item in list">{{ item }}</li>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            allLoaded: false,
            j:1,
        }
    },
    methods: {
        loadBottom() {
            this.$refs.loadmore.onBottomLoaded();
            this.getList();
        },
        getList(){
            for(var i=1;i<=5;i++,this.j++){
                this.list.push("商品"+this.j);
            }
        },
    },
    mounted() {
        this.getList();
        // this.allLoaded=true;
    },
}
</script>
<style scoped>
    #content{
            overflow: scroll;
        }
    ul li{
            height: 100px;
            background-color: green;
            margin-bottom: 10px;
        }
</style>
