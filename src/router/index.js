import Vue from 'vue'
import Router from 'vue-router'
import IndexVue from '@/pageview/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexVue',
      component: IndexVue
    }
  ]
})
