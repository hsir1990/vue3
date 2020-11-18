<template>
    <div id="login">login</div>
    <input type="text" placeholder="输入账号"><br/>
    <input type="password" placeholder="输入密码"><br/>
    <input type="submit" value="提交" @click="Jlayout">
</template>

<style lang="less" scoped>
#login{
    font-size: 30px;
    color: aqua;
}
</style>

<script>
// import echarts from 'echarts'
export default {
    name: "login",
    props: {
        msg: String,
    },
    // data() {
        
    // },
    //  mounted() {
    //   this.Jlayout()
    // },
    methods: {
        async Jlayout(){
            // this.$router.push('/login')
            // await this.$router.push('/layout')
            if (this.$route.query.redirect) {
                await this.$router.push({ path: this.$route.query.redirect });
            // 如不存在，直接跳转到首页
            } else {
                // this.$router.push({ path: "/404" });
                await this.$router.push({ path: "/layout/echart" });
            }

        }
    //     //登录成功后存储用户信息
    //   localStorage.setItem("userName", this.name);
    //   localStorage.setItem("passWord", this.password);
    //   // 接收参数，如果存在redirect参数，登录后重定向到指定页面
    //   if (this.$route.query.redirect) {
    //     this.$router.push({ path: this.$route.query.redirect });
    //   // 如不存在，直接跳转到首页
    //   } else {
    //     this.$router.push({ path: "/home" });
    //   }
    }

};
</script>
