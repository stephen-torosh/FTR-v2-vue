import { createRouter, createWebHistory } from 'vue-router'
import Desktop from '@/views/DesktopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/desktop'
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop,
      children: [
        {
          path: '/app/:appName',
          name: 'app',
          component: () => import('@/views/layouts/AppWindowView.vue'),
        }
      ]
    }
  ]
})

export default router
