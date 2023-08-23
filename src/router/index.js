import VueRouter from 'vue-router'
import mainlayout from '../layout/MainLayOut.vue'
import homepage from '../pages/FirstPage.vue'
import CountryPage from '../pages/country.vue'
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
    {
      path: '/country/:country_name',
      name: 'country',
      meta :{
        layout : mainlayout
      },
      component: CountryPage
    },
  ]
})

export default router
