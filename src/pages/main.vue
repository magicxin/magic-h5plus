<template>
  <div class="main">
    <img :src="magic" />
		Hello,world
  </div>
</template>

<script>
import magic from 'assets/magic.jpg'
export default {
  name: 'hello',
  data() {
  	return {
  	  magic
  	}
  },
  mounted() {
  	
  },
  methods: {
  	
  }
}
</script>

<style lang="scss">
	.main {
	  display:flex;
	  flex-flow:column;
	  align-items: center;
	  img {
	    margin-top:20px;
	    width:100%;
	  }
	  height:calc(100vh - 50px);
	  @include bg_color($background-color-theme);
	  @include font_color($font-color-theme);
	}
	
</style>
