import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/Pages/quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: Quiz
    }
  ]
})
