<template>
	<view  class="shopping">
		<view>
			<view class="shopping_title">
				<p class="title_left">共1件宝贝</p>
				<p class="title_right" @click="edit">管理</p>
			</view>
			<view class="group" v-for="(item,index) in cartlist">
				<view class="group_title">
					<view class="title_shop">
						<ul>
							<i  class="shop1" @click="Select(index)" :class="item.checked === 1?select:unchecked"></i>
							<li class="shop2"><image :src="item.shop_type" mode=""></image></li>
							<li class="shop3">{{item.shop_name}}</li>
							<li class="shop4"><image src="../../static/tab/you.png" mode=""></image></li>
						</ul>
					</view>
					<view class="title_coupons">领券</view>
				</view>
				<view class="group_body">
					<i  class="body_left" @click="Select(index)" :class="item.checked ===1?select:unchecked"></i>
					<view class="body_center"><image :src="item.goods_big_logo" mode=""></image></view>
					<view class="body_right">
						<view class="right_title">{{item.goods_name}}</view>
						<view class="right_content">100x80x80cm;特价款（无柜无键盘托无抽屉）[左右转角随意安装]</view>
						<view class="right_pice">
							<p>{{item.goods_price}}</p>
							<view class="right_number">
								<view class="number_left" @click="jian">-</view>
								<view class="number_center">{{amount}}</view>
								<view class="number_right" @click="zhen">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="check">
			<view class="check_left" @click="allSelect"><i :class="num===1?select:unchecked"></i><p>全选</p></view>
			<view v-if="active" class="check_right">
				<button>结算(0)</button>
				<p>合计：<text>￥0</text></p> 
			</view>
			<view v-if="!active" class="check_del">
				<p @click="del">删除</p>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				active: true,
				unchecked: 'iconfont icon-weixuanzhong',
				select: 'iconfont icon-yixuanzhong',
				cartlist:[],
				amount: 1,
				num: 0
			}
		},
		methods: {
			cartdata(){
				this.request("/goods/cart","GET").then(res=>{
					console.log(res)
					this.cartlist = res.data
				})
			},
			edit(){//管理
				this.active = this.active === false?true:false
			},
			Select(i){//单个选中
				// console.log(i)
				this.cartlist[i].checked = this.cartlist[i].checked === 0?1:0
			},
			allSelect(){//全部全选
				this.num = this.num === 0?1:0
				for(let i in this.cartlist){
					this.cartlist[i].checked = this.cartlist[i].checked===0?1:0
				}
			},
			jian(){
				if(this.amount <= 1){
					this.amount === 1
				}else{
					this.amount--
				}
			},
			zhen(){
				this.amount++
			},
			del(){
				this.request("/goods/delete","GET").then(res=>{
					// console.log(res)
					// this.cartlist = res.data
				})
			}
		},
		onLoad() {
			this.cartdata()
		}
	}
</script>

<style lang="less">
	page{
		background-color: #F2F2F2;
		height: 100%;
	}
	.shopping{
		.shopping_title{
			background-color: #FF5000;
			width: 100%;
			height: 80rpx;
			color: #FFFFFF;
			padding-top: 20rpx;
			font-weight: bold;
			.title_left{
				width: 160rpx;
				float: left;
				text-align: center;
			}
			.title_right{
				width: 80rpx;
				float: right;
			}
		}
		.group{
			background-color: #FFFFFF;
			width: 95%;
			border-radius: 30rpx;
			margin: 20rpx 20rpx;
			// padding: 20rpx;
			.group_title{
				display: flex;
				.title_shop{
					flex: 7.6;
					ul{
						padding: 0;
						width: 50%;
						list-style: none;
						display: flex;
						align-items: center;
						text-align: center;
						.shop1{
							flex: 1.2;
							width: 90rpx;
						}
						.shop2{
							flex: 0.3;
							image{
								width: 36rpx;
								height: 36rpx;
								margin-top: 12rpx;
							}
						}
						.shop3{
							flex: 2.4;
							font-size: 24rpx;
							text-align: center;
						}
						.shop4{
							flex: 0.3;
							image{
								width: 24rpx;
								height: 24rpx;
								margin-top: 10rpx;
								color: #2C405A;
							}
						}
					}
				}
				.title_coupons{
					flex: 1;
					margin-top: 12rpx;
					color: #999999;
				}
			}
			.group_body{
				margin-top: 20rpx;
				width: 98%;
				// height: 180rpx;
				display: flex;
				align-items: center;
				text-align: center;
				.body_left{
					flex: 1;
				}
				.body_center{
					flex: 2;
					image{
						width: 180rpx;
						height: 180rpx;
						border-radius: 15rpx;
					}
				}
				.body_right{
					flex: 5;
					display: flex;
					flex-direction: column;
					height: 100%;
					margin-left: 20rpx;
					.right_title{
						flex: 1;
						display: -webkit-box;
						-webkit-line-clamp:2;//这边的2指的是两行
						-webkit-box-orient: vertical;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 28rpx;
					}
					.right_content{
						flex: 1;
						font-size: 26rpx;
						margin-top: 10rpx;
						text-align: left;
						border-radius: 15rpx;
						background-color: #f5f5f5;
						color: #c0c0c0;
						padding: 8rpx;
					}
					.right_pice{
						display: flex;
						margin-top: 10rpx;
						height: 50rpx;
						padding: 6rpx;
						p{
							flex: 1.5;
							text-align: left;
							color: #FF0036;
							
						}
						.right_number{
							flex: 1;
							display: flex;
							border: 1rpx solid #C0C0C0;
							border-radius: 10rpx;
							.number_left,.number_right{
								flex: 0.8;
								
							}
							.number_center{
								flex: 1;
								border-left: 1rpx solid #C0C0C0;
								border-right: 1rpx solid #C0C0C0;
							}
						}
					}
				}
			}
		}
	}
	.check{
		bottom: 90rpx;
		padding: 20rpx;
		position: fixed;
		background-color: #FFFFFF;
		width: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		height: 100rpx;
		.check_left{
			width: 20%;
			padding: 10rpx;
			i{
				float: left;
			}
			p{
				float: left;
				margin: 10rpx 0 0 10rpx;
			}
		}
		.check_right{
			width: 80%;
			p{
				float: right;
				line-height: 90rpx;
				text{
					color: #FF7744;
				}
			}
			button{
				width: 180rpx;
				line-height: 60rpx;
				float: right;
				margin: 15rpx 0 0 20rpx;
				border-radius: 45rpx;
				background-color: #FF5511;
				color: #FFFFFF;
			}
		}
		.check_del{
			width: 80%;
			p{
				border: 1px solid #FC0A0A;
				color: #FC0A0A;
				border-radius: 20rpx;
				float: right;
				width: 108rpx;
				height: 40rpx;
			}
		}
	}
</style>
