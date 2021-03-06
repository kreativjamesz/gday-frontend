import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
