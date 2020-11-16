<template>
    <!-- <div id="layout">layout</div> -->
    <!-- <transition>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition> -->
    <!-- <Header  />
    <Sidebar  />
    <Home  /> -->
    <!-- <div>{this.$store.state.count}</div> -->
    <a-layout id="components-layout-demo-top-side-2">
        <Header />
        <a-layout>
            <Sidebar />
            <a-layout style="padding: 0 24px 24px">
                <Home />
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<style lang="less" scoped>
// #layout {
//     font-size: 30px;
//     color: aqua;
// }
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
</style>
<script>
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    // MailOutlined,
} from "@ant-design/icons-vue";
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
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
        // MailOutlined,
    },
    data() {
   
    },
};
</script>
