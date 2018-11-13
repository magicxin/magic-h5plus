import Vue from 'vue'
import axios from 'axios'
import config from '../../config'
Vue.$axios = Vue.prototype.$axios = axios
Vue.mixin({
  created() {
  	if(this.plusReady) {
  		let that = this
  		document.addEventListener("plusready", this.plusReady, false)
  	}
  },
  destroyed() {
  	document.removeEventListener("plusready", this.plusReady)
  },
  methods: {
    addPath(url) {
      return config[config.env].origin + url
    },
    addHost(url) {
      return config[config.env].hostname + ':' + config[config.env].port + url
    }
  }
})

Vue.directive('scroll',{
  bind(el) {
    el.addEventListener('scroll',function(e) {
      el.dataset.top = e.target.scrollTop
    })
  }
})


