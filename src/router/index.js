import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },*/

  {
    path: '/',
    name: 'Usuario1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario1.vue')
  },

  {
    path: '/usuario2',
    name: 'Usuario2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario2.vue')
  },

  {
    path: '/usuario3',
    name: 'Usuario3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario3.vue')
  },

  {
    path: '/usuario4',
    name: 'Usuario4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario4.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
