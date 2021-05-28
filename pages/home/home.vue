<template>
	<view class="home">
		<!-- 搜索框 -->
		<search></search>
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in swiper" :key="item.goods_id">
				<image :src="item.image_src" mode="heightFix"></image>
			</swiper-item>
		</swiper>
		<!-- 导航菜单 -->
		<view class="index_cate">
		   <navigator v-for="(item,index) in list" open-type="switchTab" :url="src1" @click="xie(index)" :key="list.name">
		      <image :src="item.image_src" mode="widthFix"></image>
		    </navigator>
		</view>
		<!-- 楼层 -->
		<view class="index_floor">
		    <view class="floor_group" v-for="item1 in floor" :key="item1.floor_title.name">
		      <!-- 标题 -->
		      <view class="floor_title">
		        <image mode="widthFix" :src="item1.floor_title.image_src"></image>
		      </view>
		      <!-- 内容 -->
		      <view class="floor_list">
		      <navigator v-for="(item2,index2) in item1.product_list" :key="item2.name">
		        <image :mode="index2===0?'widthFix':'scaleToFill'" :src="item2.image_src"></image>
		      </navigator>
		      </view>
		    </view>
		  </view>
	</view>
</template>

<script>
	import search from '../../components/search.vue'
	export default {
		data() {
			return {
				swiper: [],
				list: [],
				floor: [],
				src1: ''
			}
		},
		components:{
			search
		},
		methods: {
			xie(index){
				if(index===0){
					this.src1 = '/pages/cate/cate'
				}else if(index===1){
					// this.src1 = ''
					this.src1 = '/pages/shopping/shopping'
				}else if(index===2){
					// this.src1 = ''
					this.src1 = '/pages/goods_list/goods_list'
				}else if(index===3){
					// this.src1 = ''
					this.src1 = '/pages/my/my'
				}
			},
			getSwiper(){//获取轮播图数据
				this.request("/home/swiperdata","GET").then(res=>{
					console.log(res)
					this.swiper = res.data[0].message
				})
			},
			getList(){//获取导航菜单数据
				this.request("/home/catitems","GET").then(res=>{
					// console.log(res)
					this.list = res.data[0].message
				})
			},
			getFLloor(){//获取楼层数据
				this.request("/home/floordata","GET").then(res=>{
					// console.log(res)
					this.floor = res.data[0].message
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getList()
			this.getFLloor()
		}
	}
</script>

<style lang="less">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.index_cate{
	  display: flex;
	  navigator{
	    flex: 1;
	    padding: 20rpx;
	    image{
	      width: 100%;
	    }
	  }
	}
	.index_floor{
	  .floor_group{
	    .floor_title{
	      padding: 10rpx 0;
	      image{
	        width: 100%;
	      }
	    }
	    .floor_list{
	      overflow: hidden;
	      navigator{
	        float: left;
	        width: 33.33%;
	        
	        // 后面四张图片
	        &:nth-last-child(-n+4) {
	          // 图片宽高232*386
	          // 现在想把图片比例为33.3%
	          // 所以图片宽度   232/386=33.33vm/height 就等于height: 33.33vm * 386 / 232/2;
	          // 除以2是因为1px=2rpx
	          height: (33.33vw * 386 / 232 /2);
	          border-left: 10rpx solid #fff;
	        }
	        // 第二张，第三张图片
	        &:nth-child(2),
	        &:nth-child(3) {
	          border-bottom: 10rpx solid #fff;
	        }
	        image{
	          width: 100%;
	          height: 100%;
	        }
	      }
	    }
	  }
	}
</style>
