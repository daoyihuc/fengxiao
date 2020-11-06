<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" @change="swiperChange" previous-margin="25px" next-margin="25px">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<image :src="item.img" mode="scaleToFill" :class="currentSwiper !== index ?'swiper-item-side':''" lazy-load="true"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view v-for="(item, index) in swiperList" :key="index" :class="currentSwiper >= index ? 'on' : 'dots'" :style="'width: ' + (currentSwiper >= index ? 100 / swiperList.length + '%' : '' )"></view>
				</view>
			</view>
		</view>
		<!-- tab -->
		<view class="tab">
			<view class="tab_li">
				<view class="img" v-for="(item,index) in tab_list" @tap='tab_url(item)'>
					<image :src="item.image" mode=""></image>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="card_top">
			<view class="row">
			</view>
			<text>推荐店铺</text>
		</view>
		<!-- 店铺详情 -->
		<view class="title_top" v-for="(item,index) in 3">
			<view class="left">
				<image src="../../static/img/index/beijingh.png" mode=""></image>
			</view>
			<view class="right">
				<view class="img_li">
				     <text style="font-weight: 600;font-size: 15px;">万家丽店</text>
				</view>
				<view class="img_li">
				     <text>电话：14760716236</text>
				</view>
				<view class="img_li">
				     <text>地址：开福区万达国际总部c3栋1005开福区万达国际总部c3栋1005</text>
				</view>
				<view class="bot" @tap='store_url'>
					查看
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentSwiper: 0,
				swiperList: [{
					img: '../../static/img/store/ban.png'
				}, {
					img: '../../static/img/store/ban.png'
				}, {
					img: '../../static/img/store/ban.png'
				}],
				tab_list:[
					{
						image:'../../static/img/store/ico_1.png',
						title:'门店入驻',
						url:'Store_entry/Store_entry'
					},
					{
						image:'../../static/img/store/ico_2.png',
						title:'全部门店',
						url:'all_store/all_store'
					},
					{
						image:'../../static/img/store/ico_3.png',
						title:'推广活动',
						url:'activity/activity'
					},
					{
						image:'../../static/img/store/ico_4.png',
						title:'县级代理',
						url:'County_agent/County_agent'
					}
				],

			}
		},
		methods: {
			/* 轮播图 */
			swiperChange(e) {
				this.currentSwiper = e.detail.current;
			},
			/* tab跳转 */
			tab_url(item){
				uni.navigateTo({
					url:item.url
				})
			},
			/* 门面详情 */
			store_url(){
				uni.navigateTo({
					url:'Store_info/Store_info'
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {

		/* 轮播图 */
		.swiper {
			width: 100%;
			margin-top: 10upx;
			display: flex;
			justify-content: center;
		}

		.swiper-box {
			width: 100%;
			height: 45vw;
			overflow: hidden;
			/* border-radius: 15upx; */
			/* box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2); */
			position: relative;
			z-index: 1;
		}

		.swiper-box swiper {
			width: 100%;
			height: 45vw;
		}

		.swiper-box swiper swiper-item {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.swiper-box swiper swiper-item image {
			width: 100%;
			height: 50vw;
			margin: 0 auto;
			display: block;
			transition: height .3s;
		}

		.swiper-item-side {
			width: 100%;
			height: 45vw !important;
			transition: height .3s;
		}

		.indicator {
			position: absolute;
			bottom: 20upx;
			left: 50%;
			transform: translateX(-50%);
			background-color: #7e7e7e;
			width: 150upx;
			height: 5upx;
			border-radius: 3upx;
			overflow: hidden;
			display: flex;
			margin-left: 20rpx;
		}

		.dots {
			width: 0upx;
			background-color:rgba(254, 90, 65, 1);
			transition: all 0.3s ease-out;
			margin-left: 20rpx;
		}

		.on {
			width: 30%;
			background-color: rgba(255, 255, 255, 1);
			transition: all 0.3s ease-out;
		}

		/* 轮播图 */
		/* tab */
		.tab{
			border-bottom: 5px solid #f8f8f8;
			.tab_li{
				display: flex;
				justify-content: space-around;
				padding: 20rpx;
				font-size: 14px;
				text-align: center;
				.img{
					image{
						width: 140rpx;
						height: 140rpx;
					}
				}
			}
		}
		.card_top {
			font-size: 16px;
			color: #333333;
			display: flex;
			align-items: center;
			font-weight: bold;
			padding: 30rpx;
		
			.row {
				height: 20px;
				width: 2px;
				background-color: #FA5F3E;
			}
		
			text {
				padding-left: 20rpx;
			}
		}
		.title_top{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-top: 1px solid #eee;
			color: #4d4d47;
			image{
				width: 300rpx;
				height: 230rpx;
			}
			.right{
				padding-left: 10rpx;
				.img_li{
					font-size: 14px;
					padding-top: 15rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					text{
						padding-left: 15rpx;
					}
					
				}
				.bot{
				     width: 110rpx;
					 height: 50rpx;
					 font-size: 14px;
					 color: #FFFFFF;
					background: linear-gradient(72deg, #FF444B, #FD7239);
					border-radius: 50rpx;
					text-align: center;
					line-height: 50rpx;
					margin: 20rpx;
				}
			}
		}
		
		
	}
</style>
