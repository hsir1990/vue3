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
            <Sidebar @funceven="getson" />
            <!-- <Sidebar  /> -->
            <a-layout style="padding: 0 24px 24px">
                <Home title1="父传子" title2="父传子2" />
                <!-- <Home  /> -->
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
// import { provide } from "@vue/composition-api";  // 父组件引入 provide
export default {
    name: "layout",
    props: {
        msg: String,
    },
    data() {
        return {
            msgFormSon: "子传父成功在侧边栏",
        }
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
    methods: {
        getson(data) {
            this.msgFormSon = data;
            console.log(this.msgFormSon);
        },
    },
    // setup() {
    //     // provide('数据名称', 要传递的数据)
    //     provide("customVal", "我是父组件向子组件传递的值");
    // },
};
</script>
