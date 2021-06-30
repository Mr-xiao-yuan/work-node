<template>
	<!-- 设置 -->
	<view class="setup">
		<u-cell-group style="margin-top: 20rpx;">
				<navigator url="personal"><u-cell-item title="个人信息" label="用户名 头像 个人资料"></u-cell-item></navigator>
				<navigator url="security"><u-cell-item title="账号与安全" label="修改密码 修改手机号"></u-cell-item></navigator>
		</u-cell-group>
		<u-cell-group style="margin-top: 20rpx;">
			<navigator url="payment"><u-cell-item title="支付管理"></u-cell-item></navigator>
			<navigator url="notice"><u-cell-item title="消息通知"></u-cell-item></navigator>
			<navigator url="currency"><u-cell-item title="通用"></u-cell-item></navigator>
			<navigator url="Privacy"><u-cell-item title="隐私管理"></u-cell-item></navigator>
		</u-cell-group>
		<u-cell-group style="margin-top: 20rpx;">
				<navigator><u-cell-item title="关于我们"></u-cell-item></navigator>
		</u-cell-group>
		<view style="margin-top: 80rpx;">
			<u-button>切换账号</u-button>
			<u-button style="margin-top: 10rpx;">退出登录</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'setup',
		data(){
			return{
				
			}
		},
		components:{
			
		}
	}
</script>

<style scoped="scoped">
</style>
