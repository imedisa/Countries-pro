import VueRouter from 'vue-router'
import mainlayout from '../layout/MainLayOut.vue'
import homepage from '../pages/FirstPage.vue'

const router = new VueRouter({

  mode:'history',
  routes: [
    {
      path: '',
      name: 'main',
      meta :{
        layout : mainlayout
      },
      component: homepage
    },
    
  ]
})

export default router