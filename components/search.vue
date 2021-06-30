<template>
	<view id="search">
		<!-- <view class="search_input">
		    <navigator url="/pages/search/index" open-type="navigate"><input type="text"  @confirm="doSearch" placeholder="搜索" /></navigator>
		</view> -->
		<view class="search_input">
			<u-search :show-action="false" placeholder="请输入商品名称" round bg-color="white" show-action></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				num: ''
			};
		},
		methods:{
			doSearch(i){
				this.num = i.detail.value
			}
		}
	}
</script>

<style lang="less">
	.search_input{
	    height: 90rpx;
	    padding: 10rpx;
	    background-color: var(--themeColor);
	}

</style>
