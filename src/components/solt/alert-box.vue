<template>
    <div id="alert-box">
        alert-box
        <strong>slot的使用</strong>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
#alert-box {
    font-size: 30px;
    color: #bbb;
}
</style>
<script>
export default {
    name: "alert-box",
    props: {
        msg: String,
    },
};
</script>
