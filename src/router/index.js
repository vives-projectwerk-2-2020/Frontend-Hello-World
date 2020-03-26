import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Administration.vue'
import Live from '../views/Live.vue'
import ChartPage from '../views/ChartPage.vue'
import HomeMap from '../views/HomeMap.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/signup',
    name: 'signup',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/charts',
    name: 'charts',
    component: ChartPage
  },
  {
    path: '/HomeMap',
    name: 'HomeMap',
    component: HomeMap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
