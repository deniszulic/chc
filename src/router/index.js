import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import promjenalozinke from '@/views/promjenalozinke.vue'
import useradd from '@/views/useradd.vue'
import stanje from '@/views/stanje.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/admin.vue')
  },
  {
    path: '/rijeseno',
    name: 'rijeseno',
    component: () => import( '../views/rijeseno.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import('../views/prijava.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import('../views/registracija.vue')
  },
  {
    path: '/promjenalozinke',
    name: 'promjenalozinke',
    component: promjenalozinke
  },
  {
    path: '/useradd',
    name: 'useradd',
    component: useradd
  },
  {
    path: '/stanje',
    name: 'stanje',
    component: stanje
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import('../views/pocetna.vue')
  },
  {
    path: '/ourteam',
    name: 'ourteam',
    component: () => import('../views/ourteam.vue')
  },
  {
    path: '/mojerecenzije',
    name: 'mojerecenzije',
    component: () => import('../views/mojerecenzije.vue')
  },
  {
    path: '/recenzije',
    name: 'recenzije',
    component: () => import('../views/recenzije.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
