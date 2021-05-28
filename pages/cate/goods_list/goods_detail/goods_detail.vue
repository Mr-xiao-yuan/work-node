<template>
	<view class="detali">
		<image :src="datalist.goods_big_logo" mode="widthFix"></image>
		<view class="group">
			<view class="price">
				<p class="left_price">￥{{datalist.goods_price}}</p>
				<span class="icon-text">新品上市</span>
				<span class="icon-text">淘金币抵5%</span>
			</view>
			<view class="title">{{datalist.goods_name}}</view>
			<view class="freight">
				<span class="postage">快递：免运费</span>
				<span class="sales">月销量 {{datalist.goods_number}}</span>
				<span class="delivery">地址：{{datalist.goods_address}}</span>
			</view>
		</view>
		<view class="group">
			<view class="prom">
				<view class="box">
					<view class="box_ic">促销</view>
					<view class="box_text">满{{datalist.goods_price}}元省1000元&nbsp&nbsp&nbsp满{{datalist.goods_price - 1000}}元省500元</view>
					<view class="box_right"><image src="../../../../static/tab/you.png" mode="widthFix"></image></view> 
				</view>
				<view class="box">
					<view class="box_ic">积分</view>
					<view class="box_text">购买可以领{{Math.round(datalist.goods_price /100)}}积分</view>
				</view>
			</view>
			<view class="service">
				<view class="title">服务</view>
				<p>假一赔十&nbsp&nbsp·</p>
				<p>极速退款&nbsp&nbsp·</p>
				<p>七天无理由退换</p>
				<view class="box_right"><image src="../../../../static/tab/you.png" mode="widthFix"></image></view> 
			</view>
		</view>
		<view class="group">
			<view class="logistics">
				<view class="title">物流</view>
				<p style="width: 65%;">至临川区：现在下单，预计5月27日送达</p>
				<view class="box_right"><image src="../../../../static/tab/you.png" mode="widthFix"></image></view> 
			</view>
			<view class="choice">
				<view class="title">选择</view>
				<p style="width: 35%;">请选择颜色分类/尺码</p>
				<view class="box_right"><image src="../../../../static/tab/you.png" mode="widthFix"></image></view> 
			</view>
			<view class="param">
				<view class="title">参数</view>
				<p style="width: 35%;">品牌 适用年龄...</p>
				<view class="box_right"><image src="../../../../static/tab/you.png" mode="widthFix"></image></view> 
			</view>
		</view>
		<view class="group">
			<view class="evaluate">
				<view class="title">商品评价（{{Math.round(datalist.goods_price /15)}}）</view>
				<view class="box_right1">查看全部></view> 
				<ul class="evaluate_type">
					<li>画面感很清晰</li>
					<li>声音不大</li>
					<li>操控很方便</li>
					<li>和实体店一样</li>
					<li>物流发货速度很快</li>
				</ul>
				<view class="evaluate_user">
					<image class="top-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1336119765,2231343437&fm=26&gp=0.jpg" mode=""></image>
					<view class="text">t***9</view>
					<image class="bott-img" src="//img.alicdn.com/tfs/TB1UqAjeOqAXuNjy1XdXXaYcVXa-130-42.png_80x80Q90s50.jpg_.webp" mode=""></image>
				</view>
				<view class="evaluate_body">
					视听效果：整体效果不错， 尺寸大小：很适合，看着很清晰 安装感受：整体很快，送货服务态度好，提前打电话通知。 师傅给通电后，自己安装，按着步骤操作，然后就打开看了，还挺简单。 
				</view>
				<view class="evaluate_time">2021-05-21 颜色分类:黑色;套餐类型:官方标配</view>
			</view>
			<view class="ask">
				<view class="title">问大家（{{Math.round(datalist.goods_price /25)}}）</view>
				<view class="box_right1">查看全部></view>
				<ul>
					<li>
						<image src="../../../../static/tab/wen.png" mode=""></image>
						<p class="text1">质量怎么样？</p>
						<p class="text2">9个回答</p>
					</li>
					<li>
						<image src="../../../../static/tab/wen.png" mode=""></image>
						<p class="text1">是真4k嘛？画面清晰嘛？</p>
						<p class="text2">2个回答</p>
					</li>
				</ul>
			</view>
		</view>
		<view class="group">
			<view class="shop-main">
				<image src="//img.alicdn.com/imgextra//i3/2050532947/O1CN011XdlfnepIUmuuUv_!!2050532947.jpg_120x120Q50s50.jpg_.webp" mode=""></image>
				<view class="shop_info">
					<view class="info_name">TCL集团官方旗舰店</view>
					<image src="//img.alicdn.com/tfs/TB1u5sBnlfH8KJjy1XbXXbLdXXa-198-36.png_120x120Q90s50.jpg_.webp?getAvatar=avatar" mode=""></image>
				</view>
				<ul>
					<li>宝贝描述<span>4.8</span></li>
					<li>卖家服务<span>4.8</span></li>
					<li>物流服务<span>4.8</span></li>
				</ul>
				<view class="action">
					<navigator url="">全部商品</navigator>
					<navigator url="">进入店铺</navigator>
				</view>
			</view>
		</view>
		<view class="goods_title">商品详情</view>
		<view class="group">
			<view class="modules_detail">
				<image src="//img.alicdn.com/imgextra/i1/2050532947/O1CN01PmGcBK1XdlpCXPZBm_!!2050532947.png_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image :src="datalist.goods_big_logo" mode="widthFix"></image>
				<image src="//img.alicdn.com/imgextra/i4/2050532947/O1CN01UpVP531Xdlsv3ZEyP_!!2050532947.jpg_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image src="//img.alicdn.com/imgextra/i2/2050532947/O1CN01mal5Ue1Xdlsv3WMAz_!!2050532947.jpg_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image src="//img.alicdn.com/imgextra/i3/2050532947/O1CN01ppouQF1Xdlsyt6raQ_!!2050532947.jpg_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image src="//img.alicdn.com/imgextra/i4/2050532947/O1CN015ybr5M1XdlststuvS_!!2050532947.jpg_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image src="//img.alicdn.com/imgextra/i4/2050532947/O1CN01nRAmGz1XdlsoTnLR7_!!2050532947.jpg_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
				<image src="//img.alicdn.com/tfs/TB1k9XsQpXXXXXLXpXXXXXXXXXX-750-368.png_2200x2200Q90s50.jpg_.webp" mode="widthFix"></image>
			</view>
		</view>
		<add-shopping></add-shopping>
	</view>
</template>

<script>
	import addShopping from '../../../../components/addShopping.vue'
	export default {
		data() {
			return {
				goods_id: '',
				datalist: {}
			}
		},
		components:{
			addShopping
		},
		methods: {
			detailData(){
				this.request("/goods/detail","GET",{goods_id:this.goods_id}).then(res=>{
					// console.log(res)
					this.datalist = res.data[0]
					console.log(this.datalist)
				})
			}
		},
		onLoad(i) {
			this.goods_id = i.goods_id
			this.detailData()
		}
	}
</script>

<style lang="less">
	page{
		background-color: #F2F2F2;
	}
	.detali{
		image{
			width: 100%;
			height: 100%;
		}
		.goods_title{
			width: 100%;
			text-align: center;
		}
		.group{
			padding: 24rpx 18rpx;
			background-color: #FFF;
			margin: 18rpx 0;
			.box_right{
				width: 3.5%;
				float: right;
				height: 40rpx;
			}
			.box_right1{
				width: 18%;
				float: right;
				height: 40rpx;
				color: #EB4450;
			}
			.price{
				width: 100%;
				height: 80rpx;
				.left_price{
					color: var(--themeColor);
					font-size: 48rpx;
					width: 160rpx;
					float: left;
					text-align: left;
				}
				.icon-text{
					float: left;
					background-color: #fb6878;
					color: #FFF;
					font-size: 24rpx;
					padding: 2rpx 4rpx;
					margin: 24rpx 0 0 10rpx;
				}
			}
			.title{
				-webkit-line-clamp: 2;
				font-size: 30rpx;
			}
			.freight{
				display: flex;
				background-color: #FFF;
				line-height: 60rpx;
				// padding: 0 20rpx;
				font-size: 24rpx;
				color: #999;
				width: 100%;
				span{
					flex: 1;
				}
				.postage{
					text-align: left;
				}
				.sales{
					text-align: center;
				}
				.delivery{
					text-align: right;
				}
			}
			.prom{
				width: 100%;
				height: 140rpx;
				.box_ic{
					display: block;
					// text-align: center;
					background: #FFF5F7;
					border-radius: 4rpx;
					font-size: 28rpx;
					color: #FF0036;
					width: 10%;
					float: left;
				}
				.box_text{
					width: 85%;
					float: left;
					font-size: 28rpx;
				}
			}
			.logistics,.service,.choice,.param{
				height: 50rpx;
				font-size: 24rpx;
				.title{
					padding: 0;
					float: left;
					width: 8%;
					color: #999;
					font-size: 24rpx;
				}
				p{
					width: 28%;
					float: left;
				}
			}
			.evaluate{
				width: 100%;
				font-size: 26rpx;
				width: 100%;
				.title{
					width: 82%;
					float: left;
					height: 40rpx;
				}
				.evaluate_type{
					list-style: none;
					padding: 0;
					float: left;
					overflow: hidden;
					max-height: 76rpx;
					li{
						background-color: #FEE;
						color: #666;
						margin: 12rpx 6rpx;
						padding: 12rpx 18rpx;
						text-align: center;
						border-radius: 52rpx;
						font-size: 24rpx;
						line-height: 24rpx;
						float: left;
					}
				}
				.evaluate_user{
					padding: 10rpx 20rpx;
					.top-img{
						width: 48rpx;
						height: 48rpx;
						border-radius: 40rpx;
						float: left;
					}
					.text{
						width: 60rpx;
						margin: 10rpx 0 0 10rpx;
						float: left;
					}
					.bott-img{
						margin: 18rpx 0 0 10rpx;
						width: 56rpx;
						height: 24rpx;
					}
				}
				.evaluate_body{
					padding: 0 20rpx;
					font-size: 26rpx;
					overflow: hidden;
					text-overflow: ellipsis;//溢出为省略号
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.evaluate_time{
					padding: 0 20rpx;
					color: #C0C0C0;
					font-size: 24rpx;
				}
			}
			.ask{
				margin-top: 20rpx;
				padding-top: 20rpx;
				border-top: 2rpx solid #C8C7CC;
				width: 100%;
				.title{
					width: 82%;
					float: left;
					height: 40rpx;
				}
				ul{
					padding: 0;
					margin-top: 12px;
					list-style: none;
					color: #051b28;
					li{
						width: 100%;
						height: 50rpx;
						display: flex;
						flex-direction: row;
						align-items: center;
						image{
							flex: 1;
						}
						.text1{
							flex: 11;
						}
						.text2{
							float: right;
							text-align: right;
							flex: 3;
							color: #C0C0C0;
						}
					}
				}
			}
			.shop-main{
				image{
					width: 112rpx;
					height: 112rpx;float: left;
				}
				.shop_info{
					flex: 1;
					padding: 10rpx 20rpx;
					line-height: 36rpx;
					float: left;
					.info_name{
						color: #333;
						font-size: 32rpx;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						-webkit-box-pack: center;
						display: -webkit-box;
					}
					image{
						width: 160rpx;
						height: 30rpx;
						margin-top: 10rpx;
					}
				}
				ul{
					display: flex;
					padding: 0;
					width: 100%;
					list-style: none;
					li{
						flex: 1;
						text-align: center;
						span{
							color: #00FFFF;
						}
					}
				}
				.action{
					margin-top: 10rpx;
					font-size: 24rpx;
					display: flex;
					justify-content: center;
					navigator{
						border: 2rpx solid rgba(255,0,54,.5);
						border-radius: 20rpx;
						color: rgba(255,0,54,.8);
						padding: 0 20rpx;
						margin: 0 10rpx;
					}
				}
			}
			.modules_detail{
				image{
					width: 100%;
					height: 1000rpx;
				}
			}
		}
	}
</style>
