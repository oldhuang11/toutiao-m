import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/Login/index.vue')
    }
  },
  {
    path: '/',
    // name: 'layout', // 如果父路由有默认子路由,它的name属性就没有意义了
    component: () => import('../views/layout'),
    children: [
      {
        path: '', // path 默认子路由 一个路由只能由一个默认子路由
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
