import { createRouter, createWebHistory } from 'vue-router'
import ShoppingLists from '@/views/ShoppingLists.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'ShoppingLists',
    component: ShoppingLists,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
