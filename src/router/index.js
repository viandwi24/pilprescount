import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import RealCount from '@/components/RealCount.vue'
import QuickCount from '@/components/QuickCount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/realcount',
      name: 'realcount',
      component: RealCount
    },
    {
      path: '/quickcount',
      name: 'quickcount',
      component: QuickCount
    }
  ]
})
