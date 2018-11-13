<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
        username: '',
        password: ''
      }
    },
    created() {
      
    },
    methods: {
      plusReady() {
        console.log('plusready')
      }
    }
  }
</script>

<style lang="scss">
  #app {
   
  }
</style>