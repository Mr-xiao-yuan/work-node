<template>
	<view class="tabs">
	  <view class="tabs_title">
		  <!-- {{item.isActive?'active':''}} -->
	    <view v-for="(item,index) in tabs" :key="item.id" class="title_item" :class="item.isActive?'active':''" @click="handItem(index)">
	      {{item.value}}
	    </view>
	  </view>
	  <view class="tabs_content">
	    <slot></slot>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// tabsc:[]
				num:0
			}
		},
		methods: {
			handItem(e){
				this.$emit("bindItem",e)
			}
		},
		props:{
			tabs: Array
		}
	}
</script>

<style lang="less">
	.tabs_title{
	  display: flex;
	}
	.title_item{
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex: 1;
	  padding: 15rpx 0;
	}
	.active{
	  color: var(--themeColor);
	  border-bottom:5rpx solid currentColor;
	}
</style>
