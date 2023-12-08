import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: 'Home',
            path: '/Home',
            component: () => import('@/page/home.vue')
        }, {
            path: '/doll',
            component: () => import('@/views/doll.vue'),
        }, {
            path: '/goldEgg',
            component: () => import('@/views/goldEgg.vue'),
        }, {
            path: '/goldEgg2',
            component: () => import('@/views/goldEgg2.vue'),
        }, {
            path: '/guaguale',
            component: () => import('@/views/guaguale.vue'),
        }, {
            path: '/nineGrid',
            component: () => import('@/views/nineGrid.vue'),
        }, {
            path: '/ring',
            component: () => import('@/views/ring.vue'),
        }, {
            path: '/tiger',
            component: () => import('@/views/tiger.vue'),
        }, {
            path: '/zhuanpan',
            component: () => import('@/views/zhuanpan.vue'),
        }, {
            path: '/luckCard',
            component: () => import('@/views/luckCard.vue'),
        },
        {
            path: '/my',
            component: () => import('@/views/my.vue'),
        },
        {
            path: '*',
            redirect: '/Home',
        }
    ]
})


export default router