
const Home = () => import(/* webpackChunkName: "home" */'@/views/Home')
// const About = () => import(/* webpackChunkName: "about" */ '@/router/views/About')

export const routes = [
  {
    path: '/',
    name: 'Home',
    components: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }

]
