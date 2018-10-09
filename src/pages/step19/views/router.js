import VueRouter from 'vue-router'

import Home from './Home.vue'
import People from './People.vue'
import Update from './Update.vue'

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
    name: 'edit',
    path: '/edit/:id',
    component: Update
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default new VueRouter({
  routes
})