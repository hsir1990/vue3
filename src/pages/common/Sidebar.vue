<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }"
        >
            <a-sub-menu key="sub1">
                <template #title>
                    <span><user-outlined />plugs</span>
                </template>
                <a-menu-item key="1" @click="Jechart">echart</a-menu-item>
                <a-menu-item key="2" @click="Jmock">mock</a-menu-item>
                <a-menu-item key="3" @click="Jvuex">vuex</a-menu-item>
                <a-menu-item key="4" @click="ZCF"
                    >{{ userPage }}{{ this.$store.state.userPage }}</a-menu-item
                >
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span><laptop-outlined />subnav 2</span>
                </template>
                <!-- <a-menu-item key="5">{{ customVal }}</a-menu-item> -->
                <a-menu-item key="6" v-on:click="$emit('funceven', msgZ)">子传父</a-menu-item>
                <a-menu-item key="7" @click="Jloading">写个loading</a-menu-item>
                <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <template #title>
                    <span><notification-outlined />subnav 3</span>
                </template>
                <a-menu-item key="9">option9</a-menu-item>
                <a-menu-item key="10">option10</a-menu-item>
                <a-menu-item key="11">option11</a-menu-item>
                <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<style lang="less" scoped>
</style>
<script>
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons-vue";
// // 子组件导入 inject
// import { inject } from "@vue/composition-api";
export default {
    components: { UserOutlined, LaptopOutlined, NotificationOutlined },
    data() {
        return {
            selectedKeys1: ["2"],
            selectedKeys2: [this.$store.state.userPage],
            collapsed: false,
            openKeys: ["sub1"],
            userPage: this.$store.state.userPage,
            //将msg传递给父组件
            msgZ: "我是子组件传给父组件的msg",
        };
    },
    methods: {
        Jechart() {
            this.$router.push("/layout/echart");
        },
        Jmock() {
            this.$router.push("/layout/mock");
        },
        Jvuex() {
            this.$router.push("/layout/vuex");
        },
        Jloading() {
            this.$router.push("/layout/loading");
        },
        ZCF() {
            //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
            this.$emit("funceven", this.msgZ);
        },
        //          emits: ["todata"],
        //  setup(props, refs) {
        //    const change = () => {
        //      const params = {
        //       	user:"ylw"
        //      };
        //      emit("todata", params);
        //    };
        // }
    },
    computed: {
        // userPath(){
        //      console.log('12------------'+this.$store.getters['getUserPage'])
        //     // this.$store.getters['getUserPage'].userPath
        //     // return this.$store.getters['getUserPage'];
        // }
    },
    // setup() {
    //     //调用 inject 函数，通过指定的数据名称，获取到父级共享的数据
    //     const customVal = inject("customVal");

    //     return {
    //         customVal,
    //     };
    // },
};
</script>