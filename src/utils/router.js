// // import VueRouter from 'vue-router'
// import {createRouter, createWebHashHistory} from 'vue-router'
// const routes = []
// // Vue-router新版本中，需要使用createRouter来创建路由
// export default  createRouter({
//   // 指定路由的模式,此处使用的是hash模式
//   history: createWebHashHistory(),
//   routes // short for `routes: routes`
// })


import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/pages/layout.vue'

export const constantRoutes = [
   
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
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
            { path: '/layout/btn1', component: () => import('/@/pages/views/Btn1.vue') },
            { path: '/layout/btn2', component: () => import('/@/pages/views/Btn2.vue') },
            { path: '/layout/btn3', component: () => import('/@/pages/views/Btn3.vue') }
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
    // {
    //     path: '*',
    //     redirect: '/login',
    //     // hidden: true
    //     name: 'notFound',
    // },
    // {
    //     path: '/*',
    //     redirect: '/404',
    //     // hidden: true,
    // },
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

export default router
