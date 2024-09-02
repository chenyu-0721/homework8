import { createRouter, createWebHashHistory } from 'vue-router'
import page1View from '../views/page1View.vue'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHashHistory('/homework8/'),
  routes: [
    {
      path: '/',
      name: 'page1View',
      component: page1View,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
})

export default router
