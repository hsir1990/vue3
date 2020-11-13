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
    data() {
        
    },
    //  mounted() {
    //   this.Jlayout()
    // },
    methods: {
        async Jlayout(){
            // this.$router.push('/login')
            await this.$router.push('/layout')
        }
    }

};
</script>
