import Vue from 'vue'
import VueRouter from 'vue-router'
/* Views */
import Active from '../views/Active.vue'
import Completed from '../views/Completed.vue'
import Trash from '../views/Trash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Active',
    component: Active
  },
  {
    path: '/completed',
    name: 'Completed',
    component: Completed
  },
  {
    path: '/trash',
    name: 'Trash',
    component: Trash
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
