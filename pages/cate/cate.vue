<template>
	<view class="cate">
		<!-- 搜索框 -->
		<search></search>
		<view class="cates_list">
			<!-- 左侧菜单 -->
			  <scroll-view class="left_menu" scroll-y>
			    <view class="menu_item" :class="index===currIndex?'active':''" v-for="(item,index) in leftdata" @click="handItem(index)" :key="item">
			      {{item}}
			    </view>
			  </scroll-view>
			<!-- 右侧菜单 -->
			  <scroll-view scroll-top="0" class="right_content" scroll-y>
				<view class="content_group" v-for="item in rightdata" :key="item.cat_id">
				  <view class="group_title">
					<text class="delimiter">/</text>
					<text class="title">{{item.cat_name}}</text>
					<text class="delimiter">/</text>
				  </view>
				  <view class="group_list">
					  <!-- url="/pages/goods_list/index?cid={{item2.cat_id}}" -->
					<navigator v-for="item1 in item.children" :key="item1.cat_id" url="goods_list/goods_list?cid='item1.cat_id'">
					  <image mode="widthFix" :src="item1.cat_icon"></image>
					  <view class="group_name">{{item1.cat_name}}</view>
					</navigator>
				  </view>
				</view>
			  </scroll-view>
		</view>
	</view>
</template>

<script>
	import search from '../../components/search.vue'
	export default {
		data() {
			return {
				cate: [],
				leftdata: [],
				rightdata: [],
				currIndex: 0
			}
		},
		methods: {
			getcate(){
				this.request("/categories","GET").then(res=>{
					console.log(res)
					this.cate = res.data[0].message
					// 获取本地存储的数据
					uni.setStorageSync("cates",{time:Date.now(),data:this.cate})
					this.leftdata = this.cate.map(v=>v.cat_name)
					this.rightdata = this.cate[0].children
				})
			},
			handItem(e){
				// console.log(e)
				this.currIndex = e
				this.rightdata = this.cate[e].children
			}
		},
		components:{
			search
		},
		onLoad() {
			this.getcate()
			// 获取本地存储的数据
			const Cates = uni.getStorageSync("cates")
			// 判断有没有旧数据，没用则获取数据
			if(!Cates){
				this.getcate()
			}else{
				// 有旧数据 定义过期时间 10秒   date.now（）是当前时间，当前时间-数据时间，如果大于10秒
				if(Date.now() - Cates.time > 1000*10){
					this.getcate()//重新获取数据
				}else{
					console.log("可以使用旧数据")
				}
			}
		}
	}
</script>

<style lang="less">
	page{
	    height: 100%;
	}
	
	.cate{
	    .cates_list{
	        // less中这样写~‘’才会原样输出
	        height: ~'calc(100vh - 90rpx)';
	        display: flex;
	        .left_menu{
	            flex: 2;
	            .menu_item{
	                display: flex;
	                height: 80rpx;
	                justify-content: center;
	                align-items: center;
	                font-size: 30rpx;
	            }
	            .active{
	                color: var(--themeColor);
	                border-left: 5rpx solid currentColor;
	            }
	        }
	        .right_content{
	            flex: 5;
	            .content_group{
	                .group_title{
	                    height: 80rpx;
	                    display: flex;
	                    justify-content: center;
	                    align-items: center;
	                    .delimiter{
	                        color: gray;
	                        padding: 0 10rpx;
	                    }
	                }
	                
	                .group_list{
	                    display: flex;
	                    flex-wrap: wrap;
	                    navigator{
	                        width: 33.33%;
	                        text-align: center;
	                        image{
	                            width: 50%;
	                        }
	                    }
	                }
	            }
	        }
	    }
	}	
</style>
