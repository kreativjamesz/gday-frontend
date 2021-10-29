import Vue from 'vue'
import VueRouter from 'vue-router'

import { allRoutes } from './routes'

Vue.use(VueRouter)

console.log("All Routes", allRoutes)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: allRoutes
})

export default router
