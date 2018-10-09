// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import App from './App'
import router from './views/router.js'

Vue.use(VueRouter)
Vue.use(VueMaterial)


Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'grey',
  warn: 'red'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})