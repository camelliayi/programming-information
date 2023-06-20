import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/ListView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/loginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/RegisterView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
