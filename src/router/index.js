/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import List from '../pages/List/List.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Topic from '../pages/Topic/Topic.vue'


Vue.use(VueRouter)

export default new VueRouter({
  // 应用中所有路由
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path:'/topic',
      component:Topic,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path:'/list',
      component:List,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path:'/shopCart',
      component:ShopCart,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path: '/',
      redirect: '/home'
    }






  ]

})
