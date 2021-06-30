<template>
	<view id="my">
		<view class="user">
			<image src="../../static/user.png" mode=""></image>
			<view class="user_name">
				<text>往事如烟</text>
				<p>在这里你可以编写你的个性签名。<u-icon style="margin-left: -8px;" custom-prefix="custom-icon" name="pen"></u-icon></p>
				<p>关注 0 | 粉丝 0</p>
			</view>
		</view>
		<view class="allorders">
			<view class="allorders_title">
				<text>我的订单</text>
				<text style="float: right;">查看全部订单<u-icon name="xiangyou-copy" custom-prefix="custom-icon"></u-icon></text>
			</view>
			<ul>
				<li><navigator url=""><u-icon name="daifukuan" size="38" custom-prefix="custom-icon"></u-icon><p>待付款</p></navigator></li>
				<li><navigator url=""><u-icon name="daifahuo" size="38" custom-prefix="custom-icon"></u-icon><p>待发货</p></navigator></li>
				<li><navigator url=""><u-icon name="to-be-received" size="38" custom-prefix="custom-icon"></u-icon><p>待收货</p></navigator></li>
				<li><navigator url=""><u-icon name="daipingjia" size="38" custom-prefix="custom-icon"></u-icon><p>待评价</p></navigator></li>
				<li><navigator url=""><u-icon name="tuikuan" size="38" custom-prefix="custom-icon"></u-icon><p>退款</p></navigator></li>
			</ul>
		</view>
		<view class="often">
			<h3>常用功能</h3>
			<view class="often_top">
				<ul>
					<li><navigator url=""><u-icon name="youhuiquan" size="38" custom-prefix="custom-icon"></u-icon><p>优惠券</p></navigator></li>
					<li><navigator url=""><u-icon name="shouhuodizhi" size="38" custom-prefix="custom-icon"></u-icon><p>收货地址</p></navigator></li>
					<li><navigator url=""><u-icon name="yaoqingyouli" size="38" custom-prefix="custom-icon"></u-icon><p>邀请有礼</p></navigator></li>
					<li><navigator url=""><u-icon name="fankui" size="38" custom-prefix="custom-icon"></u-icon><p>帮助与反馈</p></navigator></li>
				</ul>
			</view>
			<view class="often_top">
				<ul>
					<li><navigator url=""><u-icon name="shoucang1" size="38" custom-prefix="custom-icon"></u-icon><p>我的收藏</p></navigator></li>
					<li><navigator url=""><u-icon name="guanzhu" size="38" custom-prefix="custom-icon"></u-icon><p>我的关注</p></navigator></li>
					<li><navigator url=""><u-icon name="daipingjia" size="38" custom-prefix="custom-icon"></u-icon><p>我的评价</p></navigator></li>
					<li><navigator url=""><u-icon name="shijian" size="38" custom-prefix="custom-icon"></u-icon><p>足迹</p></navigator></li>
				</ul>
			</view>
		</view>
		<view class="other">
			<h3>其他功能</h3>
			<ul>
				<li><navigator url=""><u-icon name="changjianwenti" size="38" custom-prefix="custom-icon"></u-icon><p>常见问题</p></navigator></li>
				<li><navigator url=""><u-icon name="lianxiwomen-copy" size="38" custom-prefix="custom-icon"></u-icon><p>联系我们</p></navigator></li>
				<li><navigator url=""><u-icon name="anquanzhongxin89" size="38" custom-prefix="custom-icon"></u-icon><p>安全中心</p></navigator></li>
				<li><navigator url="subpage/setup/setup"><u-icon name="shezhi" size="38" custom-prefix="custom-icon"></u-icon><p>设置</p></navigator></li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	#my{
		.user{
			width: 100%;
			height: 300rpx;
			background-color: var(--themeColor);
			padding: 32rpx;
			color: white;
			image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				float: left;
			}
			.user_name{
				width: 500rpx;
				line-height: 50rpx;
				float: left;
				margin-left: 20rpx;
				text{
					font-size: 32rpx;
				}
				p{
					font-size: 16rpx;
				}
			}
		}
		.allorders{
			width: 90%;
			height: 200rpx;
			background-color: white;
			position: absolute;
			margin: 0 40rpx;
			top: 200rpx;
			border-radius: 20rpx;
			.allorders_title{
				padding: 20rpx;
			}
			ul{
				list-style: none;
				display: flex;
				li{
					flex: 1;
					.u-icon{
						align-items: center;
						justify-content: center;
						display: flex;
					}
					p{
						text-align: center;
					}
				}
			}
		}
		.often{
			width: 90%;
			height: 400rpx;
			background-color: white;
			position: absolute;
			margin: 0 40rpx;
			top: 450rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			.often_top{
				width: 100%;
				margin-top: 40rpx;
				ul{
					list-style: none;
					display: flex;
					align-items: center;
					justify-content: center;
					li{
						flex: 1;
						.u-icon{
							align-items: center;
							justify-content: center;
							display: flex;
						}
						p{
							text-align: center;
						}
					}
				}
			}
		}
		.other{
			width: 90%;
			height: 200rpx;
			background-color: white;
			position: absolute;
			margin: 0 40rpx;
			top: 900rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			ul{
				list-style: none;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 20rpx;
				li{
					flex: 1;
					.u-icon{
						align-items: center;
						justify-content: center;
						display: flex;
					}
					p{
						text-align: center;
					}
				}
			}
		}
	}
</style>
