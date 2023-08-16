import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/MainLayOut.vue'
import homepage from '../pages/FirstPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      meta :{
        layout : layout
      },
      component: homepage
    },
    
  ]
})

export default router
