<template>
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="horizontal"
                v-model:selectedKeys="selectedKeys1"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1" @click="Jlayout"> mian  </a-menu-item>
                <a-menu-item key="2" @click="J404"> 404   </a-menu-item>
                <a-menu-item key="3" @click="Jlogin"> login </a-menu-item>
            </a-menu>
        </a-layout-header>
    
</template>

<style lang="less" scoped>
// #header{
//     font-size: 30px;
//     color: aqua;
//     // background-color: #ff0;
//     width: 100%;
//     height: 80px;
//     position: fixed;
//     top: 0;
//     left: 0;
//     border-bottom: 1px solid #ccc;
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
export default {
  components: {

  },
  data() {
    return {
      selectedKeys1: ['1'],
      selectedKeys2: ['1'],
      collapsed: false,
      openKeys: ['sub1'],
    };
  },
  methods:{
        Jlayout() {
            this.$router.push("/layout");
        },
        J404() {
            this.$router.push("/404");
        },
        Jlogin() {
            this.$router.push("/login");
        },
  }
};
</script>