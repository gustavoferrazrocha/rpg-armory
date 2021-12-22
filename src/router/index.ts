import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/weapons',
    name: 'weapons',
    component: () => import( '@/views/Weapons.vue')
  },
  {
    path: '/trinket',
    name: 'trinket',
    component: () => import( '@/views/Trinket.vue')
  },
  {
    path: '/armors',
    name: 'Armors',
    component: () => import( '@/views/Armors.vue')
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
