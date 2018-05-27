import Vue from 'vue'
import Router from 'vue-router'
import IndexVue from '@/pageview/index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'weui-bar__item_on',
  routes: [
    {
      path: '/',
      name: 'IndexVue',
      component: IndexVue
    }
  ]
})
