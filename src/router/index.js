import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Login.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Recipe.vue')
  },
  {
    path: '/favorites/:UserId',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Favorites.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
