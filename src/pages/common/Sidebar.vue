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
                <a-menu-item key="4">111</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span><laptop-outlined />subnav 2</span>
                </template>
                <a-menu-item key="5">option5</a-menu-item>
                <a-menu-item key="6">option6</a-menu-item>
                <a-menu-item key="7">option7</a-menu-item>
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
export default {
    components: {},
    data() {
        return {
            selectedKeys1: ["2"],
            selectedKeys2: ["1"],
            collapsed: false,
            openKeys: ["sub1"],
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
    },
    computed:{
        // userPath(){
        //      console.log('12------------'+this.$store.getters['getUserPage'])
        //     // this.$store.getters['getUserPage'].userPath
        //     return this.$store.getters['getUserPage'];
        // }
        
    }
};
</script>