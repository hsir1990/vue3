<template>
    <div id="home">

        <!-- <router-view v-slot="{ Component }">
    <keep-alive>
        <component :is="Component" />
    </keep-alive>
  </router-view> -->
        <!-- <router-link to="/layout/btn1">btn1</router-link>
        <router-link to="/layout/btn2">btn2</router-link>
        <router-link to="/layout/btn3">btn3</router-link> -->

        <transition name="move" mode="out-in">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        </transition>

        <div v-for="n in 100" @click="JBtn">home</div>
    </div>
</template>

<style lang="less" scoped>
#home {
    font-size: 30px;
    color: aqua;
    // background-color: #f9f;
    width: calc(100% - 200px);
    height: calc(100% - 80px);
    position: fixed;
    top: 80px;
    left: 200px;
    overflow: scroll;
}
</style>
<script>
import Btn1 from "../views/Btn1.vue";
import Btn2 from "../views/Btn2.vue";
import Btn3 from "../views/Btn3.vue";
export default {
    name: "home",
    props: {
        msg: String,
    },
    components: {
        Btn1,
        Btn2,
        Btn3,
    },
    data() {},
    methods:{
JBtn(){
    this.$router.push('/layout/btn2')
}
    }
};
</script>