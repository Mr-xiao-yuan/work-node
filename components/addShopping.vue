<template>
	<view class="add">
		<ul class="add_left">
			<li><u-icon name="dianpu" custom-prefix="custom-icon"></u-icon><p>店铺</p></li>
			<li><u-icon name="service" custom-prefix="custom-icon"></u-icon><p>客服</p></li>
			<li @click="xie"><u-icon :name="index===0?collection:collection1" custom-prefix="custom-icon"></u-icon><p :style="index===0?'':'color: #FF5000'">{{index===0?'收藏':'已收藏'}}</p></li> 
		</ul>
		<ul class="add_right">
			<li class="cart" @click="addCart">加入购物车</li>
			<li class="buy">立即购买</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collection: "shoucang1",
			    collection1: "shoucang",
				index: 0
			}
		},
		props:{
			cartdata: Object
		},
		methods:{
			xie(){
				this.index = this.index===0?1:0
			},
			addCart(){
				this.request("/goods/cart","POST",this.cartdata).then(res=>{
					console.log(res)
				})
				return uni.showToast({
					title:"已加入购物车"
				})
			}
		}
	}
</script>

<style lang="less">
	.add{
		bottom: 0;
		background-color: #FFFFFF;
		position: fixed;
		width: 100%;
		height: 90rpx;
		.add_left{
			width: 40%;
			float: left;
			list-style: none;
			padding: 0;
			display: flex;
			text-align: center;
			align-items: center;
			li{
				margin-top: 10rpx;
				flex: 1;
				text-align: center;
				p{
					margin-top: 10rpx;
					color: #999;
				}
			}
		}
		.add_right{
			width: 60%;
			display: flex;
			list-style: none;
			padding: 0;
			float: left;
			color: #FFFFFF;
			height: 90rpx;
			text-align: center;
			align-items: center;
			.cart{
				flex: 1;
				background-color: #FF9500;
				// line-height: 80rpx;
				padding: 25rpx 0;
			}
			.buy{
				flex: 1;
				background-color: #FF0036;
				// line-height: 80rpx;
				padding: 25rpx 0;
			}
		}
	}
</style>
