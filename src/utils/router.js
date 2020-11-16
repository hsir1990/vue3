import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/pages/layout.vue'
import store from './store'

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
            { path: '/layout/echart', component: () => import('/@/pages/views/Echartpage.vue') },
            { path: '/layout/mock', component: () => import('/@/pages/views/Mock.vue') },
            { path: '/layout/vuex', component: () => import('/@/pages/views/Vuex.vue') }
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
router.beforeEach((to, from) => {
  console.log(to.name,'-----------------------------')
    return true
  })
export default router
