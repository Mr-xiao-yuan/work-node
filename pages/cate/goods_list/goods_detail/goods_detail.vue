<template>
	<view>
		ddd
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			detailData(){
				this.request("/goods/detail","GET").then(res=>{
					console.log(res)
				})
			}
		},
		onLoad() {
			this.detailData()
		}
	}
</script>

<style>

</style>
