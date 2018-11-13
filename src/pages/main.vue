<template>
  <div class="main">
		Hello,world
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
  	return {
  	  
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
	  height:calc(100vh - 50px);
	  @include bg_color($background-color-theme);
	  @include font_color($font-color-theme);
		.send-news {
			width:50px;
			height:50px;
			position:absolute;
			left:50%;
			bottom: 6px;
			transform: translate(-50%);
			color:#000;
			border: 1px solid #E4E4E4;
			z-index: 2;
			/*background:#fff;*/
			/*background-color: $background-color-theme1;*/
			@include bg_color($background-color-theme);
			border-radius: 50%;
			font-size:30px;
			line-height:50px;
			text-align: center;
		}
		.popup {
			padding:24px 24px 12px 24px;
		}
		
		.toolbars {
			padding: 24px 0;
		}
		.icon-container {
        font-size:20px;
        line-height:1em;
        padding:14px 14px 12px 14px;
        border: 1px solid #EBEBEB;
        border-radius: 18px;
        margin: 14px;
      }
      .icon-text {
        color: #578FEC;
      }
      .icon-image {
        color: #16DD9A;
      }
      .editor {
        width:100vw;
        height:100vh;
      }
	}
	
</style>
