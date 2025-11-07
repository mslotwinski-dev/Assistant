import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Department from '@/views/Department.vue'
import Program from '@/views/Program.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/department/:id',
    component: Department,
  },
  {
    path: '/program/:id/:major/:level',
    component: Program,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
