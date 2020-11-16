<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
    <a-config-provider :locale="locale">
        <router-view />
    </a-config-provider>
    <!-- <div id="app"></div> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Login from "/@/pages/login.vue";
// import Layout from "/@/pages/layout.vue";

// export default {
//     name: "App",
//     components: {
//         // Login
//     }
// };
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
</script>