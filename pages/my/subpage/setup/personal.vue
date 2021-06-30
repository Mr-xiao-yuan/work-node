<template>
	<!-- 个人信息 -->
	<view class="personal">
		<u-cell-group style="margin-top: 20rpx;">
			<u-cell-item title="头像" :arrow="false">
				<u-image width="80rpx" height="80rpx" slot="right-icon"  shape="circle" src="../../../../static/user.png"></u-image>
			</u-cell-item>
			<u-cell-item title="用户名" :arrow="false" value="往事如烟"></u-cell-item>
			<u-cell-item title="性别" :arrow="false" value="女"></u-cell-item>
		</u-cell-group>
		<u-cell-group style="margin-top: 20rpx;">
			<u-cell-item title="手机号" :arrow="false" value="138****4127"></u-cell-item>
			<u-cell-item title="邮箱" :arrow="false" value="未绑定"></u-cell-item>
			<u-cell-item title="微信" :arrow="false" value="未绑定"></u-cell-item>
			<u-cell-item title="QQ" :arrow="false" value="未绑定"></u-cell-item>
			<u-cell-item title="微博" :arrow="false" value="未绑定"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		name: 'personal',
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
