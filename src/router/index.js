import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/tabla',
    name: 'Tabla',
    component: () => import('../views/Tabla.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
