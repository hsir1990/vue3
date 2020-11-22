<template>
    <!-- <div id="loading">loading</div> -->
    <div id="loading">
        <!-- <loading text="我是一个粉刷匠" duration="2s"></loading> -->
    </div>
</template>

<style lang="less" scoped>
#loading {
    font-size: 30px;
    color: #ddd;
}
</style>
<script>
export default {
    name: "load",
    props: {
        msg: String,
    },
    data() {
        return {
            dataRus: "",
        };
    },
    methods: {},
    created() {
        this.$loading.show('111')
    },
};
</script>
