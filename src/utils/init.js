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
      return config.origin + url
    },
    addHost(url) {
      console.log(config)
      return config.hostname + url
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


