import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import UserInfo from '@/views/UserInfo'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/me',
    name: 'Me',
    component: UserInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
