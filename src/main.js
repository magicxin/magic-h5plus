import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick';
import '@/css/common.scss'
import '@/css/_reset.scss'

Vue.config.productionTip = false
FastClick.attach(document.body);

import init from './utils/init'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return{
      
    }
  }
})
