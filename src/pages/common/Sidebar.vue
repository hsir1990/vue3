<template>
    <section id="sidebar">
        sidebar
        <div>
            <input type="button" value="跳页1" @click="Jbtn1" />
        </div>
        <div>
            <input type="button" value="跳页2" @click="Jbtn2" />
        </div>
        <div>
            <input type="button" value="跳页3" @click="Jbtn3" />
        </div>
    </section>
</template>

<style lang="less" scoped>
#sidebar {
    font-size: 30px;
    color: aqua;
    // background-color: #f90;
    width: 200px;
    height: calc(100% - 80px);
    position: fixed;
    top: 80px;
    left: 0;
    border-right: 1px solid #ccc;
}
</style>
<script>
// import echarts from 'echarts'
export default {
    name: "sidebar",
    props: {
        msg: String,
    },
    data() {},
    methods: {
        Jbtn1() {
            this.$router.push("/layout/btn1");
        },
        Jbtn2() {
            this.$router.push("/layout/btn2");
        },
        Jbtn3() {
            this.$router.push("/layout/btn3");
        },
    },
};
</script>