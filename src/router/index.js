import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import My from '@/components/My'
import Friend from '@/components/Friend'
import Product from '@/components/Product'
import Recruit from '@/components/Recruit'
import Personalized from '@/components/Personalized'
import Search from '@/components/Search'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/friend',
            name: 'Friend',
            component: Friend
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/recruit',
            name: 'Recruit',
            component: Recruit
        },
        {
            path: '/personalized/:id',//配置动态路由，通过 :
            name: 'Personalized',
            component: Personalized
        },
        {
            path: '/search/:value',
            name: 'Search',
            component: Search
        }
    ]
})
