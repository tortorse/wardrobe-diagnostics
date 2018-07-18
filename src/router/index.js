import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '@/pages/desktop'
import Mobile from '@/pages/mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Desktop
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    }
  ]
})
