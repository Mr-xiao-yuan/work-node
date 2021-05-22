<template>
	<view id="search">
		<view class="search_input">
		    <navigator url="/pages/search/index" open-type="navigate">搜索</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.search_input{
	    height: 90rpx;
	    padding: 10rpx;
	    background-color: var(--themeColor);
	    navigator{
	        height: 100%;
	        display: flex;
	        justify-content: center;
	        align-items: center;
	        background-color: #fff;
	        border-radius: 20rpx;
	        color: #666;
	    }
	}

</style>
