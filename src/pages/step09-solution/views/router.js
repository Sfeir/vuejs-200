import VueRouter from 'vue-router'

import Home from './Home.vue'
import People from './People.vue'

const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'people',
    path: '/people',
    component: People
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default new VueRouter({
  routes
})