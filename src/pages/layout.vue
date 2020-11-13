<template>
    <!-- <div id="layout">layout</div> -->
    <!-- <transition>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition> -->
    <Header  />
    <Sidebar  />
    <Home  />
    <!-- <div>{this.$store.state.count}</div> -->
</template>

<style lang="less" scoped>
#layout {
    font-size: 30px;
    color: aqua;
}
</style>
<script>
import Header from "./common/Header.vue";
import Sidebar from "./common/Sidebar.vue";
import Home from "./common/Home.vue";
export default {
    name: "layout",
    props: {
        msg: String,
    },
    components: {
        Header,
        Sidebar,
        Home,
    },
    data() {},
};
</script>
