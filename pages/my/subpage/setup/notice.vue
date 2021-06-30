<template>
	<!-- 消息通知 -->
	<view class="notice">
		<u-cell-group style="margin-top: 20rpx;">
			<u-cell-item title="横幅通知" :arrow="false">
				<u-switch slot="right-icon" v-model="checked" active-color="#32cd32"></u-switch>
			</u-cell-item>
			<u-cell-item title="铃声提醒" :arrow="false">
				<u-switch slot="right-icon" v-model="checked" active-color="#32cd32"></u-switch>
			</u-cell-item>
			<u-cell-item title="振动提醒" :arrow="false">
				<u-switch slot="right-icon" v-model="checked" active-color="#32cd32"></u-switch>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		name: '',
		data(){
			return{
				checked:false
			}
		},
		components:{
			
		}
	}
</script>

<style scoped="scoped">
	
</style>
