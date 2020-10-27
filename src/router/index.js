import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/MainWrapper.vue')
  },
  {
    path: '/ongamelistview',
    name: 'ongamelistview',
    component: () => import('@/views/ongamelistview.vue')
  },
  {
    path: '/teamviewer',
    name: 'teamviewer',
    component: () => import('@/views/teamviewer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
