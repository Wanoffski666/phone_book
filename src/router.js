import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/views/Contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Contacts
  },
  {
    path: '/info',
    component: () => import('./views/Info.vue')
  }]
})
