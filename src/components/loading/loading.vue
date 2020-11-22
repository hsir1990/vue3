<template>
  <div class="loading-box" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate">
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '正在加载中...'
    },
  }
}
</script>
<style lang="less" scoped>
#loading-box{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99
}
</style>
