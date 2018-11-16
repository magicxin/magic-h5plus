import Vue from 'vue'
import Router from 'vue-router'
//const home = () => import(/* webpackChunkName: "home" */ './pages/main.vue')
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component:  r => require.ensure([], () => r(require('@/pages/main')), 'home'),
      meta: {
        exit: true,
        keepAlive: true
      }
    }]
})