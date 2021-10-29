import store from '@/store'

import LayoutDefault from '@/router/layouts/Default'

const Home = () => import(/* webpackChunkName: "home" */'@/router/views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/router/views/About')

console.log("VUEX STORE", store)

// publc pages pages
const publicPagesRoutes = [
  {
    path: '/Home',
    name: 'Home',
    components: Home
  },
  {
    path: '/about',
    name: 'About',
    components: About
  }
]

// publc pages pages
const defaultRoutes = [
  {
    path: '/',
    redirect: 'Home',
    components: LayoutDefault,
    children: [
      ...publicPagesRoutes
    ]
  }


]

const allRoutes = [...defaultRoutes]

export { allRoutes }