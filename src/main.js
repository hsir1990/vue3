import { createApp } from 'vue'
import App from './App.vue'
import './index.less'

import VueRouter from './utils/router'
import store from './utils/store'

//main.js 中全部导入
import echarts from 'echarts' //引入echarts
import axios from 'axios'


import '../mock/mockServer'
////require报语法错误
// console.log('process.env.NODE_ENV'+process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//     // require('../mock/mockServer.js')
// }

//引入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//找的一个loading
import loading from './components/loading/loading.js';

const app =createApp(App)
app.config.productionTip = false;
app.use(Antd) 
// 确保 t_use_  实例来创建VueRouter, 将路由插件安装到 app 中
app.use(VueRouter)
app.use(store)
app.use(loading)
//相当于2中的Vue.prototype.$echarts = echarts
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$axios = axios
app.mount('#app')

