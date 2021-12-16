import { createRouter, createWebHistory } from 'vue-router'
import ShoppingLists from '@/views/ShoppingLists.vue'
import ListDetails from '@/views/ListDetails.vue'
import ListCreate from '@/views/ListCreate.vue'
import ErrorDisplay from '@/views/ErrorDisplay.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'ShoppingLists',
    component: ShoppingLists,
  },
  {
    path: '/list/:id',
    name: 'ListDetails',
    props: true,
    component: ListDetails,
  },
  {
    path: '/list/create',
    name: 'ListCreate',
    component: ListCreate,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
