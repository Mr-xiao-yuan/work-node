<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("static/font/font.css");
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	page,view,text,swiper,swiper-item,image,navigator,ul{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	page{
	  /* 定义主题颜色 */
	  --themeColor: #eb4450;
	  /* 定义统一字体大小 */
	  font-size: 28rpx;
	  background-color: #F2F2F2;
	}
</style>
