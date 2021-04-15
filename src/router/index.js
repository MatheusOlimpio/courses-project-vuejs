import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Contato from '../views/Contato'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
