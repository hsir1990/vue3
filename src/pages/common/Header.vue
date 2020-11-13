<template>
    <div id="header">header
         <!--不清楚为啥放在句首就不能使用-->
        <!-- {{ this.$store.state.count }} -->
        {{ countss }}
       
        {{ this.$store.state.count }}
        
        {{ this.$store.getters.getCount }}
        <button @click="add">+</button>
        <button @click="del">-</button>
    </div>
</template>

<style lang="less" scoped>
#header{
    font-size: 30px;
    color: aqua;
    // background-color: #ff0;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
}
</style>
<script>
import {mapState, mapGetters, mapActions} from "vuex"
export default {
    name: "header",
    props: {
        msg: String,
    },
    // data() {
    //     return{
    //         sss:this.$store.state.count
    //     }
        
    // },
    data() {
        // function aa() {
        //     // debugger
        //     // alert(11)
        // }
        // aa();
        return {
            countss: this.$store.state.count,
            // cats: [{
            //         name: "cat1",
            //         age: 11,
            //     },
            //     {
            //         name: "cat2",
            //         age: 22,
            //     },
            //     {
            //         name: "cat3",
            //         age: 33,
            //     },
            // ],
        };
    },
    methods:{
        add(){
            //mutation
            // this.$store.commit('addCount',1)
            //Actions 
            this.$store.dispatch('getAddCount',1)
        },
        del(){
            //mutation
            // this.$store.commit('delCount',1)
            //Actions 
            this.$store.dispatch('getDelCount',1)
        },
        sss(){
            console.log(`1111111-----this.$store.state.count`+this.$store.state.count)
        },
        
    },
    created(){
            // 获取tree结构
            this.sss()
            
        },
    computed:{
        
        //通过配合 ... 拓展符号
        ...mapState({
            count1:state=>state.count
        }),
        ...mapGetters([
            'getCount',
            'isShow'
        ]),
    }


};
</script>