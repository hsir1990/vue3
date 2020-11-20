import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/pages/layout.vue'
import store from './store'


var subPath = {
    1: '/layout/echart',
    2: '/layout/mock',
    3: '/layout/vuex',
    7: '/layout/loading',
}
export const constantRoutes = [

    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/pages/login.vue'),
        hidden: true,
    },
    {
        path: '/403',
        name: '403',
        component: () => import('/@/pages/403.vue'),
        hidden: true,
    },


    {
        path: '/layout',
        name: 'layout',
        component: () => import('/@/pages/layout.vue'),
        hidden: true,
        children: [
            { path: subPath['1'], component: () => import('/@/pages/views/Echartpage.vue') },
            { path: subPath['2'], component: () => import('/@/pages/views/Mock.vue') },
            { path: subPath['3'], component: () => import('/@/pages/views/Vuex.vue') },
            { path: subPath['7'], component: () => import('/@/pages/views/Loading.vue') }
        ]

    },
    {
        path: '/404',
        name: '404',
        component: () => import('/@/pages/404.vue'),
        hidden: true,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: '/login',
        // hidden: true
        name: 'notFound',
    }
]
export const asyncRoutes = [
    {
        path: '/',
        component: () => import('/@/pages/layout.vue'),
        hidden: true,
        redirect: '/layout',
        meta: {
            title: '首页',
            icon: 'home-4-line',
            affix: true,
        },
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('/@/pages/index'),
                meta: {
                    title: '首页',
                    icon: 'home-4-line',
                    affix: true,
                },
            },
        ],
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/vab/table',
        alwaysShow: true,
        meta: {
            title: '组件',
            icon: 'apps-line',
        },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('/@/pages/vab/table'),
                meta: {
                    title: '表格',
                    icon: 'table-2',
                },
            },
            {
                path: 'icon',
                name: 'Icon',
                component: () => import('/@/pages/vab/icon'),
                meta: {
                    title: '图标',
                    icon: 'remixicon-line',
                },
            },
        ],
    },
    {
        path: '/vab',
        component: Layout,
        redirect: '/vab/table',
        alwaysShow: true,
        meta: {
            title: '组件',
            icon: 'apps-line',
        },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('/@/pages/vab/table'),
                meta: {
                    title: '表格',
                    icon: 'table-2',
                },
            },
            {
                path: 'icon',
                name: 'Icon',
                component: () => import('/@/pages/vab/icon'),
                meta: {
                    title: '图标',
                    icon: 'remixicon-line',
                },
            },
        ],
    },
    {
        path: '/test',
        component: Layout,
        redirect: '/test/test',
        meta: {
            title: '动态路由测试',
            icon: 'test-tube-line',
        },
        children: [
            {
                path: 'test',
                name: 'Test',
                component: () => import('/@/pages/test'),
                meta: {
                    title: '动态路由测试',
                    icon: 'test-tube-line',
                },
            },
        ],
    },
    {
        path: '/error',
        name: 'Error',
        component: Layout,
        redirect: '/error/403',
        meta: {
            title: '错误页',
            icon: 'error-warning-line',
        },
        children: [
            {
                path: '403',
                name: 'Error403',
                component: () => import('/@/pages/403'),
                meta: {
                    title: '403',
                    icon: 'error-warning-line',
                },
            },
            {
                path: '404',
                name: 'Error404',
                component: () => import('/@/pages/404'),
                meta: {
                    title: '404',
                    icon: 'error-warning-line',
                },
            },
        ],
    },
    {
        path: '/*',
        redirect: '/404',
        hidden: true,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
   
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     let localStorage = {
    //         'token':false
    //     }
    //     //这里判断用户是否登录，验证本地存储是否有token
    //     if (!localStorage.token) { // 判断当前的token是否存在
    //         next({
    //             path: '/login',
    //             query: { redirect: to.fullPath }
    //         })
    //     } else {
    //         next()
    //     }
    // } else {
    //     next() // 确保一定要调用 next()
    // }
    let token  = window.localStorage.getItem('token')
    let localStorage = {
        'token': token
    }
    // alert(localStorage.token)
    // console.log(to,'-------------------')
    //这里判断用户是否登录，验证本地存储是否有token
    if (!localStorage.token&&to.path!='/login') { // 判断当前的token是否存在,加上to.path!='/login',防止死循环
    window.localStorage.setItem('token',true)
        next({
            path: '/login',
            // name: 'login',
            query: { redirect: to.fullPath },
            // replace: true,
        })
        localStorage.token = true
    } else {
        window.localStorage.setItem('token',true)
        localStorage.token = true
        for (let key in subPath) {
            if (to.fullPath == subPath[key]) {
                store.state.userPage = key
            }
        }
        next()
    }

})
export default router
