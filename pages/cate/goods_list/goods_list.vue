<template>
	<!-- 商品列表 -->
	<view>
		<search></search>
	  <!-- 定义子组件传过来的自定义事件 -->
	  <Tabs :tabs="tabs" @bindItem= "handtabsitem">
	    <block v-if="tabs[0].isActive">
	      <view class="first_tab">
	        <navigator class="good_item" v-for="item in listData1" :url="'goods_detail/goods_detail?goods_id='+item.goods_id">
	          <!-- 左侧图片 -->
	          <view class="item_left">
	            <image mode="widthFix" :src="item.goods_big_logo?item.goods_big_logo:'https://gd3.alicdn.com/imgextra/i4/3299760275/O1CN01dNGZYp1DtzaflrRZA_!!3299760275.jpg_400x400.jpg'"></image>
	          </view>
	          <!-- 右侧内容 -->
	          <view class="item_right">
	            <view class="right_name">{{item.goods_name}}</view>
				<view>
					<p class="right_price">￥{{item.goods_price}}</p>
					<p class="right_number">月销{{item.goods_number}}</p>
				</view>
	            <!-- <p class="right_price">￥{{item.goods_price}} 销量{{item.goods_number}}</p> -->
	          </view>
	        </navigator>
	      </view>
	    </block>
	    <block v-else-if="tabs[1].isActive">
	      <view class="first_tab">
	        <navigator class="good_item" v-for="item in listData2" :url="'goods_detail/goods_detail?goods_id='+item.goods_id">
	          <!-- 左侧图片 -->
	          <view class="item_left">
	            <image mode="widthFix" :src="item.goods_big_logo?item.goods_big_logo:'https://gd3.alicdn.com/imgextra/i4/3299760275/O1CN01dNGZYp1DtzaflrRZA_!!3299760275.jpg_400x400.jpg'"></image>
	          </view>
	          <!-- 右侧内容 -->
	          <view class="item_right">
	            <view class="right_name">{{item.goods_name}}</view>
	            <view>
	            	<p class="right_price">￥{{item.goods_price}}</p>
	            	<p class="right_number">月销{{item.goods_number}}</p>
	            </view>
	          </view>
	        </navigator>
	      </view>
	    </block>
	    <block v-else-if="tabs[2].isActive">
			<view class="first_tab">
			  <navigator class="good_item" v-for="item in listData3" :url="'goods_detail/goods_detail?goods_id='+item.goods_id">
			    <!-- 左侧图片 -->
			    <view class="item_left">
			      <image mode="widthFix" :src="item.goods_big_logo?item.goods_big_logo:'https://gd3.alicdn.com/imgextra/i4/3299760275/O1CN01dNGZYp1DtzaflrRZA_!!3299760275.jpg_400x400.jpg'"></image>
			    </view>
			    <!-- 右侧内容 -->
			    <view class="item_right">
			      <view class="right_name">{{item.goods_name}}</view>
			      <view>
			      	<p class="right_price">￥{{item.goods_price}}</p>
			      	<p class="right_number">月销{{item.goods_number}}</p>
			      </view>
			    </view>
			  </navigator>
			</view>
	    </block>
	  </Tabs>
	  <u-back-top :scroll-top="scrollTop" style="background-color: white;"></u-back-top>
	</view> 
</template>

<script>
	import search from '@/components/search.vue'
	import Tabs from '@/components/tabs.vue'
	export default {
		data() {
			return {
				tabs:[
						{
							id:0,
							value:"综合",
							isActive:true
						},
						{
							id:1,
							value:"销量优先",
							isActive:false
						},
						{
							id:2,
							value:"价格优先",
							isActive:false
						}
				    ],
				    listData:[],//获取接口的数据
					listData1:[],//综合的数据
					listData2:[],//销量的数据
					listData3:[],//价格的数据
					// 页容量
					pagesize:8,
					// 初始化总页数
					totalBody:1,
					// 当前总页数
					totalPage:1,
					//页面数据总条数
					total:20,
					scrollTop: 0
			}
		},
		components:{
			search,
			Tabs
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			cateList(){//获取商品列表数据
				this.request("/goods/search","GET").then(res=>{
					this.listData = res.data[0].message.goods
					this.listDatac = res.data[0].message.goods
					// 获取综合的数据
					if(this.tabs[0].isActive){
						//修改总页数
						this.totalPage = Math.ceil(this.total/this.pagesize)
						// 拼接数据
						this.listData1 = this.listData1.concat(this.listData)
					}
				})
				// 关闭下拉刷新
				uni.stopPullDownRefresh()
			},
			handtabsitem(e){
				this.tabs.forEach((v,i)=>i===e?v.isActive=true:v.isActive=false)
				// 获取销量的数据
				if(this.tabs[1].isActive){
					this.listData2 = this.listData.sort((a,b)=>{return b.goods_number - a.goods_number})
				}
				// 获取价格的数据
				if(this.tabs[2].isActive){
					this.listData3 = this.listData.sort((a,b)=>{return a.goods_price - b.goods_price})
				}
			}
		},
		onLoad() {
			this.cateList()
		},
		onPullDownRefresh: function () {
		    // 重置数组
		    this.listData = []
		    // 重置页码
		    this.totalBody=1
		    this.cateList()
		  },
		onReachBottom() {
			//只要综合有翻页功能
			if(this.tabs[0].isActive){
				if(this.totalBody >= this.totalPage){
				      // 没有下一页
				      uni.showLoading({
				        title: '已经到底了',
				      })
				      
				      setTimeout(function () {
						  // 隐藏提示框
				        uni.hideLoading()
				      }, 1000)
				    }else{
				      this.totalBody++
				      uni.showLoading({
				        title: '加载中',
				      })
				      setTimeout(function () {
				        uni.hideLoading()
				      }, 500)
				      this.cateList()
				   }
			}else{
				uni.showLoading({
				  title: '已经到底了',
				})
				
				setTimeout(function () {
				// 隐藏提示框
				  uni.hideLoading()
				}, 1000)
			}
		}
	}
</script>

<style lang="less">
	.first_tab{
	    .good_item{
	        display: flex;
	        border-bottom: 1rpx solid #ccc;
	        .item_left{
	            flex: 2;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            image{
	                width: 70%;
	            }
	        }
	        .item_right{
	            flex: 3;
	            display: flex;
	            // 排成一列
	            flex-direction: column;
	            // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
	            justify-content: space-around;
	            .right_name{
	                // 当作弹性盒子显示
	                display: -webkit-box;
	                overflow: hidden;
	                // 设置从上向下垂直排列子元素
	                -webkit-box-orient: vertical;
	                // 设置最大行数
	                -webkit-line-clamp: 2;
	            }
	            .right_price{
	                color: var(--themeColor);
	                font-size: 32rpx;
					width: 150rpx;
					float: left;
	            }
				.right_number{
				    color: #C0C0C0;
				    font-size: 24rpx;
					width: 150rpx;
					text-align: center;
					float: right;
				}
	        }
	    }
	}
</style>
