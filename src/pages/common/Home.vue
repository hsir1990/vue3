<template>
    <!-- <div id="home"> -->

    <!-- <router-view v-slot="{ Component }">
    <keep-alive>
        <component :is="Component" />
    </keep-alive>
  </router-view> -->

    <!-- <div v-for="n in 100" @click="JBtn">home</div> -->

    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
        :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
        }"
    >
        <transition name="move" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </a-layout-content>

    <!-- </div> -->
</template>

<style lang="less" scoped>
// #home {
//     font-size: 30px;
//     color: aqua;
//     // background-color: #f9f;
//     width: calc(100% - 200px);
//     height: calc(100% - 80px);
//     position: fixed;
//     top: 80px;
//     left: 200px;
//     overflow: scroll;
// }
</style>
<script>
import Echartpage from "../views/Echartpage.vue";
import Mock from "../views/Mock.vue";
import Vuex from "../views/Vuex.vue";
export default {
    //     name: "home",
    //     props: {
    //         msg: String,s
    //     },
    components: {
        Echartpage,
        Mock,
        Vuex,
    },
    data() {
        return {};
    },
    //     methods:{
    // JBtn(){
    //     this.$router.push('/layout/btn2')
    // }
    //     }
};
</script>