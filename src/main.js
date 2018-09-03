// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import 'ui-nuclear-mobile/dist/main.css'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueAnalytics, {
  id: 'UA-97072659-1',
  router,
  autoTracking: {
    pageviewTemplate (route) {
      return {
        title: route.name,
        page: `/wardrobe-diagnostics/#${route.path}`,
        location: window.location.href
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
