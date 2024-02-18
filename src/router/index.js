import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/Login/index.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
