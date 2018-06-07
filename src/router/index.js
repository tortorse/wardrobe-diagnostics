import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Why from '@/pages/Why'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/why',
      name: 'why',
      component: Why
    }
  ]
})
