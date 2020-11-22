<template>
  <div class="loading-box" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate">
      </div>
      <div class="text">{{text}}</div>
      <div class="text">{{i18n}}</div>
      <div class="text">{{getI18n}}</div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '正在加载中...'
    },
    // i18n:'',
    // getI18n
  },
  //inject: ['i18n'],
//   setup() {
//     // const getI18n = inject('i18n');
//     // return{
//     //   getI18n

//     // }
    
//   },
//   created() {
//  this.getI18n = inject('i18n');
    
//   }
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
